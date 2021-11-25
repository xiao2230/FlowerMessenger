let headerNav = document.querySelector('.header_nav');
let usernameInput = document.querySelector('.content_accountLRF  .dataArea form .aUsername input');
let passwordInput = document.querySelector('.content_accountLRF  .dataArea form .aPassword input');
let passwordEye = document.querySelector('.content_accountLRF  .dataArea form .aPassword label+label i.fa-eye-slash');
let remind = document.querySelector('.content_accountLRF  .dataArea form .aFormRemind');
let form = document.querySelector('.content_accountLRF  .dataArea form');
let accountLoginField = document.querySelector('.content_accountLRF > div:first-child');
let accountPreface = document.querySelectorAll('.content_accountLRF .accountPreface p');

//用來定特效出現的高度參考點
let content = document.querySelector('.content');

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

// 『主要內容區-會員登入前內容』部分欄位設定必填，或最小字元
usernameInput.setAttribute('required', true);
usernameInput.setAttribute('pattern', '.{6,}');
passwordInput.setAttribute('required', true);
passwordInput.setAttribute('pattern', '.{6,}');


form.addEventListener('input', () => {
	// 『主要內容區-會員登入前內容』限制使用者名稱、密碼只能打數字+英文，且開頭只能是英文，最多輸入16字元。
	usernameInput.value = usernameInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	passwordInput.value = passwordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	usernameInput.value = usernameInput.value.substring(0,16);
	passwordInput.value = passwordInput.value.substring(0,16);
});

form.addEventListener('paste', function(e) {
	// 『主要內容區-會員登入前內容』限制使用者名稱、密碼不能用貼上的。
	e.preventDefault();
});

passwordEye.addEventListener('click', () => {
	// 『主要內容區-會員登入前內容』密碼：icon換圖、input切換type。
	passwordEye.classList.toggle('fa-eye');
	passwordEye.classList.toggle('fa-eye-slash');
	passwordInput.type = passwordEye.classList.contains('fa-eye') ? 'text' : 'password';
});

usernameInput.addEventListener('focus', () => {
	// 『主要內容區-會員登入前內容』使用者名稱、密碼出現輸入提示訊息。
	remind.classList.add('appear01');
});

usernameInput.addEventListener('focusout', () => {
	// 『主要內容區-會員登入前內容』使用者名稱、密碼移除輸入提示訊息。
	remind.classList.remove('appear01');
});

passwordInput.addEventListener('focus', () => {
	// 『主要內容區-會員登入前內容』使用者名稱、密碼出現輸入提示訊息。
	remind.classList.add('appear02');
});

passwordInput.addEventListener('focusout', () => {
	// 『主要內容區-會員登入前內容』使用者名稱、密碼移除輸入提示訊息。
	remind.classList.remove('appear02');
});

document.addEventListener('DOMContentLoaded', () => {
    // 『主要內容區-會員登入前內容』的登入表格顯現
    accountLoginField.classList.add('appear');

	// 『主要內容區-會員登入前內容』的俳句滑入動態
	for (i = 0, t = 0; i < accountPreface.length; i++, t += Math.random() * 500) {
		setTimeout(`accountPreface[${i}].classList.add('locate')`, t);
	}
});
