// 申込状態の判定ロジック（日本時間基準）
import type { SalesStateOverride } from "@/data/seminarData";

export type SalesState = "preview" | "open" | "soldout" | "closed";

export function computeSalesState(
  recruitmentStart: string,
  recruitmentEnd: string,
  override: SalesStateOverride
): SalesState {
  if (override !== null) {
    return override;
  }

  const now = new Date();
  const start = new Date(recruitmentStart);
  const end = new Date(recruitmentEnd);

  if (now < start) return "preview";
  if (now <= end) return "open";
  return "closed";
}

export function getSalesStateFromQuery(
  queryState: string | null,
  override: SalesStateOverride
): SalesState | null {
  // クエリパラメータはテスト表示のみ（Stripe遷移は別途制御）
  if (!queryState) return null;
  const valid: SalesState[] = ["preview", "open", "soldout", "closed"];
  if (valid.includes(queryState as SalesState)) {
    return queryState as SalesState;
  }
  return null;
}
