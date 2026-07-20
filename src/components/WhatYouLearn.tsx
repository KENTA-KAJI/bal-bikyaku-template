import styles from "./WhatYouLearn.module.css";

const items = [
  {
    area: "膝",
    points: [
      "膝関節の評価・触診",
      "膝蓋骨アライメントへの介入",
      "脛骨回旋・Q-angleの整理",
    ],
  },
  {
    area: "足部・足関節",
    points: [
      "足部アーチの評価・介入",
      "足関節背屈制限の改善",
      "膝下ラインへの影響を整理",
    ],
  },
  {
    area: "骨盤・股関節",
    points: [
      "骨盤・股関節の評価・触診",
      "大腿骨前捻と膝の関係を整理",
      "大殿筋・腸腰筋の介入",
    ],
  },
  {
    area: "統合（第4回）",
    points: [
      "動作評価から介入優先順位を決定",
      "複合的な問題への対応",
      "全部位をつなげたテンプレートを実践",
    ],
  },
];

export default function WhatYouLearn() {
  return (
    <section className={`section section--white ${styles.section}`} aria-labelledby="learn-title">
      <div className="container">
        <p className="section-label">全4回で身につくこと</p>
        <h2 id="learn-title" className="section-title">
          受講後にできること
        </h2>
        <p className="section-lead">
          評価から介入、エクササイズ、再評価までを<br />
          一つの流れとして組み立てられる状態を目指します。
        </p>
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.area} className={styles.card}>
              <h3 className={styles.area}>{item.area}</h3>
              <ul role="list" className={styles.list}>
                {item.points.map((p, i) => (
                  <li key={i} className={styles.point}>
                    <span className={styles.check} aria-hidden="true">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
