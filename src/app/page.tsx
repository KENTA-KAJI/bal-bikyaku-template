import { seminarData } from "@/data/seminarData";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShortOverview from "@/components/ShortOverview";
import IntroSection from "@/components/IntroSection";
import PhilosophySection from "@/components/PhilosophySection";
import TemplateSteps from "@/components/TemplateSteps";
import RoadmapSection from "@/components/RoadmapSection";
import CurriculumSection from "@/components/CurriculumSection";
import AfterSection from "@/components/AfterSection";
import LiveValue from "@/components/LiveValue";
import PreLecture from "@/components/PreLecture";
import InterviewVideo from "@/components/InterviewVideo";
import ArchiveSection from "@/components/ArchiveSection";
import OverviewSection from "@/components/OverviewSection";
import PricingSection from "@/components/PricingSection";
import NotesSection from "@/components/NotesSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import ContactFooter from "@/components/ContactFooter";
import StickyCtaBar from "@/components/StickyCtaBar";

export default function Home() {
  const {
    seminarTitle,
    seminarSubtitle,
    format,
    sessionDuration,
    venue,
    capacity,
    instructor,
    recruitmentStart,
    recruitmentEnd,
    salesStateOverride,
    generalPrice,
    memberPrice,
    generalStripeUrl,
    memberStripeUrl,
    youtubeUrl,
    contactEmail,
    contactLine,
    curriculum,
    preLectures,
    faq,
  } = seminarData;

  const salesProps = {
    recruitmentStart,
    recruitmentEnd,
    salesStateOverride,
    generalStripeUrl,
    memberStripeUrl,
  };

  return (
    <>
      <Header />

      <main id="main-content">
        {/* 1. ファーストビュー */}
        <Hero />

        {/* 2. 開催概要の短い帯 */}
        <ShortOverview />

        {/* 3 & 4. 現場への具体的な問題提起 / その場の変化だけでは指導の型にならない理由 */}
        <IntroSection />

        {/* 5. 講師・渡辺慶輔が考える美脚指導 */}
        <PhilosophySection />

        {/* 6 & 7. このセミナーで習得する判断のテンプレート / 6ステップ */}
        <TemplateSteps />

        {/* 8 & 9. なぜその順番で学ぶのか / 全4回のロードマップ */}
        <RoadmapSection />

        {/* 10. 各回の詳しいカリキュラム */}
        <CurriculumSection curriculum={curriculum} />

        {/* 11. 全4回を受講した後にできるようになること */}
        <AfterSection />

        {/* 12. 少人数10名・対面実技で学ぶ理由 */}
        <LiveValue />

        {/* 13. 申込者限定の事前講義 */}
        <PreLecture lectures={preLectures} />

        {/* 14. 講師インタビュー動画 */}
        <InterviewVideo youtubeUrl={youtubeUrl} />

        {/* 16. 永久視聴できるアーカイブ (Instructor profile is in 5) */}
        <ArchiveSection />

        {/* 17. 開催概要 */}
        <OverviewSection
          data={{
            seminarTitle,
            seminarSubtitle,
            format,
            sessionDuration,
            venue,
            capacity,
            recruitmentStart,
            recruitmentEnd,
            instructor,
          }}
        />

        {/* 18. 料金 */}
        <PricingSection
          data={{
            generalPrice,
            memberPrice,
            ...salesProps,
          }}
        />

        {/* 注意事項 */}
        <NotesSection />

        {/* 19. FAQ */}
        <FaqSection
          faq={faq}
          contactEmail={contactEmail}
          contactLine={contactLine}
        />

        {/* 20. 最終CTA */}
        <FinalCta data={salesProps} />

        {/* 21. お問い合わせ・フッター */}
        <ContactFooter
          contactEmail={contactEmail}
          contactLine={contactLine}
        />
      </main>

      {/* 固定申込ボタン（スマートフォン） */}
      <StickyCtaBar data={salesProps} />
    </>
  );
}
