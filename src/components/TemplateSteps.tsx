"use client";
import { useEffect, useRef } from "react";
import type { SeminarData } from "@/data/seminarData";
import styles from "./TemplateSteps.module.css";

interface TemplateStepsProps {
  steps: SeminarData["templateSteps"];
}

export default function TemplateSteps({ steps }: TemplateStepsProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section section--alt ${styles.section}`} aria-labelledby="steps-title">
      <div className="container">
        <p className="section-label">基本テンプレート</p>
        <h2 id="steps-title" className="section-title">
          習得する6段階の流れ
        </h2>
        <p className="section-lead">
          美脚指導では、毎回この6段階で考えます。<br />
          この「型」を身体に入れることが、本セミナーの目的です。
        </p>
        <ol className={styles.list} role="list">
          {steps.map((step, i) => (
            <li
              key={step.step}
              className={styles.item}
              ref={(el) => { itemRefs.current[i] = el; }}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div className={styles.stepNum} aria-label={`ステップ${step.step}`}>
                <span className={styles.stepLabel}>STEP</span>
                <span className={styles.stepNumber}>{step.step}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>
                  <span className={styles.stepTitleJa}>{step.label}</span>
                </h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.note}>
          <p>
            この6段階を、骨盤・股関節 / 膝 / 足部・足関節の3部位にわたって実技で習得します。<br />
            単なる手技や種目の紹介ではなく、<strong>一つの流れとして使えるようになること</strong>が目的です。
          </p>
        </div>
      </div>
    </section>
  );
}
