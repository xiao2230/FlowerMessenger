let headerNav = document.querySelector('.header_nav');
let btnSend = document.getElementById('btnSend');
let confirm = document.getElementById('confirm');

//用來定特效出現的高度參考點
let content = document.querySelector('.content');

document.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop;

	if (scrollTop >= content.offsetTop) {
		// 『頂部內容區-導覽列』的新增BackToTop
		headerNav.classList.add('navPlusTop');
	} else {
		// 『頂部內容區-導覽列』的移除BackToTop
		headerNav.classList.remove('navPlusTop');
	}
});

// 『主要內容區 - 提問表格』控制表單送出按鈕是否啟用
btnSend.disabled = true;
confirm.addEventListener('click', () => {
	btnSend.toggleAttribute('disabled');
});
