// 위로 가기
function scrlTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// BGM 재생
let isPlaying = false;

function toggleBGM()
{
    const bgm = document.getElementById("bgm");
    const btn = document.querySelector(".bgmBtn");

    if (!bgm || !btn) return;

    if (isPlaying)
    {
        bgm.pause();
        bgm.volume = 0.1;
        btn.textContent = "▶";
    }
    else
    {
        bgm.play();
        btn.textContent = "❚❚";
    }

    isPlaying = !isPlaying;
}

// 섹션 최소 높이 계산
function secHeight()
{
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const section = document.querySelector("section");

    if (!header || !footer || !section) return;

    setTimeout(() => {
        const h = header.offsetHeight;
        const f = footer.offsetHeight;
        const vh = window.innerHeight;
        section.style.minHeight = `${vh - h - f}px`;
    }, 100);
}

// HTML include
function includeHTML(id, url)
{
    return fetch(url)
    .then(res => res.text())
    .then(data => { document.getElementById(id).innerHTML = data; });
}

// 페이지 로드 시
window.addEventListener(
    "load", () =>
    {
        Promise.all
        ([
            includeHTML("header", "header.html"),
            includeHTML("footer", "footer.html")
        ])
        .then(() => { secHeight(); });
    }
);

window.addEventListener("resize", secHeight);

// 멤버십
let clickCount = 0;

        
function membership()
{
    const messages =
    [
        "멤버십 없지롱 😜",
        "진짜 없어요... 아직 만들지도 않았지롱!",
        "계속 눌러봐야 안 생겨요 ㅋㅋ",
        "이쯤 되면 진심인가요?",
        "만들어줄까 말까~ ☕",
        "개발자에게 문의해보세요... 라고 할 뻔!",
        "진짜 없지롱!!!!!! 🫣"
    ];

    alert(messages[clickCount % messages.length]);
    clickCount++;
}