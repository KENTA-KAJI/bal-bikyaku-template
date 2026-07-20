import styles from "./InterviewVideo.module.css";

interface InterviewVideoProps {
  youtubeUrl: string;
}

export default function InterviewVideo({ youtubeUrl }: InterviewVideoProps) {
  const hasUrl = youtubeUrl && youtubeUrl.trim().length > 0;

  return (
    <section className={`section section--white ${styles.section}`} aria-labelledby="video-title">
      <div className="container">
        <p className="section-label">講師インタビュー動画</p>
        <h2 id="video-title" className="section-title">
          講師インタビュー
        </h2>
        {hasUrl ? (
          <div className={styles.videoWrapper}>
            <iframe
              src={youtubeUrl}
              title="講師インタビュー動画"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className={styles.iframe}
            />
          </div>
        ) : (
          <div className={styles.placeholder} aria-label="動画は近日公開予定">
            <div className={styles.placeholderInner}>
              <span className={styles.placeholderIcon} aria-hidden="true">▷</span>
              <p className={styles.placeholderText}>講師インタビュー 近日公開</p>
              <p className={styles.placeholderNote}>
                渡辺慶輔先生へのインタビュー動画を近日中にこちらへ掲載します。<br />
                公開時はBAL LINEよりお知らせします。
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
