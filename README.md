# Single Page Portfolio (Resume)

本專案是一個單頁式個人簡歷網站（index.html），包含：
- 個人資訊（姓名/照片/聯絡方式，Email 必填）
- Skills（A/B Test：進度條版 vs 標籤雲版）
- Experience（時間軸至少 3 項：國中/高中/大一）
- Projects（卡片式作品集至少 3 件）
- 響應式設計（< 600px 手機正常顯示）
- 互動與動畫（平滑捲動 + hover/過場效果）

## Live Demo (GitHub Pages)
- 請在完成部署後，把網址貼在這裡：
- https://drunkandy.github.io/calculator-app/

---

## Git / GitHub 驗收記錄（老師會看 history / PR）

### 分支開發與 Pull Request
- A 版（Skills 進度條）：在 `feature/skills-bars` 完成，PR 合併回 main ✅
- B 版（Skills 標籤雲）：在 `feature/skills-tags` 完成，PR 未合併（保留/關閉）✅

我最後採用的版本：A（進度條版）  
未採用原因（B 版）：（例）標籤雲雖然好看，但不易呈現熟練度差異，因此選擇進度條更直觀。

### git revert 練習（不可用 reset）
我在這次作業中使用 `git revert` 回復某個 commit，原因是：  
（例）某次樣式修改導致對比不足、閱讀性變差，因此用 revert 安全地回復到前一個穩定版本。
TEMP: revert practice