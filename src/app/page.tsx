import Header from "@/components/Header";
import StickyCtaBar from "@/components/StickyCtaBar";
import LandingPage from "@/components/LandingPage";
import { seminarData } from "@/data/seminarData";

export default function Home() {
  const salesProps = {
    recruitmentStart: seminarData.recruitmentStart,
    recruitmentEnd: seminarData.recruitmentEnd,
    salesStateOverride: seminarData.salesStateOverride,
    generalStripeUrl: seminarData.generalStripeUrl,
    memberStripeUrl: seminarData.memberStripeUrl,
  };

  return (
    <>
      <Header />
      <main id="main-content"><LandingPage /></main>
      <StickyCtaBar data={salesProps} />
    </>
  );
}
