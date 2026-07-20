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
            感覚的なアプローチから脱却し、
            <br />
            根拠のある指導を組み立てる6つのステップ
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
      </div>
    </section>
  );
}
