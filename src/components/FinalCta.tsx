"use client";
import { useSalesState } from "@/hooks/useSalesState";
import type { SeminarData } from "@/data/seminarData";
import styles from "./FinalCta.module.css";

interface FinalCtaProps {
  data: Pick<
    SeminarData,
    | "generalStripeUrl"
    | "memberStripeUrl"
    | "recruitmentStart"
    | "recruitmentEnd"
    | "salesStateOverride"
  >;
}

export default function FinalCta({ data }: FinalCtaProps) {
  const { salesState } = useSalesState(
    data.recruitmentStart,
    data.recruitmentEnd,
    data.salesStateOverride
  );

  const isOpen = salesState === "open";
  const generalEnabled = isOpen && data.generalStripeUrl.length > 0;
  const memberEnabled = isOpen && data.memberStripeUrl.length > 0;

  return (
    <section className={`section section--dark ${styles.section}`} aria-labelledby="final-cta-title">
      <div className="container">
        <p className={styles.label}>定員10名・先着順</p>
        <h2 id="final-cta-title" className={styles.title}>
          美脚指導のテンプレート<br />
          全4回実技セミナー
        </h2>
        <p className={styles.sub}>
          評価・徒手療法・エクササイズをつなげる<br />
          一連の型を習得する
        </p>

        {salesState === "preview" && (
          <div className={styles.previewBox}>
            <p className={styles.previewText}>7月29日（水）10:00 募集開始</p>
            <p className={styles.previewNote}>募集開始時にBAL LINEよりお知らせします</p>
          </div>
        )}

        {salesState === "open" && (
          <>
            <p className={styles.period}>
              募集期間：7月29日（水）10:00 〜 8月2日（日）23:59
            </p>
            <div className={styles.btnGroup}>
              <a
                href={generalEnabled ? data.generalStripeUrl : undefined}
                className={`btn btn--gold ${styles.btn}`}
                aria-disabled={!generalEnabled}
                tabIndex={generalEnabled ? 0 : -1}
              >
                一般価格（66,000円）で申し込む
              </a>
              <a
                href={memberEnabled ? data.memberStripeUrl : undefined}
                className={`btn btn--outline ${styles.btn} ${styles.btnMember}`}
                aria-disabled={!memberEnabled}
                tabIndex={memberEnabled ? 0 : -1}
              >
                BAL STUDIO会員価格（44,000円）で申し込む
              </a>
            </div>
            <p className={styles.note}>
              ※ BAL STUDIO会員価格でのお申込みは、会員情報の照合が必要です
            </p>
          </>
        )}

        {(salesState === "soldout" || salesState === "closed") && (
          <div className={styles.closedBox}>
            <p className={styles.closedText}>
              {salesState === "soldout"
                ? "定員に達したため、受付を終了しました"
                : "今回の募集は終了しました"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
