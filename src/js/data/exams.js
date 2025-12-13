export const upcoming = {
    exists: true,
    title: "第1回 Arcaea共通テスト",
    date: "2026年1月10日",
    schedule: "実施予定"
};

export const exams = [
    {
        id: "exam1",
        title: "第1回 Arcaea共通テスト",
        date: "2026年1月10日実施予定",
        description: "",
        links: {
            question: "#",
            answer: "#"
        },
        stats: {
            statsDate: "集計後掲載予定",
            takers: "--",
            average: "--",
            stdDev: "--",
            min: "--",
            median: "--",
            max: "--"
        }
    },
    {
        id: "pre1",
        title: "第1回 Arcaea共通テスト運用テスト",
        date: "2025年12月7日実施",
        description: "共通テスト本番に向けた試行調査．",
        links: {
            question: "public/assets/pdfs/pre-test_01_q.pdf",
            answer: "#"
        },
        stats: {
            statsDate: "2025.12.10時点",
            takers: 17,
            average: 75,
            stdDev: 14.8,
            min: 75,
            median: 75,
            max: 100
        }
    }
];
