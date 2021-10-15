let aboutUs = document.querySelectorAll('.content_aboutUs p');
let css = document.getElementById('css').sheet;
let fly = document.querySelectorAll('.fly');
let flowerBuy = document.querySelectorAll('.flowerBuy');
let flowerBuyPic = document.querySelectorAll('.flowerBuy a img');
let h2 = document.querySelectorAll('h2');
let takeCareContentText = document.querySelectorAll('.takeCareContentText p');
let takeCareContentPic = document.querySelector('.takeCareContentPic div');
let headerNav = document.querySelector('.header_nav');



//用來定特效出現的高度參考點
let content = document.querySelector('.content');
let contentFlowerBuySecond = document.querySelector('.content_flowerBuy ul li:nth-child(2)');
let contentFlowerBuyLast = document.querySelector('.content_flowerBuy ul li:last-child');



document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    // 『主要內容區-關於我們』的滑入動態
    if (scrollTop >= content.offsetTop / 3) {
        for (i = 0, t = 0; i < aboutUs.length; i++, t += 200) {
            // 第一格要使用引號包起來，但會將原本須帶入的變數一起包住，造成無法讀取for迴圈的i值，所以有兩種寫法
            //第一種："aboutUs["+i+"].classList.add('aboutUsIn')"
            //第二種用ES6的模板字串符 template literal，如下：
            setTimeout(`aboutUs[${i}].classList.add('aboutUsIn')`, t)
        }
        css.insertRule(".content_aboutUs::before{opacity: .3;height: 85%;}", 0);
        fly[0].classList.add('flygo01');
        fly[1].classList.add('flygo02');
        h2[0].classList.add('appear');
    }

    if (scrollTop >= content.offsetTop) {
        // 『頂部內容區-導覽列』的新增置頂
        headerNav.classList.add('navFixedBg');

        // 『主要內容區-商品類別』前兩項的滑入動態
        for (i = 0; i < flowerBuy.length / 2; i++) {
            flowerBuy[i].classList.add('appear');
        }
        for (i = 0; i < flowerBuyPic.length / 2; i++) {
            flowerBuyPic[i].classList.add('locate01');
        }
        h2[1].classList.add('appear');
    } else {
        // 『頂部內容區-導覽列』的移除置頂
        headerNav.classList.remove('navFixedBg');
    }

    // 『主要內容區-商品類別』後兩項的滑入動態
    if (scrollTop >= contentFlowerBuySecond.offsetTop) {
        for (i = flowerBuy.length / 2; i < flowerBuy.length; i++) {
            flowerBuy[i].classList.add('appear');
        }

        for (i = flowerBuyPic.length / 2; i < flowerBuyPic.length; i++) {
            flowerBuyPic[i].classList.add('locate01');
        }
    }

    // 『主要內容區-花朵照護』的滑入動態
    if (scrollTop >= contentFlowerBuyLast.offsetTop) {
        h2[2].classList.add('appear');
        takeCareContentPic.classList.add('locate03');
        css.insertRule(".takeCareContentText::after{opacity: .3;top:30px;}", 0);

        for (i = 0, t = 0; i < takeCareContentText.length; i++, t += Math.random() * 500) {
            setTimeout(`takeCareContentText[${i}].classList.add('locate02')`, t)
        }
    }
})