import styles from "./ConceptSection.module.css";

const targetList = [
  "美脚指導をメインにしているが、まだ自分の型がない方",
  "評価や介入の精度に自信がない方",
  "脚や姿勢の見方を整理したいトレーナー",
  "何となくのストレッチや筋トレから卒業したい方",
  "お客様に「なぜこのアプローチが必要なのか」を説明できるようになりたい方",
  "脚だけでなく、骨盤・股関節・膝・足部までつなげて見られるようになりたい方",
];

export default function ConceptSection() {
  return (
    <section className={`section section--white ${styles.section}`} aria-labelledby="concept-title">
      <div className="container">
        <p className="section-label">本セミナーのコンセプト</p>
        <h2 id="concept-title" className="section-title">
          バラバラに学んできた知識と技術を、<br className={styles.br} />
          現場で使える「一つの流れ」に
        </h2>
        <div className={styles.body}>
          <p>
            本セミナーは、手技やエクササイズの詰め合わせではありません。
          </p>
          <p>
            美脚指導で結果を出すために必要な<strong>「評価・介入・再評価・運動指導のテンプレート」</strong>を、実技を通して習得することが目的です。
          </p>
          <p>
            受講後には、評価から介入、エクササイズ、再評価までを<br className={styles.br} />
            一つの流れとして組み立てられる状態を目指します。
          </p>
        </div>

        <div className={styles.targetBlock}>
          <p className={styles.targetHeading}>このような方が対象です</p>
          <ul className={styles.targetList} role="list">
            {targetList.map((item, i) => (
              <li key={i} className={styles.targetItem}>
                <span className={styles.targetCheck} aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={styles.targetNote}>
            保有資格や経験年数は問いません。<br />
            トレーナー、セラピスト、運動指導者など、<br className={styles.brSp} />
            身体指導に関わる方であれば参加可能です。
          </p>
        </div>
      </div>
    </section>
  );
}
