import { seminarData } from "@/data/seminarData";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SalesBanner from "@/components/SalesBanner";
import ProblemSection from "@/components/ProblemSection";
import WhyNotEnough from "@/components/WhyNotEnough";
import ConceptSection from "@/components/ConceptSection";
import TemplateSteps from "@/components/TemplateSteps";
import WhatYouLearn from "@/components/WhatYouLearn";
import CurriculumSection from "@/components/CurriculumSection";
import PreLecture from "@/components/PreLecture";
import LiveValue from "@/components/LiveValue";
import ArchiveSection from "@/components/ArchiveSection";
import InterviewVideo from "@/components/InterviewVideo";
import InstructorSection from "@/components/InstructorSection";
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
    previewDate,
    generalPrice,
    memberPrice,
    generalStripeUrl,
    memberStripeUrl,
    youtubeUrl,
    contactEmail,
    contactLine,
    templateSteps,
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
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main id="main-content">
        {/* 2. ファーストビュー */}
        <Hero
          data={{
            seminarTitle,
            seminarSubtitle,
            format,
            sessionDuration,
            capacity,
            instructor,
            recruitmentStart,
            recruitmentEnd,
            salesStateOverride,
            previewDate,
          }}
        />

        {/* 3. 募集期間・定員・開催概要バナー */}
        <SalesBanner
          recruitmentStart={recruitmentStart}
          recruitmentEnd={recruitmentEnd}
          capacity={capacity}
          venue={venue}
          sessionDuration={sessionDuration}
        />

        {/* 4. このような美脚指導になっていませんか */}
        <ProblemSection />

        {/* 5. 手技やエクササイズを増やすだけでは解決しない理由 */}
        <WhyNotEnough />

        {/* 6. 本セミナーのコンセプト */}
        <ConceptSection />

        {/* 7. 習得する6段階の基本テンプレート */}
        <TemplateSteps steps={templateSteps} />

        {/* 8. 全4回で身につくこと */}
        <WhatYouLearn />

        {/* 9. 第1〜4回のカリキュラム */}
        <CurriculumSection curriculum={curriculum} />

        {/* 10. 申込者限定の事前講義 */}
        <PreLecture lectures={preLectures} />

        {/* 11. 対面実技で学ぶ価値 */}
        <LiveValue />

        {/* 12. アーカイブ視聴について */}
        <ArchiveSection />

        {/* 13. 講師インタビュー動画 */}
        <InterviewVideo youtubeUrl={youtubeUrl} />

        {/* 14. 講師プロフィール */}
        <InstructorSection instructor={instructor} />

        {/* 15. 開催概要 */}
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

        {/* 16. 料金プラン */}
        <PricingSection
          data={{
            generalPrice,
            memberPrice,
            ...salesProps,
          }}
        />

        {/* 17. 申込み前の注意事項 */}
        <NotesSection />

        {/* 18. FAQ */}
        <FaqSection
          faq={faq}
          contactEmail={contactEmail}
          contactLine={contactLine}
        />

        {/* 19. 最終CTA */}
        <FinalCta data={salesProps} />

        {/* 20. お問い合わせ・フッター */}
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
