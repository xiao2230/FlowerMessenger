let contentAboutUs = document.querySelector('.content_aboutUs');
let aboutUsText = document.querySelectorAll('.content_aboutUs p');
let fly = document.querySelectorAll('.fly');
let orderBouquet = document.querySelectorAll('.orderBouquet');
let orderBouquetPic = document.querySelectorAll('.orderBouquet a img');
let h2 = document.querySelectorAll('h2');
let contentNursery = document.querySelector('.nurseryText');
let nurseryText = document.querySelectorAll('.nurseryText p');
let nurseryPic = document.querySelector('.nurseryPic div');
let headerNav = document.querySelector('.header_nav');

//用來定特效出現的高度參考點
let content = document.querySelector('.content');
let contentorderBouquetSecond = document.querySelector('.content_orderBouquet ul li:nth-child(2)');
let contentorderBouquetLast = document.querySelector('.content_orderBouquet ul li:last-child');

document.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop;

	// 『主要內容區-關於我們』的滑入動態
	if (scrollTop > content.offsetTop / 3) {
		for (i = 0, t = 0; i < aboutUsText.length; i++, t += 200) {
			// 第一格要使用引號包起來，但會將原本須帶入的變數一起包住，造成無法讀取for迴圈的i值，所以有兩種寫法
			//第一種："aboutUsText["+i+"].classList.add('aboutUsIn')"
			//第二種用ES6的模板字串符 template literal，如下：
			setTimeout(`aboutUsText[${i}].classList.add('aboutUsIn')`, t);
		}
		contentAboutUs.classList.remove('disappear');
		contentAboutUs.classList.add('appear');

		fly[0].classList.add('flygo01');
		fly[1].classList.add('flygo02');
		h2[0].classList.add('appear');
	}

	if (scrollTop > content.offsetTop) {
		// 『頂部內容區-導覽列』的新增置頂
		headerNav.classList.add('navFixedBg');

		// 『主要內容區-商品類別』前兩項的滑入動態
		for (i = 0; i < orderBouquet.length / 2; i++) {
			orderBouquet[i].classList.add('appear');
		}
		for (i = 0; i < orderBouquetPic.length / 2; i++) {
			orderBouquetPic[i].classList.add('locate');
		}
		h2[1].classList.add('appear');
	} else {
		// 『頂部內容區-導覽列』的移除置頂
		headerNav.classList.remove('navFixedBg');
	}

	// 『主要內容區-商品類別』後兩項的滑入動態
	if (scrollTop > contentorderBouquetSecond.offsetTop) {
		for (i = orderBouquet.length / 2; i < orderBouquet.length; i++) {
			orderBouquet[i].classList.add('appear');
		}

		for (i = orderBouquetPic.length / 2; i < orderBouquetPic.length; i++) {
			orderBouquetPic[i].classList.add('locate');
		}
	}

	// 『主要內容區-花朵照護』的滑入動態
	if (scrollTop > contentorderBouquetLast.offsetTop) {
		h2[2].classList.add('appear');
		nurseryPic.classList.add('locate');
		contentNursery.classList.remove('disappear');
		contentNursery.classList.add('appear');

		for (i = 0, t = 0; i < nurseryText.length; i++, t += Math.random() * 500) {
			setTimeout(`nurseryText[${i}].classList.add('locate')`, t);
		}
	}
});
