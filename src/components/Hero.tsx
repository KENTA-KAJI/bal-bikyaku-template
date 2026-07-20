"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useSalesState } from "@/hooks/useSalesState";
import type { SeminarData } from "@/data/seminarData";
import styles from "./Hero.module.css";

const CountdownTimer = dynamic(() => import("./CountdownTimer"), { ssr: false });

interface HeroProps {
  data: Pick<
    SeminarData,
    | "seminarTitle"
    | "seminarSubtitle"
    | "format"
    | "sessionDuration"
    | "capacity"
    | "instructor"
    | "recruitmentStart"
    | "recruitmentEnd"
    | "salesStateOverride"
    | "previewDate"
  >;
}

export default function Hero({ data }: HeroProps) {
  const { salesState } = useSalesState(
    data.recruitmentStart,
    data.recruitmentEnd,
    data.salesStateOverride
  );

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bgAccent} aria-hidden="true" />
      <div className={`${styles.inner} container`}>
        {/* タグライン */}
        <div className={styles.tags}>
          <span className={styles.tag}>全4回・対面実技</span>
          <span className={styles.tag}>東京開催</span>
          <span className={styles.tag}>定員{data.capacity}名</span>
        </div>

        {/* タイトル */}
        <h1 id="hero-title" className={styles.title}>
          {data.seminarTitle}
        </h1>
        <p className={styles.subtitle}>
          〜 {data.seminarSubtitle} 〜
        </p>

        {/* 詳細情報 */}
        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>講師</span>
            <span className={styles.metaValue}>{data.instructor.name}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>形式</span>
            <span className={styles.metaValue}>{data.format}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>時間</span>
            <span className={styles.metaValue}>{data.sessionDuration}</span>
          </div>
        </div>

        {/* 募集状態表示 */}
        <div className={styles.statusArea}>
          {salesState === "preview" && (
            <>
              <p className={styles.statusLabel}>
                <span className={styles.statusDot} />
                7月29日（水）10:00 募集開始
              </p>
              <p className={styles.statusSub}>募集開始まで</p>
              <CountdownTimer targetDate={data.recruitmentStart} />
            </>
          )}
          {salesState === "open" && (
            <div className={styles.openStatus}>
              <span className={styles.openBadge}>受付中</span>
              <p className={styles.openPeriod}>
                募集期間：7月29日（水）10:00 〜 8月2日（日）23:59
              </p>
              <a href="#pricing" className={`btn btn--primary ${styles.heroBtn}`}>
                申込みはこちら
              </a>
            </div>
          )}
          {(salesState === "soldout" || salesState === "closed") && (
            <div className={styles.closedStatus}>
              <span className={styles.closedBadge}>
                {salesState === "soldout" ? "満席" : "募集終了"}
              </span>
              <p className={styles.closedMsg}>
                {salesState === "soldout"
                  ? "定員に達したため、受付を終了しました"
                  : "今回の募集は終了しました"}
              </p>
            </div>
          )}
        </div>

        {/* 講師画像 */}
        <div className={styles.instructorImg}>
          <Image
            src={data.instructor.imageUrl}
            alt={data.instructor.imageAlt}
            width={670}
            height={280}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            priority
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      </div>
    </section>
  );
}
