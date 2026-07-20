"use client";
import { useSalesState } from "@/hooks/useSalesState";
import type { SeminarData } from "@/data/seminarData";
import CtaButtons from "./CtaButtons";
import styles from "./StickyCtaBar.module.css";

interface StickyCtaBarProps {
  data: Pick<
    SeminarData,
    | "generalStripeUrl"
    | "memberStripeUrl"
    | "recruitmentStart"
    | "recruitmentEnd"
    | "salesStateOverride"
  >;
}

export default function StickyCtaBar({ data }: StickyCtaBarProps) {
  const { salesState } = useSalesState(
    data.recruitmentStart,
    data.recruitmentEnd,
    data.salesStateOverride
  );

  return (
    <div
      className={styles.bar}
      role="region"
      aria-label="申込みバー"
      style={{
        paddingBottom: `max(var(--space-3), env(safe-area-inset-bottom))`,
      }}
    >
      <CtaButtons
        salesState={salesState}
        generalStripeUrl={data.generalStripeUrl}
        memberStripeUrl={data.memberStripeUrl}
        variant="sticky"
      />
    </div>
  );
}
