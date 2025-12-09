export const content = {
    guidelines: `
        <div class="text-content">
            <h2>注意事項・出題方針</h2>
            
            <div class="guideline-block">
                <h3>注意事項</h3>
                
                <div class="policy-section">
                    <h4>試験の趣旨・目的</h4>
                    <ul>
                        <li>本試験は，Arcaeaという作品を題材としつつ，高等学校段階で培われる思考力・理解力・発想力を多角的に評価することを目的とする．</li>
                        <li>特定の知識量や暗記量の多寡を直接測ることを目的とするものではなく，問題文から条件を読み取り，自ら考察する過程を重視する．</li>
                    </ul>
                </div>

                <div class="policy-section">
                    <h4>解答および閲覧に関する基本方針</h4>
                    <ul>
                        <li>解答は，指定されたオンラインフォームを通じて行う形式とし，紙媒体による答案提出は想定しない．</li>
                        <li>試験開始後から集計終了後まで，問題の具体的内容や解法に関する情報を，SNS・動画投稿サイト・ブログ等で発信することを控えてほしい．感想等についてはこの限りではなく，歓迎する．</li>
                    </ul>
                </div>

                <div class="policy-section">
                    <h4>試験中に利用できる情報について</h4>
                    <ul>
                        <li>回答目的で生成AIを使用することは禁止する．</li>
                        <li>一方で，用語の定義や背景となる一般的事項を確認する目的に限り，検索エンジンを用いることやオンライン資料等を参照することは妨げない．</li>
                        <li>ただし，検索により得た情報をそのまま回答として用いるのではなく，あくまで自身の判断と理解に基づいて回答すること．</li>
                    </ul>
                </div>

                <div class="policy-section">
                    <h4>その他</h4>
                    <ul>
                        <li>本試験は非公式の創作試験であり，lowiro社および公式大会・公式企画とは一切関係しない．</li>
                    </ul>
                </div>
            </div>

            <hr class="section-divider">

            <div class="guideline-block">
                <h3>出題方針</h3>
                <div class="policy-section">
                    <h4>Arcaea</h4>
                    <p>
                        Arcaea領域では，譜面定数・楽曲情報・システム仕様といった表層的な知識のみを問うことは主目的としない．
                        ゲーム内の仕組みや設計思想，世界観に基づく情報をもとに，条件整理や推論を行う問題を中心に出題する．
                        なお，出題は原則として特定のバージョン時点の公開情報に基づいて行われる．
                    </p>
                </div>
                <div class="policy-section">
                    <h4>文科</h4>
                    <p>
                        後に掲載予定
                    </p>
                </div>
                <div class="policy-section">
                    <h4>理科</h4>
                    <p>
                        後に掲載予定
                    </p>
                </div>
            </div>
        </div>
    `
};


export const upcoming = {
    exists: true,
    title: "第1回 Arcaea共通テスト",
    date: "2026年1月17日",
    schedule: "第1回実施予定"
};

export const exams = [
    {
        id: "exam1",
        title: "第1回 共通テスト",
        date: "2025年1月実施予定",
        description: "",
        links: {
            question: "試験開始時掲載予定",
            answer: "試験開始時掲載予定"
        },
        stats: {
            takers: "集計後掲載",
            average: "集計後掲載",
            stdDev: "集計後掲載",
            min: "集計後掲載",
            median: "集計後掲載",
            max: "集計後掲載"
        }
    },
    {
        id: "pre1",
        title: "第1回 Arcaea共通テスト運用テスト",
        date: "2025年実施",
        description: "共通テスト本番に向けた試行調査。",
        links: {
            question: "#",
            answer: "#"
        },
        stats: {
            takers: 14,
            average: 83.8,
            stdDev: 12.3,
            min: 75,
            median: 75,
            max: 100
        }
    }
];

export const news = [
    { date: "2025.12.10", text: "注意事項・出題方針を改訂しました．" },
    { date: "2025.12.09", text: "公式サイトをリニューアルオープンしました．" },
    { date: "2025.12.07", text: "第1回Arcaea共通テスト運用テストを実施しました．" },
    { date: "2025.09.22", text: "2026年度試験の実施要項を掲載しました．" },
    { date: "2025.09.18", text: "公式サイトをオープンしました．" }
];
