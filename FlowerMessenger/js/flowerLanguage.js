let headerNav = document.querySelector('.header_nav');
let contentPreface = document.querySelectorAll('.content_preface p');
let contentSlider = document.querySelector('.content_slider');
let contentPrefaceBg = document.querySelector('.content_preface .prefaceBg');

//用來定特效出現的高度參考點
let content = document.querySelector('.content');
let bannerTitle = document.querySelector('.header_bannerTitle .tt1');
let header = document.querySelector('.header');

document.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop;

	if (scrollTop >= header.offsetTop) {
		// 『主要內容區-前言』的內文漸入，背景漸入
		for (i = 0, t = 0; i < contentPreface.length; i++, t += 400) {
			setTimeout(`contentPreface[${i}].classList.add('locate01')`, t);
		}
		contentPrefaceBg.classList.add('appear');
	}

	if (scrollTop >= bannerTitle.offsetTop) {
		// 『主要內容區-圖片與花語』的內容漸入
		contentSlider.classList.add('locate02');
	}

	if (scrollTop >= content.offsetTop) {
		// 『頂部內容區-導覽列』的新增BackToTop
		headerNav.classList.add('navPlusTop');
	} else {
		// 『頂部內容區-導覽列』的移除BackToTop
		headerNav.classList.remove('navPlusTop');
	}
});

let sliderItem = document.querySelector('.sliderItem');

let clicked = false;
let xAxis;
let x;

contentSlider.addEventListener('mouseup',()=>{
    contentSlider.style.cursor = 'grab';
})

contentSlider.addEventListener('mousedown',e=>{
    clicked = true;
    xAxis = e.offsetX - sliderItem.offsetLeft;

    contentSlider.style.cursor = 'grabbing';
})

window.addEventListener('mouseup',()=>{
    clicked = false;
})

contentSlider.addEventListener('mousemove',e=>{
    if(!clicked) return;
    e.preventDefault();

    x = e.offsetX;
    sliderItem.style.left = `${x-xAxis}px`;
})

// 似乎還是需要一層slider包住全部的輪播，可以設多一層 寬高100%


