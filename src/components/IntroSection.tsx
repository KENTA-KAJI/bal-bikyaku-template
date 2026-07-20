"use client";
import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} reveal`}>
        <h2 className={styles.lead}>
          見た目の変化を出すことと、
          <br />
          美脚指導を組み立てられることは、
          <br />
          同じではありません。
        </h2>

        <div className={styles.examples}>
          <p className={styles.exampleText}>
            外ももが張っているから、外ももを緩める。<br />
            膝が内側へ入るから、臀筋を鍛える。<br />
            足首が硬いから、ふくらはぎを伸ばす。
          </p>
        </div>

        <p className={styles.bodyText}>
          その場で変化が出たとしても、
          <br />
          「なぜその問題が起きたのか」
          <br />
          「なぜその介入を選んだのか」
          <br />
          「次に何を行うべきなのか」
          <br />
          を説明できなければ、
          <br className="sp-only" />
          指導は毎回その場しのぎになってしまいます。
          <br />
          <br />
          美脚指導に必要なのは、種目の多さではありません。
          <br />
          目の前の脚を見たときに、
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
