# LGIT (LG Innotek, KRX 011070) 財報研究管線 — NOTES

## Phase 0 — 環境驗證（2026-07-28）

**結果：未通過。已停下，未進入 Phase 1。**

### 檢查項目

| 項目 | 狀態 | 說明 |
|---|---|---|
| `OPENDART_API_KEY` 環境變數 | ❌ 不存在 | 在本次 remote session 的環境變數中查無 `OPENDART_API_KEY`（`env \| grep -i opendart` 無結果）。 |
| opendart MCP 是否已掛載 | ❌ 未掛載 | 檢查了本 session 可用的 MCP connector 清單（`ListConnectors`），僅有 Gmail、Google Calendar、Google Drive、Heptabase，沒有 opendart 相關項目。deferred tool 清單中也沒有任何 `opendart` 或 DART 相關工具。 |
| `search_disclosure` / corpCode.xml 查 corp_code | ⏸ 未執行 | 因無 opendart MCP 可用，無法查詢，未填入（依規則 1 禁止用估計值/佔位數字填補，此欄位刻意留空）。 |
| 最小 API 呼叫（기업개황） | ⏸ 未執行 | 同上，無金鑰無 MCP，無法測試額度與有效性。 |

### 待辦（需要使用者處理）

1. **申請 OPENDART API Key**
   前往 https://opendart.fss.or.kr → 인증키 신청（首頁右上角「인증키 신청/관리」）→ 註冊帳號並申請開發者金鑰。取得金鑰後，需將其設為本 session（或後續 session）可讀取的環境變數 `OPENDART_API_KEY`。

2. **掛載 opendart MCP**
   本 remote session 為 GitHub 自動化 session，MCP server 設定無法由 Claude 在對話中自行執行 `claude mcp add`（該指令是給本機 Claude Code CLI 用的）。若要在本機環境使用，指令為：
   ```bash
   claude mcp add opendart -- uvx opendart-mcp
   ```
   若要在此 remote/web 環境中使用，需透過該環境的 MCP / connector 設定介面加入 opendart MCP server（目前 `ListConnectors` 查無此 connector）。

### 額外備註：程式碼倉庫脈絡

本次任務被指派到 `kkjjho2000/my-react-app` 這個 repo（一個既有的 React + Vite + Tailwind「cost-dashboard」專案），與 LG Innotek 財報研究管線是完全不同性質的專案。已依指示在此 repo 下建立 `lgit-research/` 工作目錄骨架（`data/raw`、`data/parsed`、`data/validated`、`scripts`、`artifacts`），但尚未寫入任何資料。是否要在此 repo 內長期發展這條管線、或改用獨立 repo，建議與使用者確認。

## Phase 1–5

未開始。Phase 0 未通過前依規則 2（禁止跳過驗證）不得進入。
