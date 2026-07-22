"use client";

import Image from "next/image";
import { seminarData } from "@/data/seminarData";
import { useSalesState } from "@/hooks/useSalesState";
import styles from "./LandingPage.module.css";

type Placement = "hero" | "steps" | "curriculum" | "pricing" | "final";

const previewCopy: Record<Placement, string> = {
  hero: "募集開始は7月29日（水）10:00です。開始時にBAL LINEよりお知らせします。",
  steps: "この6ステップを、全4回・約20時間の対面実技で、自分の手と目で再現できるようになります。募集開始は7月29日（水）10:00。",
  curriculum: "カリキュラムの全体像を確認したうえで、募集開始をお待ちください。7月29日（水）10:00募集開始",
  pricing: "募集開始前のため、現在はお申込みいただけません。開始時にBAL LINEよりお知らせします。",
  final: "募集開始時にBAL LINEよりお知らせします",
};

const openCopy: Record<Placement, string> = {
  hero: "ただいま募集中です。定員10名になり次第、締め切ります。",
  steps: "この6ステップを、全4回の対面実技で身につけませんか。",
  curriculum: "カリキュラムをすべて確認しましたか。",
  pricing: "定員10名になり次第、募集を終了します。",
  final: "定員10名・先着順、残席が少なくなり次第、締め切ります。",
};

export default function SalesCta({ placement }: { placement: Placement }) {
  const { salesState } = useSalesState(seminarData.recruitmentStart, seminarData.recruitmentEnd, seminarData.salesStateOverride);
  const open = salesState === "open";
  const ended = salesState === "closed" || salesState === "soldout";
  const generalEnabled = open && Boolean(seminarData.generalStripeUrl);
  const memberEnabled = open && Boolean(seminarData.memberStripeUrl);

  if (ended) return <div className={styles.ctaBox}><p>{salesState === "soldout" ? "定員に達したため、受付を終了しました。" : "今回の募集は終了しました。"}</p></div>;

  if (placement === "pricing" || placement === "final") {
    return (
      <div className={styles.ctaBox}>
        <p className={styles.ctaCopy}>{open ? openCopy[placement] : previewCopy[placement]}</p>
        <div className={styles.purchaseGrid}>
          <a className={`${styles.purchase} ${!generalEnabled ? styles.disabled : ""}`} href={generalEnabled ? seminarData.generalStripeUrl : undefined} aria-disabled={!generalEnabled} tabIndex={generalEnabled ? 0 : -1}>
            <span className={styles.priceLabel}>一般価格</span>
            <strong className={styles.priceAmount}>66,000円（税込）</strong>
            <span className={styles.purchaseTiming}>{open ? "お申込みはこちら" : "7月29日（水）10:00 募集開始"}</span>
          </a>
          <a className={`${styles.purchase} ${styles.memberPurchase} ${!memberEnabled ? styles.disabled : ""}`} href={memberEnabled ? seminarData.memberStripeUrl : undefined} aria-disabled={!memberEnabled} tabIndex={memberEnabled ? 0 : -1}>
            <span className={styles.memberSavings}>一般価格より22,000円お得</span>
            <span className={styles.priceLabel}>BAL STUDIO会員価格</span>
            <strong className={styles.priceAmount}>44,000円（税込）</strong>
            <span className={styles.purchaseTiming}>{open ? "お申込みはこちら" : "7月29日（水）10:00 募集開始"}</span>
          </a>
        </div>
        {!open && <a className={styles.lineButton} href={seminarData.contactLine} target="_blank" rel="noopener noreferrer">募集開始をお知らせ（LINE友だち追加）</a>}
        {placement === "final" && <a className={styles.mailButton} href={`mailto:${seminarData.contactEmail}`}><span>メールで問い合わせる</span><small>{seminarData.contactEmail}</small></a>}
      </div>
    );
  }

  return (
    <div className={styles.ctaBox}>
      {placement === "curriculum" && !open ? (
        <p className={`${styles.ctaCopy} ${styles.curriculumCtaCopy}`}>
          <span>カリキュラムの全体像を確認したうえで</span>
          <span>募集開始をお待ちください。</span>
          <strong>7月29日（水）10:00募集開始</strong>
        </p>
      ) : (
        <p className={styles.ctaCopy}>{open ? openCopy[placement] : previewCopy[placement]}</p>
      )}
      <div className={styles.linkRow}>
        <a className={styles.lineButton} href={seminarData.contactLine} target="_blank" rel="noopener noreferrer">BAL LINE公式へ</a>
        {placement === "hero" && <a className={styles.mailButton} href={`mailto:${seminarData.contactEmail}`}>メールで問い合わせる</a>}
      </div>
    </div>
  );
}

export function FinalInstructorImage() {
  return <Image src="/images/bikyaku-main-visual.jpg" alt="美脚指導のテンプレート メインビジュアル" width={480} height={270} sizes="(max-width: 480px) 100vw, 440px" className={styles.finalImage} />;
}
