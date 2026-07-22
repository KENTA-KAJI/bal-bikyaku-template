"use client";
import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={`${styles.section} section--light`}>
      <div className={`${styles.container} reveal`}>
        <span className={styles.eyebrow}>WHO IS THIS FOR</span>
        <h2 className={styles.lead}>
          そのアプローチ、変化は出ても、<br />なぜ変わったかを説明できますか？
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
            どの方法も、必要な場面があります。<br />
            ただし、評価と優先順位がないまま選ぶと、介入は場当たり的になりやすくなります。
          </p>
        </div>

        <p className={styles.bodyText}>
          その場で変化が出ても、次に何をすべきか迷う。介入を選んだ理由を説明できない。再評価する項目が定まらない。もし思い当たるなら、必要なのは知識を増やすことより、持っている知識を使う順番の整理かもしれません。
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
