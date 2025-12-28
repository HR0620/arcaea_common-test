export const upcoming = {
    exists: true,
    title: "Arcaea共通テスト",
    number: "第1回",
    date: "2026年1月10日",
    schedule: "実施予定",
    pdfLink: null,  // Set to PDF path when available
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdbwH0C1dw6ubCxotYqr0XpXJqIVglmb9HaDA46SOMcvZB5KQ/viewform?usp=header",  // Set to Google Form URL when available
    // JST datetime for countdown (YYYY, MM-1, DD, HH, MM, SS)
    examDateTime: new Date(2026, 0, 10, 12, 0, 0)  // Jan 10, 2026 12:00 JST
};

export const exams = [
    {
        id: "pre1",
        number: "第1回",
        title: "Arcaea共通テスト運用テスト",
        date: "2025年12月7日実施",
        description: "共通テスト本番に向けた試行調査．",
        links: {
            question: "../../public/assets/pdfs/pre-test_01_q.pdf",
            answer: "#",
            form: "https://docs.google.com/forms/d/e/1FAIpQLScAZUsH_C3rxcGZOD08_H70MwCApcLSSthjBH04r_jDqks4iQ/viewform?usp=sharing&ouid=112062388498513339062"  // Google Form link (set to actual URL when available)
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
    },
];
