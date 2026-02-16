// scenarios.ts - Updated data structure for redesigned play prompt app
export type LocalizedText = {
  en: string;
  tr: string;
};

export type Scenario = {
  theme: LocalizedText;
  toddlerRole: LocalizedText;
  parentRole: LocalizedText;
  mission: LocalizedText;
  starterLabel: LocalizedText;
  starterLine: LocalizedText;
  twistLabel: LocalizedText;
  twistLine: LocalizedText;
  endingLabel: LocalizedText;
  endingLine: LocalizedText;
  energy: "active" | "low" | "mixed";
};


export const scenarios: Scenario[] = [
  // ============================================
  // ACTIVE ENERGY SCENARIOS
  // ============================================
  {
    theme: {
      en: "Airport Adventure",
      tr: "Havaalani Macerasi",
    },
    toddlerRole: {
      en: "flying the plane today",
      tr: "bugün uçağı uçuruyorsun",
    },
    parentRole: {
      en: "your very important passenger!",
      tr: "senin çok önemli yolcunum!",
    },
    mission: {
      en: "Help me fly safely to a brand new country",
      tr: "Beni bu ülkeye güvenle uçur",
    },
    starterLabel: {
      en: "Getting Ready",
      tr: "Hazırlık Zamanı",
    },
    starterLine: {
      en: "Check all the buttons and switches on the plane. Is everything working?",
      tr: "Uçaktaki tüm düğmeleri ve kolları kontrol et. Hepsi çalışıyor mu?",
    },
    twistLabel: {
      en: "Surprise in the Sky",
      tr: "Gökyüzünde Sürpriz",
    },
    twistLine: {
      en: "Oh no! The weather is getting bumpy. Should we fly through the clouds or around them?",
      tr: "Eyvah! Ucak biraz sallaniyor. Bulutların içinden mi uçalım yoksa etrafından mı?",
    },
    endingLabel: {
      en: "Safe Landing",
      tr: "Güvenli İniş",
    },
    endingLine: {
      en: "We made it! Everyone claps for the amazing pilot.",
      tr: "Başardık! Herkes harika pilota alkış tutuyor.",
    },
    energy: "active",
  },
  {
    theme: { en: "Rescue Mission", tr: "Kurtarma Görevi" },
    toddlerRole: { en: "the brave firefighter", tr: "cesur itfaiyeci" },
    parentRole: { en: "the person who needs rescuing!", tr: "kurtarılmayı bekleyen kişi!" },
    mission: { en: "Save me from the tall building before it's too late", tr: "Çok geç olmadan beni yüksek binadan kurtar" },
    starterLabel: { en: "Sound the Alarm", tr: "Alarmı Çal" },
    starterLine: { en: "Quick! Jump in the fire truck and turn on the sirens.", tr: "Çabuk! İtfaiye aracına atla ve sirenleri aç." },
    twistLabel: { en: "Up the Ladder", tr: "Merdiven Zamanı" },
    twistLine: { en: "The ladder goes higher and higher! It's a little wobbly.", tr: "Merdiven gittikçe yükseliyor! Biraz sallanıyor." },
    endingLabel: { en: "Heroes Return", tr: "Kahramanın Dönüşü" },
    endingLine: { en: "You saved me! Everyone cheers.", tr: "Beni kurtardın! Herkes seni alkışlıyor." },
    energy: "active",
  },
  {
    theme: { en: "Jungle Explorer", tr: "Orman Kaşifi" },
    toddlerRole: { en: "the expedition leader", tr: "keşif lideri" },
    parentRole: { en: "the wildlife photographer!", tr: "vahşi yaşam fotoğrafçısı!" },
    mission: { en: "Find the hidden treasure deep in the jungle", tr: "Ormanın derinliklerindeki gizli hazineyi bul" },
    starterLabel: { en: "Into the Wild", tr: "Vahşi Doğaya" },
    starterLine: { en: "Pack your backpack with everything we need.", tr: "Gereken her şeyi sırt çantana koy." },
    twistLabel: { en: "Wild Animals", tr: "Vahşi Hayvanlar" },
    twistLine: { en: "Shh! A tiger is sleeping nearby.", tr: "Şşş! Yakında bir kaplan uyuyor." },
    endingLabel: { en: "Treasure Found", tr: "Hazine Bulundu" },
    endingLine: { en: "Look! The treasure chest!", tr: "Bak! Hazine sandığı!" },
    energy: "active",
  },
  {
    theme: { en: "Race Car Championship", tr: "Yarış Arabası Şampiyonası" },
    toddlerRole: { en: "the star race car driver", tr: "yıldız yarış pilotu" },
    parentRole: { en: "your pit crew chief!", tr: "pit ekibi şefi!" },
    mission: { en: "Win the big race and become the champion", tr: "Büyük yarışı kazan ve şampiyon ol" },
    starterLabel: { en: "Ready, Set...", tr: "Hazır, Başla..." },
    starterLine: { en: "Put on your helmet and buckle up!", tr: "Kaskını tak ve kemerini bağla!" },
    twistLabel: { en: "Tire Trouble", tr: "Lastik Sorunu" },
    twistLine: { en: "Uh oh! One tire is getting flat.", tr: "Eyvah! Bir lastik iniyor." },
    endingLabel: { en: "Victory Lap", tr: "Zafer Turu" },
    endingLine: { en: "You're in first place!", tr: "Birinci oldun!" },
    energy: "active",
  },

  // ============================================
  // LOW/COZY ENERGY SCENARIOS
  // ============================================
  {
    theme: { en: "Cozy Bakery", tr: "Sıcacık Fırın" },
    toddlerRole: { en: "the gentle baker", tr: "nazik fırıncı" },
    parentRole: { en: "your hungry customer!", tr: "aç müşterin!" },
    mission: { en: "Make me the most delicious treat you can imagine", tr: "Hayal edebileceğin en lezzetli şeyi yap" },
    starterLabel: { en: "Morning Prep", tr: "Sabah Hazırlığı" },
    starterLine: { en: "The bakery smells amazing!", tr: "Fırın mis gibi kokuyor!" },
    twistLabel: { en: "Special Request", tr: "Özel İstek" },
    twistLine: { en: "A tiny mouse wants something sweet.", tr: "Minik bir fare tatlı bir şey istiyor." },
    endingLabel: { en: "Sharing Time", tr: "Paylaşma Zamanı" },
    endingLine: { en: "Let's taste what we made.", tr: "Yaptıklarımızı tadına bakalım." },
    energy: "low",
  },
  {
    theme: { en: "Bedtime Story Library", tr: "Uyku Masalı Kütüphanesi" },
    toddlerRole: { en: "the wise librarian", tr: "bilge kütüphaneci" },
    parentRole: { en: "looking for the perfect book!", tr: "mükemmel kitabı arayan kişi!" },
    mission: { en: "Help me find a magical story to read before bed", tr: "Yatmadan önce sihirli bir hikaye bulmama yardım et" },
    starterLabel: { en: "Welcome In", tr: "Hoş Geldin" },
    starterLine: { en: "The library is quiet and cozy.", tr: "Kütüphane sessiz ve huzurlu." },
    twistLabel: { en: "A Hidden Book", tr: "Gizli Kitap" },
    twistLine: { en: "A glowing book is on the top shelf.", tr: "Üst rafta parlayan bir kitap var." },
    endingLabel: { en: "Story Time", tr: "Hikaye Zamanı" },
    endingLine: { en: "Let's sit and read together.", tr: "Birlikte oturup okuyalım." },
    energy: "low",
  },
  {
    theme: { en: "Garden Tea Party", tr: "Bahçe Çay Partisi" },
    toddlerRole: { en: "the kind garden fairy", tr: "nazik bahçe perisi" },
    parentRole: { en: "your guest from far away!", tr: "uzaktan gelen misafirin!" },
    mission: { en: "Show me the most beautiful parts of your magical garden", tr: "Sihirli bahçenin en güzel yerlerini göster" },
    starterLabel: { en: "Garden Tour", tr: "Bahçe Turu" },
    starterLine: { en: "Welcome to my garden!", tr: "Bahçeme hoş geldin!" },
    twistLabel: { en: "Tiny Visitor", tr: "Minik Ziyaretçi" },
    twistLine: { en: "A butterfly landed on your hand.", tr: "Bir kelebek eline kondu." },
    endingLabel: { en: "Tea and Talk", tr: "Çay ve Sohbet" },
    endingLine: { en: "Let's sit for tea.", tr: "Çay içmek için oturalım." },
    energy: "low",
  },
  {
    theme: { en: "Veterinary Clinic", tr: "Veteriner Kliniği" },
    toddlerRole: { en: "the gentle animal doctor", tr: "nazik hayvan doktoru" },
    parentRole: { en: "bringing in my sick teddy bear!", tr: "hasta oyuncak ayımı getiren kişi!" },
    mission: { en: "Help my teddy feel better", tr: "Oyuncak ayımı iyileştir" },
    starterLabel: { en: "Check-Up Time", tr: "Muayene Zamanı" },
    starterLine: { en: "Check the teddy's temperature.", tr: "Ayıcığın ateşini ölç." },
    twistLabel: { en: "Special Medicine", tr: "Özel İlaç" },
    twistLine: { en: "What medicine should we give?", tr: "Hangi ilacı verelim?" },
    endingLabel: { en: "All Better", tr: "Artık İyi" },
    endingLine: { en: "The teddy is smiling again.", tr: "Ayıcık yine gülümsüyor." },
    energy: "low",
  },


  {
    theme: { en: "Space Station", tr: "Uzay İstasyonu" },
    toddlerRole: { en: "the astronaut commander", tr: "astronot komutan" },
    parentRole: { en: "your robot helper!", tr: "robot yardımcın!" },
    mission: {
      en: "Fix the broken satellite floating outside our space station",
      tr: "Uzay istasyonunun dışında süzülen bozuk uyduyu tamir et",
    },
    starterLabel: { en: "Suit Up", tr: "Hazırlan" },
    starterLine: {
      en: "Put on your space suit and helmet. Check everything carefully before going outside.",
      tr: "Uzay kıyafetini ve kaskını tak. Dışarı çıkmadan önce her şeyi dikkatlice kontrol et.",
    },
    twistLabel: { en: "Meteor Shower", tr: "Meteor Yağmuru" },
    twistLine: {
      en: "Tiny rocks are flying past us! Move slowly and carefully.",
      tr: "Minik meteorlar yanımızdan geçiyor! Yavaş ve dikkatli hareket et.",
    },
    endingLabel: { en: "Mission Complete", tr: "Görev Tamamlandı" },
    endingLine: {
      en: "We fixed it! Let’s float back inside and celebrate.",
      tr: "Tamir ettik! İçeri girip kutlama yapalım.",
    },
    energy: "active",
  },
  {
    theme: { en: "Mountain Climbing", tr: "Dağ Tırmanışı" },
    toddlerRole: { en: "the mountain guide", tr: "dağ rehberi" },
    parentRole: { en: "learning to climb for the first time!", tr: "ilk kez tırmanmayı öğrenen kişi!" },
    mission: {
      en: "Lead me safely to the top of the snowy mountain",
      tr: "Beni güvenle karlı dağın zirvesine çıkar",
    },
    starterLabel: { en: "Base Camp", tr: "Ana Kamp" },
    starterLine: {
      en: "We’re starting at the bottom. Show me how to prepare our gear.",
      tr: "En aşağıdan başlıyoruz. Ekipmanlarımızı nasıl hazırlayacağımızı göster.",
    },
    twistLabel: { en: "Slippery Ice", tr: "Kaygan Buz" },
    twistLine: {
      en: "Careful! The ground is icy. Move slowly and hold my hand.",
      tr: "Dikkat! Yer buzlu. Yavaş hareket et ve elimi tut.",
    },
    endingLabel: { en: "Summit Success", tr: "Zirve Başarısı" },
    endingLine: {
      en: "We made it to the top! Look at the amazing view.",
      tr: "Zirveye ulaştık! Manzaraya bak ne kadar güzel.",
    },
    energy: "active",
  },
  {
    theme: { en: "Submarine Adventure", tr: "Denizaltı Macerası" },
    toddlerRole: { en: "the submarine captain", tr: "denizaltı kaptanı" },
    parentRole: { en: "your crew member!", tr: "mürettebat üyesi!" },
    mission: {
      en: "Dive deep to discover what lives at the bottom of the ocean",
      tr: "Okyanusun dibinde neler yaşadığını keşfetmek için derine dal",
    },
    starterLabel: { en: "Going Down", tr: "Dalış Başlıyor" },
    starterLine: {
      en: "Close the hatch and turn the wheel. We’re diving deeper!",
      tr: "Kapağı kapat ve dümeni çevir. Daha derine dalıyoruz!",
    },
    twistLabel: { en: "Friendly Whale", tr: "Dost Balina" },
    twistLine: {
      en: "A huge whale is swimming beside us. Should we follow it?",
      tr: "Dev bir balina yanımızda yüzüyor. Onu takip edelim mi?",
    },
    endingLabel: { en: "Treasure Discovery", tr: "Hazine Keşfi" },
    endingLine: {
      en: "We found a sunken treasure! What should we do next?",
      tr: "Batık bir hazine bulduk! Şimdi ne yapalım?",
    },
    energy: "active",
  },
  {
    theme: { en: "Pizza Restaurant", tr: "Pizza Restoranı" },
    toddlerRole: { en: "the head chef", tr: "baş aşçı" },
    parentRole: { en: "your first customer!", tr: "ilk müşterin!" },
    mission: {
      en: "Make me the most creative pizza you can imagine",
      tr: "Hayal edebileceğin en yaratıcı pizzayı yap",
    },
    starterLabel: { en: "Opening Time", tr: "Açılış Zamanı" },
    starterLine: {
      en: "Roll out the dough carefully. What shape should we make?",
      tr: "Hamuru dikkatlice aç. Hangi şekli yapalım?",
    },
    twistLabel: { en: "Unusual Order", tr: "Garip Sipariş" },
    twistLine: {
      en: "The customer wants something unusual on their pizza!",
      tr: "Müşteri pizzasında alışılmadık bir şey istiyor!",
    },
    endingLabel: { en: "Tasting Time", tr: "Tadım Zamanı" },
    endingLine: {
      en: "Let’s cut it into slices and taste it together.",
      tr: "Dilimleyip birlikte tadına bakalım.",
    },
    energy: "low",
  },
];
