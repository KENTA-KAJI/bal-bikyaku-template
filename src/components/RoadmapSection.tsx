"use client";
import styles from "./RoadmapSection.module.css";

export default function RoadmapSection() {
  return (
    <section className={styles.section}>
      <div className="container reveal">
        <div className={styles.intro}>
          <h2 className={styles.introTitle}>
            部位別の知識を増やすのではなく、<br />
            「つながり」を理解するための4日間
          </h2>
          <p className={styles.introText}>
            本セミナーは、膝・足部・骨盤と独立した3つのテーマを学ぶものではありません。
            <br />
            それぞれの部位がどう影響し合い、結果として脚のラインを崩しているのか。
            その「つながり」を読み解き、どこから介入するべきかを判断する力を養います。
          </p>
        </div>

        <div className={styles.roadmap}>
          <div className={styles.phase}>
            <div className={styles.phaseHeader}>
              <span className={styles.phaseSub}>PHASE 01｜KNEE</span>
              <h3 className={styles.phaseTitle}>膝</h3>
            </div>
            <div className={styles.phaseText}>
              脚のラインに現れている問題を、大腿骨・膝蓋骨・脛骨の位置関係から整理する。
            </div>
          </div>
          
          <div className={styles.phase}>
            <div className={styles.phaseHeader}>
              <span className={styles.phaseSub}>PHASE 02｜FOOT & ANKLE</span>
              <h3 className={styles.phaseTitle}>足部・足関節</h3>
            </div>
            <div className={styles.phaseText}>
              身体の土台となる足部を評価し、膝下のラインや動作への影響を読み解く。
            </div>
          </div>
          
          <div className={styles.phase}>
            <div className={styles.phaseHeader}>
              <span className={styles.phaseSub}>PHASE 03｜PELVIS & HIP</span>
              <h3 className={styles.phaseTitle}>骨盤・股関節</h3>
            </div>
            <div className={styles.phaseText}>
              骨盤と大腿骨の位置関係から、太もものねじれ、外ももの張り、ニーインを捉える。
            </div>
          </div>
          
          <div className={styles.phase}>
            <div className={styles.phaseHeader}>
              <span className={styles.phaseSub}>PHASE 04｜INTEGRATION</span>
              <h3 className={styles.phaseTitle}>統合</h3>
            </div>
            <div className={styles.phaseText}>
              膝、足部、骨盤・股関節をつなげ、動作評価から介入の優先順位を決める。
            </div>
          </div>
        </div>

        <p className={styles.integrationNote}>
          「部位をつなげて、<br className="sp-only" />どこから介入するか判断できるようになる」
        </p>
      </div>
    </section>
  );
}
