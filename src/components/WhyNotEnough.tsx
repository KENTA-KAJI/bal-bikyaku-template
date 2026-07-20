import styles from "./WhyNotEnough.module.css";

export default function WhyNotEnough() {
  return (
    <section className={`section section--alt ${styles.section}`} aria-labelledby="why-title">
      <div className="container">
        <p className="section-label">なぜ種目を増やすだけでは足りないのか</p>
        <h2 id="why-title" className="section-title">
          手技やエクササイズを<br />
          増やすだけでは<br className={styles.spBr} />
          解決しない理由
        </h2>
        <div className={styles.body}>
          <p>
            美脚を作るうえで大切なのは、個々の手技やエクササイズの数ではありません。
          </p>
          <p>
            「どこを評価するのか」「何を原因として考えるのか」「どこに介入するのか」「どのエクササイズにつなげるのか」という<strong>一連の流れを持つこと</strong>が、再現性のある指導につながります。
          </p>
          <p>
            知識や種目だけが増えても、それをつなぐ「型」がなければ、毎回の指導がバラバラなまま終わってしまいます。
          </p>
          <p>
            本セミナーでは、骨盤・股関節から膝、足部・足関節までを網羅し、美脚を作るための<strong>評価・介入・再評価・運動指導のテンプレート</strong>を習得します。
          </p>
        </div>
        <div className={styles.flowHint}>
          <span className={styles.flowItem}>評価</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.flowItem}>介入</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.flowItem}>エクササイズ</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.flowItem}>再評価</span>
        </div>
      </div>
    </section>
  );
}
