
// 会社情報サイドバーのメニュー制御

// 会社概要画面読み込み時ヘッダー付近だった場合、経営理念にクラス付与
window.onload = function () {
    if (window.matchMedia('(max-width: 768px)').matches) { //スマホ処理
        if (window.pageYOffset <= 999) {
            philosophy();
        }
    } else if (window.matchMedia('(min-width:769px)').matches) { //PC処理
        if (window.pageYOffset <= 1399) {
            philosophy();
        }
    }
}

// スクロール位置でサイドメニューのクラスの操作
document.addEventListener("scroll", function () {
    if (window.matchMedia('(max-width: 768px)').matches) { //スマホ処理
        if (window.pageYOffset <= 999) {
            philosophy();
        }
        if (window.pageYOffset >= 1000 && window.pageYOffset <= 1599) {
            overview();
        }
        if (window.pageYOffset >= 1600 && window.pageYOffset <= 2599) {
            history();
        }
        if (window.pageYOffset >= 2600 && window.pageYOffset <= 3699) {
            organization();
        }
        if (window.pageYOffset >= 3700) {
            map();
        }
    } else if (window.matchMedia('(min-width:769px)').matches) { //PC処理
        if (window.pageYOffset <= 999) {
            philosophy();
        }
        if (window.pageYOffset >= 1400 && window.pageYOffset <= 1799) {
            overview();
        }
        if (window.pageYOffset >= 1800 && window.pageYOffset <= 3099) {
            history();
        }
        if (window.pageYOffset >= 3100 && window.pageYOffset <= 3799) {
            organization();
        }
        if (window.pageYOffset >= 3800) {
            map();
        }
    }
});

function philosophy() {
    philosophy_li.classList.add("active");
    history_li.classList.remove("active");
    overview_li.classList.remove("active");
    organization_li.classList.remove("active");
    map_li.classList.remove("active");
}

function overview() {
    overview_li.classList.add("active");
    history_li.classList.remove("active");
    philosophy_li.classList.remove("active");
    organization_li.classList.remove("active");
    map_li.classList.remove("active");
}

function history() {
    history_li.classList.add("active");
    philosophy_li.classList.remove("active");
    overview_li.classList.remove("active");
    organization_li.classList.remove("active");
    map_li.classList.remove("active");
}

function organization() {
    organization_li.classList.add("active");
    history_li.classList.remove("active");
    philosophy_li.classList.remove("active");
    overview_li.classList.remove("active");
    map_li.classList.remove("active");
}

function map() {
    map_li.classList.add("active");
    organization_li.classList.remove("active");
    history_li.classList.remove("active");
    philosophy_li.classList.remove("active");
    overview_li.classList.remove("active");
}