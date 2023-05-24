// удаление/добавление количества датчиков в Form_1
(function () {
    const formItemMinus = document.querySelectorAll('.item-minus');
    const formItemPlus = document.querySelectorAll('.item-plus');
    formItemMinus.forEach(function (item, i, arr) {
        arr[i].addEventListener('click', () => {
            let qty = arr[i].closest('.li-right').querySelector('input').value;
            qty = qty > 0 ? qty - 1 : 0;
            arr[i].closest('.li-right').querySelector('input').value = qty;
        });
    });
    formItemPlus.forEach(function (item, i, arr) {
        arr[i].addEventListener('click', () => {
            let qty = arr[i].closest('.li-right').querySelector('input').value;
            qty = Number(qty) + 1;
            arr[i].closest('.li-right').querySelector('input').value = qty;
        });
    });

})();

// разворачивание элементов в сайдбаре
(function () {
    const sidebarA = document.querySelectorAll('.sidebar__menu-toogle');
    sidebarA.forEach(function (item, i, arr) {
        arr[i].addEventListener('click', e => {
            e.preventDefault();
            arr[i].closest('.li-toogle').classList.toggle('li-toogle-active');
        });
    });
})();

// mobile nav
(function () {
    const headerMenuIcon = document.querySelector('.m-header__top-menu');
    const headerBottom = document.querySelector('.m-header__bottom');
    const content = document.querySelector('.content');
    const mNav = document.querySelector('.m-nav');
    const mNavHeight = document.querySelector('.m-nav').offsetHeight;
    const sidebar = document.querySelector('.wrapper>.sidebar');
    headerMenuIcon.addEventListener('click', () => {
        const sidebarMarginTop = window.getComputedStyle(sidebar).marginTop;
        headerMenuIcon.classList.toggle('m-header__top-menu-active');
        headerBottom.classList.toggle('content-none');
        content.classList.toggle('content-none');
        mNav.classList.toggle('nav-active');
        if (sidebarMarginTop === '0px') {
            sidebar.style.marginTop = mNavHeight + 'px';
        } else {
            sidebar.style.marginTop = 0 + 'px';
        }
    });
    window.addEventListener('resize', () => {
        location.reload();
    });

})();
