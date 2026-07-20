import styles from "./LiveValue.module.css";

const values = [
  {
    icon: "01",
    title: "実技を通して体で理解する",
    desc: "座学で知識を整理し、すぐに実技で確認します。触れる・動かす・感じるという体験が、知識を実用的な技術へ変えます。",
  },
  {
    icon: "02",
    title: "少人数だからできる個別フィードバック",
    desc: "定員10名の少人数制です。参加者一人ひとりに対して、講師が直接フィードバックを行います。",
  },
  {
    icon: "03",
    title: "疑問をその場で解決できる",
    desc: "オンライン動画では難しい「その場での質問」が可能です。実際のクライアントケースに関する疑問も、対面だからこそ深く掘り下げられます。",
  },
  {
    icon: "04",
    title: "参加者同士の実技練習",
    desc: "受講者同士でペアを組んで実技練習をします。複数の身体を評価・介入することで、感覚が定着します。",
  },
];

export default function LiveValue() {
  return (
    <section className={`section section--white ${styles.section}`} aria-labelledby="live-title">
      <div className="container">
        <p className="section-label">対面実技で学ぶ価値</p>
        <h2 id="live-title" className="section-title">
          なぜオンラインではなく<br />対面実技なのか
        </h2>
        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.icon} className={styles.item}>
              <span className={styles.num}>{v.icon}</span>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.desc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
