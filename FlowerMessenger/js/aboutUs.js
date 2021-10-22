let headerNav = document.querySelector('.header_nav');
let cornerPic = document.querySelector('.content_corner img');
let cornerText = document.querySelectorAll('.content_corner .cornerText p');
let cornerTextBgFlower = document.querySelector('.cornerTextBgFlower');

//用來定特效出現的高度參考點
let header = document.querySelector('.header');
let bannerTitle = document.querySelector('.header_bannerTitle .tt1');
let content = document.querySelector('.content');

document.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop;
	
	if (scrollTop >= header.offsetTop) {
		// 『主要內容區-店內角落圖&內文&花朵飄散背景』的主題圖漸入
		cornerPic.classList.add('appear');
	}
	
	if (scrollTop >= bannerTitle.offsetTop) {
		// 『主要內容區-店內角落圖&內文&花朵飄散背景』的內文漸入
		for (i = 0, t = 0; i < cornerText.length; i++, t += Math.random() * 500) {
			setTimeout(`cornerText[${i}].classList.add('locate01')`, t);
		}
		// 『主要內容區-店內角落圖&內文&花朵飄散背景』的花朵飄散
		cornerTextBgFlower.classList.add('locate02');
	}

	if (scrollTop >= content.offsetTop) {
		// 『頂部內容區-導覽列』的新增BackToTop
		headerNav.classList.add('navPlusTop');
	} else {
		// 『頂部內容區-導覽列』的移除BackToTop
		headerNav.classList.remove('navPlusTop');
	}
});
