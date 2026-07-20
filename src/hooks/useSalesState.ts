"use client";
import { useState, useEffect } from "react";
import { computeSalesState, getSalesStateFromQuery, type SalesState } from "@/utils/salesState";
import type { SalesStateOverride } from "@/data/seminarData";

export function useSalesState(
  recruitmentStart: string,
  recruitmentEnd: string,
  override: SalesStateOverride
) {
  const [salesState, setSalesState] = useState<SalesState>("preview");
  const [isQueryOverride, setIsQueryOverride] = useState(false);

  useEffect(() => {
    // URLクエリパラメータによるテスト確認
    const params = new URLSearchParams(window.location.search);
    const queryState = params.get("state");
    const fromQuery = getSalesStateFromQuery(queryState, override);
    if (fromQuery) {
      setSalesState(fromQuery);
      setIsQueryOverride(true);
      return;
    }

    // 通常の自動判定（1分ごとに再計算）
    const update = () => {
      setSalesState(computeSalesState(recruitmentStart, recruitmentEnd, override));
    };
    update();
    const timer = setInterval(update, 60 * 1000);
    return () => clearInterval(timer);
  }, [recruitmentStart, recruitmentEnd, override]);

  return { salesState, isQueryOverride };
}
