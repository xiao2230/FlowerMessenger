let headerNav = document.querySelector('.header_nav');
let usernameInput = document.querySelector('.content_accountLRF .dataArea form .aUsername input');
let passwordInput = document.querySelector('.content_accountLRF .dataArea form .aPassword input');
let passwordEye = document.querySelector('.content_accountLRF .dataArea form .aPassword label+label i.fa-eye-slash');
let remind = document.querySelector('.content_accountLRF .dataArea form .aFormRemind');
let tipMsg01 = document.querySelector('.content_accountLRF .dataArea form .aFormTipMsg01');
let tipMsg02 = document.querySelector('.content_accountLRF .dataArea form .aFormTipMsg02');
let form = document.querySelector('.content_accountLRF .dataArea form');
let accountLoginField = document.querySelector('.content_accountLRF > div:first-child');
let accountPreface = document.querySelectorAll('.content_accountLRF .accountPreface p');
let submitInput = document.querySelector('.content_accountLRF .dataArea form .aFormSubmit input');

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

// 『主要內容區-會員登入前內容』使用者名稱、密碼設定必填
usernameInput.setAttribute('required', true);
passwordInput.setAttribute('required', true);

form.addEventListener('input', () => {
	// 『主要內容區-會員登入前內容』限制使用者名稱、密碼只能打數字+英文，且開頭只能是英文，最多輸入16字元。
	usernameInput.value = usernameInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	passwordInput.value = passwordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	usernameInput.value = usernameInput.value.substring(0, 16);
	passwordInput.value = passwordInput.value.substring(0, 16);
});

form.addEventListener('paste', function(e) {
	// 『主要內容區-會員登入前內容』限制輸入欄不能用貼上的。
	e.preventDefault();
});

passwordEye.addEventListener('click', () => {
	// 『主要內容區-會員登入前內容』密碼：icon換圖、input切換type。
	passwordEye.classList.toggle('fa-eye');
	passwordEye.classList.toggle('fa-eye-slash');
	passwordInput.type = passwordEye.classList.contains('fa-eye') ? 'text' : 'password';
});

usernameInput.addEventListener('focus', () => {
	// 『主要內容區-會員登入前內容』出現使用者名稱輸入提示。
	remind.classList.add('appear01');
	tipMsg01.innerHTML = '請留意輸入說明';
	tipMsg01.classList.add('yellow');
	tipMsg01.classList.remove('red');
});

usernameInput.addEventListener('focusout', () => {
	// 『主要內容區-會員登入前內容』移除使用者名稱輸入提示。
	remind.classList.remove('appear01');

	// 『主要內容區-會員登入前內容』使用者名稱若不符合最小限制，出現警示。
	if (usernameInput.value.length < 6) {
		tipMsg01.innerHTML = '請至少設定6個字元的使用者名稱';
		tipMsg01.classList.add('red');
		tipMsg01.classList.remove('yellow');
	} else {
		tipMsg01.innerHTML = '';
		tipMsg01.classList.remove('yellow');
	}
});

passwordInput.addEventListener('focus', () => {
	// 『主要內容區-會員登入前內容』出現密碼輸入提示。
	remind.classList.add('appear02');
	tipMsg02.innerHTML = '請留意輸入說明';
	tipMsg02.classList.add('yellow');
	tipMsg02.classList.remove('red');
});

passwordInput.addEventListener('focusout', () => {
	// 『主要內容區-會員登入前內容』移除密碼輸入提示。
	remind.classList.remove('appear02');

	// 『主要內容區-會員登入前內容』密碼若不符合最小限制，出現警示。
	if (passwordInput.value.length < 6) {
		tipMsg02.innerHTML = '請至少設定6個字元的密碼';
		tipMsg02.classList.add('red');
		tipMsg02.classList.remove('yellow');
	} else {
		tipMsg02.innerHTML = '';
		tipMsg02.classList.remove('yellow');
	}
});

submitInput.addEventListener('click', () => {
	// 『主要內容區-會員登入前內容』送出表單前，再次確認使用者帳號格式是否正確。
	if (usernameInput.value.length < 6) {
		usernameInput.value = '';
	}

	// 『主要內容區-會員登入前內容』送出表單前，再次確認密碼格式是否正確。
	if (passwordInput.value.length < 6) {
		passwordInput.value = '';
	}
});

document.addEventListener('DOMContentLoaded', () => {
	// 『主要內容區-會員登入前內容』的登入表格顯現
	accountLoginField.classList.add('appear');

	// 『主要內容區-會員登入前內容』的俳句滑入動態
	for (i = 0, t = 0; i < accountPreface.length; i++, t += Math.random() * 500) {
		setTimeout(`accountPreface[${i}].classList.add('locate')`, t);
	}
});
