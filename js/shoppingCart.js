let headerNav = document.querySelector('.header_nav');

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

// 『主要內容區-確認清單』使用Vue框架來實現關注點分離

Vue.createApp({
	data() {
		return {
			// 主要內容區-確認清單：表單資料
			form: {
				id: 'cLForm'
			},
			// 主要內容區-確認清單(隱藏按鈕)：資料(用來讓後台辨別是哪一個表格送出的資料)
			hiddenInput: {
				id: 'formName',
				name: 'formName',
				val: '購物車'
			},
			// 主要內容區-確認清單(帳戶資訊)：資料
			accountInfo: {
				title: {
					word: '帳戶資訊',
					icon: 'fas fa-chevron-down',
					show: 'appear'
				},
				texts: [
					{
						label: '使用者名稱',
						icon: 'fas fa-user',
						val: 'fm666',
						required: false,
						disabled: true
					},
					{
						label: '電子郵件',
						icon: 'fas fa-envelope',
						val: 'fm666@gmail.com',
						required: false,
						disabled: true
					},
					{
						label: '手機號碼',
						icon: 'fas fa-mobile-alt',
						val: '0966666666',
						required: false,
						disabled: true
					}
				]
			},
			// 主要內容區-確認清單(寄送資訊)：資料
			deliveryInfo: {
				title: {
					word: '寄送資訊',
					icon: 'fas fa-chevron-down',
					show: 'appear'
				},
				ways: [
					{
						name: 'way',
						id: 'deliveryReceive',
						val: '寄到收件地址',
						checked: true
					},
					{
						name: 'way',
						id: 'deliverySelf',
						val: '到店自取',
						checked: false
					}
				],
				scripts: [
					'為確保物流確實送達，若配送時您的電話因開會或其他狀況（例如：公出、休假等因素）而無法聯絡，這時第二收件人，將可以確保花束如期且安全的送抵。我們建議您：若是公司有前台或大樓警衛可以代收，也可以標註在這裡。',
					'若收花人與代收人聯絡未果，花束將退回工作室，屆時請您自取或自行安排物流取花。'
				],
				receiveTexts: [
					{
						label: '收件人姓名',
						id: 'receiveName',
						name: 'receiveName',
						icon: 'fas fa-signature',
						placeholder: '請輸入收件人姓名',
						required: true,
						disabled: false,
						val: ''
					},
					{
						label: '收件人電話',
						id: 'receiveTel',
						name: 'receiveTel',
						icon: 'fas fa-phone-alt',
						placeholder: '請輸入收件人電話',
						required: true,
						disabled: false,
						val: ''
					},
					{
						label: '收件人地址',
						id: 'receiveAddress',
						name: 'receiveAddress',
						icon: 'fas fa-map-marker-alt',
						placeholder: '請輸入收件人地址',
						required: true,
						disabled: false,
						val: ''
					},
					{
						label: '代收人（例：王小明、七樓警衛）',
						id: 'agent',
						name: 'agent',
						icon: 'fas fa-user-friends',
						placeholder: '請輸入代收人',
						required: false,
						disabled: false,
						val: ''
					},
					{
						label: '代收人電話（若代收人為警衛，請填寫 『無』）',
						id: 'agentTel',
						name: 'agentTel',
						icon: 'fas fa-phone-alt',
						placeholder: '請輸入代收人電話',
						required: false,
						disabled: false,
						val: ''
					}
				],
				selfTexts: [
					{
						label: '取件人姓名',
						id: 'selfName',
						name: 'selfName',
						icon: 'fas fa-signature',
						placeholder: '請輸入取件人姓名',
						required: true,
						disabled: false,
						val: ''
					},
					{
						label: '取件人電話',
						id: 'selfTel',
						name: 'selfTel',
						icon: 'fas fa-phone-alt',
						placeholder: '請輸入取件人電話',
						required: true,
						disabled: false,
						val: ''
					}
				]
			},
			// 主要內容區-確認清單(公司資訊)：資料
			companyInfo: {
				title: {
					word: '公司資訊',
					icon: 'fas fa-chevron-down',
					show: 'appear'
				},
				script: '如需開立統編，請留下您的公司抬頭名稱及統一編號。',
				texts: [
					{
						label: '公司抬頭',
						id: 'companyTitle',
						name: 'companyTitle',
						icon: 'fas fa-building',
						placeholder: '請輸入公司抬頭',
						required: false,
						disabled: false,
						val: ''
					},
					{
						label: '統一編號',
						id: 'taxIDNumber',
						name: 'taxIDNumber',
						icon: 'fas fa-heading',
						placeholder: '請輸入統一編號',
						required: false,
						disabled: false,
						val: ''
					}
				]
			},
			// 主要內容區-確認清單(備註)：資料
			remark: {
				title: {
					word: '備註',
					icon: 'fas fa-chevron-down',
					show: 'appear'
				},
				script: '任何能幫助我們更快找到收花人的資訊（Ex：101大樓、XXX公司），或想對我們說的話都可以留在這裡。',
				textarea: {
					id: 'remark',
					name: 'remark',
					placeholder: '請輸入備註事項',
					required: false,
					disabled: false,
					val: ''
				}
			},
			// 主要內容區-確認清單(訂單明細)：資料
			orderDetails: {
				title: {
					word: '訂單明細',
					icon: 'fas fa-chevron-down',
					show: 'appear'
				},
				nav: {
					name: '商品',
					sum: '總計'
				},
				products: [
					{
						name: '小花系列 - 1週',
						frequency: '每週配送',
						num: '1',
						begin: '2021/12/27',
						price: '300'
					},
					{
						name: '混合系列 - 4週',
						frequency: '每週配送',
						num: '1',
						begin: '2022/1/17',
						price: '2000'
					},
					{
						name: '單品系列 - 1週',
						frequency: '隔週配送',
						num: '4',
						begin: '2021/12/20',
						price: '1400'
					}
				],
				total: {
					name: '總計'
				}
			},
			// 主要內容區-確認清單(注意事項)：資料
			noticeItem: {
				title: {
					word: '注意事項',
					icon: 'fas fa-chevron-down',
					show: 'appear'
				},
				scripts: [
					'1.每週鮮花因集體購買，恕不接受指定、禁忌、偏好花材的選擇。',
					'2.花束會在週一或週二的 09:00~17:00 配送到指定地點。因配合每週物流動態安排，時間不會固定，我們會於每週日下午寄發通知信，通知您下週收花時段，再請留意信箱。',
					'3.請確保該時段有人收花，若收花人與代收人皆聯絡未果，花將退回工作室，不會再做第二次配送，屆時請訂購人自取花束或支付額外的物流費用。',
					'4.任何訂單調整，請於週四下午 23:59 前，以email或私訊粉絲專頁告知我們您的訂單編號，週四 23:59 後因作業安排恕不得調整。',
					'5.若遇天候、彈性放假等因素，我們保有暫停該週配送的權利，並會提前寄信通知您。'
				],
				checkbox: {
					label: '我同意並遵守以上說明',
					id: 'agree',
					name: 'agree',
					required: true,
					checked: false
				}
			},
			// 主要內容區-確認清單(付款資訊)：資料
			payInfo: {
				title: {
					word: '付款資訊',
					icon: 'fas fa-chevron-down',
					show: 'appear'
				},
				script: '信用卡/金融卡支付',
				texts: [
					{
						label: '持卡人姓名',
						id: 'cardHolder',
						name: 'cardHolder',
						icon: 'fas fa-id-card',
						placeholder: '請輸入持卡人姓名',
						required: true,
						disabled: false,
						val: ''
					},
					{
						label: '卡片號碼',
						id: 'cardNumber',
						name: 'cardNumber',
						icon: 'fas fa-credit-card',
						placeholder: '請輸入卡片號碼',
						required: true,
						disabled: false,
						val: ''
					},
					{
						label: '到期日（MM/YY）',
						id: 'cardExpireDate',
						name: 'cardExpireDate',
						icon: 'fab fa-empire',
						placeholder: '請輸入到期日（MM/YY）',
						required: true,
						disabled: false,
						val: ''
					},
					{
						label: '安全驗證碼（CCV）',
						id: 'cardCCV',
						name: 'cardCCV',
						icon: 'fas fa-shield-alt',
						placeholder: '請輸入安全驗證碼（CCV）',
						required: true,
						disabled: false,
						val: ''
					}
				]
			},
			// 主要內容區-確認清單(提交表單)：資料
			submitInput: {
				id: 'sendBtn',
				name: 'sendBtn',
				val: '立即結帳'
			}
		};
	},
	computed: {
		// 主要內容區-確認清單(訂單明細)：計算所有商品金額總和，並加上千分位
		totalprice() {
			let tP = 0;
			for (i = 0; i < this.orderDetails.products.length; i++) {
				let p = parseInt(this.orderDetails.products[i].price);
				tP += p;
			}
			let tPString = tP.toString();
			return 'NT$ ' + tPString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
	},
	methods: {
		// 主要內容區-確認清單：如果input有disabled屬性，則會自動添加disabled的class
		disabledClass(d) {
			return d == true ? 'disabled' : '';
		},
		// 主要內容區-確認清單：：如果input有required屬性，則會自動添加required的class
		requiredClass(r) {
			return r == true ? 'required' : '';
		},
		// 主要內容區-確認清單：各個區塊控制是否展開
		showDetailArea(t) {
			t == this.accountInfo.title.word
				? this.accountInfo.title.show == 'appear'
					? ((this.accountInfo.title.show = ''), (this.accountInfo.title.icon = 'fas fa-chevron-up'))
					: ((this.accountInfo.title.show = 'appear'), (this.accountInfo.title.icon = 'fas fa-chevron-down'))
				: '';

			t == this.deliveryInfo.title.word
				? this.deliveryInfo.title.show == 'appear'
					? ((this.deliveryInfo.title.show = ''), (this.deliveryInfo.title.icon = 'fas fa-chevron-up'))
					: ((this.deliveryInfo.title.show = 'appear'), (this.deliveryInfo.title.icon = 'fas fa-chevron-down'))
				: '';

			t == this.companyInfo.title.word
				? this.companyInfo.title.show == 'appear'
					? ((this.companyInfo.title.show = ''), (this.companyInfo.title.icon = 'fas fa-chevron-up'))
					: ((this.companyInfo.title.show = 'appear'), (this.companyInfo.title.icon = 'fas fa-chevron-down'))
				: '';

			t == this.remark.title.word
				? this.remark.title.show == 'appear'
					? ((this.remark.title.show = ''), (this.remark.title.icon = 'fas fa-chevron-up'))
					: ((this.remark.title.show = 'appear'), (this.remark.title.icon = 'fas fa-chevron-down'))
				: '';

			t == this.orderDetails.title.word
				? this.orderDetails.title.show == 'appear'
					? ((this.orderDetails.title.show = ''), (this.orderDetails.title.icon = 'fas fa-chevron-up'))
					: ((this.orderDetails.title.show = 'appear'), (this.orderDetails.title.icon = 'fas fa-chevron-down'))
				: '';

			t == this.noticeItem.title.word
				? this.noticeItem.title.show == 'appear'
					? ((this.noticeItem.title.show = ''), (this.noticeItem.title.icon = 'fas fa-chevron-up'))
					: ((this.noticeItem.title.show = 'appear'), (this.noticeItem.title.icon = 'fas fa-chevron-down'))
				: '';

			t == this.payInfo.title.word
				? this.payInfo.title.show == 'appear'
					? ((this.payInfo.title.show = ''), (this.payInfo.title.icon = 'fas fa-chevron-up'))
					: ((this.payInfo.title.show = 'appear'), (this.payInfo.title.icon = 'fas fa-chevron-down'))
				: '';
		},
		// 主要內容區-確認清單(訂單明細)：所有商品金額加上千分位
		addTenPercentilePrice(p) {
			return 'NT$ ' + p.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
		// 主要內容區-確認清單(寄送資訊)：切換寄送/自取
		chooseDeliveryWay(i) {
			if (i == 'deliveryReceive') {
				this.deliveryInfo.ways[0].checked = true;
				this.deliveryInfo.ways[1].checked = false;
			} else {
				this.deliveryInfo.ways[0].checked = false;
				this.deliveryInfo.ways[1].checked = true;
			}
		},
		// 主要內容區-確認清單(注意事項)：讓同意是否勾選，更新資料中的 this.noticeItem.checkbox.checked
		agreeChecked(r) {
			this.noticeItem.checkbox.checked = r == false ? true : false;
		},
		// 主要內容區-確認清單(提交表單)：送出時，若有必填欄位沒有填，則展開該區
		submitChecked() {
			if (this.deliveryInfo.title.show == '') {
				for (i = 0; i < this.deliveryInfo.ways.length; i++) {
					if (this.deliveryInfo.ways[i].val == '寄到收件地址' && this.deliveryInfo.ways[i].checked == true) {
						for (j = 0; j < this.deliveryInfo.receiveTexts.length; j++) {
							if (
								this.deliveryInfo.receiveTexts[j].required == true &&
								this.deliveryInfo.receiveTexts[j].val == ''
							) {
								this.deliveryInfo.title.show = 'appear';
								break;
							}
						}
					} else if (this.deliveryInfo.ways[i].val == '到店自取' && this.deliveryInfo.ways[i].checked == true) {
						for (j = 0; j < this.deliveryInfo.selfTexts.length; j++) {
							if (
								this.deliveryInfo.selfTexts[j].required == true &&
								this.deliveryInfo.selfTexts[j].val == ''
							) {
								this.deliveryInfo.title.show = 'appear';
								break;
							}
						}
					}
				}
			}

			if (this.noticeItem.title.show == '') {
				if (this.noticeItem.checkbox.required == true && this.noticeItem.checkbox.checked == false) {
					this.noticeItem.title.show = 'appear';
				}
			}

			if (this.payInfo.title.show == '') {
				for (i = 0; i < this.payInfo.texts.length; i++) {
					if (this.payInfo.texts[i].required == true && this.payInfo.texts[i].val == '') {
						this.payInfo.title.show = 'appear';
						break;
					}
				}
			}
		}
	}
}).mount('.content');
