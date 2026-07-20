import styles from "./ProblemSection.module.css";

const problems = [
  "どこから評価すればよいか分からない",
  "評価しても介入につながらない",
  "手技とエクササイズがバラバラになっている",
  "その場では変化しても、継続的な指導へ落とし込めない",
  "自分の中に美脚指導の型がない",
  "脚や姿勢を部分的にしか見られない",
  "なぜそのアプローチが必要なのか説明できない",
];

export default function ProblemSection() {
  return (
    <section className={`section section--white ${styles.section}`} aria-labelledby="problem-title">
      <div className="container">
        <p className="section-label">こんなお悩みはありませんか</p>
        <h2 id="problem-title" className="section-title">
          このような美脚指導に<br />なっていませんか？
        </h2>
        <ul className={styles.list} role="list">
          {problems.map((p, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.check} aria-hidden="true">✕</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className={styles.note}>
          <p>
            美脚指導で結果を出すために必要なのは、<br className={styles.br} />
            単にストレッチやトレーニング種目を<br className={styles.br} />
            増やすことではありません。
          </p>
        </div>
      </div>
    </section>
  );
}
