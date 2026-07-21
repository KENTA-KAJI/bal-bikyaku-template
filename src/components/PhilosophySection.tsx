"use client";
import styles from "./PhilosophySection.module.css";
import Image from "next/image";
import { seminarData } from "@/data/seminarData";

export default function PhilosophySection() {
  const { instructor } = seminarData;

  return (
    <section className={styles.section}>
      <div className={`${styles.container} reveal`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            「美脚」というテーマを、
            <br />
            感覚や見た目だけで終わらせない。
          </h2>
          <p className={styles.text}>
            理学療法士として身体構造を捉え、<br className="pc-only" /><span className="nw">アスレティックトレーナー</span>として動作を捉える。
            <br />
            二つの視点を持つ<span className="nw">渡辺慶輔</span>が、
            <br className="sp-only" />
            評価・徒手療法・エクササイズを<br className="sp-only" />
            現場で再現できる一つの流れとして伝えます。
          </p>
        </div>
      </div>

      <div className={`${styles.imageWrapper} reveal`}>
        <Image
          src={instructor.imageUrl}
          alt={instructor.imageAlt}
          width={800}
          height={450}
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>

      <div className={`${styles.profileBox} reveal`}>
        <h3 className={styles.name}>{instructor.name}</h3>
        <p className={styles.credentials}>
          {instructor.credentials.map((cred, i) => (
            <span key={i}>
              {cred}
              {i < instructor.credentials.length - 1 && <br className="sp-only" />}
              {i < instructor.credentials.length - 1 && <span className="pc-only"> ／ </span>}
            </span>
          ))}
        </p>
        <div className={styles.bio}>
          {instructor.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
