"use client";
import styles from "./TemplateSteps.module.css";
import { seminarData } from "@/data/seminarData";

const englishLabels = ["ASSESS", "TOUCH", "MOVE", "RELEASE", "RETRAIN", "REASSESS"];

export default function TemplateSteps() {
  const { templateSteps } = seminarData;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.title}>
            このセミナーで習得する
            <br className="sp-only" />
            判断のテンプレート
          </h2>
          <p className={styles.lead}>
            これは、全員に同じ施術や運動を行うマニュアルではありません。<br />
            状態を評価し、何を確認し、何から介入し、何を再評価するかを決めるための思考と実践の順番です。
          </p>
        </div>

        <div className={styles.timeline}>
          {templateSteps.map((item, index) => (
            <div key={index} className={`${styles.step} reveal`}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div className={styles.stepContent}>
                <span className={styles.englishLabel}>{englishLabels[index]}</span>
                <h3 className={styles.stepTitle}>{item.label}</h3>
                <p className={styles.stepDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.lead}>
          正解の手技を暗記するのではなく、正解へたどり着くための順番を持つ。
        </p>
      </div>
    </section>
  );
}
