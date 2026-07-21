"use client";
import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={`${styles.section} section--light`}>
      <div className={`${styles.container} reveal`}>
        <span className={styles.eyebrow}>WHO IS THIS FOR</span>
        <h2 className={styles.lead}>
          こんなアプローチに<br className="sp-only" />なっていませんか？
        </h2>

        <div className={styles.cardContainer}>
          <ul className={styles.examplesList}>
            <li className={styles.exampleItem}>
              外ももが張っているから、外ももを緩める
            </li>
            <li className={styles.exampleItem}>
              膝が内側へ入るから、臀筋を鍛える
            </li>
            <li className={styles.exampleItem}>
              足首が硬いから、ふくらはぎを伸ばす
            </li>
          </ul>
        </div>

        <div className={styles.callout}>
          <p className={styles.calloutText}>
            問題は、学んでいる量が足りないことではありません。<br className="pc-only" />
            膝・足部・骨盤といった各部位をバラバラに捉え、知識を「現場で繋ぎ合わせる方法」を知らないことにあります。
          </p>
        </div>

        <p className={styles.bodyText}>
          その場で一時的な変化が出たとしても、「なぜその問題が起きたのか」「なぜその介入を選んだのか」「次に何を行うべきなのか」を説明できなければ、指導は毎回その場しのぎになってしまいます。
        </p>

        <p className={styles.bodyText}>
          美脚指導に必要なのは、種目の多さではありません。目の前の脚を見たときに、
        </p>
        
        <p className={styles.bodyText}>
          <strong className={styles.highlight}>
            部位をつなぎ、<br className="sp-only" />介入の順番を判断できるようになる。
          </strong>
        </p>

        <p className={styles.bodyText}>
          それが、本セミナーでお伝えする「美脚指導のテンプレート」です。
        </p>

        <div className={styles.questions}>
          <p>どこを見るのか。</p>
          <p>何を触るのか。</p>
          <p>どう動かすのか。</p>
          <p>どこを整えるのか。</p>
          <p>何を使わせるのか。</p>
          <p>そして、何を再評価するのか。</p>
        </div>

        <p className={styles.conclusion}>
          その判断を、一つの流れとして持つことです。
        </p>
      </div>
    </section>
  );
}
