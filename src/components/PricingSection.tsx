"use client";
import Image from "next/image";
import { useSalesState } from "@/hooks/useSalesState";
import type { SeminarData } from "@/data/seminarData";
import CtaButtons from "./CtaButtons";
import styles from "./PricingSection.module.css";

interface PricingSectionProps {
  data: Pick<
    SeminarData,
    | "generalPrice"
    | "memberPrice"
    | "generalStripeUrl"
    | "memberStripeUrl"
    | "recruitmentStart"
    | "recruitmentEnd"
    | "salesStateOverride"
  >;
}

export default function PricingSection({ data }: PricingSectionProps) {
  const { salesState } = useSalesState(
    data.recruitmentStart,
    data.recruitmentEnd,
    data.salesStateOverride
  );

  return (
    <section
      id="pricing"
      className={`section section--alt ${styles.section}`}
      aria-labelledby="pricing-title"
    >
      <div className="container">
        <p className="section-label">料金プラン</p>
        <h2 id="pricing-title" className="section-title">
          受講料金
        </h2>
        <div className={styles.note}>
          <p className={styles.includesTitle}>受講料に含まれるもの</p>
          <ul role="list" className={styles.includesList}>
            <li>全4回の対面実技（各回約5時間・合計約20時間）</li>
            <li>申込者限定の事前講義動画（2本）</li>
            <li>全4回の収録アーカイブ（視聴期限なし）</li>
          </ul>
          <p className={styles.paymentNote}>※全4回セットのみ（単発受講なし）。お支払いはクレジットカード一括払いのみです。</p>
        </div>

        <CtaButtons
          salesState={salesState}
          generalStripeUrl={data.generalStripeUrl}
          memberStripeUrl={data.memberStripeUrl}
        />

        {salesState === "open" && (
          <div className={styles.memberNote}>
            <div className={styles.memberLogoRow}>
              <Image
                src="/images/logo-bal-studio.png"
                alt="BAL STUDIO"
                width={120}
                height={32}
                style={{ objectFit: "contain", width: "auto", height: "24px" }}
              />
              <span>会員価格について</span>
            </div>
            <p>
              BAL STUDIO会員価格でお申し込みの場合、申込情報（氏名・メールアドレス）とBAL STUDIOの会員登録情報を運営側で照合させていただきます。
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
