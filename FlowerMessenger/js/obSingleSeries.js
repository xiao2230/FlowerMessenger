let headerNav = document.querySelector('.header_nav');
let contentOrderArea = document.querySelector('.content_oBArea');

//用來定特效出現的高度參考點
let content = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
    // 『主要內容區-訂購區』的內容漸入
    contentOrderArea.classList.add('appear');
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
})

Vue.createApp({
	data() {
		return {
			// 展示圖：資料
			bouquetPic: [
				{
					id: 'single01',
					name: '單品系列01',
					image: 'images/oBSingleSeries/single01.jpg',
					mask: 'noMask'
				},
				{
					id: 'single02',
					name: '單品系列01',
					image: 'images/oBSingleSeries/single01.jpg',
					mask: 'openMask'
				},
				{
					id: 'single03',
					name: '單品系列02',
					image: 'images/oBSingleSeries/single02.jpg',
					mask: 'noMask'
				},
				{
					id: 'single04',
					name: '單品系列03',
					image: 'images/oBSingleSeries/single03.jpg',
					mask: 'noMask'
				}
			],
			// 花束訂購：資料
			bouquetText: {
				chName: '單品系列',
				enName: 'Single Series',
				basicPrice: 350,
				tip: '提示：此價格已包含運費，自取另享物流費用折抵。每週鮮花因集體購買，恕不能指定花材，花藝師會依據當季的花材做搭配。',
				feature: '每週選擇一種新鮮花材配送給您， 週一、二（不指定時間）配送至您指定的地點。推薦給喜歡簡單的你，生活裡有花就開心。',
				weeks: [
					{
						val: 1,
						id: 'oBWeek01',
						name: 'oBWeek',
						checked: true
					},
					{
						val: 4,
						id: 'oBWeek04',
						name: 'oBWeek',
						checked: false
					},
					{
						val: 8,
						id: 'oBWeek08',
						name: 'oBWeek',
						checked: false
					},
					{
						val: '長期方案',
						id: 'oBWeekstanding',
						name: 'oBWeek',
						checked: false
					}
				],
				num: {
					val: '1',
					id: 'oBNum',
					name: 'oBNum'
				},
				calendar: {
					id: 'oBCal',
					name: 'oBCal'
				},
				frequency: [
					{
						val: '每週配送',
						id: 'oBFrequency01',
						name: 'oBFrequency',
						checked: true
					},
					{
						val: '隔週配送',
						id: 'oBFrequency02',
						name: 'oBFrequency',
						checked: false
					}
				],
				submitBtn: {
					id: 'oBBtnSend',
					name: 'oBBtnSend',
					val: '加入購物車'
				}
			}
		};
	},
	methods: {
		// 展示圖：點小圖，更換大圖；被選中小圖，增加灰色遮罩；其他小圖，移除灰色遮罩。
		changePic(p) {
			if (p.id != this.bouquetPic[0].id) {
				this.bouquetPic[0].name = p.name;
				this.bouquetPic[0].image = p.image;

				for (i = 0; i < this.bouquetPic.length; i++) {
					this.bouquetPic[i].mask = 'noMask';
					if (p.name == this.bouquetPic[i].name) {
						p.mask = 'openMask';
					}
				}
			}
		},
		// 花束訂購(選擇週數、配送頻率)：被選中者，checked資料改為true，其餘皆為false
		choosePlan(w) {
			if (w.name == this.bouquetText.weeks[0].name) {
				for (i = 0; i < this.bouquetText.weeks.length; i++) {
					this.bouquetText.weeks[i].checked = false;
				}
			} else {
				for (i = 0; i < this.bouquetText.frequency.length; i++) {
					this.bouquetText.frequency[i].checked = false;
				}
			}
			w.checked = true;
		},
		// 花束訂購(數量設定)：keyup事件，鍵盤輸入數字，增加max/min限制。
		keyRestrict() {
			this.bouquetText.num.val = this.bouquetText.num.val > 100 ? 100 : this.bouquetText.num.val <= 0 ? '' : this.bouquetText.num.val;
		},
		// 花束訂購(數量設定)：額外添增的減少數量按鈕，並設定無法低於1的限制。
		minus() {
			this.bouquetText.num.val--;
			this.bouquetText.num.val = this.bouquetText.num.val < 1 ? 1 : this.bouquetText.num.val;
		},
		// 花束訂購(數量設定)：額外添增的增加數量按鈕，並設定無法高於100的限制。
		plus() {
			this.bouquetText.num.val++;
			this.bouquetText.num.val = this.bouquetText.num.val > 100 ? 100 : this.bouquetText.num.val;
		}
	},
	computed: {
		// 花束訂購(選擇週數)：用於辨別此時被選定的週數(checked=true)為何，對應到的數字是什麼。
		chooseweek() {
			for (i = 0; i < this.bouquetText.weeks.length; i++) {
				if (this.bouquetText.weeks[i].checked == true) {
					return this.bouquetText.weeks[i].val == '長期方案' ? 1 : this.bouquetText.weeks[i].val;
				}
			}
		},
		// 花束訂購(總金額)：總金額 = 被選定週數 X 花束基本價格 X 數量設定，並加上千分位自動添加。
		totalPrice() {
			let t = this.chooseweek * this.bouquetText.basicPrice * this.bouquetText.num.val;
			let tString = t.toString();
			return tString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
	}
}).mount('.content_oBArea');

// 花束訂購(數量設定)：使負數、小數點無法鍵盤輸入。
document.getElementById('oBNum').addEventListener('keypress', function(event) {
	if (event.keyCode == 45 || event.keyCode == 46 || event.keyCode == 13) {
		event.preventDefault();
	}
});