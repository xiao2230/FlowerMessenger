let headerNav = document.querySelector('.header_nav');
let telInput = document.querySelector('.content_accountLRF .dataArea form .aTel input');
let submitInput = document.querySelector('.content_accountLRF .dataArea form .aFormSubmit input');
let checkedIcon02 = document.querySelector('.content_accountLRF .dataArea form .aTel>i');
let tipMsg04 = document.querySelector('.content_accountLRF .dataArea form .aFormTipMsg04');
let form = document.querySelector('.content_accountLRF .dataArea form');
let accountLoginField = document.querySelector('.content_accountLRF > div:first-child');
let accountPreface = document.querySelectorAll('.content_accountLRF .accountPreface p');

//用來定特效出現的高度參考點
let content = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
	// 『主要內容區-帳戶登入前內容』的登入表格顯現
	accountLoginField.classList.add('appear');

	// 『主要內容區-帳戶登入前內容』的俳句滑入動態
	for (i = 0, t = 0; i < accountPreface.length; i++, t += Math.random() * 500) {
		setTimeout(`accountPreface[${i}].classList.add('locate')`, t);
	}

	// 『主要內容區-帳戶登入前內容』電話為必填
	telInput.setAttribute('required', true);
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

form.addEventListener('paste', function(e) {
	// 『主要內容區-帳戶登入前內容』限制輸入欄不能用貼上的。
	e.preventDefault();
});

telInput.addEventListener('input', () => {
	// 『主要內容區-帳戶登入前內容』手機號碼限制只能打數字。
	telInput.value = telInput.value.replace(/[^\d]/g, '');
});

telInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶登入前內容』手機號碼輸入中的提示。
	tipMsg04.innerHTML = '手機號碼參考格式：09xxxxxxxx';
	tipMsg04.classList.add('yellow');
	tipMsg04.classList.remove('red');
	checkedIcon02.classList.remove('appear');
});

telInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶登入前內容』手機號碼輸入完畢，驗證是否符合台灣的手機號碼規則，並給出回應；若符合，接收驗證碼按鈕則啟用，反之。
	if (!/^0[9]\d{8}$/.test(telInput.value)) {
		tipMsg04.innerHTML = '請輸入正確的手機號碼';
		tipMsg04.classList.add('red');
		tipMsg04.classList.remove('yellow');
	} else {
		checkedIcon02.classList.add('appear');
		tipMsg04.innerHTML = '';
		tipMsg04.classList.remove('yellow');
	}
});

submitInput.addEventListener('click', () => {
	// 『主要內容區-帳戶登入前內容』送出表單前，再次確認手機格式是否正確。
	if (!/^0[9]\d{8}$/.test(telInput.value)) {
		telInput.value = '';
	}
});
