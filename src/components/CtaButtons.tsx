"use client";
import styles from "./CtaButtons.module.css";
import type { SalesState } from "@/utils/salesState";
import Image from "next/image";

interface CtaButtonsProps {
  salesState: SalesState;
  generalStripeUrl: string;
  memberStripeUrl: string;
  variant?: "default" | "sticky";
}

export default function CtaButtons({
  salesState,
  generalStripeUrl,
  memberStripeUrl,
  variant = "default",
}: CtaButtonsProps) {
  const isOpen = salesState === "open";
  const generalEnabled = isOpen && generalStripeUrl.length > 0;
  const memberEnabled = isOpen && memberStripeUrl.length > 0;

  if (variant === "sticky") {
    return (
      <div className={styles.stickyInner}>
        {salesState === "preview" && (
          <div className={styles.stickyStatus}>
            <span className={styles.stickyStatusText}>7月29日（水）10:00 募集開始</span>
          </div>
        )}
        {salesState === "open" && (
          <div className={styles.stickyBtns}>
            <a
              href={generalEnabled ? generalStripeUrl : undefined}
              className={`btn btn--primary ${styles.stickyBtn}`}
              aria-disabled={!generalEnabled}
              tabIndex={generalEnabled ? 0 : -1}
            >
              一般価格で申し込む
            </a>
            <a
              href={memberEnabled ? memberStripeUrl : undefined}
              className={`btn btn--gold ${styles.stickyBtn}`}
              aria-disabled={!memberEnabled}
              tabIndex={memberEnabled ? 0 : -1}
            >
              会員価格で申し込む
            </a>
          </div>
        )}
        {(salesState === "soldout" || salesState === "closed") && (
          <div className={styles.stickyStatus}>
            <span className={styles.stickyStatusText}>
              {salesState === "soldout"
                ? "定員に達したため、受付を終了しました"
                : "今回の募集は終了しました"}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {salesState === "preview" && (
        <div className={styles.previewMsg}>
          <p className={styles.previewDate}>7月29日（水）10:00 募集開始予定</p>
          <p className={styles.previewNote}>募集開始までしばらくお待ちください</p>
        </div>
      )}
      {salesState === "open" && (
        <div className={styles.btnGroup}>
          <div className={styles.priceCard}>
            <p className={styles.priceLabel}>一般価格</p>
            <p className={styles.price}>66,000円<span>（税込）</span></p>
            <a
              href={generalEnabled ? generalStripeUrl : undefined}
              className={`btn btn--primary ${styles.ctaBtn}`}
              aria-disabled={!generalEnabled}
              tabIndex={generalEnabled ? 0 : -1}
            >
              一般価格で申し込む
            </a>
          </div>
          <div className={`${styles.priceCard} ${styles.memberCard}`}>
            <div className={styles.memberLogoWrapper}>
              <Image
                src="/images/logo-bal-studio.png"
                alt="BAL STUDIO"
                width={120}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.priceLabel}>会員限定価格</p>
            <p className={`${styles.price} ${styles.priceGold}`}>44,000円<span>（税込）</span></p>
            <a
              href={memberEnabled ? memberStripeUrl : undefined}
              className={`btn btn--gold ${styles.ctaBtn}`}
              aria-disabled={!memberEnabled}
              tabIndex={memberEnabled ? 0 : -1}
            >
              会員価格で申し込む
            </a>
            <p className={styles.memberNote}>
              ※BAL STUDIO会員価格でお申し込みの場合、申込情報と会員登録情報を確認させていただきます。
            </p>
          </div>
        </div>
      )}
      {salesState === "soldout" && (
        <div className={styles.closedMsg}>
          <p className={styles.closedText}>定員に達したため、受付を終了しました</p>
        </div>
      )}
      {salesState === "closed" && (
        <div className={styles.closedMsg}>
          <p className={styles.closedText}>今回の募集は終了しました</p>
          <p className={styles.closedNote}>次回開催情報はBAL LINEよりお知らせします。</p>
        </div>
      )}
    </div>
  );
}
