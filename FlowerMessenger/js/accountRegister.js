let headerNav = document.querySelector('.header_nav');
let usernameInput = document.querySelector('.content_accountLRF  .dataArea form .aUsername input');
let passwordInput = document.querySelector('.content_accountLRF  .dataArea form .aPassword input');
let confirmPasswordInput = document.querySelector('.content_accountLRF  .dataArea form .aConfirmPassword input');
let realNameInput = document.querySelector('.content_accountLRF  .dataArea form .aRealName input');
let telInput = document.querySelector('.content_accountLRF  .dataArea form .aTel input');
let verifyInput = document.querySelector('.content_accountLRF  .dataArea form .aVerify input');
let submitInput = document.querySelector('.content_accountLRF  .dataArea form .aFormSubmit input');
let passwordEye = document.querySelector('.content_accountLRF  .dataArea form .aPassword label+label i.fa-eye-slash');
let confirmPasswordEye = document.querySelector('.content_accountLRF .dataArea form .aConfirmPassword label+label i.fa-eye-slash');
let checkedIcon01 = document.querySelector('.content_accountLRF .dataArea form .aConfirmPassword>i');
let checkedIcon02 = document.querySelector('.content_accountLRF .dataArea form .aTel>i');
let verifyBtn = document.querySelector('.content_accountLRF .dataArea form .aFormOption.aVerify button');
let remind = document.querySelector('.content_accountLRF  .dataArea form .aFormRemind');
let tipMsg01 = document.querySelector('.content_accountLRF  .dataArea form .aFormTipMsg01');
let tipMsg02 = document.querySelector('.content_accountLRF  .dataArea form .aFormTipMsg02');
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
confirmPasswordInput.setAttribute('required', true);
realNameInput.setAttribute('required', true);
telInput.setAttribute('required', true);
verifyInput.setAttribute('required', true);

// 『主要內容區-會員登入前內容』接收驗證碼按鈕預設不啟用。
verifyBtn.setAttribute('disabled', true);

form.addEventListener('input', () => {
	// 『主要內容區-會員登入前內容』限制使用者名稱、密碼只能打數字+英文，且開頭只能是英文，最多輸入16字元。
	usernameInput.value = usernameInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	usernameInput.value = usernameInput.value.substring(0, 16);
	passwordInput.value = passwordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	passwordInput.value = passwordInput.value.substring(0, 16);
	confirmPasswordInput.value = confirmPasswordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	confirmPasswordInput.value = confirmPasswordInput.value.substring(0, 16);
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

confirmPasswordEye.addEventListener('click', () => {
	// 『主要內容區-會員登入前內容』確認密碼：icon換圖、input切換type。
	confirmPasswordEye.classList.toggle('fa-eye');
	confirmPasswordEye.classList.toggle('fa-eye-slash');
	confirmPasswordInput.type = confirmPasswordEye.classList.contains('fa-eye') ? 'text' : 'password';
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

confirmPasswordInput.addEventListener('focus', () => {
	// 『主要內容區-會員登入前內容』確認密碼輸入中，會出現的訊息。
	tipMsg01.innerHTML = '請再次輸入密碼';
	tipMsg01.classList.add('yellow');
	tipMsg01.classList.remove('red');
	checkedIcon01.classList.remove('appear');
});

confirmPasswordInput.addEventListener('focusout', () => {
	// 『主要內容區-會員登入前內容』確認密碼輸入完成，出現的判斷結果。
	if (passwordInput.value == confirmPasswordInput.value && confirmPasswordInput.value != 0) {
		checkedIcon01.classList.add('appear');
		tipMsg01.innerHTML = '';
		tipMsg01.classList.remove('yellow');
	} else {
		tipMsg01.innerHTML = '密碼不同';
		tipMsg01.classList.add('red');
		tipMsg01.classList.remove('yellow');
	}
});

submitInput.addEventListener('click', () => {
	// 『主要內容區-會員登入前內容』送出表單前，再次確認密碼是否兩次輸入相同。
	if (passwordInput.value != confirmPasswordInput.value || tipMsg01.innerHTML == '密碼不同') {
		passwordInput.value = '';
		confirmPasswordInput.value = '';
		checkedIcon01.classList.remove('appear');
	}
});

telInput.addEventListener('focus',()=>{
	// 『主要內容區-會員登入前內容』手機號碼輸入中的提示。
	tipMsg02.innerHTML = '手機號碼格式為09xxxxxxxx，請按照範例輸入';
	tipMsg02.classList.add('yellow');
	tipMsg02.classList.remove('red');
	checkedIcon02.classList.remove('appear');
})

telInput.addEventListener('focusout',()=>{
	// 『主要內容區-會員登入前內容』手機號碼輸入完畢，驗證是否符合台灣的手機號碼規則，並給出回應；若符合，接收驗證碼按鈕則啟用，反之。
	if(!(/^0[9]\d{8}$/.test(telInput.value))){
		tipMsg02.innerHTML = '請輸入正確的手機號碼';
		tipMsg02.classList.add('red');
		tipMsg02.classList.remove('yellow');
		verifyBtn.classList.remove('telOk');
		verifyBtn.setAttribute('disabled', true);
	}else{
		checkedIcon02.classList.add('appear')
		tipMsg02.innerHTML = '';
		tipMsg02.classList.remove('yellow');
		verifyBtn.classList.add('telOk');
		verifyBtn.removeAttribute('disabled');
	}
})

verifyBtn.addEventListener('click',()=>{
	console.log('123')
})

document.addEventListener('DOMContentLoaded', () => {
	// 『主要內容區-會員登入前內容』的登入表格顯現
	accountLoginField.classList.add('appear');

	// 『主要內容區-會員登入前內容』的俳句滑入動態
	for (i = 0, t = 0; i < accountPreface.length; i++, t += Math.random() * 500) {
		setTimeout(`accountPreface[${i}].classList.add('locate')`, t);
	}
});
