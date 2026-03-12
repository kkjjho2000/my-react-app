import "./App.css";

type ChainBlock = {
  stage: string;
  items: string[];
};

const chainData: ChainBlock[] = [
  {
    stage: "上游：核心材料與設備",
    items: ["光纖預製棒", "半導體雷射晶片", "光學鍍膜材料", "精密封裝設備"],
  },
  {
    stage: "中游：模組與系統整合",
    items: ["光收發模組", "高速 DSP/Driver", "光放大器", "光通訊子系統"],
  },
  {
    stage: "下游：應用市場",
    items: ["AI 資料中心", "電信骨幹網路", "企業私有雲", "海纜與長距傳輸"],
  },
];

const keyTrends = [
  "800G/1.6T 光模組需求快速上升",
  "AI 訓練集群帶動高速互連投資",
  "矽光子與共封裝光學（CPO）成為關鍵路線",
  "供應鏈由單點供應走向多來源策略",
];

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Dr. Flyout · 產業觀察</p>
        <h1>Optical Communication Supply Chain Map 2026</h1>
        <p className="subtitle">
          以「材料 → 模組 → 應用」三層結構，快速理解 2026 光通訊產業鏈重點。
        </p>
      </header>

      <section className="card overview">
        <h2>產業鏈總覽</h2>
        <div className="chain-grid">
          {chainData.map((block) => (
            <article className="chain-column" key={block.stage}>
              <h3>{block.stage}</h3>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card map-panel">
        <h2>Supply Chain Map</h2>
        <div className="map-flow" role="img" aria-label="optical communication supply chain map">
          <div className="node">材料供應商</div>
          <span className="arrow">→</span>
          <div className="node">晶片/元件製造</div>
          <span className="arrow">→</span>
          <div className="node">模組封裝</div>
          <span className="arrow">→</span>
          <div className="node">系統整合商</div>
          <span className="arrow">→</span>
          <div className="node">雲端與電信客戶</div>
        </div>
      </section>

      <section className="card trends">
        <h2>2026 關鍵趨勢</h2>
        <ul>
          {keyTrends.map((trend) => (
            <li key={trend}>{trend}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
