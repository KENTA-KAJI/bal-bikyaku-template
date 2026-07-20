import type { SeminarData } from "@/data/seminarData";
import { Accordion, AccordionItem } from "./Accordion";
import styles from "./FaqSection.module.css";

interface FaqSectionProps {
  faq: SeminarData["faq"];
  contactEmail: string;
  contactLine: string;
}

export default function FaqSection({ faq, contactEmail, contactLine }: FaqSectionProps) {
  return (
    <section
      id="faq"
      className={`section section--alt ${styles.section}`}
      aria-labelledby="faq-title"
    >
      <div className="container">
        <p className="section-label">よくあるご質問</p>
        <h2 id="faq-title" className="section-title">
          FAQ
        </h2>
        <Accordion className={styles.accordion}>
          {faq.map((item, i) => (
            <AccordionItem key={i} title={item.question}>
              <p className={styles.answer}>
                {item.answer.split("BAL STUDIO").map((part, idx, arr) => (
                  <span key={idx}>
                    {part}
                    {idx < arr.length - 1 && <span className="nw">BAL STUDIO</span>}
                  </span>
                ))}
              </p>
            </AccordionItem>
          ))}
        </Accordion>

        <div className={styles.contact}>
          <p className={styles.contactTitle}>解決しない場合はお気軽にお問い合わせください</p>
          <div className={styles.contactLinks}>
            <a href={`mailto:${contactEmail}`} className={styles.contactLink}>
              <span className={styles.contactIcon} aria-hidden="true">✉</span>
              <span>{contactEmail}</span>
            </a>
            <a
              href={contactLine}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactIcon} aria-hidden="true">💬</span>
              <span>BAL LINE公式</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
