import type { SeminarData } from "@/data/seminarData";
import styles from "./OverviewSection.module.css";
import React from "react";

interface OverviewSectionProps {
  data: Pick<
    SeminarData,
    | "seminarTitle"
    | "seminarSubtitle"
    | "format"
    | "sessionDuration"
    | "venue"
    | "capacity"
    | "recruitmentStart"
    | "recruitmentEnd"
    | "instructor"
  >;
}

const rows = (data: OverviewSectionProps["data"]) => [
  { label: "セミナー名", value: <span className="nw">{data.seminarTitle}</span> },
  { label: "形式", value: data.format },
  { label: "1回の時間", value: data.sessionDuration },
  { label: "会場", value: <><span className="nw">東京都内</span><span className="nw">（詳細は申込者へご案内）</span></> },
  { label: "定員", value: `${data.capacity}名` },
  {
    label: "募集期間",
    value: (
      <>
        <span className="nw">2026年7月29日（水）10:00</span> 〜 <span className="nw">8月2日（日）23:59</span>
      </>
    ),
  },
  { label: "開催日", value: "各回 日程調整中（申込者へ別途ご案内）" },
  { label: "講師", value: data.instructor.name },
];

export default function OverviewSection({ data }: OverviewSectionProps) {
  return (
    <section className={`section section--white ${styles.section}`} aria-labelledby="overview-title">
      <div className="container">
        <p className="section-label">開催概要</p>
        <h2 id="overview-title" className="section-title">
          開催概要
        </h2>
        <dl className={styles.table}>
          {rows(data).map((row) => (
            <div key={row.label} className={styles.row}>
              <dt className={styles.dt}>{row.label}</dt>
              <dd className={styles.dd}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
