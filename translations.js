/* =========================================================
   RUBY COOKIES — TRANSLATIONS
   Add a new language by copying an existing block and
   translating its values. Missing keys fall back to English.
   To add new UI text anywhere on the site:
     1. Add a data-i18n="your.key" attribute in index.html
     2. Add "your.key": "..." to every language block below
   ========================================================= */

const TRANSLATIONS = {

  en: {
    "loader.text": "Warming the oven…",

    "nav.home": "Home", "nav.about": "About Us", "nav.products": "Products",
    "nav.why": "Why Choose Us", "nav.testimonials": "Testimonials", "nav.faq": "FAQ", "nav.contact": "Contact",

    "hero.eyebrow": "Small-batch · Kulim, Kedah",
    "hero.title1": "Freshly Baked", "hero.title2": "Happiness", "hero.title3": "in Every Bite",
    "hero.desc": "Handcrafted cookies, baked in small batches every morning and delivered warm to your door — halal-friendly, made with real butter and a lot of love.",
    "hero.cta1": "Shop Now", "hero.cta2": "Explore Our Story",
    "hero.stat1": "Cookies baked / month", "hero.stat2": "Happy customers", "hero.stat3": "Signature flavours",

    "about.eyebrow": "Our Story", "about.title": "Baked from a family kitchen in Kulim",
    "about.p1": "Ruby Cookies started in a small home kitchen in Kulim, Kedah — one tray at a time, shared first with neighbours and friends. What began as a weekend hobby quickly became a daily ritual of measuring, mixing, and waiting by the oven door.",
    "about.p2": "Today we still bake the same way: small batches, real butter, honest ingredients, and orders packed with care so every cookie arrives as good as it left the oven.",
    "about.mission.title": "Mission", "about.mission.text": "Bring warm, honest, handcrafted cookies to every home in Malaysia.",
    "about.vision.title": "Vision", "about.vision.text": "To be the cookie brand Malaysians think of first for every celebration.",
    "about.values.title": "Values", "about.values.text": "Quality over shortcuts, freshness over shelf life, care over speed.",

    "products.eyebrow": "The Menu Board", "products.title": "Pick your favourites",
    "products.search": "Search cookies…",
    "products.filter.all": "All", "products.filter.chocolate": "Chocolate", "products.filter.classic": "Classic", "products.filter.special": "Special",

    "why.eyebrow": "The Difference", "why.title": "Why bakers and families choose Ruby",
    "why.card1.title": "Premium Ingredients", "why.card1.text": "Real butter, Belgian chocolate, and no shortcuts — ever.",
    "why.card2.title": "Fresh Daily", "why.card2.text": "Every batch is baked the morning it ships — never frozen stock.",
    "why.card3.title": "Handcrafted", "why.card3.text": "Mixed, scooped, and packed by hand in small batches.",
    "why.card4.title": "Halal Friendly", "why.card4.text": "All ingredients and processes follow halal guidelines.",
    "why.card5.title": "Fast Delivery", "why.card5.text": "Same-day dispatch across Kulim and next-day nationwide.",
    "why.card6.title": "Made with Love", "why.card6.text": "Every box is packed like it's going to family.",

    "testimonials.eyebrow": "Kind Words", "testimonials.title": "Loved by our customers",

    "faq.eyebrow": "Questions", "faq.title": "Frequently asked questions",
    "faq.q1": "How long do the cookies stay fresh?", "faq.a1": "Best enjoyed within 5 days at room temperature in the sealed pack, or up to 3 weeks if kept refrigerated.",
    "faq.q2": "Do you deliver outside Kulim?", "faq.a2": "Yes — we ship nationwide across Malaysia via courier, with same-day delivery available within Kulim and Kedah.",
    "faq.q3": "Are your cookies halal?", "faq.a3": "Yes, all ingredients and preparation follow halal guidelines from trusted suppliers.",
    "faq.q4": "Can I customise a box for gifting?", "faq.a4": "Absolutely — message us on WhatsApp with your flavour mix and we'll put together a gift box for you.",
    "faq.q5": "Do you take bulk or corporate orders?", "faq.a5": "Yes, we cater bulk orders for events and corporate gifting — reach out at least 3 days in advance.",

    "contact.eyebrow": "Get in Touch", "contact.title": "Let's talk cookies",
    "contact.name": "Name", "contact.email": "Email", "contact.phone": "Phone", "contact.message": "Message", "contact.send": "Send Message",
    "contact.mapLabel": "Kulim, Kedah, Malaysia",
    "contact.hoursLabel": "Business Hours", "contact.hours": "Mon–Sun, 9:00 AM – 9:00 PM",
    "contact.phoneLabel": "Phone / WhatsApp", "contact.emailLabel": "Email",

    "footer.tagline": "Freshly baked happiness in every bite.",
    "footer.linksTitle": "Quick Links", "footer.policiesTitle": "Policies",
    "footer.privacy": "Privacy Policy", "footer.terms": "Terms of Service", "footer.refund": "Refund Policy",
    "footer.newsletterTitle": "Stay in the Loop", "footer.newsletterText": "Get new flavours and offers in your inbox.",
    "footer.newsletterPlaceholder": "Your email", "footer.subscribe": "Subscribe", "footer.rights": "All rights reserved.",

    "cart.title": "Your Cart", "cart.subtotal": "Subtotal", "cart.total": "Total", "cart.checkout": "Checkout via WhatsApp",
    "cart.empty": "Your cart is empty. Add a few cookies to get started!",

    "misc.addedToCart": "Added to your cart",
    "misc.removedFromCart": "Removed from cart",
    "misc.messageSent": "Message sent! We'll reply soon.",
    "misc.subscribed": "Subscribed! Watch your inbox.",
    "misc.noResults": "No cookies match your search. Try another name or filter.",
    "misc.checkoutEmpty": "Add some cookies to your cart first!",

    "product.1.name": "Classic Chocolate Chip", "product.1.desc": "The original — buttery dough loaded with chocolate chips.",
    "product.2.name": "Double Chocolate", "product.2.desc": "Rich cocoa dough with extra dark chocolate chunks.",
    "product.3.name": "Red Velvet Cookies", "product.3.desc": "Soft red velvet with white chocolate swirls.",
    "product.4.name": "Salted Caramel Cookies", "product.4.desc": "Gooey caramel centre with a hit of sea salt.",
    "product.5.name": "Matcha White Chocolate", "product.5.desc": "Earthy matcha dough with creamy white chocolate.",
    "product.6.name": "Nutella Lava Cookies", "product.6.desc": "Warm, oozing Nutella centre in every bite.",
    "product.7.name": "Oatmeal Raisin", "product.7.desc": "Wholesome oats and plump raisins, lightly spiced.",
    "product.8.name": "Peanut Butter Cookies", "product.8.desc": "Rich roasted peanut butter, crisp at the edges.",

    "testimonial.1.quote": "These are hands-down the best cookies I've ordered online — still soft two days later!",
    "testimonial.1.name": "Aisyah R.", "testimonial.1.role": "Repeat customer, Kulim",
    "testimonial.2.quote": "I ordered a box for my daughter's birthday and the whole class asked for the page name.",
    "testimonial.2.name": "Nurul H.", "testimonial.2.role": "Verified buyer",
    "testimonial.3.quote": "The salted caramel is unreal. Delivery was fast and the packaging kept everything fresh.",
    "testimonial.3.name": "Wei Ling T.", "testimonial.3.role": "Verified buyer",
    "testimonial.4.quote": "Halal, homemade, and genuinely delicious. My go-to gift for teachers now.",
    "testimonial.4.name": "Farah I.", "testimonial.4.role": "Corporate order, Penang"
  },

  ms: {
    "loader.text": "Memanaskan ketuhar…",

    "nav.home": "Laman Utama", "nav.about": "Tentang Kami", "nav.products": "Produk",
    "nav.why": "Kenapa Pilih Kami", "nav.testimonials": "Testimoni", "nav.faq": "Soalan Lazim", "nav.contact": "Hubungi",

    "hero.eyebrow": "Bakul kecil · Kulim, Kedah",
    "hero.title1": "Kebahagiaan", "hero.title2": "Segar Dibakar", "hero.title3": "Setiap Gigitan",
    "hero.desc": "Biskut buatan tangan, dibakar dalam kuantiti kecil setiap pagi dan dihantar hangat ke pintu rumah anda — mesra halal, dibuat dengan mentega asli dan penuh kasih sayang.",
    "hero.cta1": "Beli Sekarang", "hero.cta2": "Kisah Kami",
    "hero.stat1": "Biskut dibakar / bulan", "hero.stat2": "Pelanggan gembira", "hero.stat3": "Perisa istimewa",

    "about.eyebrow": "Kisah Kami", "about.title": "Dibakar dari dapur keluarga di Kulim",
    "about.p1": "Ruby Cookies bermula di dapur rumah kecil di Kulim, Kedah — sebiji dulang pada satu masa, dikongsi mula-mula dengan jiran dan rakan. Apa yang bermula sebagai hobi hujung minggu bertukar menjadi rutin harian menyukat, mengadun dan menunggu di depan ketuhar.",
    "about.p2": "Hari ini kami masih membakar dengan cara yang sama: kuantiti kecil, mentega asli, bahan jujur, dan pesanan dibungkus dengan teliti supaya setiap biskut tiba sesegar dari ketuhar.",
    "about.mission.title": "Misi", "about.mission.text": "Membawa biskut hangat, jujur dan buatan tangan ke setiap rumah di Malaysia.",
    "about.vision.title": "Visi", "about.vision.text": "Menjadi jenama biskut pilihan pertama rakyat Malaysia untuk setiap sambutan.",
    "about.values.title": "Nilai", "about.values.text": "Kualiti mengatasi jalan pintas, kesegaran mengatasi jangka hayat, keprihatinan mengatasi kelajuan.",

    "products.eyebrow": "Papan Menu", "products.title": "Pilih kegemaran anda",
    "products.search": "Cari biskut…",
    "products.filter.all": "Semua", "products.filter.chocolate": "Coklat", "products.filter.classic": "Klasik", "products.filter.special": "Istimewa",

    "why.eyebrow": "Perbezaannya", "why.title": "Kenapa pembakar dan keluarga pilih Ruby",
    "why.card1.title": "Bahan Premium", "why.card1.text": "Mentega asli, coklat Belgium, tanpa jalan pintas — sentiasa.",
    "why.card2.title": "Segar Setiap Hari", "why.card2.text": "Setiap bakul dibakar pada pagi ia dihantar — bukan stok beku.",
    "why.card3.title": "Buatan Tangan", "why.card3.text": "Diadun, dicedok dan dibungkus secara manual dalam kuantiti kecil.",
    "why.card4.title": "Mesra Halal", "why.card4.text": "Semua bahan dan proses mematuhi garis panduan halal.",
    "why.card5.title": "Penghantaran Pantas", "why.card5.text": "Hantar sehari di Kulim, ke seluruh negara pada hari berikutnya.",
    "why.card6.title": "Dibuat Dengan Kasih", "why.card6.text": "Setiap kotak dibungkus seolah-olah untuk keluarga sendiri.",

    "testimonials.eyebrow": "Kata Mereka", "testimonials.title": "Disayangi pelanggan kami",

    "faq.eyebrow": "Soalan", "faq.title": "Soalan lazim",
    "faq.q1": "Berapa lama biskut kekal segar?", "faq.a1": "Terbaik dinikmati dalam 5 hari pada suhu bilik dalam bungkusan tertutup, atau sehingga 3 minggu jika disimpan dalam peti sejuk.",
    "faq.q2": "Adakah anda menghantar ke luar Kulim?", "faq.a2": "Ya — kami menghantar ke seluruh Malaysia melalui kurier, dengan penghantaran sehari tersedia di Kulim dan Kedah.",
    "faq.q3": "Adakah biskut anda halal?", "faq.a3": "Ya, semua bahan dan penyediaan mematuhi garis panduan halal daripada pembekal dipercayai.",
    "faq.q4": "Bolehkah saya sesuaikan kotak untuk hadiah?", "faq.a4": "Boleh — mesej kami di WhatsApp dengan campuran perisa anda dan kami akan sediakan kotak hadiah untuk anda.",
    "faq.q5": "Adakah anda menerima pesanan pukal atau korporat?", "faq.a5": "Ya, kami melayani pesanan pukal untuk acara dan hadiah korporat — hubungi sekurang-kurangnya 3 hari lebih awal.",

    "contact.eyebrow": "Hubungi Kami", "contact.title": "Mari bercerita tentang biskut",
    "contact.name": "Nama", "contact.email": "Emel", "contact.phone": "Telefon", "contact.message": "Mesej", "contact.send": "Hantar Mesej",
    "contact.mapLabel": "Kulim, Kedah, Malaysia",
    "contact.hoursLabel": "Waktu Perniagaan", "contact.hours": "Isnin–Ahad, 9:00 pagi – 9:00 malam",
    "contact.phoneLabel": "Telefon / WhatsApp", "contact.emailLabel": "Emel",

    "footer.tagline": "Kebahagiaan segar dibakar dalam setiap gigitan.",
    "footer.linksTitle": "Pautan Pantas", "footer.policiesTitle": "Dasar",
    "footer.privacy": "Dasar Privasi", "footer.terms": "Terma Perkhidmatan", "footer.refund": "Dasar Bayaran Balik",
    "footer.newsletterTitle": "Kekal Terkini", "footer.newsletterText": "Dapatkan perisa dan tawaran baharu di peti mel anda.",
    "footer.newsletterPlaceholder": "Emel anda", "footer.subscribe": "Langgan", "footer.rights": "Hak cipta terpelihara.",

    "cart.title": "Troli Anda", "cart.subtotal": "Jumlah Kecil", "cart.total": "Jumlah", "cart.checkout": "Checkout melalui WhatsApp",
    "cart.empty": "Troli anda kosong. Tambah beberapa biskut untuk bermula!",

    "misc.addedToCart": "Ditambah ke troli anda",
    "misc.removedFromCart": "Dikeluarkan dari troli",
    "misc.messageSent": "Mesej dihantar! Kami akan balas tidak lama lagi.",
    "misc.subscribed": "Berjaya melanggan! Semak peti mel anda.",
    "misc.noResults": "Tiada biskut sepadan carian anda. Cuba nama atau penapis lain.",
    "misc.checkoutEmpty": "Tambah biskut ke troli anda dahulu!",

    "product.1.name": "Chocolate Chip Klasik", "product.1.desc": "Yang asli — doh bermentega penuh dengan ciping coklat.",
    "product.2.name": "Double Chocolate", "product.2.desc": "Doh koko pekat dengan ketulan coklat gelap tambahan.",
    "product.3.name": "Red Velvet Cookies", "product.3.desc": "Red velvet lembut dengan lilitan coklat putih.",
    "product.4.name": "Salted Caramel Cookies", "product.4.desc": "Isi karamel likat dengan sentuhan garam laut.",
    "product.5.name": "Matcha White Chocolate", "product.5.desc": "Doh matcha berperisa dengan coklat putih berkrim.",
    "product.6.name": "Nutella Lava Cookies", "product.6.desc": "Isi Nutella hangat dan melekit pada setiap gigitan.",
    "product.7.name": "Oatmeal Raisin", "product.7.desc": "Oat berkhasiat dan kismis montok, sedikit berempah.",
    "product.8.name": "Peanut Butter Cookies", "product.8.desc": "Krim kacang panggang pekat, rangup di tepi.",

    "testimonial.1.quote": "Ini biskut terbaik yang pernah saya tempah dalam talian — masih lembut selepas dua hari!",
    "testimonial.1.name": "Aisyah R.", "testimonial.1.role": "Pelanggan setia, Kulim",
    "testimonial.2.quote": "Saya tempah kotak untuk hari jadi anak saya dan seluruh kelas bertanya nama laman.",
    "testimonial.2.name": "Nurul H.", "testimonial.2.role": "Pembeli disahkan",
    "testimonial.3.quote": "Salted caramel memang luar biasa. Penghantaran pantas dan bungkusan kekalkan kesegaran.",
    "testimonial.3.name": "Wei Ling T.", "testimonial.3.role": "Pembeli disahkan",
    "testimonial.4.quote": "Halal, buatan sendiri dan sungguh sedap. Hadiah pilihan saya untuk guru sekarang.",
    "testimonial.4.name": "Farah I.", "testimonial.4.role": "Pesanan korporat, Pulau Pinang"
  },

  zh: {
    "loader.text": "烤箱预热中…",

    "nav.home": "首页", "nav.about": "关于我们", "nav.products": "产品",
    "nav.why": "为何选择我们", "nav.testimonials": "顾客评价", "nav.faq": "常见问题", "nav.contact": "联系我们",

    "hero.eyebrow": "小批量手工 · 吉打 Kulim",
    "hero.title1": "新鲜出炉的", "hero.title2": "幸福", "hero.title3": "每一口都是",
    "hero.desc": "每天早晨小批量手工烘焙，温热送达您家门口——清真友好，选用真黄油，满载爱心制作。",
    "hero.cta1": "立即选购", "hero.cta2": "了解我们的故事",
    "hero.stat1": "每月烘焙曲奇数", "hero.stat2": "满意顾客", "hero.stat3": "招牌口味",

    "about.eyebrow": "我们的故事", "about.title": "源自吉打 Kulim 的家庭厨房",
    "about.p1": "Ruby Cookies 始于吉打 Kulim 的一间小厨房——一盘接一盘，最初只分享给邻居和朋友。周末的小爱好很快变成了每天称重、搅拌、守在烤箱前的日常。",
    "about.p2": "如今我们依旧沿用同样的方式烘焙：小批量、真黄油、诚实的原料，用心包装每一份订单，让每片曲奇送达时依然如刚出炉般美味。",
    "about.mission.title": "使命", "about.mission.text": "将温暖、诚实的手工曲奇带进马来西亚每一个家庭。",
    "about.vision.title": "愿景", "about.vision.text": "成为马来西亚人庆祝时刻首先想到的曲奇品牌。",
    "about.values.title": "价值观", "about.values.text": "品质优先于捷径，新鲜优先于保质期，用心优先于速度。",

    "products.eyebrow": "菜单板", "products.title": "挑选您的最爱",
    "products.search": "搜索曲奇…",
    "products.filter.all": "全部", "products.filter.chocolate": "巧克力", "products.filter.classic": "经典", "products.filter.special": "特色",

    "why.eyebrow": "我们的不同", "why.title": "烘焙师与家庭都选择 Ruby 的理由",
    "why.card1.title": "优质原料", "why.card1.text": "真黄油、比利时巧克力，绝不走捷径。",
    "why.card2.title": "每日新鲜", "why.card2.text": "每批曲奇均在发货当天早晨烘焙，绝非冷冻库存。",
    "why.card3.title": "手工制作", "why.card3.text": "小批量手工搅拌、舀取和包装。",
    "why.card4.title": "清真友好", "why.card4.text": "所有原料和工序均遵循清真准则。",
    "why.card5.title": "快速配送", "why.card5.text": "Kulim 当日达，全国次日送达。",
    "why.card6.title": "用心制作", "why.card6.text": "每一盒都像寄给家人一样用心包装。",

    "testimonials.eyebrow": "顾客好评", "testimonials.title": "深受顾客喜爱",

    "faq.eyebrow": "常见问题", "faq.title": "常见问题解答",
    "faq.q1": "曲奇可以保鲜多久？", "faq.a1": "密封包装常温下建议5天内享用最佳，冷藏可保存长达3周。",
    "faq.q2": "Kulim 以外地区也能配送吗？", "faq.a2": "可以——我们通过快递配送至马来西亚全国，Kulim 及吉打地区可享当日送达。",
    "faq.q3": "你们的曲奇是清真的吗？", "faq.a3": "是的，所有原料和制作过程均遵循可信供应商的清真准则。",
    "faq.q4": "可以定制礼盒吗？", "faq.a4": "当然可以——通过 WhatsApp 告诉我们您想要的口味组合，我们会为您搭配礼盒。",
    "faq.q5": "是否接受批量或企业订单？", "faq.a5": "是的，我们承接活动和企业礼品的批量订单——请提前至少3天联系我们。",

    "contact.eyebrow": "联系我们", "contact.title": "一起聊聊曲奇",
    "contact.name": "姓名", "contact.email": "电子邮件", "contact.phone": "电话", "contact.message": "留言", "contact.send": "发送信息",
    "contact.mapLabel": "马来西亚吉打 Kulim",
    "contact.hoursLabel": "营业时间", "contact.hours": "周一至周日 上午9点–晚上9点",
    "contact.phoneLabel": "电话 / WhatsApp", "contact.emailLabel": "电子邮件",

    "footer.tagline": "每一口都是新鲜出炉的幸福。",
    "footer.linksTitle": "快速链接", "footer.policiesTitle": "政策",
    "footer.privacy": "隐私政策", "footer.terms": "服务条款", "footer.refund": "退款政策",
    "footer.newsletterTitle": "订阅资讯", "footer.newsletterText": "第一时间获取新口味与优惠信息。",
    "footer.newsletterPlaceholder": "您的电子邮件", "footer.subscribe": "订阅", "footer.rights": "版权所有。",

    "cart.title": "您的购物车", "cart.subtotal": "小计", "cart.total": "总计", "cart.checkout": "通过 WhatsApp 结账",
    "cart.empty": "购物车是空的，快挑几片曲奇吧！",

    "misc.addedToCart": "已加入购物车",
    "misc.removedFromCart": "已从购物车移除",
    "misc.messageSent": "信息已发送！我们会尽快回复。",
    "misc.subscribed": "订阅成功！请留意您的邮箱。",
    "misc.noResults": "没有找到符合条件的曲奇，请尝试其他名称或筛选。",
    "misc.checkoutEmpty": "请先在购物车中添加曲奇！",

    "product.1.name": "经典巧克力豆曲奇", "product.1.desc": "原味黄油面团，满载巧克力豆。",
    "product.2.name": "双倍巧克力曲奇", "product.2.desc": "浓郁可可面团，加入特浓黑巧克力块。",
    "product.3.name": "红丝绒曲奇", "product.3.desc": "柔软红丝绒配白巧克力纹理。",
    "product.4.name": "海盐焦糖曲奇", "product.4.desc": "浓稠焦糖内馅，点缀一撮海盐。",
    "product.5.name": "抹茶白巧克力曲奇", "product.5.desc": "清香抹茶面团搭配香浓白巧克力。",
    "product.6.name": "能多益熔岩曲奇", "product.6.desc": "每一口都是温热流心能多益。",
    "product.7.name": "燕麦葡萄干曲奇", "product.7.desc": "健康燕麦与饱满葡萄干，微微香料味。",
    "product.8.name": "花生酱曲奇", "product.8.desc": "浓郁烘焙花生酱，边缘香脆。",

    "testimonial.1.quote": "这绝对是我在网上买过最好吃的曲奇——两天后依然松软！",
    "testimonial.1.name": "Aisyah R.", "testimonial.1.role": "Kulim 老顾客",
    "testimonial.2.quote": "我为女儿生日订了一盒，结果全班同学都在问这家店叫什么。",
    "testimonial.2.name": "Nurul H.", "testimonial.2.role": "已验证买家",
    "testimonial.3.quote": "海盐焦糖真的太好吃了。配送很快，包装也保持了新鲜度。",
    "testimonial.3.name": "Wei Ling T.", "testimonial.3.role": "已验证买家",
    "testimonial.4.quote": "清真、手工、真的很好吃。现在是我送老师礼物的首选。",
    "testimonial.4.name": "Farah I.", "testimonial.4.role": "槟城企业订单"
  },

  ta: {
    "loader.text": "அடுப்பு சூடாகிறது…",

    "nav.home": "முகப்பு", "nav.about": "எங்களைப் பற்றி", "nav.products": "தயாரிப்புகள்",
    "nav.why": "ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்", "nav.testimonials": "வாடிக்கையாளர் கருத்துகள்", "nav.faq": "அடிக்கடி கேட்கப்படும் கேள்விகள்", "nav.contact": "தொடர்பு",

    "hero.eyebrow": "சிறிய அளவில் · குலிம், கேடா",
    "hero.title1": "புதிதாக சுடப்பட்ட", "hero.title2": "மகிழ்ச்சி", "hero.title3": "ஒவ்வொரு கடியிலும்",
    "hero.desc": "ஒவ்வொரு காலையிலும் சிறிய அளவில் கையால் தயாரிக்கப்படும் குக்கீகள், சூடாக உங்கள் வீட்டு வாசலுக்கு — ஹலால் நட்பு, உண்மையான வெண்ணெயுடன், அன்புடன் தயாரிக்கப்பட்டவை.",
    "hero.cta1": "இப்போது வாங்குங்கள்", "hero.cta2": "எங்கள் கதையை அறிய",
    "hero.stat1": "மாதம்தோறும் சுடப்படும் குக்கீகள்", "hero.stat2": "மகிழ்ச்சியான வாடிக்கையாளர்கள்", "hero.stat3": "சிறப்பு சுவைகள்",

    "about.eyebrow": "எங்கள் கதை", "about.title": "குலிமில் உள்ள ஒரு குடும்ப சமையலறையில் இருந்து சுடப்பட்டது",
    "about.p1": "Ruby Cookies கேடா, குலிமில் உள்ள ஒரு சிறிய வீட்டு சமையலறையில் தொடங்கியது — ஒரு தட்டு ஒரு நேரத்தில், முதலில் அண்டை வீட்டாருடனும் நண்பர்களுடனும் பகிரப்பட்டது. வார இறுதி பொழுதுபோக்காக தொடங்கியது விரைவில் அளத்தல், கலத்தல் மற்றும் அடுப்பு கதவருகே காத்திருத்தல் என்ற தினசரி வழக்கமாக மாறியது.",
    "about.p2": "இன்றும் நாங்கள் அதே வழியில் சுடுகிறோம்: சிறிய அளவுகள், உண்மையான வெண்ணெய், நேர்மையான பொருட்கள், மற்றும் ஒவ்வொரு குக்கீயும் அடுப்பிலிருந்து வெளியே வந்தது போலவே சிறப்பாக சேருமாறு கவனமாக பேக் செய்யப்பட்ட ஆர்டர்கள்.",
    "about.mission.title": "நோக்கம்", "about.mission.text": "மலேசியாவின் ஒவ்வொரு வீட்டிற்கும் அன்பான, நேர்மையான, கையால் செய்யப்பட்ட குக்கீகளை கொண்டு சேர்ப்பது.",
    "about.vision.title": "தொலைநோக்கு", "about.vision.text": "ஒவ்வொரு கொண்டாட்டத்திற்கும் மலேசியர்கள் முதலில் நினைவுகூரும் குக்கீ பிராண்டாக இருப்பது.",
    "about.values.title": "மதிப்புகள்", "about.values.text": "குறுக்குவழிகளை விட தரம், அடுக்கு ஆயுளை விட புதுமை, வேகத்தை விட அக்கறை.",

    "products.eyebrow": "மெனு பலகை", "products.title": "உங்களுக்குப் பிடித்தவற்றைத் தேர்ந்தெடுங்கள்",
    "products.search": "குக்கீகளைத் தேடுங்கள்…",
    "products.filter.all": "அனைத்தும்", "products.filter.chocolate": "சாக்லேட்", "products.filter.classic": "கிளாசிக்", "products.filter.special": "சிறப்பு",

    "why.eyebrow": "வேறுபாடு", "why.title": "பேக்கர்களும் குடும்பங்களும் ரூபியைத் தேர்வு செய்வது ஏன்",
    "why.card1.title": "உயர்தர பொருட்கள்", "why.card1.text": "உண்மையான வெண்ணெய், பெல்ஜியம் சாக்லேட், குறுக்குவழிகள் இல்லை — எப்போதும்.",
    "why.card2.title": "தினமும் புதியது", "why.card2.text": "அனுப்பப்படும் காலையிலேயே ஒவ்வொரு தொகுதியும் சுடப்படுகிறது — உறைந்த சரக்கு இல்லை.",
    "why.card3.title": "கையால் செய்யப்பட்டது", "why.card3.text": "சிறிய அளவில் கையால் கலக்கப்பட்டு, அளக்கப்பட்டு, பேக் செய்யப்படுகிறது.",
    "why.card4.title": "ஹலால் நட்பு", "why.card4.text": "அனைத்து பொருட்களும் செயல்முறைகளும் ஹலால் வழிகாட்டுதல்களைப் பின்பற்றுகின்றன.",
    "why.card5.title": "விரைவான டெலிவரி", "why.card5.text": "குலிமில் அன்றே டெலிவரி, நாடு முழுவதும் மறுநாள் டெலிவரி.",
    "why.card6.title": "அன்புடன் செய்யப்பட்டது", "why.card6.text": "ஒவ்வொரு பெட்டியும் குடும்பத்திற்கு அனுப்புவது போல பேக் செய்யப்படுகிறது.",

    "testimonials.eyebrow": "இனிய வார்த்தைகள்", "testimonials.title": "எங்கள் வாடிக்கையாளர்களால் விரும்பப்படுகிறது",

    "faq.eyebrow": "கேள்விகள்", "faq.title": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faq.q1": "குக்கீகள் எவ்வளவு காலம் புதியதாக இருக்கும்?", "faq.a1": "மூடப்பட்ட பேக்கில் அறை வெப்பநிலையில் 5 நாட்களுக்குள் சிறந்தது, குளிர்சாதன பெட்டியில் வைத்தால் 3 வாரங்கள் வரை.",
    "faq.q2": "குலிமிற்கு வெளியேயும் டெலிவரி செய்கிறீர்களா?", "faq.a2": "ஆம் — நாங்கள் கூரியர் மூலம் மலேசியா முழுவதும் அனுப்புகிறோம், குலிம் மற்றும் கேடாவில் அன்றே டெலிவரி கிடைக்கும்.",
    "faq.q3": "உங்கள் குக்கீகள் ஹலாலா?", "faq.a3": "ஆம், அனைத்து பொருட்களும் தயாரிப்பும் நம்பகமான சப்ளையர்களின் ஹலால் வழிகாட்டுதல்களைப் பின்பற்றுகின்றன.",
    "faq.q4": "பரிசுக்காக பெட்டியை தனிப்பயனாக்க முடியுமா?", "faq.a4": "நிச்சயமாக — உங்கள் சுவை கலவையுடன் WhatsApp இல் எங்களை தொடர்பு கொள்ளுங்கள், நாங்கள் உங்களுக்காக பரிசுப் பெட்டியை தயார் செய்கிறோம்.",
    "faq.q5": "பெரிய அளவு அல்லது நிறுவன ஆர்டர்களை ஏற்கிறீர்களா?", "faq.a5": "ஆம், நிகழ்வுகள் மற்றும் நிறுவன பரிசுகளுக்கு பெரிய அளவு ஆர்டர்களை நாங்கள் ஏற்கிறோம் — குறைந்தது 3 நாட்களுக்கு முன் தொடர்பு கொள்ளுங்கள்.",

    "contact.eyebrow": "தொடர்பு கொள்ளுங்கள்", "contact.title": "குக்கீகள் பற்றி பேசுவோம்",
    "contact.name": "பெயர்", "contact.email": "மின்னஞ்சல்", "contact.phone": "தொலைபேசி", "contact.message": "செய்தி", "contact.send": "செய்தி அனுப்பு",
    "contact.mapLabel": "குலிம், கேடா, மலேசியா",
    "contact.hoursLabel": "வணிக நேரம்", "contact.hours": "திங்கள்–ஞாயிறு, காலை 9 – இரவு 9",
    "contact.phoneLabel": "தொலைபேசி / WhatsApp", "contact.emailLabel": "மின்னஞ்சல்",

    "footer.tagline": "ஒவ்வொரு கடியிலும் புதிதாக சுடப்பட்ட மகிழ்ச்சி.",
    "footer.linksTitle": "விரைவு இணைப்புகள்", "footer.policiesTitle": "கொள்கைகள்",
    "footer.privacy": "தனியுரிமைக் கொள்கை", "footer.terms": "சேவை விதிமுறைகள்", "footer.refund": "பணத்திரும்பக் கொள்கை",
    "footer.newsletterTitle": "புதுப்பிப்புகளுடன் இருங்கள்", "footer.newsletterText": "புதிய சுவைகளையும் சலுகைகளையும் உங்கள் இன்பாக்ஸில் பெறுங்கள்.",
    "footer.newsletterPlaceholder": "உங்கள் மின்னஞ்சல்", "footer.subscribe": "குழுசேர", "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

    "cart.title": "உங்கள் கார்ட்", "cart.subtotal": "துணை மொத்தம்", "cart.total": "மொத்தம்", "cart.checkout": "WhatsApp வழியாக செக்அவுட்",
    "cart.empty": "உங்கள் கார்ட் காலியாக உள்ளது. தொடங்க சில குக்கீகளைச் சேருங்கள்!",

    "misc.addedToCart": "உங்கள் கார்ட்டில் சேர்க்கப்பட்டது",
    "misc.removedFromCart": "கார்ட்டிலிருந்து அகற்றப்பட்டது",
    "misc.messageSent": "செய்தி அனுப்பப்பட்டது! நாங்கள் விரைவில் பதிலளிப்போம்.",
    "misc.subscribed": "குழுசேர்க்கை வெற்றி! உங்கள் இன்பாக்ஸைப் பாருங்கள்.",
    "misc.noResults": "உங்கள் தேடலுக்கு பொருந்தும் குக்கீகள் இல்லை. வேறு பெயர் அல்லது வடிகட்டியை முயற்சிக்கவும்.",
    "misc.checkoutEmpty": "முதலில் உங்கள் கார்ட்டில் சில குக்கீகளைச் சேருங்கள்!",

    "product.1.name": "கிளாசிக் சாக்லேட் சிப்", "product.1.desc": "அசல் — சாக்லேட் சிப்ஸ் நிறைந்த வெண்ணெய் மாவு.",
    "product.2.name": "டபுள் சாக்லேட்", "product.2.desc": "கூடுதல் இருண்ட சாக்லேட் துண்டுகளுடன் கூடிய பணக்கார கோகோ மாவு.",
    "product.3.name": "ரெட் வெல்வெட் குக்கீஸ்", "product.3.desc": "வெள்ளை சாக்லேட் சுழல்களுடன் மென்மையான ரெட் வெல்வெட்.",
    "product.4.name": "சால்டட் கேரமல் குக்கீஸ்", "product.4.desc": "கடல் உப்பு தொடுதலுடன் கூடிய பசையான கேரமல் மையம்.",
    "product.5.name": "மட்சா வெள்ளை சாக்லேட்", "product.5.desc": "கிரீமியான வெள்ளை சாக்லேட்டுடன் மட்சா மாவு.",
    "product.6.name": "நுடெல்லா லாவா குக்கீஸ்", "product.6.desc": "ஒவ்வொரு கடியிலும் சூடான நுடெல்லா மையம்.",
    "product.7.name": "ஓட்மீல் ரெய்சின்", "product.7.desc": "ஆரோக்கியமான ஓட்ஸ் மற்றும் திராட்சைகளுடன், லேசாக மசாலா.",
    "product.8.name": "நிலக்கடலை வெண்ணெய் குக்கீஸ்", "product.8.desc": "பணக்கார வறுத்த நிலக்கடலை வெண்ணெய், விளிம்புகளில் மொறுமொறுப்பான.",

    "testimonial.1.quote": "நான் ஆன்லைனில் ஆர்டர் செய்த சிறந்த குக்கீகள் இவை — இரண்டு நாட்களுக்குப் பிறகும் மென்மையாக இருந்தது!",
    "testimonial.1.name": "Aisyah R.", "testimonial.1.role": "வழக்கமான வாடிக்கையாளர், குலிம்",
    "testimonial.2.quote": "என் மகளின் பிறந்தநாளுக்கு ஒரு பெட்டி ஆர்டர் செய்தேன், முழு வகுப்பும் பக்க பெயரைக் கேட்டது.",
    "testimonial.2.name": "Nurul H.", "testimonial.2.role": "சரிபார்க்கப்பட்ட வாங்குபவர்",
    "testimonial.3.quote": "சால்டட் கேரமல் அபாரமானது. டெலிவரி வேகமாக இருந்தது, பேக்கேஜிங் அனைத்தையும் புதியதாக வைத்திருந்தது.",
    "testimonial.3.name": "Wei Ling T.", "testimonial.3.role": "சரிபார்க்கப்பட்ட வாங்குபவர்",
    "testimonial.4.quote": "ஹலால், வீட்டில் தயாரிக்கப்பட்டது, உண்மையிலேயே சுவையானது. இப்போது ஆசிரியர்களுக்கு எனது விருப்பமான பரிசு.",
    "testimonial.4.name": "Farah I.", "testimonial.4.role": "நிறுவன ஆர்டர், பினாங்கு"
  }
};

/* Product catalogue: price/category/colour are language-independent.
   Names & descriptions are pulled from TRANSLATIONS via the "id" below. */
const PRODUCTS = [
  { id: 1, price: 18.90, category: "classic",   crumbs: 4, hue: "caramel" },
  { id: 2, price: 21.90, category: "chocolate",  crumbs: 5, hue: "cocoa" },
  { id: 3, price: 23.90, category: "special",    crumbs: 4, hue: "cinnamon" },
  { id: 4, price: 24.90, category: "special",    crumbs: 3, hue: "gold" },
  { id: 5, price: 25.90, category: "special",    crumbs: 4, hue: "caramel" },
  { id: 6, price: 29.90, category: "chocolate",  crumbs: 5, hue: "cocoa" },
  { id: 7, price: 19.90, category: "classic",    crumbs: 3, hue: "caramel" },
  { id: 8, price: 22.90, category: "classic",    crumbs: 4, hue: "gold" }
];

const TESTIMONIAL_IDS = [1, 2, 3, 4];
