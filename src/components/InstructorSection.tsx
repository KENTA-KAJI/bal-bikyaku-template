import Image from "next/image";
import type { SeminarData } from "@/data/seminarData";
import styles from "./InstructorSection.module.css";

interface InstructorSectionProps {
  instructor: SeminarData["instructor"];
}

export default function InstructorSection({ instructor }: InstructorSectionProps) {
  return (
    <section className={`section section--alt ${styles.section}`} aria-labelledby="instructor-title">
      <div className="container">
        <p className="section-label">講師プロフィール</p>
        <h2 id="instructor-title" className="section-title">
          講師紹介
        </h2>

        {/* 講師画像（横長・文字入り） */}
        <div className={styles.imgWrapper}>
          <Image
            src={instructor.imageUrl}
            alt={instructor.imageAlt}
            width={670}
            height={280}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        {/* テキスト情報 */}
        <div className={styles.profile}>
          <div className={styles.nameBlock}>
            <h3 className={styles.nameJa}>{instructor.name}</h3>
            <p className={styles.nameEn}>{instructor.nameEn}</p>
          </div>
          <div className={styles.credentials}>
            {instructor.credentials.map((c, i) => (
              <span key={i} className={styles.credential}>{c}</span>
            ))}
          </div>
          <div className={styles.bio}>
            {instructor.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
