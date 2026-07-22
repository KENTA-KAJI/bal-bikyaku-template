import styles from "./InterviewVideo.module.css";

interface InterviewVideoProps {
  youtubeUrl: string;
}

function toEmbedUrl(value: string) {
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname.startsWith("/embed/")) return value;
      const id = url.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    return value;
  }
  return value;
}

export default function InterviewVideo({ youtubeUrl }: InterviewVideoProps) {
  const hasUrl = youtubeUrl && youtubeUrl.trim().length > 0;
  const embedUrl = toEmbedUrl(youtubeUrl.trim());

  return (
    <section className={styles.section} aria-labelledby="video-title">
      <div className={styles.container}>
        <p className={styles.kicker}>INTERVIEW</p>
        <h2 id="video-title">
          なぜ、このセミナーを
          <br />
          つくったのか。
        </h2>
        <p className={styles.lead}>
          渡辺慶輔先生が、セミナーで伝えたいこと、現場で感じている課題、そしてどのような指導者に受講してほしいかをお話しします。
        </p>
        {hasUrl ? (
          <div className={styles.videoWrapper}>
            <iframe
              src={embedUrl}
              title="渡辺慶輔先生 セミナーインタビュー"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className={styles.iframe}
            />
          </div>
        ) : (
          <div className={styles.placeholder} aria-label="動画は2026年7月27日公開予定">
            <div className={styles.placeholderInner}>
              <span className={styles.placeholderIcon} aria-hidden="true">▷</span>
              <p className={styles.placeholderEyebrow}>COMING SOON</p>
              <p className={styles.placeholderText}>2026年7月27日 公開予定</p>
              <p className={styles.placeholderNote}>
                渡辺慶輔先生へのインタビュー動画を<br />
                こちらに掲載します。
              </p>
            </div>
          </div>
        )}
        <p className={styles.bridge}>
          手技を増やす前に、なぜ「評価から再評価までの順番」が必要なのか。その背景を動画で確かめてください。
        </p>
      </div>
    </section>
  );
}
