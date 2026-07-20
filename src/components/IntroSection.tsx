"use client";
import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} reveal`}>
        <h2 className={styles.lead}>
          見た目を変えることと、
          <br />
          美脚指導を組み立てることは違う。
        </h2>

        <div className={styles.examples}>
          <p className={styles.exampleText}>
            <span>外ももが張っているから、</span><span>外ももを緩める。</span><br />
            <span>膝が内側へ入るから、</span><span>臀筋を鍛える。</span><br />
            <span>足首が硬いから、</span><span>ふくらはぎを伸ばす。</span>
          </p>
        </div>

        <p className={styles.bodyText}>
          <span>その場で変化が出たとしても、</span>
          <span>「なぜその問題が起きたのか」</span>
          <span>「なぜその介入を選んだのか」</span>
          <span>「次に何を行うべきなのか」</span>
          <span>を説明できなければ、</span>
          <span>指導は毎回その場しのぎになってしまいます。</span>
        </p>

        <p className={styles.bodyText}>
          <span>美脚指導に必要なのは、</span><span>種目の多さではありません。</span>
          <span>目の前の脚を見たときに、</span>
        </p>
        
        <p className={styles.bodyText}>
          <strong className={styles.highlight}>
            <span>部位をつなぎ、</span><br className="sp-only" />
            <span>介入の順番を判断できるようになる。</span>
          </strong>
        </p>

        <p className={styles.bodyText}>
          <span>それが、本セミナーでお伝えする</span>
          <span>「美脚指導のテンプレート」です。</span>
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
