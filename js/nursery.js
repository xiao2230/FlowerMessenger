let headerNav = document.querySelector('.header_nav');
let contentPreface = document.querySelector('.content_preface');
let contentIllustration = document.querySelector('.content_illustration');
let contentArticle = document.querySelector('.content_article');
let contentConclusion = document.querySelector('.content_conclusion');

//用來定特效出現的高度參考點
let content = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
	// 『主要內容區』的內容漸入
	contentPreface.classList.add('locate');
	contentIllustration.classList.add('locate');
	contentArticle.classList.add('locate');
	contentConclusion.classList.add('locate');
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
