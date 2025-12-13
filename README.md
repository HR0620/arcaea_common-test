# Arcaea Common Test (Arcaea共通テスト) 公式サイト

Arcaeaの非公式ファン企画「Arcaea共通テスト」の公式サイトリポジトリです。
本サイトは、大学入試センター試験や共通テストのウェブサイトをオマージュしたデザインを採用し、受験者に「試験らしさ」を感じさせるシンプルで信頼感のあるUIを提供します。

## ⚠️ 免責事項 (Disclaimer)

本企画および本サイトは、音楽ゲーム『Arcaea』のファンによる非公式活動であり、開発元の **lowiro limited** およびその関連企業・団体とは一切関係ありません。
Arcaeaに関する名称・画像・その他知的財産権は、各権利者に帰属します。

## 📂 ディレクトリ構成

```
/
├── index.html        # エントリーポイント (SPAコンテナ)
├── public/           # 静的リソース
│   └── assets/       # 画像・PDF等
├── src/
│   ├── styles/
│   │   └── style.css # サイト全体のスタイル定義
│   └── js/
│       ├── main.js   # ルーティング・初期化ロジック
│       ├── views/    # ページ描画 (レンダリング) ロジック
│       └── data/     # サイト内コンテンツデータ
│           ├── content.js
│           ├── exams.js
│           ├── news.js
│           └── qa.js
├── story/            # Arcaeaのストーリー集
├── License           # ライセンス
└── README.md         # 本ファイル
```

## 🛠 開発・更新方法

本サイトは純粋なHTML/CSS/JS (Vanilla JS) で構築されており、ビルドツールは不要です。

### コンテンツの更新
サイト内のテキスト（お知らせ、試験情報、Q&Aなど）は `src/js/data/` ディレクトリ内の各モジュールで管理されています。
目的のファイルを編集するだけで、HTMLを直接触ることなく内容を更新できます。

- **お知らせ**: `src/js/data/news.js` の `news` 配列に追加
- **試験情報**: `src/js/data/exams.js` の `exams`, `upcoming` オブジェクトを編集
- **Q&A**: `src/js/data/qa.js` の `qa` 配列を編集
- **クレジット**: `src/js/data/content.js` の `content.credits` 文字列を編集

### 新しいページの追加
1. `src/js/data/content.js` の `content` オブジェクトに新しいキーとHTMLを追加します。
2. `index.html` のナビゲーション (`nav-links`) に `data-link="キー名"` を持つリンクを追加します。

## 📄 ライセンス

本サイトは Arcaea の非公式ファン企画であり，lowiro limited とは一切関係ありません．
Arcaea に関する名称・画像・その他知的財産は各権利者に帰属します．
本サイトのオリジナル部分（文章・問題文・デザイン等）は，出典を明記したうえで，
非営利目的に限り自由に引用・共有いただけます（CC BY-NC 4.0）。

