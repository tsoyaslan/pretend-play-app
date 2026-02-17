export type LocalizedText = {
  en: string;
  tr: string;
};

export type Scenario = {
  id: string;
  icon: string;
  cardColor: string;
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
  energy: "active" | "low";
};

export const scenarios: Scenario[] = [
  // ================= ACTIVE =================

  {
    id: "airport-adventure",
    icon: "✈️",
    cardColor: "from-sky-50 to-blue-100",
    theme: { en: "Airport Adventure", tr: "Havaalanı Macerası" },
    toddlerRole: { en: "flying the plane today", tr: "bugün uçağı uçuruyorsun" },
    parentRole: { en: "your very important passenger!", tr: "senin çok önemli yolcunum!" },
    mission: { en: "Help me fly safely to a brand new country", tr: "Beni yeni bir ülkeye güvenle uçur" },
    starterLabel: { en: "Getting Ready", tr: "Hazırlık Zamanı" },
    starterLine: { en: "Check all the buttons and switches on the plane.", tr: "Uçaktaki tüm düğmeleri kontrol et." },
    twistLabel: { en: "Turbulence!", tr: "Türbülans!" },
    twistLine: { en: "The plane shakes a little. What should we do?", tr: "Uçak biraz sallanıyor. Ne yapmalıyız?" },
    endingLabel: { en: "Safe Landing", tr: "Güvenli İniş" },
    endingLine: { en: "We landed safely! Everyone claps for you.", tr: "Güvenle indik! Herkes seni alkışlıyor." },
    energy: "active",
  },

  {
    id: "space-station",
    icon: "🚀",
    cardColor: "from-indigo-50 to-purple-100",
    theme: { en: "Space Station", tr: "Uzay İstasyonu" },
    toddlerRole: { en: "the astronaut commander", tr: "astronot komutan" },
    parentRole: { en: "your robot helper!", tr: "robot yardımcın!" },
    mission: { en: "Fix the broken satellite outside our station", tr: "İstasyon dışındaki bozuk uyduyu tamir et" },
    starterLabel: { en: "Suit Up", tr: "Hazırlan" },
    starterLine: { en: "Put on your space suit carefully.", tr: "Uzay kıyafetini dikkatlice giy." },
    twistLabel: { en: "Meteor Shower", tr: "Meteor Yağmuru" },
    twistLine: { en: "Small meteors fly by. Move carefully!", tr: "Küçük meteorlar geçiyor. Dikkatli ol!" },
    endingLabel: { en: "Mission Complete", tr: "Görev Tamamlandı" },
    endingLine: { en: "We fixed it! Let's float back inside.", tr: "Tamir ettik! İçeri dönelim." },
    energy: "active",
  },

  {
    id: "race-car",
    icon: "🏎️",
    cardColor: "from-red-50 to-orange-100",
    theme: { en: "Race Car Championship", tr: "Yarış Arabası Şampiyonası" },
    toddlerRole: { en: "the race car driver", tr: "yarış pilotu" },
    parentRole: { en: "your pit crew chief!", tr: "pit ekibi şefi!" },
    mission: { en: "Win the big race", tr: "Büyük yarışı kazan" },
    starterLabel: { en: "Ready", tr: "Hazır" },
    starterLine: { en: "Put on your helmet!", tr: "Kaskını tak!" },
    twistLabel: { en: "Flat Tire", tr: "Patlak Lastik" },
    twistLine: { en: "One tire is flat! Quick fix!", tr: "Bir lastik patladı! Çabuk tamir et!" },
    endingLabel: { en: "Victory", tr: "Zafer" },
    endingLine: { en: "You are the champion!", tr: "Şampiyon sensin!" },
    energy: "active",
  },

  {
    id: "jungle-expedition",
    icon: "🌴",
    cardColor: "from-emerald-50 to-green-100",
    theme: { en: "Jungle Expedition", tr: "Orman Keşfi" },
    toddlerRole: { en: "the brave explorer", tr: "cesur kaşif" },
    parentRole: { en: "your map reader!", tr: "harita okuyucun!" },
    mission: { en: "Find the hidden golden temple deep in the jungle", tr: "Ormanın derinliklerindeki altın tapınağı bul" },
    starterLabel: { en: "Into the Wild", tr: "Vahşi Doğaya" },
    starterLine: { en: "Grab your backpack and machete.", tr: "Sırt çantanı ve palanı al." },
    twistLabel: { en: "River Crossing", tr: "Nehir Geçişi" },
    twistLine: { en: "The river is wide. How do we cross?", tr: "Nehir çok geniş. Nasıl geçelim?" },
    endingLabel: { en: "Temple Found", tr: "Tapınak Bulundu" },
    endingLine: { en: "We discovered the golden temple!", tr: "Altın tapınağı bulduk!" },
    energy: "active",
  },

  {
    id: "pirate-ship",
    icon: "🏴‍☠️",
    cardColor: "from-amber-50 to-yellow-100",
    theme: { en: "Pirate Ship Adventure", tr: "Korsan Gemisi Macerası" },
    toddlerRole: { en: "the pirate captain", tr: "korsan kaptan" },
    parentRole: { en: "your first mate!", tr: "birinci yardımcın!" },
    mission: { en: "Search for treasure across the stormy sea", tr: "Fırtınalı denizde hazine ara" },
    starterLabel: { en: "Raise the Sails", tr: "Yelkenleri Aç" },
    starterLine: { en: "Climb the mast and raise the sails!", tr: "Direğe tırman ve yelkenleri aç!" },
    twistLabel: { en: "Sea Monster", tr: "Deniz Canavarı" },
    twistLine: { en: "A giant shadow moves under the water.", tr: "Suyun altında dev bir gölge var." },
    endingLabel: { en: "Treasure Chest", tr: "Hazine Sandığı" },
    endingLine: { en: "We found the treasure chest!", tr: "Hazine sandığını bulduk!" },
    energy: "active",
  },

  {
    id: "dinosaur-world",
    icon: "🦕",
    cardColor: "from-lime-50 to-emerald-100",
    theme: { en: "Dinosaur World", tr: "Dinozor Dünyası" },
    toddlerRole: { en: "the dinosaur ranger", tr: "dinozor korucusu" },
    parentRole: { en: "a scientist studying dinosaurs!", tr: "dinozorları inceleyen bilim insanı!" },
    mission: { en: "Protect baby dinosaurs from danger", tr: "Yavru dinozorları koru" },
    starterLabel: { en: "Tracking", tr: "İz Sürme" },
    starterLine: { en: "Look at these giant footprints!", tr: "Dev ayak izlerine bak!" },
    twistLabel: { en: "Volcano Warning", tr: "Volkan Uyarısı" },
    twistLine: { en: "The ground starts shaking!", tr: "Yer sallanmaya başlıyor!" },
    endingLabel: { en: "Safe Escape", tr: "Güvenli Kaçış" },
    endingLine: { en: "We helped the baby dinosaurs escape.", tr: "Yavru dinozorları kurtardık." },
    energy: "active",
  },

  {
    id: "superhero-city",
    icon: "🦸",
    cardColor: "from-blue-50 to-indigo-100",
    theme: { en: "Superhero City", tr: "Süper Kahraman Şehri" },
    toddlerRole: { en: "the city's superhero", tr: "şehrin süper kahramanı" },
    parentRole: { en: "your mission assistant!", tr: "senin yardımcın!" },
    mission: { en: "Save the city from a mysterious villain", tr: "Şehri kötü adamdan kurtar" },
    starterLabel: { en: "Call for Help", tr: "Yardım Çağrısı" },
    starterLine: { en: "The alarm rings in headquarters.", tr: "Merkezde alarm çalıyor." },
    twistLabel: { en: "Rooftop Chase", tr: "Çatı Kovalamacası" },
    twistLine: { en: "The villain runs across rooftops!", tr: "Kötü adam çatılardan kaçıyor!" },
    endingLabel: { en: "City Saved", tr: "Şehir Kurtarıldı" },
    endingLine: { en: "The city cheers for you!", tr: "Şehir seni alkışlıyor!" },
    energy: "active",
  },

  {
    id: "mountain-rescue",
    icon: "🏔️",
    cardColor: "from-slate-50 to-cyan-100",
    theme: { en: "Mountain Rescue", tr: "Dağ Kurtarma" },
    toddlerRole: { en: "the rescue leader", tr: "kurtarma lideri" },
    parentRole: { en: "a lost hiker!", tr: "kaybolmuş bir yürüyüşçü!" },
    mission: { en: "Find and rescue the lost hiker", tr: "Kaybolan yürüyüşçüyü bul ve kurtar" },
    starterLabel: { en: "Climbing Up", tr: "Tırmanış" },
    starterLine: { en: "We begin climbing the snowy mountain.", tr: "Karlı dağa tırmanmaya başlıyoruz." },
    twistLabel: { en: "Snowstorm", tr: "Kar Fırtınası" },
    twistLine: { en: "The wind gets stronger!", tr: "Rüzgar güçleniyor!" },
    endingLabel: { en: "Rescue Complete", tr: "Kurtarma Tamamlandı" },
    endingLine: { en: "We found the hiker and brought them home.", tr: "Yürüyüşçüyü bulduk ve eve getirdik." },
    energy: "active",
  },

  // ================= LOW =================

  {
    id: "bedtime-library",
    icon: "📚",
    cardColor: "from-amber-50 to-orange-50",
    theme: { en: "Bedtime Story Library", tr: "Uyku Masalı Kütüphanesi" },
    toddlerRole: { en: "the wise librarian", tr: "bilge kütüphaneci" },
    parentRole: { en: "looking for the perfect book!", tr: "mükemmel kitabı arayan kişi!" },
    mission: { en: "Help me find a magical story to read before bed", tr: "Yatmadan önce sihirli bir hikaye bulmama yardım et" },
    starterLabel: { en: "Welcome In", tr: "Hoş Geldin" },
    starterLine: { en: "The library is quiet and cozy.", tr: "Kütüphane sessiz ve huzurlu." },
    twistLabel: { en: "Hidden Book", tr: "Gizli Kitap" },
    twistLine: { en: "A glowing book appears.", tr: "Parlayan bir kitap ortaya çıktı." },
    endingLabel: { en: "Story Time", tr: "Hikaye Zamanı" },
    endingLine: { en: "Let's read together.", tr: "Birlikte okuyalım." },
    energy: "low",
  },

  {
    id: "veterinary-clinic",
    icon: "🧸",
    cardColor: "from-pink-50 to-rose-100",
    theme: { en: "Veterinary Clinic", tr: "Veteriner Kliniği" },
    toddlerRole: { en: "the gentle animal doctor", tr: "nazik hayvan doktoru" },
    parentRole: { en: "bringing my sick teddy bear!", tr: "hasta oyuncak ayımı getiren kişi!" },
    mission: { en: "Help my teddy feel better", tr: "Oyuncak ayımı iyileştir" },
    starterLabel: { en: "Check-Up", tr: "Muayene" },
    starterLine: { en: "Check the teddy's temperature.", tr: "Ayıcığın ateşini ölç." },
    twistLabel: { en: "Special Medicine", tr: "Özel İlaç" },
    twistLine: { en: "What medicine should we give?", tr: "Hangi ilacı verelim?" },
    endingLabel: { en: "All Better", tr: "Artık İyi" },
    endingLine: { en: "The teddy is smiling again.", tr: "Ayıcık tekrar gülümsüyor." },
    energy: "low",
  },

  {
    id: "cozy-bakery",
    icon: "🧁",
    cardColor: "from-orange-50 to-amber-100",
    theme: { en: "Cozy Bakery", tr: "Sıcacık Fırın" },
    toddlerRole: { en: "the baker", tr: "fırıncı" },
    parentRole: { en: "your hungry customer!", tr: "aç müşterin!" },
    mission: { en: "Make the most delicious treat", tr: "En lezzetli tatlıyı yap" },
    starterLabel: { en: "Morning Prep", tr: "Sabah Hazırlığı" },
    starterLine: { en: "The bakery smells amazing.", tr: "Fırın harika kokuyor." },
    twistLabel: { en: "Special Order", tr: "Özel Sipariş" },
    twistLine: { en: "A mouse wants a tiny cake.", tr: "Minik bir fare küçük bir pasta istiyor." },
    endingLabel: { en: "Sharing Time", tr: "Paylaşma Zamanı" },
    endingLine: { en: "Let's taste what we made.", tr: "Yaptıklarımızı tadına bakalım." },
    energy: "low",
  },

  {
    id: "cloud-painter",
    icon: "🎨",
    cardColor: "from-violet-50 to-pink-100",
    theme: { en: "Cloud Painter", tr: "Bulut Ressamı" },
    toddlerRole: { en: "the sky painter", tr: "gökyüzü ressamı" },
    parentRole: { en: "your assistant holding the paintbrush!", tr: "fırçayı tutan yardımcın!" },
    mission: { en: "Paint the evening sky with beautiful colors", tr: "Akşam gökyüzünü güzel renklerle boya" },
    starterLabel: { en: "Soft Sunset", tr: "Yumuşak Gün Batımı" },
    starterLine: { en: "The sky is empty and waiting for color.", tr: "Gökyüzü boş ve renk bekliyor." },
    twistLabel: { en: "Color Choice", tr: "Renk Seçimi" },
    twistLine: { en: "Should we add pink clouds or golden ones?", tr: "Pembe bulutlar mı ekleyelim yoksa altın rengi mi?" },
    endingLabel: { en: "Peaceful Night", tr: "Huzurlu Gece" },
    endingLine: { en: "The sky glows softly as night begins.", tr: "Gece başlarken gökyüzü yumuşakça parlıyor." },
    energy: "low",
  },

  {
    id: "magic-forest-cottage",
    icon: "🏡",
    cardColor: "from-emerald-50 to-teal-100",
    theme: { en: "Magic Forest Cottage", tr: "Sihirli Orman Kulübesi" },
    toddlerRole: { en: "the forest guardian", tr: "orman koruyucusu" },
    parentRole: { en: "visiting your cozy cottage!", tr: "kulübene gelen misafir!" },
    mission: { en: "Prepare the cottage for a peaceful night", tr: "Kulübeyi huzurlu bir gece için hazırla" },
    starterLabel: { en: "Warm Fire", tr: "Sıcak Ateş" },
    starterLine: { en: "The fireplace needs gentle wood pieces.", tr: "Şömineye küçük odunlar koymalıyız." },
    twistLabel: { en: "Forest Friend", tr: "Orman Dostu" },
    twistLine: { en: "A tiny rabbit knocks at the door.", tr: "Minik bir tavşan kapıyı çalıyor." },
    endingLabel: { en: "Quiet Evening", tr: "Sessiz Akşam" },
    endingLine: { en: "The forest becomes calm and sleepy.", tr: "Orman sakinleşiyor ve uykuya hazırlanıyor." },
    energy: "low",
  },

  {
    id: "moonlight-garden",
    icon: "🌙",
    cardColor: "from-indigo-50 to-violet-100",
    theme: { en: "Moonlight Garden", tr: "Ay Işığı Bahçesi" },
    toddlerRole: { en: "the night gardener", tr: "gece bahçıvanı" },
    parentRole: { en: "learning about night flowers!", tr: "gece çiçeklerini öğrenen kişi!" },
    mission: { en: "Help the flowers bloom under the moonlight", tr: "Ay ışığında çiçeklerin açmasına yardım et" },
    starterLabel: { en: "Moonrise", tr: "Ay Doğuyor" },
    starterLine: { en: "The moon slowly rises above the garden.", tr: "Ay yavaşça bahçenin üzerine yükseliyor." },
    twistLabel: { en: "Glowing Petals", tr: "Parlayan Yapraklar" },
    twistLine: { en: "Some flowers begin to glow softly.", tr: "Bazı çiçekler hafifçe parlamaya başlıyor." },
    endingLabel: { en: "Sweet Dreams", tr: "Tatlı Rüyalar" },
    endingLine: { en: "The garden rests under the silver moon.", tr: "Bahçe gümüş ay ışığında dinleniyor." },
    energy: "low",
  },

  {
    id: "toy-repair-shop",
    icon: "🔧",
    cardColor: "from-yellow-50 to-amber-100",
    theme: { en: "Toy Repair Shop", tr: "Oyuncak Tamir Dükkanı" },
    toddlerRole: { en: "the gentle toy fixer", tr: "nazik oyuncak tamircisi" },
    parentRole: { en: "bringing in my tired teddy!", tr: "yorgun ayıcığımı getiren kişi!" },
    mission: { en: "Fix toys so they feel happy again", tr: "Oyuncakları tekrar mutlu olacak şekilde tamir et" },
    starterLabel: { en: "Workshop Time", tr: "Atölye Zamanı" },
    starterLine: { en: "Lay out your soft tools carefully.", tr: "Yumuşak aletlerini dikkatlice yerleştir." },
    twistLabel: { en: "Loose Button", tr: "Gevşek Düğme" },
    twistLine: { en: "One button is about to fall off.", tr: "Bir düğme düşmek üzere." },
    endingLabel: { en: "Happy Again", tr: "Yeniden Mutlu" },
    endingLine: { en: "The toys smile warmly.", tr: "Oyuncaklar sıcakça gülümsüyor." },
    energy: "low",
  },

  {
    id: "starlight-train",
    icon: "🚂",
    cardColor: "from-blue-50 to-indigo-50",
    theme: { en: "Starlight Train", tr: "Yıldızlı Tren" },
    toddlerRole: { en: "the train conductor", tr: "tren kondüktörü" },
    parentRole: { en: "your sleepy passenger!", tr: "uykulu yolcun!" },
    mission: { en: "Guide the night train through the stars", tr: "Gece trenini yıldızların arasından yönlendir" },
    starterLabel: { en: "All Aboard", tr: "Herkes Trene" },
    starterLine: { en: "The train whistles softly.", tr: "Tren yumuşakça düdük çalıyor." },
    twistLabel: { en: "Star Crossing", tr: "Yıldız Geçidi" },
    twistLine: { en: "The tracks glow under starlight.", tr: "Raylar yıldız ışığında parlıyor." },
    endingLabel: { en: "Dream Station", tr: "Rüya İstasyonu" },
    endingLine: { en: "We arrive at the land of dreams.", tr: "Rüyalar diyarına varıyoruz." },
    energy: "low",
  },
];
