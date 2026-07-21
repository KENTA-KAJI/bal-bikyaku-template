import type { SeminarData } from "@/data/seminarData";
import { Accordion, AccordionItem } from "./Accordion";
import styles from "./CurriculumSection.module.css";

interface CurriculumSectionProps {
  curriculum: SeminarData["curriculum"];
}

type CurriculumItem = SeminarData["curriculum"][number];

function SessionHeader({ session }: { session: CurriculumItem }) {
  return (
    <div className={styles.triggerInner}>
      <div className={styles.headerTop}>
        <span className={styles.sessionNum}>第{session.session}回</span>
        <span className={styles.sessionArea}>{session.area}</span>
      </div>
      <span className={styles.sessionTitle}>{session.title}</span>
    </div>
  );
}

function CategoryList({ title, items }: { title: string; items: readonly string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className={styles.category}>
      <h4 className={styles.categoryTitle}>{title}</h4>
      <ul className={styles.categoryList} role="list">
        {items.map((item, i) => (
          <li key={i} className={styles.categoryItem}>
            <span aria-hidden="true">—</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SessionContent({ session }: { session: CurriculumItem }) {
  return (
    <div className={styles.sessionContent}>
      <div className={styles.sessionMeta}>
        <span className={styles.metaItem}>
          <span className={styles.metaKey}>開催日</span>
          <span>{session.date}</span>
        </span>
      </div>
      <p className={styles.goal}>{session.goal}</p>

      {session.cases && session.cases.length > 0 && (
        <div className={styles.cases}>
          <p className={styles.casesTitle}>対応できるようになるケース</p>
          <ul role="list">
            {session.cases.map((c, i) => (
              <li key={i} className={styles.caseItem}>
                <span className={styles.caseCheck} aria-hidden="true">✓</span> {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {"comingSoon" in session && session.comingSoon ? (
        <div className={styles.comingSoon}>
          <p>詳しいカリキュラムは後日追加予定です。</p>
        </div>
      ) : (
        <div className={styles.categories}>
          <CategoryList title="座学" items={session.lecture} />
          <CategoryList title="評価・触診" items={session.assessment} />
          <CategoryList title="徒手療法" items={session.manual} />
          <CategoryList title="トレーニング・エクササイズ" items={session.exercise} />
        </div>
      )}
    </div>
  );
}

export default function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <section
      id="curriculum"
      className={`section section--white ${styles.section}`}
      aria-labelledby="curriculum-title"
    >
      <div className="container">
        <h2 id="curriculum-title" className="section-title">
          詳細なカリキュラム
        </h2>
        <p className="section-lead">
          各回の詳しい内容はタップしてご確認ください。
        </p>
        <Accordion>
          {curriculum.map((session) => (
            <AccordionItem
              key={session.session}
              title={<SessionHeader session={session} />}
            >
              <SessionContent session={session} />
            </AccordionItem>
          ))}
        </Accordion>
        <p className={styles.archiveNote}>
          全4回のアーカイブ動画が提供されます。欠席した回も後から視聴可能です。
        </p>
      </div>
    </section>
  );
}
