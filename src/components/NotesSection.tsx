import styles from "./NotesSection.module.css";

const notes = [
  {
    title: "お申込みについて",
    items: [
      "本セミナーは全4回セットのみのお申込みです。単発受講はありません。",
      "支払いは一括払いのみです。分割払いには対応していません。",
      "定員10名に達し次第、募集を終了します。",
    ],
  },
  {
    title: "キャンセル・返金について",
    items: [
      "決済完了後、お客様都合によるキャンセル・返金はできません。",
      "お申込み前に必ず内容をご確認ください。",
    ],
  },
  {
    title: "BAL STUDIO会員価格について",
    items: [
      "BAL STUDIO会員価格でお申し込みの場合、申込情報と会員登録情報を確認させていただきます。",
      "確認の結果、会員情報と一致しない場合は差額のお支払いをお願いすることがあります。",
    ],
  },
  {
    title: "その他",
    items: [
      "持ち物や服装の詳細は、開催前に別途ご案内します。",
      "会場の詳細は申込者へ別途ご案内します。",
    ],
  },
];

export default function NotesSection() {
  return (
    <section className={`section section--white ${styles.section}`} aria-labelledby="notes-title">
      <div className="container">
        <p className="section-label">申込み前の確認事項</p>
        <h2 id="notes-title" className="section-title">
          申込み前の注意事項
        </h2>
        <div className={styles.list}>
          {notes.map((note) => (
            <div key={note.title} className={styles.item}>
              <h3 className={styles.itemTitle}>{note.title}</h3>
              <ul role="list" className={styles.itemList}>
                {note.items.map((text, i) => (
                  <li key={i} className={styles.itemText}>
                    <span className={styles.dot} aria-hidden="true">●</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
