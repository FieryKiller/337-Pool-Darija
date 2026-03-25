// Level Data
const levels = [
    { id: 1, title: "Day 00: Shell Basics", chapter: "Terminal", topics: ["ls", "cd", "pwd", "mkdir"], description: "The beginning of everything. Master the terminal to survive.", task: "Navigate to your home folder and create 'piscine'.", initialCode: "mkdir piscine\ncd piscine\npwd", xp: 100, unlocked: true, completed: false },
    { id: 2, title: "Day 01: Environment", chapter: "Terminal", topics: ["chmod", "ls -a", "perm"], description: "Control your world. Permissions are the key to security.", task: "Give execute permissions to 'myscript.sh'.", initialCode: "chmod 755 myscript.sh\nls -la", xp: 150, unlocked: false, completed: false },
    { id: 3, title: "Day 02: First C Contact", chapter: "Basic C", topics: ["write", "gcc", "main"], description: "Write your first compiled program. Feel the power of C.", task: "Use write() to print 'A'.", initialCode: "#include <unistd.h>\n\nvoid ft_putchar(char c)\n{\n    write(1, &c, 1);\n}\n\nint main(void)\n{\n    ft_putchar('A');\n    return (0);\n}", xp: 200, unlocked: false, completed: false },
    { id: 4, title: "Day 03: Variables", chapter: "Data", topics: ["int", "char", "assignment"], description: "Storing values in memory cells. Understand data types.", task: "Assign 42 to n and 'C' to x.", initialCode: "int main(void)\n{\n    int n = 42;\n    char x = 'C';\n    return (0);\n}", xp: 250, unlocked: false, completed: false },
    { id: 5, title: "Day 04: Conditions", chapter: "Logic", topics: ["if", "else", "=="], description: "Logic gates. Decide the flow of your execution.", task: "If n is positive, return 1, else return 0.", initialCode: "int ft_is_pos(int n)\n{\n    if (n > 0)\n        return (1);\n    return (0);\n}", xp: 300, unlocked: false, completed: false },
    { id: 6, title: "Day 05: Loops", chapter: "Repetition", topics: ["while", "loops", "increment"], description: "Automate tasks. Repeat until the goal is reached.", task: "Print 10 'X' characters.", initialCode: "int i = 0;\nwhile (i < 10)\n{\n    ft_putchar('X');\n    i++;\n}", xp: 350, unlocked: false, completed: false },
    { id: 7, title: "Day 06: Functions", chapter: "Structure", topics: ["return", "prototypes"], description: "Break complexity. Divide your spells into functions.", task: "Create ft_add(a, b) and return the sum.", initialCode: "int ft_add(int a, int b)\n{\n    return (a + b);\n}", xp: 400, unlocked: false, completed: false },
    { id: 8, title: "Day 07: Arrays & Strings", chapter: "Memory", topics: ["strings", "\\0", "arrays"], description: "Sequences of data. Master the null terminator.", task: "Initialize a string 'Hello'.", initialCode: "char str[] = \"Hello\";\n// Remember the \\0 at the end!", xp: 450, unlocked: false, completed: false },
    { id: 9, title: "Day 08: Pointers Intro", chapter: "Advanced Memory", topics: ["&", "*", "address"], description: "The black magic of C. Manipulate addresses directly.", task: "Set the value to 42 using a pointer.", initialCode: "void ft_set(int *ptr)\n{\n    *ptr = 42;\n}", xp: 500, unlocked: false, completed: false },
    { id: 10, title: "Day 09: Value Swap", chapter: "Advanced Memory", topics: ["pointers", "addresses"], description: "Swap values between two memory cells using addresses.", task: "Swap values of a and b.", initialCode: "void ft_swap(int *a, int *b)\n{\n    int tmp = *a;\n    *a = *b;\n    *b = tmp;\n}", xp: 600, unlocked: false, completed: false },
    { id: 11, title: "C00: The Beginnings", chapter: "The Pool", topics: ["alphabet", "numbers"], description: "First real project. Print the alphabet and numbers.", task: "Print digits 0 to 9.", initialCode: "void ft_print_nums(void)\n{\n    char n = '0';\n    while (n <= '9') {\n        write(1, &n, 1);\n        n++;\n    }\n}", xp: 700, unlocked: false, completed: false },
    { id: 12, title: "C01: Pointers Deep Dive", chapter: "The Pool", topics: ["pointer depth", "ft_ft"], description: "Multiple levels of pointers. Go deeper into the stack.", task: "Set value to 42 via 3 pointers.", initialCode: "void ft_pt(int ***nbr)\n{\n    ***nbr = 42;\n}", xp: 800, unlocked: false, completed: false },
    { id: 13, title: "C02: String Logic", chapter: "The Pool", topics: ["strcpy", "is_alpha"], description: "Clone strings and validate content types.", task: "Check if a string is only alpha.", initialCode: "int ft_ia(char *s)\n{\n    int i = 0;\n    while(s[i]) { \n        if (!alpha) return 0;\n        i++; \n    }\n    return 1;\n}", xp: 900, unlocked: false, completed: false },
    { id: 14, title: "C03: Comparisons", chapter: "The Pool", topics: ["strcmp", "strstr"], description: "Compare two scrolls. Find substrings in history.", task: "Write ft_strcmp.", initialCode: "int ft_strcmp(char *s1, char *s2)\n{\n    while(*s1 && (*s1 == *s2))\n    {\n        s1++; s2++;\n    }\n    return (*s1 - *s2);\n}", xp: 1000, unlocked: false, completed: false },
    { id: 15, title: "C04: Multi-Base", chapter: "The Pool", topics: ["putnbr", "atoi"], description: "Convert artifacts between string and number bases.", task: "Implement ft_atoi.", initialCode: "int ft_atoi(char *str)\n{\n    int res = 0;\n    while(*str) {\n        res = res * 10 + (*str - '0');\n        str++;\n    }\n    return res;\n}", xp: 1100, unlocked: false, completed: false },
    { id: 16, title: "C05: Recursive Echoes", chapter: "The Pool", topics: ["recursion", "factorial"], description: "Solve the ritual recursively. Call yourself until done.", task: "Calculate recursive factorial.", initialCode: "int ft_fact(int n)\n{\n    if (n <= 1) return 1;\n    return (n * ft_fact(n - 1));\n}", xp: 1300, unlocked: false, completed: false },
    { id: 17, title: "C06: Command Line", chapter: "The Pool", topics: ["argc", "argv"], description: "Talk to the program before it starts. Use arguments.", task: "Print the first argument given to the program.", initialCode: "int main(int ac, char **av)\n{\n    if (ac > 1) ft_putstr(av[1]);\n    return 0;\n}", xp: 1500, unlocked: false, completed: false },
    { id: 18, title: "C07: Dynamic Spells", chapter: "The Pool", topics: ["malloc", "free"], description: "Create memory out of thin air. Allocate destiny.", task: "Malloc an array of n integers.", initialCode: "int *ft_m(int n)\n{\n    return (int *)malloc(n * sizeof(int));\n}", xp: 1800, unlocked: false, completed: false },
    { id: 19, title: "C08: Header Guards", chapter: "The Pool", topics: ["#define", "struct"], description: "Define structures and protect your header scrolls.", task: "Define a point structure in 'ft.h'.", initialCode: "#ifndef FT_H\n#define FT_H\ntypedef struct { int x; int y; } t_p;\n#endif", xp: 2000, unlocked: false, completed: false },
    { id: 20, title: "C09: Static Library", chapter: "The Pool", topics: ["ar", "libft"], description: "Bundle your magic into a static library for others.", task: "Create your first library 'libft.a'.", initialCode: "// Compile all and run: ar rc libft.a *.o", xp: 2500, unlocked: false, completed: false },
    { id: 21, title: "C10: File Spirits", chapter: "The Pool", topics: ["open", "read", "close"], description: "Final boss. Open the artifacts of the file system.", task: "Read from 'file.txt' and print content.", initialCode: "int fd = open(\"file.txt\", O_RDONLY);\nread(fd, buf, 100);", xp: 3000, unlocked: false, completed: false }
];

// State
let userXP = parseInt(localStorage.getItem('1337_xp')) || 0;

// Load Quest Progress from LocalStorage
const savedLevels = JSON.parse(localStorage.getItem('1337_levels_progress'));
if (savedLevels) {
    levels.forEach((l, i) => {
        if (savedLevels[i]) {
            l.unlocked = savedLevels[i].unlocked;
            l.completed = savedLevels[i].completed;
        }
    });
}

// DOM Elements (Selected at runtime)
const getEl = (id) => document.getElementById(id);

// Initialize Roadmap
function initRoadmap() {
    const roadmap = getEl('roadmap-container');
    if (!roadmap) return;
    
    roadmap.innerHTML = '';
    levels.forEach(level => {
        const card = document.createElement('div');
        card.className = `level-card ${level.unlocked ? '' : 'locked'}`;
        card.innerHTML = `
            <div class="level-num">${level.chapter} - Quest ${level.id.toString().padStart(2, '0')}</div>
            <div class="level-title" style="color: var(--primary); text-shadow: 0 0 10px rgba(0,242,255,0.2);">${level.title}</div>
            <div class="level-desc">${level.description}</div>
            <div class="level-tags" style="display:flex; gap:0.3rem; flex-wrap:wrap; margin-bottom:1rem">
                ${level.topics.map(t => `<span style="font-size:0.7rem; color:var(--text-dim); background:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px">${t}</span>`).join('')}
            </div>
            <div class="level-footer">
                <span class="xp-badge">${level.xp} Mana</span>
                <span class="status-${level.unlocked ? 'unlocked' : 'lock'}">
                    <i class="fas fa-${level.unlocked ? (level.completed ? 'check-circle' : 'unlock') : 'lock'}"></i>
                    ${level.unlocked ? (level.completed ? 'Ascended' : 'Begin') : 'Forbidden'}
                </span>
            </div>
        `;
        
        if (level.unlocked) {
            card.onclick = () => initSandbox(level.id);
        } else {
            card.style.opacity = '0.3';
            card.style.filter = 'grayscale(1)';
            card.style.cursor = 'not-allowed';
        }
        
        roadmap.appendChild(card);
    });
}

// Sandbox Logic
function initSandbox(id) {
    currentLevel = levels.find(l => l.id === id);
    if (!currentLevel) return;

    getEl('sandbox-level-title').innerText = currentLevel.title;
    getEl('level-task').innerText = currentLevel.task;
    getEl('html-code').value = currentLevel.initialCode;
    getEl('sandbox').classList.add('active');
    getEl('complete-quest').style.display = 'none';
    getEl('sandbox-console-output').innerHTML = '<div style="color: #444;">Ready for compilation.</div>';

    // Populate Lesson Guide from curriculum_data.js
    const lessonContent = getEl('sandbox-lesson-content');
    if (lessonContent) {
        lessonContent.innerHTML = '';
        const chapter = Object.keys(fullCurriculum).find(k => k.includes(currentLevel.title.split(':')[0]));
        if (chapter) {
            const mods = fullCurriculum[chapter];
            mods.forEach(m => {
                lessonContent.innerHTML += `
                    <div style="margin-bottom: 2rem;">
                        <h4 style="color: var(--primary); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px;">${m.category}</h4>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0; color: #aaa;">${m.details}</p>
                        <ul style="padding-left: 1rem; color: #888; font-size: 0.8rem;">
                            ${m.topics.map(t => `<li>${t}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
        } else {
            lessonContent.innerHTML = `<p style="color: #666;">No specific guide found for this day. Consult the Full Guide section.</p>`;
        }
    }

    updatePreview();
}

function updatePreview() {
    const code = getEl('html-code').value;
    const consoleDiv = getEl('sandbox-console-output');
    if (!consoleDiv) return;

    consoleDiv.innerHTML = '<div style="color: #666; margin-bottom: 0.5rem;">--- COMPILING SIMULATION ---</div>';
    
    // Simulate compilation time
    setTimeout(() => {
        const entry = document.createElement('div');
        const isCodeValid = code.length > 20 && (code.includes('main') || code.includes('include') || code.includes('mkdir'));
        
        if (isCodeValid) {
            entry.innerHTML = `
                <span style="color: #0f0;">gcc -Wall -Wextra -Werror main.c -o a.out</span><br>
                <span style="color: #fff;">./a.out</span><br>
                ---------------------------------------<br>
                <div style="padding: 1rem; background: #111; border-radius: 4px; margin: 0.5rem 0;">
                    <span style="color: #fff;">PROGRAM OUTPUT:</span><br>
                    <span style="color: #0c0;">Natija [OK] - All tests passed correctly.</span>
                </div>
                <span style="color: #fff;">Checking norminette... </span><br>
                <span style="color: #0c0;">OK! Ready for correction.</span><br>
                <br>
                <span style="color: #bd00ff; font-weight: bold;">Evaluation button is now UNLOCKED.</span>
            `;
            getEl('complete-quest').style.display = 'flex';
        } else {
            entry.innerHTML = `
                <span style="color: #f44;">gcc -Wall -Wextra -Werror main.c -o a.out</span><br>
                <span style="color: #f00;">ERROR: Main function missing or empty file.</span><br>
                ---------------------------------------<br>
                <span style="color: #aaa;">Please follow the quest requirements and provide valid C logic.</span>
            `;
            getEl('complete-quest').style.display = 'none';
        }
        consoleDiv.appendChild(entry);
    }, 800);
}

// Console listener
window.addEventListener('message', (e) => {
    if (e.data.type === 'log') {
        const consoleDiv = document.getElementById('sandbox-console');
        if (consoleDiv) {
            const entry = document.createElement('div');
            entry.innerText = `> ${e.data.content.join(' ')}`;
            entry.style.padding = '0.2rem 0';
            entry.style.borderBottom = '1px solid #333';
            consoleDiv.appendChild(entry);
            consoleDiv.scrollTop = consoleDiv.scrollHeight;
        }
    }
});

function saveProgress() {
    localStorage.setItem('1337_xp', userXP);
    const progress = levels.map(l => ({ unlocked: l.unlocked, completed: l.completed }));
    localStorage.setItem('1337_levels_progress', JSON.stringify(progress));
}

function completeQuest() {
    if (currentLevel && !currentLevel.completed) {
        currentLevel.completed = true;
        userXP += currentLevel.xp;
        
        // Unlock next level
        const nextLevel = levels.find(l => l.id === currentLevel.id + 1);
        if (nextLevel) nextLevel.unlocked = true;
        
        // Update UI
        updateStats();
        initRoadmap();
        saveProgress();
        
        alert("Piscine Ascension! ✨ You gained " + currentLevel.xp + " Score!");
        getEl('sandbox').classList.remove('active');
    }
}

function updateStats() {
    getEl('xp-display').innerText = `${userXP} Score`;
    const totalXP = levels.reduce((sum, l) => sum + l.xp, 0);
    const percent = Math.min(100, Math.floor((userXP / totalXP) * 100));
    getEl('main-progress-bar').style.width = `${percent}%`;
    getEl('rank-percent').innerText = `${percent}%`;
    
    // Simple Rank Logic
    let rank = "Pisciner";
    if (percent > 20) rank = "Novice C";
    if (percent > 40) rank = "Memory Adept";
    if (percent > 60) rank = "Pointer Ninja";
    if (percent > 80) rank = "Piscine Hero";
    if (percent === 100) rank = "1337 Legend";
    getEl('rank-name').innerText = rank;
}

// Real-time preview and listeners moved into script initialization

// Section Toggling Logic
function showSection(sectionId, element) {
    const sections = ['roadmap', 'syllabus', 'leaderboard'];
    
    sections.forEach(id => {
        const sec = document.getElementById(id);
        if (sec) sec.style.display = id === sectionId ? 'block' : 'none';
    });
    
    // Manage active state of menu items
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }
    
    if (sectionId === 'syllabus') {
        renderSyllabus();
    }
}

// Generate Syllabus Cards
function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    container.innerHTML = '';
    
    Object.keys(fullCurriculum).forEach((chapterTitle, index) => {
        const modules = fullCurriculum[chapterTitle];
        modules.forEach(mod => {
            const card = document.createElement('div');
            card.className = 'level-card fade-in';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="level-num">${chapterTitle}</div>
                <div class="level-title">${mod.category}</div>
                <div class="level-desc">${mod.details}</div>
                <div class="topics-row" style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
                    ${mod.topics.map(t => `<span class="xp-badge" style="background: rgba(0, 242, 255, 0.05); color: var(--primary); font-size: 0.7rem;">${t}</span>`).join('')}
                </div>
                <div class="level-footer">
                    <a href="https://youtube.com/playlist?list=PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA" target="_blank" class="btn-glass" style="font-size: 0.8rem; text-decoration: none;">
                        <i class="fab fa-youtube"></i> Watch Lesson
                    </a>
                </div>
            `;
            container.appendChild(card);
        });
    });
}

function createParticles() {
    const container = document.body;
    const particlesDiv = document.createElement('div');
    particlesDiv.className = 'particles';
    container.appendChild(particlesDiv);

    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.width = p.style.height = Math.random() * 4 + 2 + 'px';
        p.style.animationDelay = Math.random() * 10 + 's';
        p.style.opacity = Math.random() * 0.5 + 0.1;
        particlesDiv.appendChild(p);
    }
}

function startPath(goal) {
    getEl('onboarding').style.display = 'none';
    localStorage.setItem('master_dev_path', goal);
    localStorage.setItem('master_dev_onboarded', 'true');
    initRoadmap();
    createParticles();
    
        // Show a welcoming notification
        setTimeout(() => {
            alert(`T'ri9 dyalk hiya: ${goal}! Khtar awel Quest bach t'bda l'moughamara.`);
            // The onboarding element is already hidden by style.display = 'none' above.
            // This line is redundant if the element is already hidden.
            // onboarding.style.display = 'none'; 
        }, 800);
}

// Entry Point
window.onload = () => {
    // Check if onboarded
    if (localStorage.getItem('master_dev_onboarded') === 'true') {
        const onboarding = getEl('onboarding');
        if (onboarding) onboarding.style.display = 'none';
    }

    initRoadmap();
    renderSyllabus();
    initLikes();
    createParticles();
    updateStats();
    
    // Attach Listeners
    if (getEl('run-code')) getEl('run-code').onclick = updatePreview;
    if (getEl('complete-quest')) getEl('complete-quest').onclick = completeQuest;
    if (getEl('close-sandbox')) getEl('close-sandbox').onclick = () => getEl('sandbox').classList.remove('active');
    if (getEl('html-code')) getEl('html-code').oninput = updatePreview;

    // Animation stagger
    document.querySelectorAll('.level-card').forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
        card.style.opacity = '0';
    });
};

function resetProgress() {
    if (confirm("🚨 Are you sure you want to delete all 1337 data? This cannot be undone!")) {
        localStorage.clear();
        location.reload();
    }
}

// Like System
let likes = parseInt(localStorage.getItem('1337_likes')) || 42;
let hasLiked = localStorage.getItem('1337_user_has_liked') === 'true';

function initLikes() {
    getEl('like-count').innerText = likes;
    if (hasLiked) {
        const btn = getEl('like-btn');
        btn.classList.add('liked');
        btn.innerHTML = '<i class="fas fa-heart"></i> Liked';
    }
}

function addLike() {
    if (hasLiked) return;
    
    likes++;
    hasLiked = true;
    localStorage.setItem('1337_likes', likes);
    localStorage.setItem('1337_user_has_liked', 'true');
    
    // Update UI
    getEl('like-count').innerText = likes;
    const btn = getEl('like-btn');
    btn.classList.add('liked');
    btn.innerHTML = '<i class="fas fa-heart"></i> Liked';
    
    // Visual juice
    btn.style.animation = 'none';
    setTimeout(() => btn.style.transform = 'scale(1.2)', 0);
}


