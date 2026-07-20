import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={`${styles.inner} container container--wide`}>
        <a href="/" aria-label="美脚指導のテンプレート トップへ">
          <Image
            src="/images/logo-bal.png"
            alt="BAL"
            width={80}
            height={40}
            style={{ objectFit: "contain", width: "auto", height: "36px" }}
            priority
          />
        </a>
        <nav aria-label="ページ内ナビ" className={styles.nav}>
          <a href="#curriculum" className={styles.navLink}>カリキュラム</a>
          <a href="#pricing" className={styles.navLink}>料金</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
        </nav>
      </div>
    </header>
  );
}
