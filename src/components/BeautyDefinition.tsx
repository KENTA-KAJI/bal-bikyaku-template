import styles from "./BeautyDefinition.module.css";

const elements = [
  { number: "01", title: "細さ", text: "脚のボリュームを、見た目の印象だけでなく身体の状態と合わせて捉える。" },
  { number: "02", title: "真っ直ぐさ", text: "骨盤・股関節・膝・足部の位置関係から、脚のラインを確認する。" },
  { number: "03", title: "動作中の安定性", text: "立位だけでなく、スクワットやランジなどの動作中にラインがどう変わるかを見る。" },
];

export default function BeautyDefinition() {
  return (
    <section className={`section section--alt ${styles.section}`} aria-labelledby="beauty-title">
      <div className="container">
        <p className="section-label">DEFINITION</p>
        <h2 id="beauty-title" className="section-title">BALが考える「美脚」とは</h2>
        <p className={styles.lead}>単に細いだけではなく、真っ直ぐに見え、動作中も崩れにくい脚。</p>
        <div className={styles.grid}>
          {elements.map((item) => (
            <article key={item.number} className={styles.card}>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className={styles.conclusion}>
          見た目だけ、構造だけ、動作だけでは、目の前の脚を十分に整理できません。
          3つを照合することで、はじめて「どこから介入するか」という判断につながります。
        </p>
      </div>
    </section>
  );
}
