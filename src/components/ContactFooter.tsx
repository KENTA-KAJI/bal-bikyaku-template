import Image from "next/image";
import styles from "./ContactFooter.module.css";

interface ContactFooterProps {
  contactEmail: string;
  contactLine: string;
}

export default function ContactFooter({ contactEmail, contactLine }: ContactFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} container`}>
        {/* 問い合わせ */}
        <div className={styles.contact}>
          <p className={styles.contactTitle}>お問い合わせ</p>
          <div className={styles.contactLinks}>
            <a href={`mailto:${contactEmail}`} className={styles.contactLink}>
              <span className={styles.contactIcon} aria-hidden="true">✉</span>
              {contactEmail}
            </a>
            <a
              href={contactLine}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactIcon} aria-hidden="true">💬</span>
              BAL LINE公式
            </a>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* フッターロゴ */}
        <div className={styles.logoRow}>
          <Image
            src="/images/logo-bal.png"
            alt="BAL"
            width={60}
            height={30}
            style={{ objectFit: "contain", width: "auto", height: "28px" }}
          />
        </div>

        <p className={styles.copy}>
          &copy; {currentYear} BAL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
