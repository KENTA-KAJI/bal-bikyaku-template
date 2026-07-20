"use client";
import styles from "./ShortOverview.module.css";
import { seminarData } from "@/data/seminarData";
import { useSalesState } from "@/hooks/useSalesState";
import CountdownTimer from "./CountdownTimer";

export default function ShortOverview() {
  const { salesState } = useSalesState(
    seminarData.recruitmentStart,
    seminarData.recruitmentEnd,
    seminarData.salesStateOverride
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.item}>全4回</div>
        <div className={styles.item}>各回約5時間</div>
        <div className={styles.item}>東京開催</div>
        <div className={styles.item}>対面実技</div>
        <div className={styles.item}>定員{seminarData.capacity}名</div>
      </div>
      
      {salesState === "preview" && (
        <div className={styles.statusWrapper}>
          <CountdownTimer targetDate={seminarData.recruitmentStart} />
        </div>
      )}
    </div>
  );
}
