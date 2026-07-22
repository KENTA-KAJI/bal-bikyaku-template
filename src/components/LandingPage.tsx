import Image from "next/image";
import { seminarData } from "@/data/seminarData";
import { Accordion, AccordionItem } from "./Accordion";
import SalesCta, { FinalInstructorImage } from "./SalesCta";
import styles from "./LandingPage.module.css";

const problems = [
  {
    title: "膝が内側に入っている。",
    causes: [
      "足部の回内でしょうか。",
      "股関節の内旋でしょうか。",
      "それとも、大腿骨の前捻角度でしょうか。",
    ],
  },
  {
    title: "外ももが張っている。",
    causes: [
      "腸脛靱帯まわりの滑走制限でしょうか。",
      "股関節外転筋の過緊張でしょうか。",
      "それとも、足部アーチの低下による代償でしょうか。",
    ],
  },
  {
    title: "足関節の背屈が硬い。",
    causes: [
      "距腿関節そのものの可動域制限でしょうか。",
      "下腿三頭筋の伸張性低下でしょうか。",
      "それとも、ウィンドラス機構が機能していないことによる二次的な硬さでしょうか。",
    ],
  },
];

const definitions = [
  {
    icon: "↔",
    title: "細さ",
    text: "筋肉や脂肪のボリュームに関わる要素です。ただし、細さだけを追い求めても、美脚には直結しません。",
  },
  {
    icon: "│",
    title: "真っ直ぐさ",
    text: "静止した状態で、膝や足部のアライメントがどう見えるかという要素です。骨盤の傾き、股関節の内旋・内転、膝の内側偏位、下腿のねじれ、足部アーチの状態が影響します。",
  },
  {
    icon: "→",
    title: "動作中の安定性",
    text: "歩行やスクワットなど、動いたときにアライメントが崩れないかという要素です。静止時にはまっすぐに見えても、動作の中で膝が内側に入る、足部が潰れるといった崩れが起きることがあります。",
  },
];

const steps = [
  [
    "01",
    "ASSESS",
    "見る",
    "立位姿勢、脚のライン、骨盤、膝、足部の状態を確認します。ここでの目的は、印象を持つことではなく、後の触診・評価と照合するための仮説を立てることです。",
  ],
  [
    "02",
    "TOUCH",
    "触る",
    "骨指標や筋の位置を触診し、見た目の印象と実際の構造を一致させます。「見る」段階で立てた仮説が、構造としても成立しているかを確かめる工程です。",
  ],
  [
    "03",
    "MOVE",
    "動かす",
    "関節の可動性、アライメント、動作中の代償を評価します。静止した状態の構造だけでなく、動いたときにどこが崩れるかを確認することで、介入の優先順位が絞り込まれます。",
  ],
  [
    "04",
    "RELEASE",
    "整える",
    "徒手療法によって、可動性や筋膜・関節の制限を改善します。「動かす」までの評価で特定した制限に対して行うため、狙いが定まった介入になります。",
  ],
  [
    "05",
    "RETRAIN",
    "使わせる",
    "エクササイズを通して、整えた位置や動作を再学習させます。整えるだけで終わらせず、その状態を自分の力で維持・再現できるようにする工程です。",
  ],
  [
    "06",
    "REASSESS",
    "再評価する",
    "介入前後で、見た目・動き・本人の感覚がどう変わったかを確認します。ここでの結果が、次回のセッションで「見る」に戻るための情報になります。",
  ],
];

const outcomes = [
  "クライアントの脚を見たとき、最初に確認する場所を決められる",
  "見た目の印象と骨・関節の位置を、触診で照合できる",
  "膝の問題を膝だけで完結させず、足部や股関節との関係から考えられる",
  "評価結果をもとに、徒手療法を選べる",
  "整えた後に必要なエクササイズを選べる",
  "介入前後の変化を再評価できる",
  "なぜその介入が必要なのか、クライアントに説明できる",
  "毎回の指導を行き当たりばったりにせず、一つの型で組み立てられる",
];

const curriculumSummaries = [
  [
    "膝が内に入る、膝下が外に開いて見える、膝のお皿の向きが悪い、太ももの外側が張る、下腿のねじれが強い、といった膝まわりの見え方の問題を扱います。",
    "膝蓋骨や脛骨粗面などの骨指標の触診、膝関節伸展位・屈曲位での下腿回旋、膝蓋骨の位置・傾き、Q-angleやJ-signといった評価を学びます。",
    "外側広筋や腸脛靱帯周囲のリリース、膝蓋骨のモビライゼーションなどの徒手療法と、下腿内旋エクササイズなどのトレーニングを扱います。",
    "大腿骨・膝蓋骨・脛骨の位置関係から、膝の見え方や脚のラインに影響する要素を整理できるようになります。",
  ],
  [
    "足首が硬い、足裏にタコができる、土踏まずが潰れる、膝下が外に張る、ふくらはぎ外側が張る、スクワットでニーインする、足首が詰まる、といった問題を扱います。",
    "内果・外果や舟状骨などの触診、後足部の回内・回外、足関節背屈・底屈可動域、Knee to wall testなどの評価を学びます。",
    "距腿関節後方モビライゼーションや下腿三頭筋リリースなどの徒手療法と、ショートフットやカーフレイズなどのトレーニングを扱います。",
    "足部アーチ、後足部、前足部、足関節背屈制限が、膝下ラインや脚の見え方にどう影響するかを理解できるようになります。",
  ],
  [
    "太ももが内にねじれる、外ももが張る、お尻が使えない、反り腰がある、骨盤が前傾している、股関節が詰まる、膝が内に入る、といった問題を扱います。",
    "上前腸骨棘や大転子などの触診、骨盤前傾・後傾、寛骨回旋、Ely test・FABER testなどの評価を学びます。",
    "腸腰筋や中殿筋のリリースなどの徒手療法と、クラムシェルやHip liftなどのトレーニングを扱います。",
    "骨盤と大腿骨の位置関係から、太もものねじれ、外ももの張り、ニーインに関わる要素を整理できるようになります。",
  ],
  [
    "第1回から第3回で学んだ膝、足部・足関節、骨盤・股関節の知識と技術を統合し、複数の問題が同時に見られるクライアントへの対応を扱います。",
    "詳しいカリキュラムは後日追加予定です。",
    "詳しいカリキュラムは後日追加予定です。",
    "詳しいカリキュラムは後日追加予定です。",
  ],
];

function Section({
  children,
  dark = false,
  id,
}: {
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`${styles.section} ${dark ? styles.dark : ""}`}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

function Curriculum() {
  return (
    <Section id="curriculum">
      <p className={styles.kicker}>CURRICULUM</p>
      <h2>詳細なカリキュラム</h2>
      <p className={styles.lead}>
        各回の詳しい内容は、タップしてご確認いただけます。
      </p>
      <Accordion>
        {seminarData.curriculum.map((item, idx) => (
          <AccordionItem
            hideIcon
            key={item.session}
            title={
              <div className={styles.curriculumTitle}>
                <span>
                  第{item.session}回｜{item.area}
                </span>
                <strong>{item.title}</strong>
                <small>開催日：{item.date}</small>
                {"comingSoon" in item && item.comingSoon && <em>近日公開</em>}
                <div className={styles.summaryGrid}>
                  {curriculumSummaries[idx].map((text, i) => (
                    <div key={i}>
                      <strong>
                        {
                          [
                            "① この回で扱う問題",
                            "② どのような評価を学ぶか",
                            "③ どのような徒手療法・エクササイズを扱うか",
                            "④ この回の受講後に何を判断できるようになるか",
                          ][i]
                        }
                      </strong>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
                <small className={styles.detailPrompt}>詳しい内容を見る</small>
              </div>
            }
          >
            {"comingSoon" in item && item.comingSoon ? (
              <p className={styles.notice}>
                詳しいカリキュラムは後日追加予定です。
              </p>
            ) : (
              <div className={styles.detailGrid}>
                {[
                  ["座学", item.lecture],
                  ["評価・触診", item.assessment],
                  ["徒手療法", item.manual],
                  ["トレーニング・エクササイズ", item.exercise],
                ].map(([title, list]) => (
                  <div key={title as string}>
                    <h4>【{title as string}】</h4>
                    <p>{(list as readonly string[]).join("／")}</p>
                  </div>
                ))}
              </div>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <p className={styles.archiveLine}>
        全4回の当日収録アーカイブが提供され、欠席した回も後から視聴可能です。
      </p>
    </Section>
  );
}

export default function LandingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            src="/images/bikyaku-main-visual.jpg"
            alt="美脚指導のテンプレート。評価・徒手療法・エクササイズをつなげる美脚プログラミングの設計図。講師：渡辺慶輔"
            width={2048}
            height={1152}
            priority
            sizes="(max-width: 768px) 100vw, 1120px"
            className={styles.mainVisual}
          />
          <div className={styles.heroMeta}>
            <div className={styles.chips}>
              {["全4回", "各回約5時間", "定員10名", "東京開催", "対面実技"].map(
                (x) => (
                  <span key={x}>◇ {x}</span>
                ),
              )}
            </div>
            <p className={styles.startBadge}>
              募集開始：2026年7月29日（水）10:00
            </p>
          </div>
        </div>
        <div className={styles.heroCta}>
          <SalesCta placement="hero" />
        </div>
      </section>

      <Section>
        <p className={styles.kicker}>PROBLEM</p>
        <h2 className={styles.twoLineHeading}>
          <span>そのアプローチ、変化は出ても</span>
          <span>なぜ変わったかを説明できますか。</span>
        </h2>
        <div className={styles.problemGrid}>
          {problems.map((p) => (
            <article key={p.title}>
              <h3>{p.title}</h3>
              <p>原因は、</p>
              <ul>
                {p.causes.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className={styles.prose}>
          <p>
            どの可能性も、実在します。そして、どれか一つに決めつけて介入すれば、その場では変化が出ることもあります。
          </p>
          <p>
            <strong>
              問題は、その介入が「鑑別した結果」なのか、「経験的に選んだ一つの仮説」なのかということです。
            </strong>
          </p>
          <p>
            複数の候補がある中で、どれを優先して評価し、どの順番で除外していくか。この基準を持たないまま介入を選ぶと、たまたま当たった介入と、外れた介入が、同じ手応えで並んでしまいます。
          </p>
          <p>
            その場で脚のラインが変わって見えても、次のセッションで同じ問いが残ります。
          </p>
          <p>
            このクライアントの場合、なぜその候補を選び、なぜ他の候補を除外したのか。
          </p>
          <p>
            再評価では、どの所見を見れば、選んだ介入が正しかったと判断できるのか。
          </p>
          <p>
            これらに答えを持てないまま指導を重ねると、経験と勘に依存した判断になり、再現性のある指導へとつながりません。
          </p>
        </div>
      </Section>

      <Section dark>
        <p className={styles.kicker}>REFRAME</p>
        <h2 className={styles.twoLineHeading}>
          <span>足りないのは、手技や</span>
          <span>エクササイズの数ではありません。</span>
        </h2>
        <div className={styles.prose}>
          <p>
            多くの指導者は、すでに部位別の知識と方法を学んでいます。膝の評価、足部の触診、骨盤のアライメント。それぞれの分野で、有効な手技やエクササイズを知っている方も少なくないはずです。
          </p>
          <p>
            しかし、実際のクライアントの脚には、複数の問題が同時に起きています。膝が内側に入っている人は、足部の回内も、骨盤の前傾も、同時に持っていることが珍しくありません。
          </p>
          <p>ここで一つ、確認しておきたいことがあります。</p>
          <blockquote className={styles.twoLineStatement}>
            <span>見た目に現れている場所が</span>
            <span>原因とは限らない。</span>
          </blockquote>
          <p>
            外ももの張りは、外ももだけの問題ではなく、足部の回内や骨盤の前傾が、太もものねじれとして外側に現れている結果かもしれません。膝の内側偏位は、膝関節だけの問題ではなく、足関節の背屈制限が引き起こしている代償かもしれません。
          </p>
          <p>
            膝、足部、骨盤を別々の科目として学び、別々に対処していると、目の前で最も目立つ場所へ、その都度介入することになります。それは、原因への介入ではなく、症状への対処になりやすいということです。
          </p>
          <p>
            必要なのは、新しい手技でも、新しいエクササイズの数でもありません。
          </p>
          <p>
            評価した結果を、「どこから、どの順番で介入するか」という判断に変える型です。
          </p>
          <p>
            この型があれば、膝・足部・骨盤という別々の知識を、目の前の一人のクライアントに対して、一つの流れとして使えるようになります。
          </p>
        </div>
      </Section>

      <Section>
        <p className={styles.kicker}>DEFINITION</p>
        <h2 className={styles.twoLineHeading}>
          <span>「美脚」を</span>
          <span>細さだけで語らない。</span>
        </h2>
        <div className={styles.prose}>
          <p>本セミナーでは、美脚を次のように定義します。</p>
          <blockquote>細く、真っ直ぐに見え、動作中も崩れにくい脚。</blockquote>
          <p>この定義には、3つの要素が含まれています。</p>
        </div>
        <div className={styles.cardGrid}>
          {definitions.map((d) => (
            <article key={d.title}>
              <span className={styles.icon}>{d.icon}</span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.prose}>
          <p>
            見た目だけを整えても、構造上の崩れが残っていれば、動作の中でまた崩れます。構造だけを評価しても、実際の見た目や動きの変化にはつながりません。動作だけを見ても、なぜその崩れが起きているのかは分かりません。
          </p>
          <p>3つの要素をつなげて評価することが、美脚指導の出発点になります。</p>
        </div>
      </Section>

      <Section dark>
        <p className={styles.kicker}>SOLUTION</p>
        <h2>美脚指導のテンプレート</h2>
        <div className={styles.prose}>
          <p>
            ここでいう「テンプレート」とは、すべてのクライアントに同じ施術やエクササイズを当てはめるマニュアルではありません。
          </p>
          <p>
            クライアントごとの状態を評価し、何を確認し、何から介入し、何を再評価するかを決めるための、思考と実践の順番です。
          </p>
          <p>
            膝が内側に入っているクライアントが2人いても、原因が同じとは限りません。ひとりは足部の回内が主な要因かもしれませんし、もうひとりは股関節の内旋が主な要因かもしれません。
          </p>
          <p>
            「テンプレート」が固定するのは、答えではありません。答えにたどり着くための、確認する順番です。
          </p>
          <p>この順番を、次の6ステップとして体系化しています。</p>
        </div>
        <div className={styles.compare}>
          <div>
            <b>× マニュアル</b>
            <p>全員に同じ答えを当てはめる</p>
          </div>
          <div>
            <b>○ 判断の順番</b>
            <p>一人ひとりの答えへたどり着く</p>
          </div>
        </div>
      </Section>

      <Section>
        <p className={styles.kicker}>SIX STEPS</p>
        <h2 className={styles.twoLineHeading}>
          <span>感覚的なアプローチから脱却する</span>
          <span>6つのステップ</span>
        </h2>
        <div className={styles.steps}>
          {steps.map((s) => (
            <article key={s[0]}>
              <span>
                {s[0]} | {s[1]}
              </span>
              <h3>{s[2]}</h3>
              <p>{s[3]}</p>
            </article>
          ))}
        </div>
        <div className={styles.prose}>
          <p>
            6つのステップは、一つ前の結果をもとに次を判断する、一続きの流れです。
          </p>
          <blockquote>
            正解の手技を暗記するのではなく、正解へたどり着くための順番を持つこと。それが、このテンプレートが目指すものです。
          </blockquote>
        </div>
        <SalesCta placement="steps" />
      </Section>

      <Section dark>
        <p className={styles.kicker}>OUTCOMES</p>
        <h2 className={styles.twoLineHeading}>
          <span>「わかった」で終わらせず</span>
          <span>翌日の現場が変わる。</span>
        </h2>
        <ul className={styles.checkList}>
          {outcomes.map((x) => (
            <li key={x}>✓ {x}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <p className={styles.kicker}>INSTRUCTOR</p>
        <h2>二つの視点を、美脚指導という一つのテーマへ。</h2>
        <div className={styles.instructor}>
          <Image
            src={seminarData.instructor.imageUrl}
            alt={seminarData.instructor.imageAlt}
            width={670}
            height={420}
          />
          <div className={styles.prose}>
            <h3>渡辺慶輔</h3>
            <p className={styles.credentials}>
              理学療法士／日本スポーツ協会公認アスレティックトレーナー
            </p>
            <p>
              理学療法士としての視点は、骨・関節・筋肉といった構造を捉える視点です。アスレティックトレーナーとしての視点は、動作の中でその構造がどう機能するかを捉える視点です。
            </p>
            <p>
              美脚指導では、この二つの視点が同時に必要になります。構造だけを見ても、動作の中での崩れは説明できません。動作だけを見ても、なぜその崩れが起きているのかという構造的な理由にはたどり着けません。
            </p>
            <p>
              渡辺は、理学療法士とアスレティックトレーナーのダブルライセンスを生かし、パーソナルトレーナーとして活動しています。このダブルライセンスを持つ指導者は、全国でも
              <strong>約300人程度</strong>とされる希少な存在です。
            </p>
            <p>
              理学療法士養成学校の非常勤講師や、大手トレーナー向けオンラインサロンでの講師経験を持ち、現在は美脚指導に特化したトレーナー養成講座を開講し、トレーナー育成にも力を入れています。
            </p>
            <p>
              構造と動作、二つの視点を一人の講師が持っているからこそ、評価・徒手療法・エクササイズ・再評価という一連の流れを、分断させずに伝えることができます。
            </p>
          </div>
        </div>
      </Section>

      <Section dark>
        <p className={styles.kicker}>4 DAYS</p>
        <h2 className={styles.twoLineHeading}>
          <span>4つの講座ではなく</span>
          <span>一つの判断力を育てる4日間。</span>
        </h2>
        <div className={styles.prose}>
          <p>
            本セミナーは、膝・足部・骨盤という独立した3つのテーマを、それぞれ別に学ぶ講座ではありません。
          </p>
          <p>
            まず第1回から第3回で、各部位の構造・評価・介入を、一つずつ正確に学びます。膝は膝として、足部は足部として、骨盤は骨盤として、それぞれの見方を丁寧に身につける段階です。
          </p>
          <p>
            そのうえで、第4回では、これらをつなげます。複数の部位に同時に問題が見られるクライアントに対して、動作評価から問題を整理し、どこから介入するべきかという優先順位を判断する力を養います。
          </p>
          <p>
            部位ごとに学んだ知識は、そのままでは点のままです。第4回を通して、その点を、現場で使える一つの流れへと統合します。
          </p>
          <p>
            4回という回数は、内容を分割するためではなく、一人の指導者の中に、段階を踏んで判断力を育てるための構成です。
          </p>
        </div>
        <div className={styles.phases}>
          {[
            ["PHASE 01｜KNEE", "膝"],
            ["PHASE 02｜FOOT & ANKLE", "足部・足関節"],
            ["PHASE 03｜PELVIS & HIP", "骨盤・股関節"],
            ["PHASE 04｜INTEGRATION", "統合"],
          ].map((x) => (
            <div key={x[0]}>
              <small>{x[0]}</small>
              <strong>{x[1]}</strong>
            </div>
          ))}
        </div>
      </Section>

      <Curriculum />
      <div className={styles.midCta}>
        <SalesCta placement="curriculum" />
      </div>

      <Section dark>
        <p className={styles.kicker}>IN PERSON</p>
        <h2>
          動画では伝わらない感覚を、
          <br />
          少人数で確実に身につける。
        </h2>
        <div className={styles.prose}>
          <p>
            触診する位置、触れる圧、関節を動かしたときの感覚、代償動作の見分け方、介入前後の小さな変化。これらは、動画を見るだけでは身につきにくいものです。
          </p>
          <p>
            実際に自分の手で骨指標に触れ、関節の動きを確かめ、評価と介入を繰り返す。講師の手の位置や力加減を間近で見て、自分の評価が合っているかを確認する。介入後の変化を、自分の目と手で再評価する。
          </p>
          <p>こうした実践は、定員10名という少人数だからこそ可能になります。</p>
          <p>
            本セミナーは、全4回・各回約5時間（合計約20時間）の対面実技を軸に構成されています。
          </p>
        </div>
        <div className={styles.senseGrid}>
          {["触診", "圧", "関節の感覚", "代償動作", "小さな変化"].map((x) => (
            <span key={x}>◇ {x}</span>
          ))}
        </div>
        <p className={styles.capacity}>定員10名</p>
      </Section>

      <Section>
        <p className={styles.kicker}>PRE-RECORDED</p>
        <h2>本編前に視聴できる、事前収録講義2本。</h2>
        <p className={styles.lead}>
          申込後、本編開催前に視聴いただける限定講義を2本ご用意しています。基礎知識を整理した状態で、対面実技に臨むことができます。
        </p>
        <div className={styles.cardGrid}>
          <article>
            <h3>限定講義1｜美脚の定義</h3>
            <p>
              美脚とは、単に脚が細い状態を指すものではありません。本セミナーでは「細く、真っ直ぐに見え、動作中も崩れにくい脚」として定義します。美脚に必要な3要素（細さ・真っ直ぐさ・動作中の安定性）、美脚を崩す代表的な要因、脚だけを見ても美脚が作れない理由、評価の優先順位について扱います。
            </p>
          </article>
          <article>
            <h3>限定講義2｜筋膜解剖と徒手療法の効果</h3>
            <p>
              徒手療法を何となく行うのではなく、「どの組織に対して、何を目的に行うのか」を整理します。筋膜とは何か、筋膜の滑走性、徒手療法で変化しやすいもの、徒手療法だけでは変化が定着しにくい理由、徒手療法とエクササイズをセットにする必要性について扱います。
            </p>
          </article>
        </div>
        <p className={styles.conclusion}>
          事前に基礎知識を整理しておくことで、対面実技の時間を、理解のためではなく、実践のために使いやすくなります。
        </p>
      </Section>

      <Section dark>
        <p className={styles.kicker}>ARCHIVE</p>
        <h2 className={styles.twoLineHeading}>
          <span>欠席した回も</span>
          <span>アーカイブでご視聴いただけます。</span>
        </h2>
        <div className={styles.prose}>
          <p>
            全4回の当日収録アーカイブを提供します。欠席した回は、アーカイブでご視聴いただけます。
          </p>
          <p>
            視聴期限はありません。期間を限定せず、何度でもご視聴いただけます。
          </p>
          <aside>
            ただし、本セミナーは対面の実技セミナーが主軸です。アーカイブはあくまで補助手段としてご用意しています。触診の感覚や、講師の手の位置・力加減の確認は、対面でしか得られません。可能な限り、対面でのご参加をおすすめします。
          </aside>
        </div>
      </Section>

      <Section>
        <p className={styles.kicker}>OVERVIEW</p>
        <h2>開催概要</h2>
        <dl className={styles.overview}>
          {[
            ["セミナー名", "美脚指導のテンプレート"],
            ["形式", "全4回・東京会場での対面実技セミナー"],
            ["1回の時間", "各回 約5時間"],
            ["会場", "東京都内（詳細は申込者へご案内）"],
            ["定員", "10名"],
            ["募集期間", "2026年7月29日（水）10:00 〜 8月2日（日）23:59"],
            ["開催日", "各回 日程調整中（申込者へ別途ご案内）"],
            ["講師", "渡辺慶輔"],
          ].map((x) => (
            <div key={x[0]}>
              <dt>{x[0]}</dt>
              <dd>{x[1]}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section dark id="pricing">
        <p className={styles.kicker}>PRICING</p>
        <h2>受講料</h2>
        <div className={styles.prose}>
          <p>受講料には、次の内容が含まれています。</p>
          <ul>
            <li>・全4回の対面実技（各回約5時間・合計約20時間）</li>
            <li>・申込者限定の事前講義動画（2本）</li>
            <li>・全4回の収録アーカイブ（視聴期限なし）</li>
          </ul>
          <p>
            全4回セットのみのご提供です（単発受講なし）。お支払いはクレジットカード一括払いのみです。
          </p>
        </div>
        <div className={styles.priceGrid}>
          <article className={styles.generalPriceCard}>
            <h3>一般価格</h3>
            <strong>66,000円（税込）</strong>
            <p>7月29日（水）10:00募集開始</p>
          </article>
          <article className={styles.studioPriceCard}>
            <span className={styles.studioBadge}>一般価格より22,000円お得</span>
            <h3>BAL STUDIO会員価格</h3>
            <strong>44,000円（税込）</strong>
            <p>7月29日（水）10:00募集開始</p>
            <small>
              BAL
              STUDIO会員価格でお申し込みの場合、申込情報と会員登録情報を確認させていただきます。
            </small>
            <a
              className={styles.studioJoinLink}
              href={seminarData.contactLine}
              target="_blank"
              rel="noopener noreferrer"
            >
              BAL STUDIO入会についてLINEで相談する
            </a>
          </article>
        </div>
        <SalesCta placement="pricing" />
      </Section>

      <Section>
        <p className={styles.kicker}>BEFORE APPLYING</p>
        <h2>お申込みの前に</h2>
        <div className={styles.cardGrid}>
          <article>
            <h3>お申込みについて</h3>
            <p>
              全4回セットのみのご提供です。単発受講はありません。お支払いはクレジットカード一括払いのみで、分割払いには対応していません。定員10名に達し次第、募集を終了します。
            </p>
          </article>
          <article>
            <h3>欠席・キャンセルについて</h3>
            <p>
              欠席された回は、アーカイブでご視聴いただけます。決済完了後、お客様都合によるキャンセル・返金はできません。お申込み前に、必ず内容をご確認ください。
            </p>
          </article>
          <article>
            <h3>会場・持ち物について</h3>
            <p>
              会場の詳細、および服装や持ち物の案内は、開催前に申込者へ別途ご案内します。
            </p>
          </article>
        </div>
      </Section>

      <Section dark id="faq">
        <p className={styles.kicker}>FAQ</p>
        <h2>よくあるご質問</h2>
        <Accordion>
          {seminarData.faq.map((f, i) => (
            <AccordionItem
              key={f.question}
              title={
                i === 2
                  ? "全日程に参加できない場合はどうなりますか？"
                  : f.question
              }
            >
              <p className={styles.faqAnswer}>{f.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
        <div className={styles.contact}>
          <p>解決しない場合は、お気軽にお問い合わせください。</p>
          <a href={`mailto:${seminarData.contactEmail}`}>
            メールで問い合わせる
          </a>
          <a
            href={seminarData.contactLine}
            target="_blank"
            rel="noopener noreferrer"
          >
            BAL LINE公式へ
          </a>
        </div>
      </Section>

      <section className={styles.final}>
        <div className={styles.container}>
          <p className={styles.kicker}>FINAL</p>
          <h2 className={styles.twoLineHeading}>
            <span>張っている場所を緩め続けるか</span>
            <span>説明できる指導を選ぶか。</span>
          </h2>
          <div className={styles.prose}>
            <p>
              膝が内側に入っているから、股関節を整える。外ももが張っているから、腸脛靱帯まわりにアプローチする。足関節が硬いから、下腿三頭筋を緩める。
            </p>
            <p>
              これらの判断を続けることは、間違いではありません。候補の一つとして、今後も現場で選ぶ場面はあるはずです。
            </p>
            <p>
              一方で、膝・足部・骨盤をつなげて評価し、複数ある候補の中から、なぜその介入を選んだのかを説明できる指導には、もう一段階、違う種類の再現性があります。
            </p>
            <p>この4日間で増やすのは、手技の数ではありません。</p>
            <blockquote>
              目の前の脚に対して、介入の順番を決めるための型です。
            </blockquote>
          </div>
          <div className={styles.finalMeta}>
            <FinalInstructorImage />
            <div>
              <h3>美脚指導のテンプレート｜全4回実技セミナー</h3>
              <p>定員10名・先着順</p>
              <p>募集開始：2026年7月29日（水）10:00</p>
            </div>
          </div>
          <SalesCta placement="final" />
        </div>
      </section>
    </>
  );
}
