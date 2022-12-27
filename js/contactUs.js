let headerNav = document.querySelector('.header_nav');
let realNameInput = document.querySelector('.content_cUForm form .cURealName input');
let telInput = document.querySelector('.content_cUForm form .cUTel input');
let questionTextarea = document.querySelector('.content_cUForm form .cUQuestion textarea');
let confirmBtn = document.querySelector('.content_cUForm form .cUFormSubmit input:first-child');
let submitInput = document.querySelector('.content_cUForm form .cUFormSubmit input:last-child')

//用來定特效出現的高度參考點
let content = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
	// 『主要內容區-提問表格』預設部分欄位必填
	realNameInput.setAttribute('required',true)
	telInput.setAttribute('required',true)
	questionTextarea.setAttribute('required',true)
});

document.addEventListener('DOMContentLoaded', () => {
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

// 『主要內容區-提問表格』控制表單送出按鈕是否啟用
submitInput.setAttribute('disabled',true);
confirmBtn.addEventListener('click', () => {
	submitInput.toggleAttribute('disabled');
});