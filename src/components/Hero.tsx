"use client";
import styles from "./Hero.module.css";
import { seminarData } from "@/data/seminarData";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgLines}>
        <div className={`${styles.bgLine} ${styles.bgLineV1}`}></div>
        <div className={`${styles.bgLine} ${styles.bgLineV2}`}></div>
        <div className={`${styles.bgLine} ${styles.bgLineH1}`}></div>
      </div>
      <div className={styles.bgText} aria-hidden="true">
        PRACTICAL ANATOMY
      </div>
      
      <div className={`${styles.container} reveal animate-fade-in-up`}>
        <div className={styles.contentWrapper}>
          <div className={styles.heroLeft}>
            <div className={styles.headerText}>
              <span className={styles.englishTitle}>LOWER LIMB ASSESSMENT & INTERVENTION</span>
              <h1 className={styles.mainCopy}>
                <span>外ももを緩める前に、</span>
                <br />
                <span>なぜ張ったのかを</span>
                <br />
                <span>説明できますか？</span>
              </h1>
              <p className={styles.subCopy}>
                <span>膝・足部・足関節・骨盤・股関節を</span><br className="sp-only" /><span>つなげて評価し、</span>
                <br className="pc-only" />
                <span>徒手療法からエクササイズ、再評価までを</span>
                <br className="pc-only" />
                <span>一つの判断の流れとして組み立てる</span>
                <br className="sp-only" />
                <span className="nw">全4回実技セミナー</span>
              </p>
            </div>
            
            <div className={styles.divider}></div>

            <div className={styles.seminarInfo}>
              <h2 className={styles.seminarTitle}>
                <span className="nw">美脚指導の</span><span className="nw">テンプレート</span>
              </h2>
              
              <div className={styles.instructorInfo}>
                <p className={styles.instructorName}>講師：<span className="nw">渡辺慶輔</span></p>
                <p className={styles.instructorCred}>
                  <span className="nw">理学療法士</span>
                  <span className="pc-only"> ／ </span>
                  <br className="sp-only" />
                  <span className="nw">日本スポーツ協会公認</span><span className="nw">アスレティックトレーナー</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/instructor-watanabe.png"
                alt="渡辺慶輔 — 理学療法士・日本スポーツ協会公認アスレティックトレーナー"
                width={450}
                height={450}
                priority
                sizes="(max-width: 900px) 100vw, 450px"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
