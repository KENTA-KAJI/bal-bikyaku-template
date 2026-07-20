import styles from "./ArchiveSection.module.css";

export default function ArchiveSection() {
  return (
    <section className={`section section--alt ${styles.section}`} aria-labelledby="archive-title">
      <div className="container">
        <p className="section-label">アーカイブ視聴について</p>
        <h2 id="archive-title" className="section-title">
          欠席した回も<br />アーカイブで視聴できます
        </h2>
        <div className={styles.body}>
          <p>
            全4回の当日収録アーカイブを提供します。
            欠席した回はアーカイブでご視聴いただけます。
          </p>
          <p>
            視聴期限はありません。期間を限定せず、何度でも視聴いただけます。
          </p>
        </div>
        <div className={styles.note}>
          <p>
            本セミナーは<strong>対面の実技セミナー</strong>が主軸です。<br />
            アーカイブはあくまで補助手段です。<br />
            可能な限り対面でご参加ください。
          </p>
        </div>
      </div>
    </section>
  );
}
