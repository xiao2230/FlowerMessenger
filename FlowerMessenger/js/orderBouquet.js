let headerNav = document.querySelector('.header_nav');
let contentPreface = document.querySelectorAll('.content_preface p');
let contentPrefaceBg = document.querySelector('.content_preface .prefaceBg');
let bouquetType = document.querySelectorAll('.content_Bouquet .bouquetType');
let bouquetPic = document.querySelectorAll('.content_Bouquet .bouquetType>a img');

//用來定特效出現的高度參考點
let header = document.querySelector('.header');
let content = document.querySelector('.content');
let bouquetPicSmall = document.querySelector('.content_Bouquet .bouquetType:nth-child(1)');
let bouquetPicMix = document.querySelector('.content_Bouquet .bouquetType:nth-child(2)');
let bouquetPicSingle = document.querySelector('.content_Bouquet .bouquetType:nth-child(3)');

document.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop;

	if (scrollTop > header.offsetTop) {
		// 『主要內容區-前言』的內文漸入，背景顯現
		for (i = 0, t = 0; i < contentPreface.length; i++, t += 400) {
			setTimeout(`contentPreface[${i}].classList.add('locate')`, t);
		}
		contentPrefaceBg.classList.add('appear');
	}

	if (scrollTop > content.offsetTop/2) {
		// 『主要內容區 - 花束訂購種類』的區塊顯現，圖片漸入定位
		bouquetPic[0].classList.add('locate');
		bouquetPic[1].classList.add('locate');
        bouquetType[0].classList.add('appear');
	}

	if (scrollTop > bouquetPicSmall.offsetTop) {
		// 『主要內容區 - 花束訂購種類』的區塊顯現，圖片漸入定位
		bouquetPic[2].classList.add('locate');
		bouquetPic[3].classList.add('locate');
        bouquetType[1].classList.add('appear');
	}

	if (scrollTop > bouquetPicMix.offsetTop) {
		// 『主要內容區 - 花束訂購種類』的區塊顯現，圖片漸入定位
		bouquetPic[4].classList.add('locate');
		bouquetPic[5].classList.add('locate');
        bouquetType[2].classList.add('appear');
	}

	if (scrollTop > bouquetPicSingle.offsetTop) {
		// 『主要內容區 - 花束訂購種類』的區塊顯現，圖片漸入定位
		bouquetPic[6].classList.add('locate');
		bouquetPic[7].classList.add('locate');
        bouquetType[3].classList.add('appear');
	}

	if (scrollTop > content.offsetTop) {
		// 『頂部內容區-導覽列』的新增BackToTop
		headerNav.classList.add('navPlusTop');
	} else {
		// 『頂部內容區-導覽列』的移除BackToTop
		headerNav.classList.remove('navPlusTop');
	}
});
