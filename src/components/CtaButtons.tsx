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

    const getBtnProps = (isMember: boolean) => {
      switch (salesState) {
        case "preview":
          return {
            text: <><span className="nw">7月29日（水）</span><span className="nw">10:00募集開始</span></>,
            disabled: true,
            href: undefined,
          };
        case "open":
          const enabled = isMember ? memberEnabled : generalEnabled;
          return {
            text: isMember ? "会員価格で申し込む" : "一般価格で申し込む",
            disabled: !enabled,
            href: enabled ? (isMember ? memberStripeUrl : generalStripeUrl) : undefined,
          };
        case "soldout":
        case "closed":
          return {
            text: salesState === "soldout" ? "満席" : "受付終了",
            disabled: true,
            href: undefined,
          };
      }
    };
  
    const generalBtn = getBtnProps(false);
    const memberBtn = getBtnProps(true);
  
    if (variant === "sticky") {
      return (
        <div className={styles.stickyInner}>
          {salesState === "preview" && (
            <div className={styles.stickyStatus}>
              <span className={styles.stickyStatusText}>
                <span className="nw">7月29日（水）</span><span className="nw">10:00</span><br className="sp-only" /><span className="nw">募集開始</span>
              </span>
            </div>
          )}
        {salesState === "open" && (
          <div className={styles.stickyBtns}>
            <a
              href={generalBtn.href}
              className={`btn btn--primary ${styles.stickyBtn}`}
              aria-disabled={generalBtn.disabled}
              tabIndex={generalBtn.disabled ? -1 : 0}
            >
              一般価格で申し込む
            </a>
            <a
              href={memberBtn.href}
              className={`btn btn--gold ${styles.stickyBtn}`}
              aria-disabled={memberBtn.disabled}
              tabIndex={memberBtn.disabled ? -1 : 0}
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
      <div className={styles.btnGroup}>
        <div className={styles.priceCard}>
          <p className={styles.priceLabel}>一般価格</p>
          <p className={styles.price}><span className="nw">66,000円（税込）</span></p>
          <a
            href={generalBtn.href}
            className={`btn btn--primary ${styles.ctaBtn}`}
            aria-disabled={generalBtn.disabled}
            tabIndex={generalBtn.disabled ? -1 : 0}
          >
            {generalBtn.text}
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
          <p className={styles.priceLabel}>BAL STUDIO会員価格</p>
          <p className={`${styles.price} ${styles.priceGold}`}><span className="nw">44,000円（税込）</span></p>
          <a
            href={memberBtn.href}
            className={`btn btn--gold ${styles.ctaBtn}`}
            aria-disabled={memberBtn.disabled}
            tabIndex={memberBtn.disabled ? -1 : 0}
          >
            {memberBtn.text}
          </a>
          <p className={styles.memberNote}>
            BAL STUDIO会員価格でお申し込みの場合、申込情報と会員登録情報を確認させていただきます。
          </p>
        </div>
      </div>
    </div>
  );
}
