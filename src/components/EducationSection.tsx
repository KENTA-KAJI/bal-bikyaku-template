import styles from "./EducationSection.module.css";

export default function EducationSection() {
  return (
    <section className={`section section--white ${styles.section}`} aria-labelledby="education-title">
      <div className="container">
        <p className="section-label">WHY IT HAPPENS</p>
        <h2 id="education-title" className="section-title">
          足りないのは、<br className="sp-only" />手技やエクササイズの数ではありません
        </h2>
        <div className={styles.body}>
          <p>
            外ももを緩めることも、臀筋を鍛えることも、ふくらはぎを伸ばすことも、必要な場面があります。
            問題は、その方法自体ではありません。
          </p>
          <p>
            実際のクライアントには、膝の向き、足部アーチ、足関節の可動性、骨盤や股関節の位置など、複数の要素が同時に現れます。
            しかも、<strong>見た目に現れている場所が、原因とは限りません。</strong>
          </p>
        </div>
        <ol className={styles.flow}>
          <li><span>01</span><p>部位ごとに学んだ知識を、全身のつながりとして見る</p></li>
          <li><span>02</span><p>評価で得た情報から、優先して扱う問題を整理する</p></li>
          <li><span>03</span><p>徒手療法とエクササイズを選び、介入後に再評価する</p></li>
        </ol>
        <div className={styles.rescue}>
          <p className={styles.rescueLead}>これまで学んだ知識が、無駄だったのではありません。</p>
          <p>部位別の知識を、現場で使う順番へ変える「型」がなかっただけです。</p>
        </div>
      </div>
    </section>
  );
}
