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
          <ul role="list">
            <li>全4回セットのみ。各回の単発受講はありません。</li>
            <li>支払いは一括払いのみです。</li>
          </ul>
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
