"use client";
import styles from "./LiveValue.module.css";
import { seminarData } from "@/data/seminarData";

export default function LiveValue() {
  return (
    <section className={styles.section}>
      <div className="container reveal">
        <div className={styles.header}>
          <h2 className={styles.title}>
            動画では伝わらない感覚を
            <br className="sp-only" />
            少人数で確実に身につける
          </h2>
          <p className={styles.lead}>
            動画を見るだけでは、触診の位置や圧、関節を動かした感覚、
            介入前後のわずかな変化までは身につきません。<br />
            本セミナーは、定員{seminarData.capacity}名の少人数制だからこそ、以下の実践を可能にします。
          </p>
        </div>

        <div className={styles.points}>
          <div className={styles.point}>実際に骨指標を触る</div>
          <div className={styles.point}>関節の動きを確かめる</div>
          <div className={styles.point}>評価と介入を繰り返す</div>
          <div className={styles.point}>講師の手の位置や力加減を見る</div>
          <div className={styles.point}>自分の評価が合っているか確認する</div>
          <div className={styles.point}>介入後に変化を再評価する</div>
        </div>

        <div className={styles.totalTime}>
          <span className="nw">全4回・各回約5時間</span>
          <br className="sp-only" />
          <span className="pc-only"> </span>
          <span className="nw">（合計約20時間）の対面実技</span>
        </div>
      </div>
    </section>
  );
}
