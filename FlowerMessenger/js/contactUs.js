let headerNav = document.querySelector('.header_nav');
let cuBtnSend = document.getElementById('cuBtnSend');
let cuConfirm = document.getElementById('cuConfirm');

//用來定特效出現的高度參考點
let content = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
    let scrollTop = document.documentElement.scrollTop;

    // 『主要內容區』的內容漸入定位
		content.classList.add('locate');
});

document.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop;

	if (scrollTop > content.offsetTop) {
		// 『頂部內容區-導覽列』的新增BackToTop
		headerNav.classList.add('navPlusTop');
	} else {
		// 『頂部內容區-導覽列』的移除BackToTop
		headerNav.classList.remove('navPlusTop');
	}
});

// 『主要內容區 - 提問表格』控制表單送出按鈕是否啟用
cuBtnSend.setAttribute('disabled',true);
cuConfirm.addEventListener('click', () => {
	cuBtnSend.toggleAttribute('disabled');
});