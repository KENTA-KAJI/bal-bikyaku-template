"use client";

import { seminarData } from "@/data/seminarData";
import { useSalesState } from "@/hooks/useSalesState";
import styles from "./SectionConversion.module.css";

export default function SectionConversion() {
  const { salesState } = useSalesState(
    seminarData.recruitmentStart,
    seminarData.recruitmentEnd,
    seminarData.salesStateOverride,
  );

  const open = salesState === "open";
  const ended = salesState === "closed" || salesState === "soldout";
  const href = open
    ? seminarData.generalStripeUrl || "#pricing"
    : seminarData.contactLine;

  return (
    <aside className={styles.band} aria-label="美脚指導のテンプレート お申し込み案内">
      <a
        className={styles.button}
        href={href}
        target={!open ? "_blank" : undefined}
        rel={!open ? "noopener noreferrer" : undefined}
      >
        <span className={styles.title}>美脚指導のテンプレート</span>
        <strong className={styles.action}>
          {ended
            ? "今回の募集は終了しました"
            : open
              ? "【定員10名】今すぐ申し込む"
              : "7月29日（水）10:00 募集開始"}
        </strong>
        <span className={styles.arrow} aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
