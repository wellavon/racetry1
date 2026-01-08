// === ФУНКЦИИ ДЛЯ АВТОМАТИЧЕСКОГО ПОДСЧЁТА ОЧКОВ ===

/**
 * Подсчитывает очки рэйсера на основе достижений
 * @param {Object} achievements - объект с проектами, фестивалями и победами
 * @returns {number} общее количество очков
 */
function calculateScore(achievements) {
    let score = 0;

    // Очки за проекты: 100 баллов за каждый
    const projectsCount = achievements.projects ? achievements.projects.length : 0;
    score += projectsCount * 100;

    // Очки за фестивали: 50 баллов за участие
    const festivalsCount = achievements.festivals ? achievements.festivals.length : 0;
    score += festivalsCount * 50;

    // Очки за победы
    if (achievements.wins && achievements.wins.length > 0) {
        achievements.wins.forEach(win => {
            switch (win.place) {
                case 1:
                    score += 150; // 1 место
                    break;
                case 2:
                    score += 100; // 2 место
                    break;
                case 3:
                    score += 50;  // 3 место
                    break;
            }
        });
    }

    // Бонусные очки
    if (achievements.bonus) {
        score += achievements.bonus;
    }

    return score;
}

/**
 * Определяет класс рэйсера на основе количества очков
 * @param {number} score - количество очков рэйсера
 * @returns {string} класс рэйсера
 */
function getRacerClass(score) {
    if (score >= 2000) return "Royal";
    if (score >= 1700) return "Rover";
    if (score >= 1400) return "Ranker";
    if (score >= 1100) return "Rusher";
    if (score >= 800) return "Raider";
    if (score >= 500) return "Rider";
    if (score >= 350) return "Runner";
    return "Rookie";
}

/**
 * Обновляет очки и класс для всех рэйсеров в массиве racersData
 */
function updateRacerScores() {
    racersData.forEach(racer => {
        racer.score = calculateScore(racer.achievements);
        racer.class = getRacerClass(racer.score);
    });
}

// Данные для сайта
const missionData = [
    { id: 1, name: "Миссия 1", link: "soon", image: "saucin" },
    { id: 2, name: "Миссия 2", link: "https://youtu.be/B9z7TTMgKfI", image: "party" },
    { id: 3, name: "Миссия 3", link: "https://youtu.be/NAh2QCLjmK4", image: "do_it" },
    { id: 4, name: "Миссия 4", link: "https://youtu.be/LczT3pJCzO0", image: "tunnel" },
    { id: 5, name: "Миссия 5", link: "https://youtu.be/I2ho_pNATI4?si=R3fa_A-2CWasiftk", image: "superpower" },
    { id: 6, name: "Миссия 6", link: "https://youtu.be/bFcbi4upihU", image: "dwiw" },
    { id: 7, name: "Миссия 7", link: "https://youtu.be/iyH_gSL0ZmY", image: "shaboom" },
    { id: 8, name: "Миссия 8", link: "https://youtu.be/MoJ37LUAKuQ", image: "gotcha" },
    { id: 9, name: "Миссия 9", link: "https://youtu.be/yupP4AlwH24", image: "ceremony" },
    { id: 10, name: "Миссия 10", link: "https://youtu.be/THk-GkZjFu8", image: "wicked_love" },
    { id: 11, name: "Миссия 11", link: "https://youtu.be/JGf2F87fSI0", image: "1_only" },
    { id: 12, name: "Миссия 12", link: "https://youtu.be/NTPZLUXcZp4", image: "iyf" },
    { id: 13, name: "Миссия 13", link: "https://youtu.be/cbtjGX4vRV", image: "pretty_boy" },
    { id: 14, name: "Миссия 14", link: "https://youtu.be/E9h64fDEa6s?si=M7hAkz1SLBH0o3S2", image: "mantra" }
];

const racersData = [
    {
        id: "2507.7",
        name: "Kento",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "kento",
        achievements: {
            projects: ["P1Harmony - Pretty Boy", "Ateez - In Your Fantasy", "XLOV - 1&Only",
                "Yena - Wicked Love", "Stray Kids - Ceremony", "All(h)ours - Gotcha", "Ateez - Shaboom",
                "Monsta X - Do What I Want", "Xikers - Superpower", "Stray Kids - Do It", "Kid Phenomenon - Party Over There"],
            festivals: ["Venom Fest (27.04.25)", "CoverLand (27.04.25)", "ANM Dance Festival (29.06.25)",
                "DEEPFEST SUMMER 2025 (29.06.25)", "1Y (17.08.25) - Boys", "1Y (17.08.25) - Solo/Duo With Team", "lll кубок Москвы (30.08.25)",
                "ANM Dance Festival (14.09.25)", "CoverLand (14.12.25)", "DEEPFEST WINTER 2025 (21.12.25)"],
            wins: [
                { place: 1, festival: "Venom Fest (27.04.25)" },
                { place: 1, festival: "1Y (17.08.25) - Boys" },
                { place: 3, festival: "ANM Dance Festival (14.09.25)" },
                { place: 3, festival: "DEEPFEST WINTER 2025 (21.12.25)" }

            ],
            bonus: 500
        }
    },
    {
        id: "0103.5",
        name: "Corey",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "corey",
        achievements: {
            projects: ["P1Harmony - Pretty Boy", "Ateez - In Your Fantasy", "XLOV - 1&Only",
                "Yena - Wicked Love", "Stray Kids - Ceremony", "All(h)ours - Gotcha", "Ateez - Shaboom",
                "Monsta X - Do What I Want", "Xikers - Superpower", "Itzy - Tunnel Vision", "Stray Kids - Do It", "Kid Phenomenon - Party Over There"],
            festivals: ["Venom Fest (27.04.25)", "CoverLand (27.04.25)", "ANM Dance Festival (29.06.25)",
                "DEEPFEST SUMMER 2025 (29.06.25)", "1Y (17.08.25) - Boys", "1Y (17.08.25) - Solo/Duo With Team", "lll кубок Москвы (30.08.25)",
                "ANM Dance Festival (14.09.25)", "CoverLand (14.12.25)", "DEEPFEST WINTER 2025 (21.12.25)"],
            wins: [
                { place: 1, festival: "Venom Fest (27.04.25)" },
                { place: 1, festival: "1Y (17.08.25) - Boys" },
                { place: 3, festival: "ANM Dance Festival (14.09.25)" },
                { place: 3, festival: "DEEPFEST WINTER 2025 (21.12.25)" }
            ],
            bonus: 100
        }
    },
    {
        id: "1811.7",
        name: "Nesquik",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "nesquik",
        achievements: {
            projects: ["P1Harmony - Pretty Boy", "Xikers - Superpower"],
            festivals: ["ANM Dance Festival (29.06.25)", "DEEPFEST SUMMER 2025 (29.06.25)", "CoverLand (14.12.25)"],
            wins: []
        }
    },
    {
        id: "0604.6",
        name: "Tasya",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "tasya",
        achievements: {
            projects: ["P1Harmony - Pretty Boy", "Xikers - Superpower"],
            festivals: ["ANM Dance Festival (29.06.25)", "DEEPFEST SUMMER 2025 (29.06.25)", "CoverLand (14.12.25)"],
            wins: []
        }
    },
    {
        id: "0907.2",
        name: "Haru",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "haru",
        achievements: {
            projects: ["Ateez - In Your Fantasy", "Ateez - Shaboom"],
            festivals: ["1Y (17.08.25) - Boys"],
            wins: [
                { place: 1, festival: "1Y (17.08.25) - Boys" }
            ]
        }
    },
    {
        id: "0404.4",
        name: "Budilya",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "budilya",
        achievements: {
            projects: ["Ateez - In Your Fantasy", "Ateez - Shaboom", "Xikers - Superpower"],
            festivals: ["1Y (17.08.25) - Boys", "CoverLand (14.12.25)"],
            wins: [
                { place: 1, festival: "1Y (17.08.25) - Boys" }
            ]
        }
    },
    {
        id: "0410.5",
        name: "Minka",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "minka",
        achievements: {
            projects: ["Yena - Wicked Love", "All(h)ours - Gotcha", "Itzy - Tunnel Vision", "Kid Phenomenon - Party Over There"],
            festivals: ["1Y (17.08.25) - Solo/Duo With Team)", "lll кубок Москвы (30.08.25)", "ANM Dance Festival (14.09.25)", "DEEPFEST WINTER 2025 (21.12.25)"],
            wins: [
                { place: 3, festival: "ANM Dance Festival (14.09.25)" },
                { place: 3, festival: "DEEPFEST WINTER 2025 (21.12.25)" }
            ]
        }
    },
    {
        id: "0907.6",
        name: "Asya",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "asya",
        achievements: {
            projects: ["Yena - Wicked Love", "Xikers - Superpower", "Stray Kids - Do It"],
            festivals: ["1Y (17.08.25) - Solo/Duo With Team)", "CoverLand (14.12.25)"],
            wins: []
        }
    },
    {
        id: "1609.3",
        name: "Milana",
        class: "", // Будет автоматически рассчитано
        score: 0, // Будет автоматически рассчитано
        photo: "milana",
        achievements: {
            projects: ["All(h)ours - Gotcha"],
            festivals: ["Venom Fest (27.04.25)", "CoverLand (27.04.25)", "lll кубок Москвы (30.08.25)", "ANM Dance Festival (14.09.25)"],
            wins: [
                { place: 1, festival: "Venom Fest (27.04.25)" },
                { place: 3, festival: "ANM Dance Festival (14.09.25)" }
            ]
        }
    },

];

// Автоматический подсчёт очков для всех рэйсеров
updateRacerScores();

// Функция для загрузки контента на страницу
function loadContent(page) {
    const contentDiv = document.getElementById('content');

    switch (page) {
        case 'home':
            contentDiv.innerHTML = generateHomePage();
            break;
        case 'about':
            contentDiv.innerHTML = generateAboutPage();
            break;
        case 'ranking':
            contentDiv.innerHTML = generateRankingPage();
            break;
        default:
            contentDiv.innerHTML = generateHomePage();
    }
}

// Генерация главной страницы
function generateHomePage() {
    return `
        <div class="home-page">
            <div class="welcome-text">
                Здравствуйте, Вас приветствует система rc:rc. Ниже Вы можете перейти в интересующий Вас раздел
            </div>
            <div class="buttons-container">
                <button class="menu-btn" onclick="loadContent('about')">
                    <i class="fas fa-info-circle"></i> О системе
                </button>
                <button class="menu-btn" onclick="loadContent('ranking')">
                    <i class="fas fa-trophy"></i> ранги рэйсеров
                </button>
            </div>
        </div>
    `;
}

// Генерация страницы "О системе"
function generateAboutPage() {
    let missionsHTML = '';

    missionData.forEach(mission => {
        missionsHTML += `
            <div class="mission-card">
                <div class="mission-img">
                    <img src="${mission.image}.jpeg" alt="${mission.name}" onerror="this.src='${mission.image}.png'">
                </div>
                <a href="${mission.link}" target="_blank" class="mission-link">
                    Посмотреть запись миссии
                </a>
            </div>
        `;
    });

    return `
        <div class="about-page">
            <div class="back-btn-container">
                <button class="back-btn" onclick="loadContent('home')">
                    <i class="fas fa-arrow-left"></i> Назад
                </button>
            </div>
            <h1 class="page-title">О системе</h1>
            <div class="system-info">
                Система rc:rc - тут умные слова бла бла бла...
            </div>
            <div class="missions-grid">
                ${missionsHTML}
            </div>
        </div>
    `;
}

// Генерация страницы ранга
function generateRankingPage() {
    // Фильтруем рэйсеров с score >= 350 и сортируем по score (по убыванию)
    const sortedRacers = [...racersData]
        .filter(racer => racer.score >= 350)
        .sort((a, b) => b.score - a.score);

    let racersHTML = '';

    sortedRacers.forEach((racer, index) => {
        racersHTML += `
            <div class="id-card" onclick="openRacerAchievements('${racer.id}')">
                <div class="card-logo">racer card</div>
                <div class="racer-photo-container">
                    <div class="racer-photo"><img src="${racer.photo}.png" alt="${racer.name}"${racer.photo === 'corey' ? ' class="zoomed"' : ''}></div>
                </div>
                <div class="racer-info">
                    <div class="info-item">
                        <span class="info-label">name:</span>
                        <span class="info-value">${racer.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">id:</span>
                        <span class="info-value">${racer.id}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">class:</span>
                        <span class="info-value class-value">${racer.class}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">score:</span>
                        <span class="info-value">${racer.score}</span>
                    </div>
                </div>
                <div class="racer-signature">${racer.name.split(' ')[0]}</div>
                <div class="neon-stripe"></div>
            </div>
        `;
    });

    return `
        <div class="ranking-page">
            <div class="back-btn-container">
                <button class="back-btn" onclick="loadContent('home')">
                    <i class="fas fa-arrow-left"></i> Назад
                </button>
            </div>
            <h1 class="page-title">ранги рэйсеров</h1>
            <div class="ranking-info">
                <button class="how-it-works-btn" onclick="openHowItWorksModal()">
                    <i class="fas fa-question-circle"></i> Как это работает?
                </button>
            </div>
            <div class="racers-container">
                ${racersHTML}
            </div>
            
            <!-- Modal "Как это работает" -->
            <div class="modal-overlay" id="howItWorksModal" onclick="closeHowItWorksModal(event)">
                <div class="modal-content">
                    <button class="modal-close" onclick="closeHowItWorksModal()">
                        <i class="fas fa-times"></i>
                    </button>
                    <h2 class="modal-title">Как повысить ранг?</h2>
                    <div class="modal-text">
                        <p>Участвовать в проектах, фестах и побеждать с рэйсерами.</p>
                        <ul class="points-list">
                            <li>За съемку проекта — <strong>100 баллов</strong></li>
                            <li>За участие на фесте — <strong>50 баллов</strong></li>
                            <li>За получение 3 места на фесте — <strong>50 баллов</strong></li>
                            <li>За получение 2 места на фесте — <strong>100 баллов</strong></li>
                            <li>За получение 1 места на фесте — <strong>150 баллов</strong></li>
                        </ul>
                    </div>
<h3 class="modal-subtitle">Ранги рэйсеров</h3>
                    <p class="modal-note">Примечание: в ранговую таблицу попадают только рэйсеры с общим количеством баллов не менее 350</p>
                    <div class="ranks-table">
                        <div class="rank-row">
                            <span class="rank-name">Rookie</span>
                            <span class="rank-roman">(руки)</span>
                            <span class="rank-translation">— новичок</span>
                        </div>
                        <div class="rank-row">
                            <span class="rank-name">Runner</span>
                            <span class="rank-roman">(раннер)</span>
                            <span class="rank-translation">— бегун</span>
                        </div>
                        <div class="rank-row">
                            <span class="rank-name">Rider</span>
                            <span class="rank-roman">(райдер)</span>
                            <span class="rank-translation">— наездник</span>
                        </div>
                        <div class="rank-row">
                            <span class="rank-name">Raider</span>
                            <span class="rank-roman">(рэйдер)</span>
                            <span class="rank-translation">— участник набега</span>
                        </div>
                        <div class="rank-row">
                            <span class="rank-name">Rusher</span>
                            <span class="rank-roman">(рашер)</span>
                            <span class="rank-translation">— позиция в игре бегущего сквозь все поле</span>
                        </div>
                        <div class="rank-row">
                            <span class="rank-name">Ranker</span>
                            <span class="rank-roman">(ранкер)</span>
                            <span class="rank-translation">— рядовой солдат</span>
                        </div>
                        <div class="rank-row">
                            <span class="rank-name">Rover</span>
                            <span class="rank-roman">(ровер)</span>
                            <span class="rank-translation">— пират/скиталец/бродяга</span>
                        </div>
                        <div class="rank-row">
                            <span class="rank-name">Royal</span>
                            <span class="rank-roman">(роял)</span>
                            <span class="rank-translation">— королевский/элитный</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Достижения рэйсера -->
            <div class="modal-overlay" id="racerAchievementsModal" onclick="closeRacerAchievements(event)">
                <div class="modal-content achievements-modal-content">
                    <button class="modal-close" onclick="closeRacerAchievements()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div id="racerAchievementsContent">
                        <!-- Content will be dynamically generated -->
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Открыть модальное окно достижений рэйсера
function openRacerAchievements(racerId) {
    const racer = racersData.find(r => r.id === racerId);
    if (!racer) return;

    const achievements = racer.achievements;

    // Генерируем список проектов
    let projectsHTML = '';
    if (achievements.projects && achievements.projects.length > 0) {
        projectsHTML = achievements.projects.map(p => `<li class="achievement-item">${p}</li>`).join('');
    } else {
        projectsHTML = '<li class="achievement-item empty">Нет участий в проектах</li>';
    }

    // Генерируем список фестивалей
    let festivalsHTML = '';
    if (achievements.festivals && achievements.festivals.length > 0) {
        festivalsHTML = achievements.festivals.map(f => `<li class="achievement-item">${f}</li>`).join('');
    } else {
        festivalsHTML = '<li class="achievement-item empty">Нет участий на фестивалях</li>';
    }

    // Генерируем список побед
    let winsHTML = '';
    if (achievements.wins && achievements.wins.length > 0) {
        winsHTML = achievements.wins.map(w => {
            const placeText = w.place === 1 ? '1 место' : w.place === 2 ? '2 место' : '3 место';
            return `<li class="achievement-item win-item">
                <span class="win-place">${placeText}</span>
                <span class="win-festival">${w.festival}</span>
            </li>`;
        }).join('');
    } else {
        winsHTML = '<li class="achievement-item empty">Пока нет побед</li>';
    }

    const contentHTML = `
        <div class="achievements-header">
            <div class="achievements-photo"><img src="${racer.photo}.png" alt="${racer.name}"${racer.photo === 'corey' ? ' class="zoomed"' : ''}></div>
            <div class="achievements-info">
                <h2 class="achievements-name">${racer.name}</h2>
                <p class="achievements-id">ID: ${racer.id}</p>
                <p class="achievements-class">${racer.class}</p>
            </div>
        </div>
        
        <div class="achievements-sections">
            <div class="achievement-section">
                <h3 class="section-title">
                    <i class="fas fa-rocket"></i>
                    Проекты с записью (${achievements.projects ? achievements.projects.length : 0})
                </h3>
                <ul class="achievement-list">
                    ${projectsHTML}
                </ul>
            </div>
            
            <div class="achievement-section">
                <h3 class="section-title">
                    <i class="fas fa-music"></i>
                    Фесты (${achievements.festivals ? achievements.festivals.length : 0})
                </h3>
                <ul class="achievement-list">
                    ${festivalsHTML}
                </ul>
            </div>
            
            <div class="achievement-section">
                <h3 class="section-title">
                    <i class="fas fa-trophy"></i>
                    Победы (${achievements.wins ? achievements.wins.length : 0})
                </h3>
                <ul class="achievement-list wins-list">
                    ${winsHTML}
                </ul>
            </div>
        </div>
    `;

    document.getElementById('racerAchievementsContent').innerHTML = contentHTML;

    const modal = document.getElementById('racerAchievementsModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    }
}

// Закрыть модальное окно достижений рэйсера
function closeRacerAchievements(event) {
    // Закрыть при клике на оверлей или на кнопку закрытия
    if (!event || event.target === event.currentTarget || event.target.closest('.modal-close')) {
        const modal = document.getElementById('racerAchievementsModal');
        if (modal) {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            document.body.style.overflow = '';
        }
    }
}

// Открыть модальное окно "Как это работает"
function openHowItWorksModal() {
    const modal = document.getElementById('howItWorksModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    }
}

// Закрыть модальное окно "Как это работает"
function closeHowItWorksModal(event) {
    // Закрыть при клике на оверлей или на кнопку закрытия
    if (!event || event.target === event.currentTarget || event.target.closest('.modal-close')) {
        const modal = document.getElementById('howItWorksModal');
        if (modal) {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            document.body.style.overflow = '';
        }
    }
}

// Создание интенсивной матрицы на фоне
function createIntenseMatrix() {
    const matrixContainer = document.getElementById('matrixContainer');
    const digits = ['0', '1', '101', '010', '110', '001', '100', '011'];

    // Создаем много цифр для интенсивного эффекта матрицы
    for (let i = 0; i < 50; i++) {
        const digit = document.createElement('div');
        digit.className = 'matrix-digit';
        digit.textContent = digits[Math.floor(Math.random() * digits.length)];

        // Случайные позиции
        digit.style.left = `${Math.random() * 100}%`;
        digit.style.top = `${Math.random() * 100}%`;

        // Случайная скорость анимации
        const duration = 8 + Math.random() * 15;
        const delay = Math.random() * 5;
        digit.style.animationDuration = `${duration}s`;
        digit.style.animationDelay = `${delay}s`;

        // Случайный размер для большего разнообразия
        const size = 1.5 + Math.random() * 1.5;
        digit.style.fontSize = `${size}rem`;

        matrixContainer.appendChild(digit);
    }

    // Обновляем матрицу каждые 30 секунд для свежести
    setInterval(() => {
        const digits = matrixContainer.querySelectorAll('.matrix-digit');
        digits.forEach(digit => {
            digit.style.left = `${Math.random() * 100}%`;
            digit.style.top = `${Math.random() * 100}%`;
        });
    }, 30000);
}

// Добавление случайной кривизны карточкам при загрузке
function addRandomSkew() {
    const cards = document.querySelectorAll('.id-card');

    // Проверяем, что экран достаточно широкий для 3D-эффекта
    if (window.innerWidth <= 480) {
        // На мобильных устройствах убираем кривизну
        cards.forEach(card => {
            card.style.transform = 'none';
        });
        return;
    }

    cards.forEach(card => {
        // Случайная кривизна для каждой карточки
        const rotateY = (Math.random() * 10 - 5); // от -5 до 5 градусов
        const rotateX = (Math.random() * 6 - 3); // от -3 до 3 градусов
        const rotateZ = (Math.random() * 4 - 2); // от -2 до 2 градусов

        card.style.transform = `perspective(500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;
    });
}

// Инициализация сайта при загрузке
document.addEventListener('DOMContentLoaded', function () {
    // Загружаем главную страницу по умолчанию
    loadContent('home');

    // Создаем интенсивную матрицу
    createIntenseMatrix();

    // Добавляем эффект для следов колес
    const tracks = document.querySelectorAll('.tire-track');
    tracks.forEach(track => {
        track.style.animation = `track-move ${20 + Math.random() * 20}s linear infinite`;
    });

    // Добавляем стиль для анимации следов
    const style = document.createElement('style');
    style.textContent = `
        @keyframes track-move {
            0% { opacity: 0.1; transform: translateX(0) rotate(20deg); }
            50% { opacity: 0.4; }
            100% { opacity: 0.1; transform: translateX(100px) rotate(20deg); }
        }
        
        @keyframes neon-pulse {
            0% { opacity: 0.3; }
            50% { opacity: 0.8; }
            100% { opacity: 0.3; }
        }
    `;
    document.head.appendChild(style);

    // Добавляем пульсацию неоновым элементам
    setTimeout(() => {
        const neonElements = document.querySelectorAll('.neon-stripe, .class-value, .logo-glow');
        neonElements.forEach(el => {
            el.style.animation = 'neon-pulse 2s infinite alternate';
        });
    }, 1000);

    // При изменении контента добавляем кривизну карточкам
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                // Даем время на рендеринг новых карточек
                setTimeout(addRandomSkew, 100);
            }
        });
    });

    const contentDiv = document.getElementById('content');
    observer.observe(contentDiv, { childList: true });
});

// Обработка изменения размера окна для мобильных устройств
window.addEventListener('resize', function () {
    addRandomSkew();
});
