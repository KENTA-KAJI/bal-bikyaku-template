import type { SeminarData } from "@/data/seminarData";
import styles from "./PreLecture.module.css";

interface PreLectureProps {
  lectures: SeminarData["preLectures"];
}

export default function PreLecture({ lectures }: PreLectureProps) {
  return (
    <section className={`section section--alt ${styles.section}`} aria-labelledby="prelecture-title">
      <div className="container">
        <p className="section-label">申込者限定の事前講義</p>
        <h2 id="prelecture-title" className="section-title">
          本編前に視聴できる<br />事前収録講義 2本
        </h2>
        <p className="section-lead">
          申込後、本編開催前に視聴いただける限定講義を2本提供します。<br />
          基礎知識を整理した状態で実技に臨むことができます。
        </p>
        <div className={styles.list}>
          {lectures.map((lecture) => (
            <div key={lecture.number} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.num}>限定講義 {lecture.number}</span>
                <h3 className={styles.title}>{lecture.title}</h3>
              </div>
              <p className={styles.desc}>{lecture.description}</p>
              <div className={styles.topics}>
                <p className={styles.topicsLabel}>扱う内容</p>
                <ul role="list">
                  {lecture.topics.map((topic, i) => (
                    <li key={i} className={styles.topicItem}>
                      <span aria-hidden="true" className={styles.topicDot}>▸</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
