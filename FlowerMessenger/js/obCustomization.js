let headerNav = document.querySelector('.header_nav');
let contentPreface = document.querySelectorAll('.content_preface p');
let contentPrefaceBg = document.querySelector('.content_preface .prefaceBg');
let contentPolicyPic = document.querySelector('.content_policy p img');
let contentPolicyText = document.querySelectorAll('.content_policy p:not(:first-child)');
let contentPortfolioPic = document.querySelectorAll('.content_portfolio img');

//用來定特效出現的高度參考點
let bannerTitle = document.querySelector('.header_bannerTitle .tt1');
let content = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
	let scrollTop = document.documentElement.scrollTop;

	// 『主要內容區-俳句』的內文漸入，背景漸入
	for (i = 0, t = 0; i < contentPreface.length; i++, t += 400) {
		setTimeout(`contentPreface[${i}].classList.add('locate')`, t);
	}
	contentPrefaceBg.classList.add('appear');
});

document.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > bannerTitle.offsetTop) {
		// 『主要內容區-訂購須知』的圖片顯現
		contentPolicyPic.classList.add('appear');
	}

	if (scrollTop > content.offsetTop) {
		// 『頂部內容區-導覽列』的新增BackToTop
		headerNav.classList.add('navPlusTop');
	} else {
		// 『頂部內容區-導覽列』的移除BackToTop
		headerNav.classList.remove('navPlusTop');
	}

    if (scrollTop > contentPolicyPic.offsetTop-200) {
        // 『主要內容區-訂購須知』的內文漸入
		for (i = 0, t = 0; i < contentPolicyText.length; i++, t += Math.random() * 500) {
			setTimeout(`contentPolicyText[${i}].classList.add('locate')`, t);
		}
	}

    if (scrollTop > contentPolicyText[0].offsetTop-200) {
        // 『主要內容區-參考作品集』的圖片漸入
		for (i = 0, t = 0; i < contentPortfolioPic.length; i++, t += Math.random() * 500) {
			setTimeout(`contentPortfolioPic[${i}].classList.add('appear')`, t);
		}
	}
});
