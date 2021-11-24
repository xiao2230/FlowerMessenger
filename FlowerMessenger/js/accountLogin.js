let headerNav = document.querySelector('.header_nav');
let usernameInput = document.querySelector('.content_accountLogin .accountLoginField .dataArea form .aUsername input');
let passwordInput = document.querySelector('.content_accountLogin .accountLoginField .dataArea form .aPassword input');
let passwordEye = document.querySelector(
	'.content_accountLogin .accountLoginField .dataArea form .aPassword label+label i.fa-eye-slash'
);
let remind = document.querySelector('.content_accountLogin .accountLoginField .dataArea form .aFormRemind');
let form = document.querySelector('.content_accountLogin .accountLoginField .dataArea form');
let registerBtn = document.querySelector(
	'.content_accountLogin .accountLoginField .dataArea .changeOption .registerBtn'
);
let forgetPasswordBtn = document.querySelector(
	'.content_accountLogin .accountLoginField .dataArea .changeOption .forgetPasswordBtn'
);

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

// 『主要內容區-會員登入』使用者名稱、密碼設定必填；並設定上下限
usernameInput.setAttribute('required', true);
usernameInput.setAttribute('pattern', '.{6,16}');
passwordInput.setAttribute('required', true);
passwordInput.setAttribute('pattern', '.{6,16}');

form.addEventListener('keydown', () => {
	// 『主要內容區-會員登入』限制使用者名稱、密碼只能打數字+英文，且開頭只能是英文。
	usernameInput.value = usernameInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	passwordInput.value = passwordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
});

form.addEventListener('keyup', () => {
	// 『主要內容區-會員登入』限制使用者名稱、密碼只能打數字+英文，且開頭只能是英文。
	usernameInput.value = usernameInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
	passwordInput.value = passwordInput.value.replace(/^[0-9_]{1}|[\W]|[_]/g, '');
});

form.addEventListener('paste', function(e) {
	// 『主要內容區-會員登入』限制使用者名稱、密碼不能用貼上的。
	e.preventDefault();
});

passwordEye.addEventListener('click', () => {
	// 『主要內容區-會員登入』共做兩件事：icon換圖、input切換type。
	passwordEye.classList.toggle('fa-eye');
	passwordEye.classList.toggle('fa-eye-slash');
	passwordInput.type = passwordEye.classList.contains('fa-eye') ? 'text' : 'password';
});

usernameInput.addEventListener('focus', () => {
	// 『主要內容區-會員登入』出現輸入提示訊息。
	remind.classList.add('appear01');
});

usernameInput.addEventListener('focusout', () => {
	// 『主要內容區-會員登入』移除輸入提示訊息。
	remind.classList.remove('appear01');
});

passwordInput.addEventListener('focus', () => {
	// 『主要內容區-會員登入』出現輸入提示訊息。
	remind.classList.add('appear02');
});

passwordInput.addEventListener('focusout', () => {
	// 『主要內容區-會員登入』移除輸入提示訊息。
	remind.classList.remove('appear02');
});
