import styles from "./SalesBanner.module.css";

interface SalesBannerProps {
  recruitmentStart: string;
  recruitmentEnd: string;
  capacity: number;
  venue: string;
  sessionDuration: string;
}

export default function SalesBanner({
  recruitmentStart,
  recruitmentEnd,
  capacity,
  venue,
  sessionDuration,
}: SalesBannerProps) {
  return (
    <section className={styles.banner} aria-label="開催概要・募集情報">
      <div className={`${styles.inner} container`}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <span className={styles.itemLabel}>募集期間</span>
            <span className={styles.itemValue}>
              <span className="nw">2026年7月29日（水）</span><span className="nw">10:00</span><br />
              〜 <span className="nw">8月2日（日）</span><span className="nw">23:59</span>
            </span>
            <span className={styles.itemNote}>定員{capacity}名に達し次第、募集終了</span>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>定員</span>
            <span className={styles.itemValue}>{capacity}名</span>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>開催形式</span>
            <span className={styles.itemValue}>全4回・東京会場<br />対面実技セミナー</span>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>1回あたりの時間</span>
            <span className={styles.itemValue}>{sessionDuration}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>会場</span>
            <span className={styles.itemValue}>{venue}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>開催日</span>
            <span className={styles.itemValue}>各回 日程調整中</span>
            <span className={styles.itemNote}>申込者へ別途ご案内</span>
          </div>
        </div>
      </div>
    </section>
  );
}
