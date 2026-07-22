import type { SeminarData } from "@/data/seminarData";
import { Accordion, AccordionItem } from "./Accordion";
import styles from "./CurriculumSection.module.css";

interface CurriculumSectionProps {
  curriculum: SeminarData["curriculum"];
}

type CurriculumItem = SeminarData["curriculum"][number];

const sessionSummaries: Record<number, { assessment: string; intervention: string; outcome: string }> = {
  1: {
    assessment: "大腿骨・膝蓋骨・脛骨の位置関係と、静止時・動作時の膝アライメントを確認します。",
    intervention: "評価結果に応じた膝周囲の徒手療法と、下腿回旋や膝屈伸を扱うエクササイズを学びます。",
    outcome: "膝の見え方を膝だけの問題と決めつけず、脚のラインへ影響する要素を整理できる状態を目指します。",
  },
  2: {
    assessment: "足部アーチ、後足部・前足部、足関節可動域と、動作中の足部の安定性を確認します。",
    intervention: "足関節や下腿への徒手療法と、足趾・アーチ・下腿を使うエクササイズを扱います。",
    outcome: "足部・足関節の状態が膝下ラインやニーインへどう影響するかを整理できる状態を目指します。",
  },
  3: {
    assessment: "骨盤の傾き、股関節可動域、筋機能と、骨盤・大腿骨の位置関係を確認します。",
    intervention: "股関節周囲への徒手療法と、呼吸・体幹・殿筋・腸腰筋のエクササイズを扱います。",
    outcome: "太もものねじれ、外ももの張り、膝の入り方に関わる要素を整理できる状態を目指します。",
  },
  4: {
    assessment: "第1〜3回の視点をつなぎ、動作評価から複数の問題を整理します。",
    intervention: "確認できている範囲では、評価結果から介入の優先順位を考える統合を扱います。",
    outcome: "部位別の知識を一つの流れへ統合し、どこから介入するかを判断できる状態を目指します。",
  },
};

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
  const summary = sessionSummaries[session.session];
  return (
    <div className={styles.sessionContent}>
      <div className={styles.sessionMeta}>
        <span className={styles.metaItem}>
          <span className={styles.metaKey}>開催日</span>
          <span>{session.date}</span>
        </span>
      </div>
      <p className={styles.goal}>{session.goal}</p>

      <div className={styles.summary}>
        <div><strong>この回で扱う問題</strong><p>{session.cases.length > 0 ? session.cases.join("、") : "複数部位をつなげた動作評価と、介入の優先順位"}</p></div>
        <div><strong>学ぶ評価</strong><p>{summary.assessment}</p></div>
        <div><strong>徒手療法・エクササイズ</strong><p>{summary.intervention}</p></div>
        <div><strong>判断できるようになること</strong><p>{summary.outcome}</p></div>
      </div>

      {session.cases && session.cases.length > 0 && (
        <div className={styles.cases}>
          <p className={styles.casesTitle}>詳しく扱う見え方・状態</p>
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
