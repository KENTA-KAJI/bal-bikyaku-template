"use client";

import { useSalesState } from "@/hooks/useSalesState";
import { seminarData } from "@/data/seminarData";
import styles from "./MidCta.module.css";

export default function MidCta({ label = "セミナーの詳細を確認する" }: { label?: string }) {
  const { salesState } = useSalesState(
    seminarData.recruitmentStart,
    seminarData.recruitmentEnd,
    seminarData.salesStateOverride
  );

  if (salesState === "preview") {
    return (
      <aside className={styles.band} aria-label="募集開始のお知らせ">
        <p className={styles.date}>2026年7月29日（水）10:00 募集開始</p>
        <p>募集開始時にBAL LINE公式からご案内します</p>
        <a href={seminarData.contactLine} target="_blank" rel="noopener noreferrer" className={styles.link}>BAL LINE公式を確認する</a>
      </aside>
    );
  }

  if (salesState === "open") {
    return <aside className={styles.band}><a href="#pricing" className={styles.link}>{label}</a></aside>;
  }

  return <aside className={styles.band}><p>{salesState === "soldout" ? "定員に達したため、受付を終了しました" : "今回の募集は終了しました"}</p></aside>;
}
