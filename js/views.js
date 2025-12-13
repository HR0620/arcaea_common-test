import { content, exams, news, upcoming, qa } from './data.js';

export class ViewRenderer {
    renderHome() {
        // Construct Upcoming Card HTML
        let upcomingHTML = `<p class="empty-state">現在，実施中の試験はありません．</p>`;
        if (upcoming && upcoming.exists) {
            upcomingHTML = `
                <div class="upcoming-card">
                    <div class="upcoming-content">
                        <span class="upcoming-label">NEXT EXAMINATION</span>
                        <h3 class="upcoming-title">${upcoming.title}</h3>
                        <div class="upcoming-date-box">
                            <span class="date-main">${upcoming.date}</span>
                            <span class="date-sub">${upcoming.schedule}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <section class="hero fade-in">
                <h1>Arcaea共通テスト</h1>
                <p>記憶の彼方に，知識を問う．</p>
            </section>

            <section id="news" class="fade-in">
                <div class="section-header">
                    <h2>NEWS</h2>
                    <span class="decoration-line"></span>
                </div>
                <ul class="news-list">
                    ${news.map(item => `
                        <li>
                            <span class="date">${item.date}</span>
                            <span class="text">${item.text}</span>
                        </li>
                    `).join('')}
                </ul>
            </section>

            <section id="ongoing" class="fade-in">
                <div class="section-header">
                    <h2>実施中の試験</h2>
                    <span class="decoration-line"></span>
                </div>
                ${upcomingHTML}
            </section>

            <section id="past-exams" class="fade-in">
                <div class="section-header">
                    <h2>過去の試験問題</h2>
                    <span class="decoration-line"></span>
                </div>
                <div class="exam-list">
                    ${exams.map(exam => this.renderExamCard(exam)).join('')}
                </div>
            </section>

            <section id="qa" class="fade-in">
                <div class="section-header">
                    <h2>Q&A</h2>
                    <span class="decoration-line"></span>
                </div>
                <div class="qa-container">
                    ${(qa || []).map(item => `
                        <div class="qa-item">
                            <button class="qa-question-btn">
                                <span class="qa-q-mark">Q.</span>
                                <span class="qa-q-text">${item.q}</span>
                                <span class="qa-toggle-icon"><i class="fa-solid fa-plus"></i></span>
                            </button>
                            <div class="qa-answer-wrapper">
                                <div class="qa-answer">
                                    <span class="qa-a-mark">A.</span>
                                    ${item.a}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    renderExamCard(exam) {
        return `
            <div class="exam-card">
                <div class="exam-header">
                    <h3>${exam.title}</h3>
                    <span class="exam-date">${exam.date}</span>
                </div>
                <p class="exam-desc">${exam.description}</p>
                
                <div class="exam-links">
                    <a href="${exam.links.question}" target="_blank" class="btn-text">
                        <i class="fa-regular fa-file-pdf"></i> 問題
                    </a>
                    <a href="${exam.links.answer}" target="_blank" class="btn-text">
                        <i class="fa-regular fa-file-pdf"></i> 解答
                    </a>
                </div>

                <div class="exam-results">
                    <h4>集計結果 (${exam.stats.statsDate})</h4>
                    <!-- Explicit Scroll Wrapper -->
                    <div class="table-scroll-wrapper">
                        <table class="result-table">
                            <thead>
                                <tr>
                                    <th>受験者数</th>
                                    <th>平均点</th>
                                    <th>標準偏差</th>
                                    <th>最低点</th>
                                    <th>中央値</th>
                                    <th>最高点</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${exam.stats.takers}名</td>
                                    <td>${exam.stats.average}</td>
                                    <td>${exam.stats.stdDev}</td>
                                    <td>${exam.stats.min}</td>
                                    <td>${exam.stats.median}</td>
                                    <td>${exam.stats.max}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    renderPage(pageName) {
        const html = content[pageName];
        if (!html) return `<p>Content not found.</p>`;
        return `
            <section class="page-content fade-in">
                ${html}
            </section>
        `;
    }
}
