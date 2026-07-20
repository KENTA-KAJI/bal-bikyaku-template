"use client";
import styles from "./Hero.module.css";
import { seminarData } from "@/data/seminarData";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgLines}>
        <div className={`${styles.bgLine} ${styles.bgLineV1}`}></div>
        <div className={`${styles.bgLine} ${styles.bgLineV2}`}></div>
        <div className={`${styles.bgLine} ${styles.bgLineH1}`}></div>
      </div>
      <div className={`${styles.container} reveal animate-fade-in-up`}>
        <div className={styles.headerText}>
          <span className={styles.englishTitle}>LOWER LIMB ASSESSMENT & INTERVENTION</span>
          <h1 className={styles.mainCopy}>
            脚を見て、
            <br />
            なんとなく外ももを緩める。
            <br />
            <br className="sp-only" />
            そんな美脚指導を終わらせる。
          </h1>
          <p className={styles.subCopy}>
            膝・足部・足関節・骨盤・股関節を<br className="sp-only" />つなげて評価し、
            <br className="pc-only" />
            徒手療法からエクササイズ、再評価までを
            <br className="pc-only" />
            一つの流れとして組み立てる<br className="sp-only" />全4回実技セミナー
          </p>
        </div>
        
        <div className={styles.divider}></div>

        <div className={styles.seminarInfo}>
          <h2 className={styles.seminarTitle}>{seminarData.seminarTitle}</h2>
          
          <div className={styles.instructorInfo}>
            <p className={styles.instructorName}>講師：{seminarData.instructor.name}</p>
            <p className={styles.instructorCred}>
              {seminarData.instructor.credentials.join(" ／ ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
