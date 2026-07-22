"use client";
import styles from "./AfterSection.module.css";

export default function AfterSection() {
  return (
    <section className={styles.section}>
      <div className="container reveal">
        <div className={styles.header}>
          <h2 className={styles.title}>
            全4回を受講した後に
            <br className="sp-only" />
            できるようになること
          </h2>
          <p className={styles.lead}>
            知識を増やすだけでなく、評価・選択・説明・再評価という現場の行動へつなげます。
          </p>
        </div>

        <ul className={styles.list} role="list">
          <li className={styles.item}>クライアントの脚を見たとき、最初に確認する場所を決められる</li>
          <li className={styles.item}>見た目の印象と骨・関節の位置を触診で照合できる</li>
          <li className={styles.item}>膝の問題を膝だけで完結させず、足部や股関節との関係から考えられる</li>
          <li className={styles.item}>評価結果をもとに徒手療法を選べる</li>
          <li className={styles.item}>整えた後に必要なエクササイズを選べる</li>
          <li className={styles.item}>介入前後の変化を再評価できる</li>
          <li className={styles.item}>なぜその介入が必要なのか、クライアントに説明できる</li>
          <li className={styles.item}>毎回の指導を行き当たりばったりにせず、一つの型で組み立てられる</li>
        </ul>
      </div>
    </section>
  );
}
