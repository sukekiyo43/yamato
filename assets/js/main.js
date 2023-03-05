// ハンバーガーメニュー開閉
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    menu_ul.classList.toggle('open');
    line1.classList.toggle('open');
    line2.classList.toggle('open');
});
// 背景をクリックしてもメニューを閉じる設定
nav.addEventListener('click', function () {
    nav.classList.toggle('open');
    menu_ul.classList.toggle('open');
    line1.classList.toggle('open');
    line2.classList.toggle('open');
});



