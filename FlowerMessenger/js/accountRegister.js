let headerNav = document.querySelector('.header_nav');
let usernameInput = document.querySelector('.content_accountLRF .dataArea form .aUsername input');
let passwordInput = document.querySelector('.content_accountLRF .dataArea form .aPassword input');
let confirmPasswordInput = document.querySelector('.content_accountLRF .dataArea form .aConfirmPassword input');
let emailInput = document.querySelector('.content_accountLRF .dataArea form .aEmail input');
let telInput = document.querySelector('.content_accountLRF .dataArea form .aTel input');
let verifyInput = document.querySelector('.content_accountLRF .dataArea form .aVerify input');
let verifyBtn = document.querySelector('.content_accountLRF .dataArea form .aVerify button');
let submitInput = document.querySelector('.content_accountLRF .dataArea form .aFormSubmit input');
let passwordEye = document.querySelector('.content_accountLRF .dataArea form .aPassword label+label i');
let confirmPasswordEye = document.querySelector('.content_accountLRF .dataArea form .aConfirmPassword label+label i');
let checkedIcon = document.querySelector('.content_accountLRF .dataArea form .aConfirmPassword>i');
let remind = document.querySelector('.content_accountLRF .dataArea form .aFormRemind');
let tipMsg01 = document.querySelector('.content_accountLRF .dataArea form .aFormTipMsg01');
let tipMsg02 = document.querySelector('.content_accountLRF .dataArea form .aFormTipMsg02');
let tipMsg03 = document.querySelector('.content_accountLRF .dataArea form .aFormTipMsg03');
let tipMsg04 = document.querySelector('.content_accountLRF .dataArea form .aFormTipMsg04');
let tipMsg05 = document.querySelector('.content_accountLRF .dataArea form .aFormTipMsg05');
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

	// 『主要內容區-帳戶登入前內容』全部欄位設定必填
	usernameInput.setAttribute('required', true);
	passwordInput.setAttribute('required', true);
	confirmPasswordInput.setAttribute('required', true);
	emailInput.setAttribute('required', true);
	telInput.setAttribute('required', true);
	verifyInput.setAttribute('required', true);

	// 『主要內容區-帳戶登入前內容』確認密碼、簡訊驗證碼、接收驗證碼按鈕預設不啟用。
	confirmPasswordInput.setAttribute('disabled', true);
	confirmPasswordInput.classList.add('disabled');
	verifyInput.setAttribute('disabled', true);
	verifyBtn.setAttribute('disabled', true);
	verifyInput.classList.add('disabled');
	verifyBtn.classList.add('disabled');
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

form.addEventListener('input', () => {
	// 『主要內容區-帳戶登入前內容』限制使用者名稱、密碼只能打數字+英文，且開頭只能是英文，最多輸入16字元。
	usernameInput.value = usernameInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	usernameInput.value = usernameInput.value.substring(0, 16);
	passwordInput.value = passwordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	passwordInput.value = passwordInput.value.substring(0, 16);
	confirmPasswordInput.value = confirmPasswordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	confirmPasswordInput.value = confirmPasswordInput.value.substring(0, 16);

	// 『主要內容區-帳戶登入前內容』手機號碼限制只能打數字，最多輸入10字元。
	telInput.value = telInput.value.replace(/[^\d]/g, '');
	telInput.value = telInput.value.substring(0, 10);
});

form.addEventListener('paste', function(e) {
	// 『主要內容區-帳戶登入前內容』限制輸入欄不能用貼上的。
	e.preventDefault();
});

passwordEye.addEventListener('click', () => {
	// 『主要內容區-帳戶登入前內容』密碼：icon換圖、input切換type。
	passwordEye.classList.toggle('fa-eye');
	passwordEye.classList.toggle('fa-eye-slash');
	passwordInput.type = passwordEye.classList.contains('fa-eye') ? 'text' : 'password';
});

confirmPasswordEye.addEventListener('click', () => {
	// 『主要內容區-帳戶登入前內容』確認密碼：icon換圖、input切換type。
	confirmPasswordEye.classList.toggle('fa-eye');
	confirmPasswordEye.classList.toggle('fa-eye-slash');
	confirmPasswordInput.type = confirmPasswordEye.classList.contains('fa-eye') ? 'text' : 'password';
});

usernameInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶登入前內容』出現使用者名稱輸入提示。
	remind.classList.add('appear01');
	tipMsg01.innerHTML = '請留意輸入說明';
	tipMsg01.classList.add('yellow');
	tipMsg01.classList.remove('red');
});

usernameInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶登入前內容』移除使用者名稱輸入提示。
	remind.classList.remove('appear01');

	// 『主要內容區-帳戶登入前內容』使用者名稱若不符合最小限制，出現警示。
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
	// 『主要內容區-帳戶登入前內容』出現密碼輸入提示。
	remind.classList.add('appear02');
	tipMsg02.innerHTML = '請留意輸入說明';
	tipMsg02.classList.add('yellow');
	tipMsg02.classList.remove('red');
});

passwordInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶登入前內容』移除密碼輸入提示。
	remind.classList.remove('appear02');

	// 『主要內容區-帳戶登入前內容』密碼若不符合最小限制，出現警示。
	if (passwordInput.value.length < 6) {
		tipMsg02.innerHTML = '請至少設定6個字元的密碼';
		tipMsg02.classList.add('red');
		tipMsg02.classList.remove('yellow');
		confirmPasswordInput.value = '';
		confirmPasswordInput.setAttribute('disabled', true);
		confirmPasswordInput.classList.add('disabled');
		tipMsg03.innerHTML = '';
		checkedIcon.classList.remove('appear');
		confirmPasswordEye.classList.remove('fa-eye');
		confirmPasswordEye.classList.add('fa-eye-slash');
		confirmPasswordInput.type = 'password';
	} else if (
		(passwordInput.value != confirmPasswordInput.value && confirmPasswordInput.value != '') ||
		(passwordInput.value == confirmPasswordInput.value && tipMsg03.innerHTML == '密碼不同')
	) {
		tipMsg02.innerHTML = '';
		tipMsg02.classList.remove('yellow');
		confirmPasswordInput.value = '';
		tipMsg03.innerHTML = '請再次輸入密碼';
		tipMsg03.classList.add('red');
		tipMsg03.classList.remove('yellow');
		checkedIcon.classList.remove('appear');
	} else {
		tipMsg02.innerHTML = '';
		tipMsg02.classList.remove('yellow');
		confirmPasswordInput.removeAttribute('disabled');
		confirmPasswordInput.classList.remove('disabled');
	}
});

confirmPasswordInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶登入前內容』確認密碼輸入中，會出現的訊息。
	tipMsg03.innerHTML = '請再次輸入密碼';
	tipMsg03.classList.add('yellow');
	tipMsg03.classList.remove('red');
	checkedIcon.classList.remove('appear');
});

confirmPasswordInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶登入前內容』確認密碼輸入完成，出現的判斷結果。
	if (passwordInput.value == confirmPasswordInput.value) {
		checkedIcon.classList.add('appear');
		tipMsg03.innerHTML = '';
		tipMsg03.classList.remove('yellow');
	} else {
		tipMsg03.innerHTML = '密碼不同';
		tipMsg03.classList.add('red');
		tipMsg03.classList.remove('yellow');
	}
});

emailInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶登入前內容』Email輸入中去掉錯誤提示。
	tipMsg04.innerHTML = '';
	tipMsg04.classList.remove('red');
});

emailInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶登入前內容』Email輸入完畢，驗證是否符合Email規則，若不符合，跳出提示訊息。
	if (!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailInput.value)) {
		tipMsg04.innerHTML = '請輸入正確的電子郵件';
		tipMsg04.classList.add('red');
	}
});

telInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶登入前內容』手機號碼輸入中的提示。
	tipMsg05.innerHTML = '手機號碼參考格式：09xxxxxxxx';
	tipMsg05.classList.add('yellow');
	tipMsg05.classList.remove('red');
});

telInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶登入前內容』手機號碼輸入完畢，驗證是否符合台灣的手機號碼規則，並給出回應；若符合，接收驗證碼按鈕則啟用，反之。
	if (!/^0[9]\d{8}$/.test(telInput.value)) {
		tipMsg05.innerHTML = '請輸入正確的手機號碼';
		tipMsg05.classList.add('red');
		tipMsg05.classList.remove('yellow');
		verifyInput.classList.add('disabled');
		verifyInput.value = '';
		verifyInput.setAttribute('disabled', true);
		verifyBtn.classList.add('disabled');
		verifyBtn.setAttribute('disabled', true);
	} else {
		tipMsg05.innerHTML = '';
		tipMsg05.classList.remove('yellow');
		verifyInput.classList.remove('disabled');
		verifyInput.removeAttribute('disabled');
		verifyBtn.classList.remove('disabled');
		verifyBtn.removeAttribute('disabled');
	}
});

submitInput.addEventListener('click', (e) => {
	// 『主要內容區-帳戶登入前內容』送出表單前，再次確認使用者帳號格式是否正確。
	if (usernameInput.value.length < 6) {
		usernameInput.value = '';
	}

	// 『主要內容區-帳戶登入前內容』送出表單前，再次確認密碼是否兩次輸入相同。
	if (passwordInput.value != confirmPasswordInput.value) {
		passwordInput.value = '';
		confirmPasswordInput.value = '';
		confirmPasswordInput.setAttribute('disabled', true);
		confirmPasswordInput.classList.add('disabled');
		tipMsg03.innerHTML = '';
		checkedIcon.classList.remove('appear');
		confirmPasswordEye.classList.remove('fa-eye');
		confirmPasswordEye.classList.add('fa-eye-slash');
		confirmPasswordInput.type = 'password';
	}

	// 『主要內容區-帳戶登入前內容』送出表單前，再次確認Email格式是否正確。
	if (!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailInput.value)) {
		emailInput.value = '';
	}

	// 『主要內容區-帳戶登入前內容』送出表單前，再次確認手機格式是否正確。
	if (!/^0[9]\d{8}$/.test(telInput.value)) {
		telInput.value = '';
	}

	// 『主要內容區-帳戶登入前內容』若資料都正確，註冊成功，會跳轉到帳戶中心(先取消資料送出的動作)
	if (
		usernameInput.value != '' &&
		passwordInput.value != '' &&
		confirmPasswordInput.value != '' &&
		emailInput.value != '' &&
		telInput.value != '' &&
		verifyInput.value != ''
	) {
		e.preventDefault();
		window.location.href = 'accountCenter.html';
	}
});
