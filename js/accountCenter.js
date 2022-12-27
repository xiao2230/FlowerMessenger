// 『頂部內容區-導覽列』參數宣告
let headerNav = document.querySelector('.header_nav');
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

// 『主要內容區-帳戶中心導覽與內容(側邊導覽)』參數宣告
let body = document.querySelector('body');
let orderInquiryBtn = document.querySelector('.content_accountCenter .accountCenterMenu ul li:first-child');
let editAreaBtn = document.querySelector('.content_accountCenter .accountCenterMenu ul li:nth-child(2)');
let logoutBtn = document.querySelector('.content_accountCenter .accountCenterMenu ul li:last-child');
let logoutYesBtn = document.querySelector('.content_accountCenter .logoutArea .logoutConfirm button');
let logoutNoBtn = document.querySelector('.content_accountCenter .logoutArea .logoutConfirm >i');
let orderInquiryArea = document.querySelector('.content_accountCenter .orderInquiryArea');
let editArea = document.querySelector('.content_accountCenter .editArea');
let logoutArea = document.querySelector('.content_accountCenter .logoutArea');
let logoutAreaMask = document.querySelector('.content_accountCenter .logoutArea .logoutAreaMask');

document.addEventListener('DOMContentLoaded', () => {
	// 『主要內容區-帳戶中心導覽與內容(側邊導覽)』預設打開為訂單查詢
	orderInquiryBtn.classList.add('focus');
	editArea.classList.add('hidden');
	logoutArea.classList.add('hidden');
});

orderInquiryBtn.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(側邊導覽)』點訂單查詢，右側出現對應內容，取消其他按鈕focus
	orderInquiryBtn.classList.add('focus');
	editAreaBtn.classList.remove('focus');
	orderInquiryArea.classList.remove('hidden');
	editArea.classList.add('hidden');
});

editAreaBtn.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(側邊導覽)』點修改資訊，右側出現對應內容，取消其他按鈕focus
	orderInquiryBtn.classList.remove('focus');
	editAreaBtn.classList.add('focus');
	orderInquiryArea.classList.add('hidden');
	editArea.classList.remove('hidden');
});

logoutBtn.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(側邊導覽)』點帳戶登出，右側出現對應內容，取消其他按鈕focus
	orderInquiryBtn.classList.remove('focus');
	editAreaBtn.classList.remove('focus');
	logoutBtn.classList.add('focus');
	logoutArea.classList.remove('hidden');
	body.classList.add('fixed');
});

logoutAreaMask.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(側邊導覽)』點登出提示框以外的地方，會取消提示，回原本畫面
	logoutBtn.classList.remove('focus');
	logoutArea.classList.add('hidden');
	body.classList.remove('fixed');
	if (orderInquiryArea.classList.contains('hidden')) {
		editAreaBtn.classList.add('focus');
	} else {
		orderInquiryBtn.classList.add('focus');
	}
});

logoutNoBtn.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(側邊導覽)』點登出提示框的X，會取消提示，回原本畫面
	logoutBtn.classList.remove('focus');
	logoutArea.classList.add('hidden');
	body.classList.remove('fixed');
	if (orderInquiryArea.classList.contains('hidden')) {
		editAreaBtn.classList.add('focus');
	} else {
		orderInquiryBtn.classList.add('focus');
	}
});

logoutYesBtn.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(側邊導覽)』點登出提示框的確認登出，會到會員登入頁
	window.location.href = 'accountLogin.html';
});

// 『主要內容區-帳戶中心導覽與內容(訂單查詢)』參數宣告
let orderInquiryAllNav = document.querySelector('.content_accountCenter .orderInquiryArea .orderInquiryMenu ul li');

document.addEventListener('DOMContentLoaded', () => {
	// 『主要內容區-帳戶中心導覽與內容(訂單查詢)』預設開啟為全部訂單
	orderInquiryAllNav.classList.add('focus');
});

// 『主要內容區-帳戶中心導覽與內容(修改資訊)』參數宣告
let editAINav = document.querySelector('.content_accountCenter .editArea .editMenu li:first-child');
let editPNav = document.querySelector('.content_accountCenter .editArea .editMenu li:last-child');
let editAIArea = document.querySelector('.content_accountCenter .editArea .editAccountInfo');
let editPArea = document.querySelector('.content_accountCenter .editArea .editpassword');
let verifyArea = document.querySelector('.content_accountCenter .editArea form .aVerify');
let aform = document.querySelector('.content_accountCenter .editArea .editAccountInfo form');
let usernameInput = document.querySelector('.content_accountCenter .editArea form .aUsername input');
let emailInput = document.querySelector('.content_accountCenter .editArea form .aEmail input');
let realNameInput = document.querySelector('.content_accountCenter .editArea form .aRealName input');
let telInput = document.querySelector('.content_accountCenter .editArea form .aTel input');
let verifyInput = document.querySelector('.content_accountCenter .editArea form .aVerify input');
let verifyBtn = document.querySelector('.content_accountCenter .editArea form .aVerify button');
let submitInput01 = document.querySelector('.content_accountCenter .editArea form .aFormSubmit input');
let tipMsg01 = document.querySelector('.content_accountCenter .editArea form .aFormTipMsg01');
let tipMsg02 = document.querySelector('.content_accountCenter .editArea form .aFormTipMsg02');
let tipMsg03 = document.querySelector('.content_accountCenter .editArea form .pFormTipMsg01');
let tipMsg04 = document.querySelector('.content_accountCenter .editArea form .pFormTipMsg02');
let tipMsg05 = document.querySelector('.content_accountCenter .editArea form .pFormTipMsg03');
let pform = document.querySelector('.content_accountCenter .editArea .editpassword form');
let passwordInput = document.querySelector('.content_accountCenter .editArea form .pPassword input');
let newPasswordInput = document.querySelector('.content_accountCenter .editArea form .pNewPassword input');
let confirmPasswordInput = document.querySelector('.content_accountCenter .editArea form .pConfirmPassword input');
let checkedIcon = document.querySelector('.content_accountCenter .editArea form .pConfirmPassword>i');
let remind = document.querySelector('.content_accountCenter .editArea form .pFormRemind');
let passwordEye = document.querySelector('.content_accountCenter .editArea form .pPassword input+label i');
let newPasswordEye = document.querySelector('.content_accountCenter .editArea form .pNewPassword input+label i');
let confirmPasswordEye = document.querySelector('.content_accountCenter .editArea form .pConfirmPassword input+label i');
let submitInput02 = document.querySelector('.content_accountCenter .editArea form .pFormSubmit input');

// 『主要內容區-帳戶中心導覽與內容(修改資訊)』這當作登入後從後台獲取的基本資料
let receiveUsername = 'fm666';
let receiveEmail = 'fm666@gmail.com';
let receiveRealName = '';
let receiveTel = '0966666666';

document.addEventListener('DOMContentLoaded', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』讀取資料庫中已填資料
	usernameInput.value = receiveUsername;
	emailInput.value = receiveEmail;
	realNameInput.value = receiveRealName;
	telInput.value = receiveTel;

	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』預設開啟為修改資料
	editAINav.classList.add('focus');
	editPArea.classList.add('hidden');

	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』部分欄位設定必填
	usernameInput.setAttribute('required', true);
	emailInput.setAttribute('required', true);
	telInput.setAttribute('required', true);
	passwordInput.setAttribute('required', true);
	newPasswordInput.setAttribute('required', true);
	confirmPasswordInput.setAttribute('required', true);

	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』部分欄位預設不啟用。
	usernameInput.setAttribute('disabled', true);
	usernameInput.classList.add('disabled');
	verifyInput.setAttribute('disabled', true);
	verifyBtn.setAttribute('disabled', true);
	verifyInput.classList.add('disabled');
	verifyBtn.classList.add('disabled');
	confirmPasswordInput.setAttribute('disabled', true);
	confirmPasswordInput.classList.add('disabled');
});

editAINav.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』讓上方導覽列來控制內容區顯示什麼內容
	editAINav.classList.add('focus');
	editPNav.classList.remove('focus');
	editAIArea.classList.remove('hidden');
	editPArea.classList.add('hidden');
});

editPNav.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』讓上方導覽列來控制內容區顯示什麼內容
	editAINav.classList.remove('focus');
	editPNav.classList.add('focus');
	editAIArea.classList.add('hidden');
	editPArea.classList.remove('hidden');
});

aform.addEventListener('paste', function(e) {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』限制輸入欄不能用貼上的。
	e.preventDefault();
});

emailInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』Email輸入中去掉錯誤提示。
	tipMsg01.innerHTML = '';
	tipMsg01.classList.remove('red');
});

emailInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』Email輸入完畢，驗證是否符合Email規則，若不符合，跳出提示訊息。
	if (!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailInput.value)) {
		tipMsg01.innerHTML = '請輸入正確的電子郵件';
		tipMsg01.classList.add('red');
	}
});

telInput.addEventListener('input', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』手機號碼限制只能打數字，最多輸入10字元。
	telInput.value = telInput.value.replace(/[^\d]/g, '');
	telInput.value = telInput.value.substring(0, 10);
});

telInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』手機號碼輸入中的提示。
	tipMsg02.innerHTML = '手機號碼參考格式：09xxxxxxxx';
	tipMsg02.classList.add('yellow');
	tipMsg02.classList.remove('red');
});

telInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』手機號碼輸入完畢，驗證是否符合台灣的手機號碼規則，並給出回應；若符合，接收驗證碼按鈕則啟用，反之。
	if (!/^0[9]\d{8}$/.test(telInput.value)) {
		tipMsg02.innerHTML = '請輸入正確的手機號碼';
		tipMsg02.classList.add('red');
		tipMsg02.classList.remove('yellow');
		verifyInput.classList.add('disabled');
		verifyInput.value = '';
		verifyInput.setAttribute('disabled', true);
		verifyInput.removeAttribute('required');
		verifyArea.classList.remove('required');
		verifyBtn.classList.add('disabled');
		verifyBtn.setAttribute('disabled', true);
	} else if (telInput.value == receiveTel) {
		tipMsg02.innerHTML = '';
		tipMsg02.classList.remove('yellow');
		verifyInput.classList.add('disabled');
		verifyInput.value = '';
		verifyInput.setAttribute('disabled', true);
		verifyInput.removeAttribute('required');
		verifyArea.classList.remove('required');
		verifyBtn.classList.add('disabled');
		verifyBtn.setAttribute('disabled', true);
	} else {
		tipMsg02.innerHTML = '';
		tipMsg02.classList.remove('yellow');
		verifyInput.classList.remove('disabled');
		verifyInput.removeAttribute('disabled');
		verifyInput.setAttribute('required', true);
		verifyArea.classList.add('required');
		verifyBtn.classList.remove('disabled');
		verifyBtn.removeAttribute('disabled');
	}
});

submitInput01.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』送出表單前，再次確認Email格式是否正確。
	if (!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailInput.value)) {
		emailInput.value = '';
	}

	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』送出表單前，再次確認手機格式是否正確。
	if (!/^0[9]\d{8}$/.test(telInput.value)) {
		telInput.value = '';
	}
});

pform.addEventListener('input', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』限制密碼只能打數字+英文，且開頭只能是英文，最多輸入16字元。
	passwordInput.value = passwordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	passwordInput.value = passwordInput.value.substring(0, 16);
	newPasswordInput.value = newPasswordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	newPasswordInput.value = newPasswordInput.value.substring(0, 16);
	confirmPasswordInput.value = confirmPasswordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	confirmPasswordInput.value = confirmPasswordInput.value.substring(0, 16);
});

pform.addEventListener('paste', function(e) {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』限制輸入欄不能用貼上的。
	e.preventDefault();
});

passwordEye.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』密碼：icon換圖、input切換type。
	passwordEye.classList.toggle('fa-eye');
	passwordEye.classList.toggle('fa-eye-slash');
	passwordInput.type = passwordEye.classList.contains('fa-eye') ? 'text' : 'password';
});

newPasswordEye.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』新密碼：icon換圖、input切換type。
	newPasswordEye.classList.toggle('fa-eye');
	newPasswordEye.classList.toggle('fa-eye-slash');
	newPasswordInput.type = newPasswordEye.classList.contains('fa-eye') ? 'text' : 'password';
});

confirmPasswordEye.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』確認新密碼：icon換圖、input切換type。
	confirmPasswordEye.classList.toggle('fa-eye');
	confirmPasswordEye.classList.toggle('fa-eye-slash');
	confirmPasswordInput.type = confirmPasswordEye.classList.contains('fa-eye') ? 'text' : 'password';
});

passwordInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』密碼若不符合最小限制，出現警示。
	if (passwordInput.value.length < 6) {
		tipMsg03.innerHTML = '密碼至少6個字元';
		tipMsg03.classList.add('red');
		tipMsg03.classList.remove('yellow');
	} else if (passwordInput.value == newPasswordInput.value) {
		tipMsg04.innerHTML = '新密碼必須與目前密碼不同';
		tipMsg04.classList.add('red');
		tipMsg04.classList.remove('yellow');
		newPasswordInput.value = '';
		confirmPasswordInput.value = '';
		confirmPasswordInput.setAttribute('disabled', true);
		confirmPasswordInput.classList.add('disabled');
		tipMsg05.innerHTML = '';
		checkedIcon.classList.remove('appear');
		confirmPasswordEye.classList.remove('fa-eye');
		confirmPasswordEye.classList.add('fa-eye-slash');
		confirmPasswordInput.type = 'password';
	} else {
		tipMsg03.innerHTML = '';
		tipMsg03.classList.remove('yellow');
	}
});

newPasswordInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』點選新密碼輸入框，提示輸入說明
	remind.classList.add('appear');

	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』新密碼輸入中，會出現的訊息。
	tipMsg04.innerHTML = '請留意輸入說明';
	tipMsg04.classList.add('yellow');
	tipMsg04.classList.remove('red');
});

newPasswordInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』當移出新密碼輸入框，隱藏輸入說明
	remind.classList.remove('appear');

	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』新密碼輸入完成，出現的判斷結果。
	if (newPasswordInput.value.length < 6) {
		tipMsg04.innerHTML = '密碼至少6個字元';
		tipMsg04.classList.add('red');
		tipMsg04.classList.remove('yellow');
		confirmPasswordInput.value = '';
		confirmPasswordInput.setAttribute('disabled', true);
		confirmPasswordInput.classList.add('disabled');
		tipMsg05.innerHTML = '';
		checkedIcon.classList.remove('appear');
		confirmPasswordEye.classList.remove('fa-eye');
		confirmPasswordEye.classList.add('fa-eye-slash');
		confirmPasswordInput.type = 'password';
	} else if (passwordInput.value == newPasswordInput.value) {
		tipMsg04.innerHTML = '新密碼必須與目前密碼不同';
		tipMsg04.classList.add('red');
		tipMsg04.classList.remove('yellow');
		newPasswordInput.value = '';
		confirmPasswordInput.value = '';
		confirmPasswordInput.setAttribute('disabled', true);
		confirmPasswordInput.classList.add('disabled');
		tipMsg05.innerHTML = '';
		checkedIcon.classList.remove('appear');
		confirmPasswordEye.classList.remove('fa-eye');
		confirmPasswordEye.classList.add('fa-eye-slash');
		confirmPasswordInput.type = 'password';
	} else if (
		(newPasswordInput.value != confirmPasswordInput.value && confirmPasswordInput.value != '') ||
		(newPasswordInput.value == confirmPasswordInput.value && tipMsg05.innerHTML == '密碼不同')
	) {
		tipMsg04.innerHTML = '';
		tipMsg04.classList.remove('yellow');
		confirmPasswordInput.value = '';
		tipMsg05.innerHTML = '請再次輸入新密碼';
		tipMsg05.classList.add('red');
		tipMsg05.classList.remove('yellow');
		checkedIcon.classList.remove('appear');
	} else {
		tipMsg04.innerHTML = '';
		tipMsg04.classList.remove('yellow');
		confirmPasswordInput.removeAttribute('disabled');
		confirmPasswordInput.classList.remove('disabled');
	}
});

confirmPasswordInput.addEventListener('focus', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』確認密碼輸入中，會出現的訊息。
	tipMsg05.innerHTML = '請再次輸入新密碼';
	tipMsg05.classList.add('yellow');
	tipMsg05.classList.remove('red');
	checkedIcon.classList.remove('appear');
});

confirmPasswordInput.addEventListener('focusout', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』確認密碼輸入完成，出現的判斷結果。
	if (newPasswordInput.value == confirmPasswordInput.value) {
		checkedIcon.classList.add('appear');
		tipMsg05.innerHTML = '';
		tipMsg05.classList.remove('yellow');
	} else {
		tipMsg05.innerHTML = '密碼不同';
		tipMsg05.classList.add('red');
		tipMsg05.classList.remove('yellow');
	}
});

submitInput02.addEventListener('click', () => {
	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』送出表單前，再次確認目前的密碼是否符合格式需求。
	if (passwordInput.value.length < 6) {
		passwordInput.value = '';
	}

	// 『主要內容區-帳戶中心導覽與內容(修改資訊)』送出表單前，再次確認新密碼是否兩次輸入相同。
	if (newPasswordInput.value != confirmPasswordInput.value) {
		newPasswordInput.value = '';
		confirmPasswordInput.value = '';
		confirmPasswordInput.setAttribute('disabled', true);
		confirmPasswordInput.classList.add('disabled');
		tipMsg05.innerHTML = '';
		checkedIcon.classList.remove('appear');
		confirmPasswordEye.classList.remove('fa-eye');
		confirmPasswordEye.classList.add('fa-eye-slash');
		confirmPasswordInput.type = 'password';
	}
});
