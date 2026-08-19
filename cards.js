// Tabu Magyar – eredeti, saját kártyapakli
// A kártyák nem a Hasbro fizikai paklijának másolatai.
// A pakli 850 eredeti, magyar nyelvű feladványból áll.
const TABU_CARDS = [
  {
    "id": "HU0001",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "REKLÁM",
    "taboo": [
      "hirdetés",
      "televízió",
      "termék",
      "plakát",
      "marketing"
    ]
  },
  {
    "id": "HU0002",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "TAXI",
    "taboo": [
      "autó",
      "sofőr",
      "fuvar",
      "utca",
      "sárga"
    ]
  },
  {
    "id": "HU0003",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "PÉNZTÁR",
    "taboo": [
      "bolt",
      "fizetés",
      "kosár",
      "blokk",
      "eladó"
    ]
  },
  {
    "id": "HU0004",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "ESERNYŐ",
    "taboo": [
      "eső",
      "víz",
      "nyit",
      "fogantyú",
      "vihar"
    ]
  },
  {
    "id": "HU0005",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "HŰTŐSZEKRÉNY",
    "taboo": [
      "konyha",
      "hideg",
      "étel",
      "fagyasztó",
      "ajtó"
    ]
  },
  {
    "id": "HU0006",
    "category": "Mindennapok",
    "difficulty": "Normál",
    "word": "MOSÓGÉP",
    "taboo": [
      "ruha",
      "mosás",
      "centrifuga",
      "mosószer",
      "dob"
    ]
  },
  {
    "id": "HU0007",
    "category": "Mindennapok",
    "difficulty": "Normál",
    "word": "PORSZÍVÓ",
    "taboo": [
      "takarítás",
      "por",
      "szőnyeg",
      "szív",
      "zaj"
    ]
  },
  {
    "id": "HU0008",
    "category": "Mindennapok",
    "difficulty": "Normál",
    "word": "BŐRÖND",
    "taboo": [
      "utazás",
      "ruha",
      "repülő",
      "poggyász",
      "cipzár"
    ]
  },
  {
    "id": "HU0009",
    "category": "Mindennapok",
    "difficulty": "Normál",
    "word": "ÉBRESZTŐÓRA",
    "taboo": [
      "reggel",
      "felkelés",
      "csörgés",
      "idő",
      "alvás"
    ]
  },
  {
    "id": "HU0010",
    "category": "Mindennapok",
    "difficulty": "Normál",
    "word": "TÁVIRÁNYÍTÓ",
    "taboo": [
      "tévé",
      "gomb",
      "csatorna",
      "kapcsoló",
      "elem"
    ]
  },
  {
    "id": "HU0011",
    "category": "Mindennapok",
    "difficulty": "Normál",
    "word": "SZÚNYOG",
    "taboo": [
      "csípés",
      "rovar",
      "nyár",
      "zúg",
      "vér"
    ]
  },
  {
    "id": "HU0012",
    "category": "Mindennapok",
    "difficulty": "Normál",
    "word": "FOGKEFE",
    "taboo": [
      "fog",
      "mosás",
      "fogkrém",
      "fürdőszoba",
      "sörték"
    ]
  },
  {
    "id": "HU0013",
    "category": "Mindennapok",
    "difficulty": "Nehéz",
    "word": "POSTALÁDA",
    "taboo": [
      "levél",
      "posta",
      "boríték",
      "küldemény",
      "utcai"
    ]
  },
  {
    "id": "HU0014",
    "category": "Mindennapok",
    "difficulty": "Nehéz",
    "word": "CSOMAGAUTOMATA",
    "taboo": [
      "futár",
      "csomag",
      "kód",
      "átvétel",
      "rekesz"
    ]
  },
  {
    "id": "HU0015",
    "category": "Mindennapok",
    "difficulty": "Nehéz",
    "word": "NYUGTA",
    "taboo": [
      "blokk",
      "vásárlás",
      "pénztár",
      "papír",
      "fizetés"
    ]
  },
  {
    "id": "HU0016",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "PIZZA",
    "taboo": [
      "olasz",
      "sajt",
      "tészta",
      "feltét",
      "sütő"
    ]
  },
  {
    "id": "HU0017",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "HAMBURGER",
    "taboo": [
      "hús",
      "zsemle",
      "sajt",
      "hamburgerhús",
      "étterem"
    ]
  },
  {
    "id": "HU0018",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "PALACSINTA",
    "taboo": [
      "tészta",
      "lekvár",
      "csoki",
      "sütés",
      "felteker"
    ]
  },
  {
    "id": "HU0019",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "POPCORN",
    "taboo": [
      "mozi",
      "kukorica",
      "só",
      "vödör",
      "film"
    ]
  },
  {
    "id": "HU0020",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "FAGYLALT",
    "taboo": [
      "nyár",
      "hideg",
      "gombóc",
      "tölcsér",
      "desszert"
    ]
  },
  {
    "id": "HU0021",
    "category": "Ételek",
    "difficulty": "Normál",
    "word": "GULYÁS",
    "taboo": [
      "leves",
      "marha",
      "paprika",
      "krumpli",
      "magyar"
    ]
  },
  {
    "id": "HU0022",
    "category": "Ételek",
    "difficulty": "Normál",
    "word": "LÁNGOS",
    "taboo": [
      "fokhagyma",
      "tejföl",
      "sajt",
      "strand",
      "olaj"
    ]
  },
  {
    "id": "HU0023",
    "category": "Ételek",
    "difficulty": "Normál",
    "word": "TIRAMISU",
    "taboo": [
      "olasz",
      "kávé",
      "mascarpone",
      "desszert",
      "kakaó"
    ]
  },
  {
    "id": "HU0024",
    "category": "Ételek",
    "difficulty": "Normál",
    "word": "SUSHI",
    "taboo": [
      "japán",
      "rizs",
      "hal",
      "wasabi",
      "szójaszósz"
    ]
  },
  {
    "id": "HU0025",
    "category": "Ételek",
    "difficulty": "Nehéz",
    "word": "GUACAMOLE",
    "taboo": [
      "avokádó",
      "mexikói",
      "dip",
      "lime",
      "nachos"
    ]
  },
  {
    "id": "HU0026",
    "category": "Ételek",
    "difficulty": "Nehéz",
    "word": "RISOTTO",
    "taboo": [
      "rizs",
      "olasz",
      "krémes",
      "parmezán",
      "gomba"
    ]
  },
  {
    "id": "HU0027",
    "category": "Ételek",
    "difficulty": "Nehéz",
    "word": "CROISSANT",
    "taboo": [
      "francia",
      "vaj",
      "pékség",
      "reggeli",
      "leveles"
    ]
  },
  {
    "id": "HU0028",
    "category": "Ételek",
    "difficulty": "Nehéz",
    "word": "RAMEN",
    "taboo": [
      "japán",
      "tészta",
      "leves",
      "tojás",
      "húsleves"
    ]
  },
  {
    "id": "HU0029",
    "category": "Ételek",
    "difficulty": "Nehéz",
    "word": "KOVÁSZOS UBORKA",
    "taboo": [
      "savanyúság",
      "uborka",
      "kovász",
      "kapor",
      "üveg"
    ]
  },
  {
    "id": "HU0030",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "TITANIC",
    "taboo": [
      "hajó",
      "jéghegy",
      "Rose",
      "Jack",
      "Leonardo"
    ]
  },
  {
    "id": "HU0031",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "HARRY POTTER",
    "taboo": [
      "varázsló",
      "Roxfort",
      "pálca",
      "Hermione",
      "Voldemort"
    ]
  },
  {
    "id": "HU0032",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "STAR WARS",
    "taboo": [
      "űr",
      "Jedi",
      "Darth Vader",
      "fénykard",
      "Luke"
    ]
  },
  {
    "id": "HU0033",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "JURASSIC PARK",
    "taboo": [
      "dinoszaurusz",
      "T-Rex",
      "sziget",
      "őslény",
      "film"
    ]
  },
  {
    "id": "HU0034",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "MÁTRIX",
    "taboo": [
      "Neo",
      "piros",
      "kék",
      "szimuláció",
      "Morpheus"
    ]
  },
  {
    "id": "HU0035",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "GLADIÁTOR",
    "taboo": [
      "Róma",
      "arénа",
      "Russell Crowe",
      "harcos",
      "császár"
    ]
  },
  {
    "id": "HU0036",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "FORREST GUMP",
    "taboo": [
      "Tom Hanks",
      "pad",
      "futás",
      "csoki",
      "Amerika"
    ]
  },
  {
    "id": "HU0037",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "A KERESZTAPA",
    "taboo": [
      "maffia",
      "Don Corleone",
      "olasz",
      "család",
      "film"
    ]
  },
  {
    "id": "HU0038",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "VISSZA A JÖVŐBE",
    "taboo": [
      "DeLorean",
      "időgép",
      "Marty",
      "Doc",
      "1985"
    ]
  },
  {
    "id": "HU0039",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "OTTHON, ÉDES OTTHON",
    "taboo": [
      "Kevin",
      "karácsony",
      "betörő",
      "ház",
      "Macaulay"
    ]
  },
  {
    "id": "HU0040",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "INCEPTION",
    "taboo": [
      "álom",
      "Leonardo",
      "totem",
      "Christopher Nolan",
      "forgó"
    ]
  },
  {
    "id": "HU0041",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "INTERSTELLAR",
    "taboo": [
      "űr",
      "fekete lyuk",
      "űrhajó",
      "Matthew McConaughey",
      "idő"
    ]
  },
  {
    "id": "HU0042",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "PULP FICTION",
    "taboo": [
      "Tarantino",
      "Vincent",
      "Jules",
      "tánc",
      "bőrönd"
    ]
  },
  {
    "id": "HU0043",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "A BÁRÁNYOK HALLGATNAK",
    "taboo": [
      "Hannibal",
      "Lecter",
      "Clarice",
      "sorozatgyilkos",
      "pszichopata"
    ]
  },
  {
    "id": "HU0044",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "SZELLEMIRTÓK",
    "taboo": [
      "szellem",
      "New York",
      "Ecto-1",
      "protonágyú",
      "zöld"
    ]
  },
  {
    "id": "HU0045",
    "category": "Sorozatok",
    "difficulty": "Könnyű",
    "word": "A HIVATAL",
    "taboo": [
      "iroda",
      "Michael Scott",
      "Scranton",
      "Jim",
      "Pam"
    ]
  },
  {
    "id": "HU0046",
    "category": "Sorozatok",
    "difficulty": "Könnyű",
    "word": "JÓBARÁTOK",
    "taboo": [
      "Chandler",
      "Monica",
      "Ross",
      "New York",
      "Central Perk"
    ]
  },
  {
    "id": "HU0047",
    "category": "Sorozatok",
    "difficulty": "Könnyű",
    "word": "TRÓNOK HARCA",
    "taboo": [
      "Westeros",
      "sárkány",
      "Jon Snow",
      "HBO",
      "Daenerys"
    ]
  },
  {
    "id": "HU0048",
    "category": "Sorozatok",
    "difficulty": "Könnyű",
    "word": "STRANGER THINGS",
    "taboo": [
      "Eleven",
      "Upside Down",
      "demogorgon",
      "Hawkins",
      "Netflix"
    ]
  },
  {
    "id": "HU0049",
    "category": "Sorozatok",
    "difficulty": "Könnyű",
    "word": "SIMPSON CSALÁD",
    "taboo": [
      "Homer",
      "Bart",
      "Marge",
      "Springfield",
      "rajzfilm"
    ]
  },
  {
    "id": "HU0050",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "BREAKING BAD",
    "taboo": [
      "Walter White",
      "Jesse",
      "metamfetamin",
      "Albuquerque",
      "Heisenberg"
    ]
  },
  {
    "id": "HU0051",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "PEAKY BLINDERS",
    "taboo": [
      "Birmingham",
      "Shelby",
      "Tommy",
      "sapka",
      "maffia"
    ]
  },
  {
    "id": "HU0052",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "LA CASA DE PAPEL",
    "taboo": [
      "professzor",
      "rablás",
      "maszk",
      "spanyol",
      "Netflix"
    ]
  },
  {
    "id": "HU0053",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "THE BOYS",
    "taboo": [
      "szuperhős",
      "Homelander",
      "Vought",
      "Amazon",
      "Butcher"
    ]
  },
  {
    "id": "HU0054",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "THE LAST OF US",
    "taboo": [
      "Joel",
      "Ellie",
      "gomba",
      "zombi",
      "PlayStation"
    ]
  },
  {
    "id": "HU0055",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "BLACK MIRROR",
    "taboo": [
      "technológia",
      "epizód",
      "disztópia",
      "Netflix",
      "sci-fi"
    ]
  },
  {
    "id": "HU0056",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "SUCCESSION",
    "taboo": [
      "Roy",
      "milliárdos",
      "család",
      "cég",
      "örökség"
    ]
  },
  {
    "id": "HU0057",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "DARK",
    "taboo": [
      "időutazás",
      "Winden",
      "barlang",
      "német",
      "Netflix"
    ]
  },
  {
    "id": "HU0058",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "THE WIRE",
    "taboo": [
      "Baltimore",
      "rendőrség",
      "drog",
      "HBO",
      "McNulty"
    ]
  },
  {
    "id": "HU0059",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "TRUE DETECTIVE",
    "taboo": [
      "nyomozó",
      "HBO",
      "gyilkosság",
      "Rust",
      "Marty"
    ]
  },
  {
    "id": "HU0060",
    "category": "Zene",
    "difficulty": "Könnyű",
    "word": "GITÁR",
    "taboo": [
      "húr",
      "zene",
      "penget",
      "hangszer",
      "akkord"
    ]
  },
  {
    "id": "HU0061",
    "category": "Zene",
    "difficulty": "Könnyű",
    "word": "ZONGORA",
    "taboo": [
      "billentyű",
      "hangszer",
      "fekete",
      "fehér",
      "kottta"
    ]
  },
  {
    "id": "HU0062",
    "category": "Zene",
    "difficulty": "Könnyű",
    "word": "KARAOKE",
    "taboo": [
      "éneklés",
      "mikrofon",
      "dal",
      "bár",
      "szöveg"
    ]
  },
  {
    "id": "HU0063",
    "category": "Zene",
    "difficulty": "Könnyű",
    "word": "KONCERT",
    "taboo": [
      "zene",
      "színpad",
      "énekes",
      "közönség",
      "jegy"
    ]
  },
  {
    "id": "HU0064",
    "category": "Zene",
    "difficulty": "Könnyű",
    "word": "DJ",
    "taboo": [
      "lemez",
      "zene",
      "kever",
      "klub",
      "pult"
    ]
  },
  {
    "id": "HU0065",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "SPOTIFY",
    "taboo": [
      "zene",
      "streaming",
      "playlist",
      "dal",
      "előfizetés"
    ]
  },
  {
    "id": "HU0066",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "EUROVÍZIÓ",
    "taboo": [
      "verseny",
      "országok",
      "dal",
      "pont",
      "Európa"
    ]
  },
  {
    "id": "HU0067",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "DISZKÓGÖMB",
    "taboo": [
      "tánc",
      "fény",
      "klub",
      "gömb",
      "tükör"
    ]
  },
  {
    "id": "HU0068",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "KOTTА",
    "taboo": [
      "hangjegy",
      "zene",
      "vonal",
      "dallam",
      "olvas"
    ]
  },
  {
    "id": "HU0069",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "FESZTIVÁL",
    "taboo": [
      "zene",
      "Sziget",
      "koncert",
      "nyár",
      "színpad"
    ]
  },
  {
    "id": "HU0070",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "SZINTETIZÁTOR",
    "taboo": [
      "billentyű",
      "elektronikus",
      "hangszer",
      "hang",
      "zene"
    ]
  },
  {
    "id": "HU0071",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "VINYL",
    "taboo": [
      "lemez",
      "bakelit",
      "zene",
      "lemezjátszó",
      "analóg"
    ]
  },
  {
    "id": "HU0072",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "FALSETT",
    "taboo": [
      "ének",
      "hang",
      "magas",
      "technika",
      "fejhang"
    ]
  },
  {
    "id": "HU0073",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "KÓRUS",
    "taboo": [
      "énekes",
      "több",
      "hang",
      "templom",
      "karvezető"
    ]
  },
  {
    "id": "HU0074",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "RITMUS",
    "taboo": [
      "ütem",
      "dob",
      "zene",
      "tempó",
      "tánc"
    ]
  },
  {
    "id": "HU0075",
    "category": "Sport",
    "difficulty": "Könnyű",
    "word": "FOCI",
    "taboo": [
      "labda",
      "kapu",
      "gól",
      "csapat",
      "pálya"
    ]
  },
  {
    "id": "HU0076",
    "category": "Sport",
    "difficulty": "Könnyű",
    "word": "TENISZ",
    "taboo": [
      "ütő",
      "labda",
      "pálya",
      "háló",
      "szerva"
    ]
  },
  {
    "id": "HU0077",
    "category": "Sport",
    "difficulty": "Könnyű",
    "word": "ÚSZÁS",
    "taboo": [
      "medence",
      "víz",
      "úszó",
      "úszósapka",
      "gyors"
    ]
  },
  {
    "id": "HU0078",
    "category": "Sport",
    "difficulty": "Könnyű",
    "word": "KOSÁRLABDA",
    "taboo": [
      "palánk",
      "labda",
      "kosár",
      "NBA",
      "dobás"
    ]
  },
  {
    "id": "HU0079",
    "category": "Sport",
    "difficulty": "Könnyű",
    "word": "OLIMPIA",
    "taboo": [
      "sport",
      "arany",
      "érem",
      "ötkarika",
      "verseny"
    ]
  },
  {
    "id": "HU0080",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "PADel",
    "taboo": [
      "ütő",
      "üveg",
      "tenisz",
      "labda",
      "pálya"
    ]
  },
  {
    "id": "HU0081",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "FORMULA–1",
    "taboo": [
      "autó",
      "pilóta",
      "verseny",
      "boxutca",
      "Ferrari"
    ]
  },
  {
    "id": "HU0082",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "MARATON",
    "taboo": [
      "futás",
      "42",
      "kilométer",
      "verseny",
      "cél"
    ]
  },
  {
    "id": "HU0083",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "BOKSZ",
    "taboo": [
      "ring",
      "ütés",
      "kesztyű",
      "menet",
      "ököl"
    ]
  },
  {
    "id": "HU0084",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "GOLF",
    "taboo": [
      "ütő",
      "lyuk",
      "labda",
      "pálya",
      "zászló"
    ]
  },
  {
    "id": "HU0085",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "BIATLON",
    "taboo": [
      "sífutás",
      "lövészet",
      "hó",
      "puska",
      "verseny"
    ]
  },
  {
    "id": "HU0086",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "TRIATLON",
    "taboo": [
      "úszás",
      "kerékpár",
      "futás",
      "verseny",
      "táv"
    ]
  },
  {
    "id": "HU0087",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "LES",
    "taboo": [
      "foci",
      "védő",
      "támadó",
      "szabály",
      "bíró"
    ]
  },
  {
    "id": "HU0088",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "TIZENEGYES",
    "taboo": [
      "büntető",
      "foci",
      "gól",
      "kapus",
      "méter"
    ]
  },
  {
    "id": "HU0089",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "GRAND SLAM",
    "taboo": [
      "tenisz",
      "Wimbledon",
      "Roland Garros",
      "US Open",
      "Australian Open"
    ]
  },
  {
    "id": "HU0090",
    "category": "Magyarország",
    "difficulty": "Könnyű",
    "word": "BALATON",
    "taboo": [
      "tó",
      "nyár",
      "strand",
      "Siófok",
      "víz"
    ]
  },
  {
    "id": "HU0091",
    "category": "Magyarország",
    "difficulty": "Könnyű",
    "word": "BUDAPEST",
    "taboo": [
      "főváros",
      "Duna",
      "Parlament",
      "Magyarország",
      "város"
    ]
  },
  {
    "id": "HU0092",
    "category": "Magyarország",
    "difficulty": "Könnyű",
    "word": "PARLAMENT",
    "taboo": [
      "Országház",
      "Duna",
      "politika",
      "Budapest",
      "képviselő"
    ]
  },
  {
    "id": "HU0093",
    "category": "Magyarország",
    "difficulty": "Könnyű",
    "word": "TÚRÓ RUDI",
    "taboo": [
      "csoki",
      "túró",
      "piros",
      "édesség",
      "hűtő"
    ]
  },
  {
    "id": "HU0094",
    "category": "Magyarország",
    "difficulty": "Könnyű",
    "word": "GULYÁSLEKVES",
    "taboo": [
      "magyar",
      "paprika",
      "hús",
      "leves",
      "bogrács"
    ]
  },
  {
    "id": "HU0095",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "HORTOBÁGY",
    "taboo": [
      "puszta",
      "csárda",
      "gémeskút",
      "ló",
      "Debrecen"
    ]
  },
  {
    "id": "HU0096",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SZENT ISTVÁN",
    "taboo": [
      "király",
      "korona",
      "augusztus",
      "államalapítás",
      "magyar"
    ]
  },
  {
    "id": "HU0097",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "MATYÓ",
    "taboo": [
      "Mezőkövesd",
      "hímzés",
      "népviselet",
      "virág",
      "magyar"
    ]
  },
  {
    "id": "HU0098",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "PUSKÁS FERENC",
    "taboo": [
      "foci",
      "Öcsi",
      "Real Madrid",
      "Aranycsapat",
      "gól"
    ]
  },
  {
    "id": "HU0099",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SZÉCHÉNYI LÁNCHÍD",
    "taboo": [
      "Duna",
      "Budapest",
      "híd",
      "oroszlán",
      "Széchenyi"
    ]
  },
  {
    "id": "HU0100",
    "category": "Magyarország",
    "difficulty": "Nehéz",
    "word": "SZALÁMI",
    "taboo": [
      "Pick",
      "szegedi",
      "kolbász",
      "hús",
      "szendvics"
    ]
  },
  {
    "id": "HU0101",
    "category": "Magyarország",
    "difficulty": "Nehéz",
    "word": "TISZA",
    "taboo": [
      "folyó",
      "Szeged",
      "Duna",
      "Magyarország",
      "víz"
    ]
  },
  {
    "id": "HU0102",
    "category": "Magyarország",
    "difficulty": "Nehéz",
    "word": "HERENDI PORCELÁN",
    "taboo": [
      "porcelán",
      "manufaktúra",
      "Veszprém",
      "festett",
      "csésze"
    ]
  },
  {
    "id": "HU0103",
    "category": "Magyarország",
    "difficulty": "Nehéz",
    "word": "KODÁLY",
    "taboo": [
      "zene",
      "Zoltán",
      "módszer",
      "népdal",
      "zeneszerző"
    ]
  },
  {
    "id": "HU0104",
    "category": "Magyarország",
    "difficulty": "Nehéz",
    "word": "RUBIK-KOCKA",
    "taboo": [
      "kocka",
      "színek",
      "Ernő",
      "forgat",
      "játék"
    ]
  },
  {
    "id": "HU0105",
    "category": "Földrajz",
    "difficulty": "Könnyű",
    "word": "PÁRIZS",
    "taboo": [
      "Franciaország",
      "Eiffel",
      "Louvre",
      "Seine",
      "főváros"
    ]
  },
  {
    "id": "HU0106",
    "category": "Földrajz",
    "difficulty": "Könnyű",
    "word": "LONDON",
    "taboo": [
      "Anglia",
      "Big Ben",
      "Temze",
      "Egyesült Királyság",
      "piros busz"
    ]
  },
  {
    "id": "HU0107",
    "category": "Földrajz",
    "difficulty": "Könnyű",
    "word": "NEW YORK",
    "taboo": [
      "USA",
      "Manhattan",
      "Szabadság-szobor",
      "Times Square",
      "város"
    ]
  },
  {
    "id": "HU0108",
    "category": "Földrajz",
    "difficulty": "Könnyű",
    "word": "EGYIPTOM",
    "taboo": [
      "piramis",
      "Nílus",
      "fáraó",
      "Kairó",
      "sivatag"
    ]
  },
  {
    "id": "HU0109",
    "category": "Földrajz",
    "difficulty": "Könnyű",
    "word": "JAPÁN",
    "taboo": [
      "Tokió",
      "sziget",
      "szamuráj",
      "sushi",
      "ázsiai"
    ]
  },
  {
    "id": "HU0110",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "AMAZONAS",
    "taboo": [
      "folyó",
      "Dél-Amerika",
      "esőerdő",
      "Brazília",
      "víz"
    ]
  },
  {
    "id": "HU0111",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "SZAHARA",
    "taboo": [
      "sivatag",
      "Afrika",
      "homok",
      "teve",
      "forró"
    ]
  },
  {
    "id": "HU0112",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "EVEREST",
    "taboo": [
      "hegy",
      "Himalája",
      "Nepál",
      "csúcs",
      "mászás"
    ]
  },
  {
    "id": "HU0113",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "IZLAND",
    "taboo": [
      "vulkán",
      "gejzír",
      "sziget",
      "Reykjavík",
      "hideg"
    ]
  },
  {
    "id": "HU0114",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "AUSZTRÁLIA",
    "taboo": [
      "Sydney",
      "kenguru",
      "Óceánia",
      "kontinens",
      "sivatag"
    ]
  },
  {
    "id": "HU0115",
    "category": "Földrajz",
    "difficulty": "Nehéz",
    "word": "GALAPAGOS",
    "taboo": [
      "szigetek",
      "Ecuador",
      "Darwin",
      "teknős",
      "Csendes-óceán"
    ]
  },
  {
    "id": "HU0116",
    "category": "Földrajz",
    "difficulty": "Nehéz",
    "word": "PATAGÓNIA",
    "taboo": [
      "Argentína",
      "Chile",
      "Dél-Amerika",
      "gleccser",
      "Andok"
    ]
  },
  {
    "id": "HU0117",
    "category": "Földrajz",
    "difficulty": "Nehéz",
    "word": "KILIMANDZSÁRÓ",
    "taboo": [
      "hegy",
      "Afrika",
      "Tanzánia",
      "csúcs",
      "mászás"
    ]
  },
  {
    "id": "HU0118",
    "category": "Földrajz",
    "difficulty": "Nehéz",
    "word": "BOSZPORUSZ",
    "taboo": [
      "Isztambul",
      "szoros",
      "Európa",
      "Ázsia",
      "Törökország"
    ]
  },
  {
    "id": "HU0119",
    "category": "Földrajz",
    "difficulty": "Nehéz",
    "word": "FJORD",
    "taboo": [
      "Norvégia",
      "tenger",
      "hegy",
      "öböl",
      "szikla"
    ]
  },
  {
    "id": "HU0120",
    "category": "Történelem",
    "difficulty": "Könnyű",
    "word": "HONFOGLALÁS",
    "taboo": [
      "Árpád",
      "magyar",
      "895",
      "Kárpát-medence",
      "törzs"
    ]
  },
  {
    "id": "HU0121",
    "category": "Történelem",
    "difficulty": "Könnyű",
    "word": "PIRAMIS",
    "taboo": [
      "Egyiptom",
      "fáraó",
      "sír",
      "gúla",
      "sivatag"
    ]
  },
  {
    "id": "HU0122",
    "category": "Történelem",
    "difficulty": "Könnyű",
    "word": "KÖZÉPKOR",
    "taboo": [
      "lovag",
      "vár",
      "király",
      "feudalizmus",
      "középkori"
    ]
  },
  {
    "id": "HU0123",
    "category": "Történelem",
    "difficulty": "Könnyű",
    "word": "VILÁGHÁBORÚ",
    "taboo": [
      "háború",
      "Németország",
      "katona",
      "front",
      "bomba"
    ]
  },
  {
    "id": "HU0124",
    "category": "Történelem",
    "difficulty": "Könnyű",
    "word": "FORRADALOM",
    "taboo": [
      "felkelés",
      "harc",
      "kormány",
      "tüntetés",
      "1848"
    ]
  },
  {
    "id": "HU0125",
    "category": "Történelem",
    "difficulty": "Normál",
    "word": "MOHÁCSI CSATA",
    "taboo": [
      "1526",
      "török",
      "II. Lajos",
      "Mohács",
      "csata"
    ]
  },
  {
    "id": "HU0126",
    "category": "Történelem",
    "difficulty": "Normál",
    "word": "RÓMAI BIRODALOM",
    "taboo": [
      "császár",
      "Colosseum",
      "légió",
      "Róma",
      "ókor"
    ]
  },
  {
    "id": "HU0127",
    "category": "Történelem",
    "difficulty": "Normál",
    "word": "NAPÓLEON",
    "taboo": [
      "Franciaország",
      "császár",
      "Waterloo",
      "Bonaparte",
      "háború"
    ]
  },
  {
    "id": "HU0128",
    "category": "Történelem",
    "difficulty": "Normál",
    "word": "BERLINI FAL",
    "taboo": [
      "Németország",
      "Kelet",
      "Nyugat",
      "1989",
      "fal"
    ]
  },
  {
    "id": "HU0129",
    "category": "Történelem",
    "difficulty": "Normál",
    "word": "COLUMBUS",
    "taboo": [
      "Amerika",
      "hajó",
      "1492",
      "felfedező",
      "spanyol"
    ]
  },
  {
    "id": "HU0130",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "KIEGYEZÉS",
    "taboo": [
      "1867",
      "Ausztria",
      "Magyarország",
      "Ferenc József",
      "Deák"
    ]
  },
  {
    "id": "HU0131",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "SZUEZI CSATORNA",
    "taboo": [
      "Egyiptom",
      "hajó",
      "csatorna",
      "Vörös-tenger",
      "Földközi-tenger"
    ]
  },
  {
    "id": "HU0132",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "VERSAILLES",
    "taboo": [
      "béke",
      "Németország",
      "1919",
      "Párizs",
      "szerződés"
    ]
  },
  {
    "id": "HU0133",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "BIZÁNCI BIRODALOM",
    "taboo": [
      "Konstantinápoly",
      "császár",
      "Kelet",
      "görög",
      "Római"
    ]
  },
  {
    "id": "HU0134",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "RENESZÁNSZ",
    "taboo": [
      "művészet",
      "Leonardo",
      "Firenze",
      "újjászületés",
      "15. század"
    ]
  },
  {
    "id": "HU0135",
    "category": "Tudomány",
    "difficulty": "Könnyű",
    "word": "NAPRENDSZER",
    "taboo": [
      "bolygó",
      "Nap",
      "Föld",
      "űr",
      "Merkúr"
    ]
  },
  {
    "id": "HU0136",
    "category": "Tudomány",
    "difficulty": "Könnyű",
    "word": "DINOSZAURUSZ",
    "taboo": [
      "őslény",
      "T-Rex",
      "Jurassic",
      "csont",
      "kihalt"
    ]
  },
  {
    "id": "HU0137",
    "category": "Tudomány",
    "difficulty": "Könnyű",
    "word": "GRAVITÁCIÓ",
    "taboo": [
      "vonzás",
      "Föld",
      "Newton",
      "esés",
      "erő"
    ]
  },
  {
    "id": "HU0138",
    "category": "Tudomány",
    "difficulty": "Könnyű",
    "word": "DNS",
    "taboo": [
      "genetika",
      "gén",
      "öröklődés",
      "sejt",
      "spirál"
    ]
  },
  {
    "id": "HU0139",
    "category": "Tudomány",
    "difficulty": "Könnyű",
    "word": "VULKÁN",
    "taboo": [
      "láva",
      "kitörés",
      "kráter",
      "hegy",
      "magma"
    ]
  },
  {
    "id": "HU0140",
    "category": "Tudomány",
    "difficulty": "Normál",
    "word": "FEKETE LYUK",
    "taboo": [
      "űr",
      "gravitáció",
      "fény",
      "csillag",
      "horizont"
    ]
  },
  {
    "id": "HU0141",
    "category": "Tudomány",
    "difficulty": "Normál",
    "word": "ATOM",
    "taboo": [
      "proton",
      "neutron",
      "elektron",
      "mag",
      "anyag"
    ]
  },
  {
    "id": "HU0142",
    "category": "Tudomány",
    "difficulty": "Normál",
    "word": "EVOLÚCIÓ",
    "taboo": [
      "Darwin",
      "faj",
      "fejlődés",
      "természetes szelekció",
      "ember"
    ]
  },
  {
    "id": "HU0143",
    "category": "Tudomány",
    "difficulty": "Normál",
    "word": "FOTOSZINTÉZIS",
    "taboo": [
      "növény",
      "napfény",
      "oxigén",
      "szén-dioxid",
      "klorofill"
    ]
  },
  {
    "id": "HU0144",
    "category": "Tudomány",
    "difficulty": "Normál",
    "word": "MIKROSZKÓP",
    "taboo": [
      "sejt",
      "nagyítás",
      "labor",
      "lencse",
      "biológia"
    ]
  },
  {
    "id": "HU0145",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "RELATIVITÁS",
    "taboo": [
      "Einstein",
      "idő",
      "fénysebesség",
      "gravitáció",
      "elmélet"
    ]
  },
  {
    "id": "HU0146",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "KVANTUMFIZIKA",
    "taboo": [
      "részecske",
      "energia",
      "fizika",
      "szuperpozíció",
      "Heisenberg"
    ]
  },
  {
    "id": "HU0147",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "HIGGS-BOZON",
    "taboo": [
      "részecske",
      "CERN",
      "tömeg",
      "mező",
      "LHC"
    ]
  },
  {
    "id": "HU0148",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "ANTIBIOTIKUM",
    "taboo": [
      "baktérium",
      "fertőzés",
      "gyógyszer",
      "penicillin",
      "orvos"
    ]
  },
  {
    "id": "HU0149",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "VÉRCUKOR",
    "taboo": [
      "glükóz",
      "inzulin",
      "diabétesz",
      "vér",
      "mérés"
    ]
  },
  {
    "id": "HU0150",
    "category": "Technológia",
    "difficulty": "Könnyű",
    "word": "OKOSTELEFON",
    "taboo": [
      "telefon",
      "app",
      "képernyő",
      "Android",
      "iPhone"
    ]
  },
  {
    "id": "HU0151",
    "category": "Technológia",
    "difficulty": "Könnyű",
    "word": "WIFI",
    "taboo": [
      "internet",
      "router",
      "vezeték nélküli",
      "jelszó",
      "hálózat"
    ]
  },
  {
    "id": "HU0152",
    "category": "Technológia",
    "difficulty": "Könnyű",
    "word": "BLUETOOTH",
    "taboo": [
      "vezeték nélküli",
      "fülhallgató",
      "telefon",
      "kapcsolat",
      "kék"
    ]
  },
  {
    "id": "HU0153",
    "category": "Technológia",
    "difficulty": "Könnyű",
    "word": "YOUTUBE",
    "taboo": [
      "videó",
      "Google",
      "csatorna",
      "feliratkozás",
      "stream"
    ]
  },
  {
    "id": "HU0154",
    "category": "Technológia",
    "difficulty": "Könnyű",
    "word": "GPS",
    "taboo": [
      "helyzet",
      "navigáció",
      "térkép",
      "műhold",
      "útvonal"
    ]
  },
  {
    "id": "HU0155",
    "category": "Technológia",
    "difficulty": "Normál",
    "word": "CHATGPT",
    "taboo": [
      "AI",
      "OpenAI",
      "mesterséges intelligencia",
      "kérdés",
      "válasz"
    ]
  },
  {
    "id": "HU0156",
    "category": "Technológia",
    "difficulty": "Normál",
    "word": "FELHŐ",
    "taboo": [
      "adat",
      "internet",
      "szerver",
      "Google Drive",
      "tárolás"
    ]
  },
  {
    "id": "HU0157",
    "category": "Technológia",
    "difficulty": "Normál",
    "word": "QR-KÓD",
    "taboo": [
      "négyzet",
      "kamera",
      "beolvas",
      "telefon",
      "kód"
    ]
  },
  {
    "id": "HU0158",
    "category": "Technológia",
    "difficulty": "Normál",
    "word": "DRÓN",
    "taboo": [
      "repül",
      "kamera",
      "távirányító",
      "légi",
      "quadcopter"
    ]
  },
  {
    "id": "HU0159",
    "category": "Technológia",
    "difficulty": "Normál",
    "word": "STREAMING",
    "taboo": [
      "Netflix",
      "film",
      "internet",
      "előfizetés",
      "online"
    ]
  },
  {
    "id": "HU0160",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "BLOCKCHAIN",
    "taboo": [
      "Bitcoin",
      "lánc",
      "tranzakció",
      "kripto",
      "decentralizált"
    ]
  },
  {
    "id": "HU0161",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "KIBERBIZTONSÁG",
    "taboo": [
      "hackelés",
      "jelszó",
      "vírus",
      "védelem",
      "adat"
    ]
  },
  {
    "id": "HU0162",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "ALGORITMUS",
    "taboo": [
      "program",
      "lépés",
      "számítás",
      "kód",
      "informatika"
    ]
  },
  {
    "id": "HU0163",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "MESTERSÉGES INTELLIGENCIA",
    "taboo": [
      "AI",
      "gép",
      "tanulás",
      "robot",
      "modell"
    ]
  },
  {
    "id": "HU0164",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "VIRTUÁLIS VALÓSÁG",
    "taboo": [
      "VR",
      "szemüveg",
      "játék",
      "3D",
      "metaverzum"
    ]
  },
  {
    "id": "HU0165",
    "category": "Munka",
    "difficulty": "Könnyű",
    "word": "MEETING",
    "taboo": [
      "értekezlet",
      "munka",
      "Teams",
      "naptár",
      "beszélgetés"
    ]
  },
  {
    "id": "HU0166",
    "category": "Munka",
    "difficulty": "Könnyű",
    "word": "FŐNÖK",
    "taboo": [
      "vezető",
      "munka",
      "menedzser",
      "beosztott",
      "iroda"
    ]
  },
  {
    "id": "HU0167",
    "category": "Munka",
    "difficulty": "Könnyű",
    "word": "SZABADSÁG",
    "taboo": [
      "nyaralás",
      "munka",
      "pihenés",
      "nap",
      "kivenni"
    ]
  },
  {
    "id": "HU0168",
    "category": "Munka",
    "difficulty": "Könnyű",
    "word": "ÖNÉLETRAJZ",
    "taboo": [
      "CV",
      "munka",
      "állás",
      "tapasztalat",
      "jelentkezés"
    ]
  },
  {
    "id": "HU0169",
    "category": "Munka",
    "difficulty": "Könnyű",
    "word": "PREZENTÁCIÓ",
    "taboo": [
      "PowerPoint",
      "előadás",
      "diák",
      "projektor",
      "bemutató"
    ]
  },
  {
    "id": "HU0170",
    "category": "Munka",
    "difficulty": "Normál",
    "word": "HATÁRIDŐ",
    "taboo": [
      "deadline",
      "munka",
      "dátum",
      "leadás",
      "idő"
    ]
  },
  {
    "id": "HU0171",
    "category": "Munka",
    "difficulty": "Normál",
    "word": "FIZETÉSEMELÉS",
    "taboo": [
      "bér",
      "pénz",
      "főnök",
      "fizetés",
      "több"
    ]
  },
  {
    "id": "HU0172",
    "category": "Munka",
    "difficulty": "Normál",
    "word": "HOME OFFICE",
    "taboo": [
      "otthon",
      "munka",
      "laptop",
      "kanapé",
      "távmunka"
    ]
  },
  {
    "id": "HU0173",
    "category": "Munka",
    "difficulty": "Normál",
    "word": "KÁVÉSZÜNET",
    "taboo": [
      "kávé",
      "iroda",
      "szünet",
      "kolléga",
      "gép"
    ]
  },
  {
    "id": "HU0174",
    "category": "Munka",
    "difficulty": "Normál",
    "word": "PROJEKT",
    "taboo": [
      "feladat",
      "csapat",
      "határidő",
      "munka",
      "terv"
    ]
  },
  {
    "id": "HU0175",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "VISSZAJELZÉS",
    "taboo": [
      "feedback",
      "főnök",
      "teljesítmény",
      "értékelés",
      "munka"
    ]
  },
  {
    "id": "HU0176",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "PRÓBAIDŐ",
    "taboo": [
      "új munka",
      "állás",
      "három hónap",
      "szerződés",
      "kezdés"
    ]
  },
  {
    "id": "HU0177",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "PREZENTÁCIÓS DIÁK",
    "taboo": [
      "PowerPoint",
      "slide",
      "előadás",
      "szöveg",
      "projektor"
    ]
  },
  {
    "id": "HU0178",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "CSAPATÉPÍTÉS",
    "taboo": [
      "kolléga",
      "munka",
      "program",
      "csapat",
      "tréning"
    ]
  },
  {
    "id": "HU0179",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "PRODUKTIVITÁS",
    "taboo": [
      "hatékonyság",
      "feladat",
      "idő",
      "munka",
      "teljesítmény"
    ]
  },
  {
    "id": "HU0180",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "TANÁR",
    "taboo": [
      "iskola",
      "diák",
      "óra",
      "tanítás",
      "jegy"
    ]
  },
  {
    "id": "HU0181",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "HÁZI FELADAT",
    "taboo": [
      "iskola",
      "tanulás",
      "füzet",
      "tanár",
      "lecke"
    ]
  },
  {
    "id": "HU0182",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "VIZSGA",
    "taboo": [
      "teszt",
      "jegy",
      "tanulás",
      "kérdés",
      "egyetem"
    ]
  },
  {
    "id": "HU0183",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "TÁBLA",
    "taboo": [
      "kréta",
      "iskola",
      "tanár",
      "óra",
      "fekete"
    ]
  },
  {
    "id": "HU0184",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "TANKÖNYV",
    "taboo": [
      "iskola",
      "könyv",
      "tanulás",
      "lecke",
      "diák"
    ]
  },
  {
    "id": "HU0185",
    "category": "Iskola",
    "difficulty": "Normál",
    "word": "ÉRETTSÉGI",
    "taboo": [
      "vizsga",
      "középiskola",
      "magyar",
      "matek",
      "bizonyítvány"
    ]
  },
  {
    "id": "HU0186",
    "category": "Iskola",
    "difficulty": "Normál",
    "word": "EGYETEM",
    "taboo": [
      "hallgató",
      "vizsga",
      "előadás",
      "diploma",
      "kar"
    ]
  },
  {
    "id": "HU0187",
    "category": "Iskola",
    "difficulty": "Normál",
    "word": "KOLLÉGIUM",
    "taboo": [
      "egyetem",
      "szoba",
      "diák",
      "ágy",
      "lakó"
    ]
  },
  {
    "id": "HU0188",
    "category": "Iskola",
    "difficulty": "Normál",
    "word": "KÖNYVTÁR",
    "taboo": [
      "könyv",
      "csend",
      "olvasás",
      "polc",
      "kölcsönzés"
    ]
  },
  {
    "id": "HU0189",
    "category": "Iskola",
    "difficulty": "Normál",
    "word": "BIZONYÍTVÁNY",
    "taboo": [
      "jegy",
      "iskola",
      "félév",
      "tanár",
      "papír"
    ]
  },
  {
    "id": "HU0190",
    "category": "Iskola",
    "difficulty": "Nehéz",
    "word": "SZAKDOLGOZAT",
    "taboo": [
      "egyetem",
      "diploma",
      "kutatás",
      "téma",
      "leadás"
    ]
  },
  {
    "id": "HU0191",
    "category": "Iskola",
    "difficulty": "Nehéz",
    "word": "ÖSZTÖNDÍJ",
    "taboo": [
      "pénz",
      "egyetem",
      "hallgató",
      "tanulmány",
      "támogatás"
    ]
  },
  {
    "id": "HU0192",
    "category": "Iskola",
    "difficulty": "Nehéz",
    "word": "KOLLokVIUM",
    "taboo": [
      "egyetem",
      "vizsga",
      "tárgy",
      "félév",
      "tanulás"
    ]
  },
  {
    "id": "HU0193",
    "category": "Iskola",
    "difficulty": "Nehéz",
    "word": "TANMENET",
    "taboo": [
      "tanár",
      "iskola",
      "óra",
      "tanterv",
      "oktatás"
    ]
  },
  {
    "id": "HU0194",
    "category": "Iskola",
    "difficulty": "Nehéz",
    "word": "DIPLOMAOSZTÓ",
    "taboo": [
      "egyetem",
      "végzés",
      "talár",
      "oklevél",
      "ünnepség"
    ]
  },
  {
    "id": "HU0195",
    "category": "Ünnepek",
    "difficulty": "Könnyű",
    "word": "KARÁCSONY",
    "taboo": [
      "december",
      "fenyőfa",
      "ajándék",
      "Jézus",
      "szaloncukor"
    ]
  },
  {
    "id": "HU0196",
    "category": "Ünnepek",
    "difficulty": "Könnyű",
    "word": "HÚSVÉT",
    "taboo": [
      "nyúl",
      "tojás",
      "locsolás",
      "tavasz",
      "sonka"
    ]
  },
  {
    "id": "HU0197",
    "category": "Ünnepek",
    "difficulty": "Könnyű",
    "word": "SZÜLETÉSNAP",
    "taboo": [
      "torta",
      "gyertya",
      "ajándék",
      "ünneplés",
      "év"
    ]
  },
  {
    "id": "HU0198",
    "category": "Ünnepek",
    "difficulty": "Könnyű",
    "word": "SZILVESZTER",
    "taboo": [
      "december",
      "éjfél",
      "pezsgő",
      "tűzijáték",
      "újév"
    ]
  },
  {
    "id": "HU0199",
    "category": "Ünnepek",
    "difficulty": "Könnyű",
    "word": "BALLAGÁS",
    "taboo": [
      "iskola",
      "búcsú",
      "végzős",
      "virág",
      "szalag"
    ]
  },
  {
    "id": "HU0200",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "MIKULÁS",
    "taboo": [
      "december",
      "csizma",
      "piros",
      "ajándék",
      "nagyszakállú"
    ]
  },
  {
    "id": "HU0201",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "NÁSZÚT",
    "taboo": [
      "esküvő",
      "házasság",
      "utazás",
      "pár",
      "nyaralás"
    ]
  },
  {
    "id": "HU0202",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "LEGÉNYBÚCSÚ",
    "taboo": [
      "vőlegény",
      "esküvő",
      "barátok",
      "buli",
      "házasság"
    ]
  },
  {
    "id": "HU0203",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "LÁNYBÚCSÚ",
    "taboo": [
      "menyasszony",
      "esküvő",
      "barátnők",
      "buli",
      "házasság"
    ]
  },
  {
    "id": "HU0204",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "TŰZIJÁTÉK",
    "taboo": [
      "szilveszter",
      "égbolt",
      "robbanás",
      "fény",
      "rakéta"
    ]
  },
  {
    "id": "HU0205",
    "category": "Ünnepek",
    "difficulty": "Nehéz",
    "word": "ELJEGYZÉS",
    "taboo": [
      "gyűrű",
      "házasság",
      "lánykérés",
      "esküvő",
      "pár"
    ]
  },
  {
    "id": "HU0206",
    "category": "Ünnepek",
    "difficulty": "Nehéz",
    "word": "HÁZASSÁGI ÉVFORDULÓ",
    "taboo": [
      "év",
      "esküvő",
      "pár",
      "ünnep",
      "gyűrű"
    ]
  },
  {
    "id": "HU0207",
    "category": "Ünnepek",
    "difficulty": "Nehéz",
    "word": "KOSZORÚCSKA",
    "taboo": [
      "tánc",
      "iskola",
      "bál",
      "diák",
      "ruha"
    ]
  },
  {
    "id": "HU0208",
    "category": "Ünnepek",
    "difficulty": "Nehéz",
    "word": "KERTIPARTI",
    "taboo": [
      "grill",
      "kert",
      "nyár",
      "barátok",
      "ital"
    ]
  },
  {
    "id": "HU0209",
    "category": "Ünnepek",
    "difficulty": "Nehéz",
    "word": "CSALÁDI ÖSSZEJÖVETEL",
    "taboo": [
      "rokon",
      "ebéd",
      "család",
      "ünnep",
      "asztal"
    ]
  },
  {
    "id": "HU0210",
    "category": "Popkultúra",
    "difficulty": "Könnyű",
    "word": "ELON MUSK",
    "taboo": [
      "Tesla",
      "SpaceX",
      "milliárdos",
      "X",
      "rakéta"
    ]
  },
  {
    "id": "HU0211",
    "category": "Popkultúra",
    "difficulty": "Könnyű",
    "word": "TAYLOR SWIFT",
    "taboo": [
      "énekesnő",
      "Amerika",
      "album",
      "Eras Tour",
      "dal"
    ]
  },
  {
    "id": "HU0212",
    "category": "Popkultúra",
    "difficulty": "Könnyű",
    "word": "MR. BEAN",
    "taboo": [
      "Rowan Atkinson",
      "angol",
      "medve",
      "Mini",
      "vígjáték"
    ]
  },
  {
    "id": "HU0213",
    "category": "Popkultúra",
    "difficulty": "Könnyű",
    "word": "MICKEY EGÉR",
    "taboo": [
      "Disney",
      "rajzfilm",
      "egér",
      "Minnie",
      "fül"
    ]
  },
  {
    "id": "HU0214",
    "category": "Popkultúra",
    "difficulty": "Könnyű",
    "word": "SUPERMAN",
    "taboo": [
      "DC",
      "köpeny",
      "Clark Kent",
      "Kripton",
      "szuperhős"
    ]
  },
  {
    "id": "HU0215",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "BATMAN",
    "taboo": [
      "Gotham",
      "Bruce Wayne",
      "Joker",
      "DC",
      "denevér"
    ]
  },
  {
    "id": "HU0216",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "SPONGYABOB",
    "taboo": [
      "tenger",
      "Nickelodeon",
      "Patrick",
      "Bikini fenék",
      "szivacs"
    ]
  },
  {
    "id": "HU0217",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "BARBIE",
    "taboo": [
      "baba",
      "rózsaszín",
      "Ken",
      "Mattel",
      "film"
    ]
  },
  {
    "id": "HU0218",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "MARVEL",
    "taboo": [
      "szuperhős",
      "Avengers",
      "képregény",
      "Disney",
      "Marvel Studios"
    ]
  },
  {
    "id": "HU0219",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "JOKER",
    "taboo": [
      "Batman",
      "gonosz",
      "Gotham",
      "nevetés",
      "Heath Ledger"
    ]
  },
  {
    "id": "HU0220",
    "category": "Popkultúra",
    "difficulty": "Nehéz",
    "word": "DAVID ATTENBOROUGH",
    "taboo": [
      "természet",
      "dokumentumfilm",
      "BBC",
      "állatok",
      "narrátor"
    ]
  },
  {
    "id": "HU0221",
    "category": "Popkultúra",
    "difficulty": "Nehéz",
    "word": "GORDON RAMSAY",
    "taboo": [
      "séf",
      "konyha",
      "Hell's Kitchen",
      "káromkodás",
      "Michelin"
    ]
  },
  {
    "id": "HU0222",
    "category": "Popkultúra",
    "difficulty": "Nehéz",
    "word": "CHRISTOPHER NOLAN",
    "taboo": [
      "rendező",
      "Inception",
      "Batman",
      "film",
      "Interstellar"
    ]
  },
  {
    "id": "HU0223",
    "category": "Popkultúra",
    "difficulty": "Nehéz",
    "word": "QUENTIN TARANTINO",
    "taboo": [
      "rendező",
      "Pulp Fiction",
      "film",
      "Kill Bill",
      "Hollywood"
    ]
  },
  {
    "id": "HU0224",
    "category": "Popkultúra",
    "difficulty": "Nehéz",
    "word": "ROWAN ATKINSON",
    "taboo": [
      "Mr. Bean",
      "angol",
      "színész",
      "vígjáték",
      "fekete haj"
    ]
  },
  {
    "id": "HU0225",
    "category": "Játékok",
    "difficulty": "Könnyű",
    "word": "PLAYSTATION",
    "taboo": [
      "Sony",
      "konzol",
      "Xbox",
      "játék",
      "kontroller"
    ]
  },
  {
    "id": "HU0226",
    "category": "Játékok",
    "difficulty": "Könnyű",
    "word": "MINECRAFT",
    "taboo": [
      "kocka",
      "építés",
      "Creeper",
      "Steve",
      "játék"
    ]
  },
  {
    "id": "HU0227",
    "category": "Játékok",
    "difficulty": "Könnyű",
    "word": "FIFA",
    "taboo": [
      "foci",
      "EA",
      "Ultimate Team",
      "gól",
      "játék"
    ]
  },
  {
    "id": "HU0228",
    "category": "Játékok",
    "difficulty": "Könnyű",
    "word": "SIMS",
    "taboo": [
      "élet",
      "karakter",
      "ház",
      "EA",
      "szimuláció"
    ]
  },
  {
    "id": "HU0229",
    "category": "Játékok",
    "difficulty": "Könnyű",
    "word": "TETRIS",
    "taboo": [
      "kocka",
      "sor",
      "játék",
      "leesik",
      "puzzle"
    ]
  },
  {
    "id": "HU0230",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "FORTNITE",
    "taboo": [
      "Epic",
      "battle royale",
      "építés",
      "skin",
      "játék"
    ]
  },
  {
    "id": "HU0231",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "POKÉMON",
    "taboo": [
      "Pikachu",
      "Nintendo",
      "szörny",
      "labda",
      "Ash"
    ]
  },
  {
    "id": "HU0232",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "MARIO",
    "taboo": [
      "Nintendo",
      "Luigi",
      "gomba",
      "ugrál",
      "bajusz"
    ]
  },
  {
    "id": "HU0233",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "MARIO KART",
    "taboo": [
      "verseny",
      "Nintendo",
      "autó",
      "Mario",
      "pálya"
    ]
  },
  {
    "id": "HU0234",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "AGE OF EMPIRES",
    "taboo": [
      "stratégia",
      "Microsoft",
      "civilizáció",
      "középkor",
      "játék"
    ]
  },
  {
    "id": "HU0235",
    "category": "Játékok",
    "difficulty": "Nehéz",
    "word": "COUNTER-STRIKE",
    "taboo": [
      "FPS",
      "Steam",
      "terrorista",
      "CT",
      "fegyver"
    ]
  },
  {
    "id": "HU0236",
    "category": "Játékok",
    "difficulty": "Nehéz",
    "word": "CIVILIZATION",
    "taboo": [
      "stratégia",
      "Sid Meier",
      "birodalom",
      "technológia",
      "körökre"
    ]
  },
  {
    "id": "HU0237",
    "category": "Játékok",
    "difficulty": "Nehéz",
    "word": "SIMCITY",
    "taboo": [
      "város",
      "polgármester",
      "építés",
      "Maxis",
      "szimuláció"
    ]
  },
  {
    "id": "HU0238",
    "category": "Játékok",
    "difficulty": "Nehéz",
    "word": "HATTRICK",
    "taboo": [
      "foci",
      "menedzser",
      "online",
      "csapat",
      "bajnokság"
    ]
  },
  {
    "id": "HU0239",
    "category": "Játékok",
    "difficulty": "Nehéz",
    "word": "SCRABBLE",
    "taboo": [
      "szó",
      "betű",
      "tábla",
      "pont",
      "játék"
    ]
  },
  {
    "id": "HU0240",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "RÉSZEGSÉG",
    "taboo": [
      "alkohol",
      "ital",
      "másnapos",
      "buli",
      "részeg"
    ]
  },
  {
    "id": "HU0241",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "TÁNC",
    "taboo": [
      "zene",
      "mozgás",
      "buli",
      "ritmus",
      "diszkó"
    ]
  },
  {
    "id": "HU0242",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "PLETYKA",
    "taboo": [
      "titok",
      "beszéd",
      "információ",
      "barát",
      "hír"
    ]
  },
  {
    "id": "HU0243",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "RANDI",
    "taboo": [
      "pár",
      "szerelem",
      "étterem",
      "találkozó",
      "Tinder"
    ]
  },
  {
    "id": "HU0244",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "TINDER",
    "taboo": [
      "randi",
      "swipe",
      "app",
      "match",
      "jobbra"
    ]
  },
  {
    "id": "HU0245",
    "category": "Party",
    "difficulty": "Normál",
    "word": "MÁSODIK RANDI",
    "taboo": [
      "pár",
      "találkozó",
      "első",
      "szerelem",
      "étterem"
    ]
  },
  {
    "id": "HU0246",
    "category": "Party",
    "difficulty": "Normál",
    "word": "KÉSÉS",
    "taboo": [
      "idő",
      "busz",
      "várakozás",
      "elkésik",
      "találkozó"
    ]
  },
  {
    "id": "HU0247",
    "category": "Party",
    "difficulty": "Normál",
    "word": "SZOMSZÉD",
    "taboo": [
      "lakás",
      "ház",
      "közel",
      "emelet",
      "ajtó"
    ]
  },
  {
    "id": "HU0248",
    "category": "Party",
    "difficulty": "Normál",
    "word": "HANGOSBULI",
    "taboo": [
      "zene",
      "szomszéd",
      "éjjel",
      "alkohol",
      "tánc"
    ]
  },
  {
    "id": "HU0249",
    "category": "Party",
    "difficulty": "Nehéz",
    "word": "KIFOGÁS",
    "taboo": [
      "magyarázat",
      "hazugság",
      "indok",
      "miért",
      "mentegetőzés"
    ]
  },
  {
    "id": "HU0250",
    "category": "Party",
    "difficulty": "Nehéz",
    "word": "KÍNOS CSEND",
    "taboo": [
      "beszélgetés",
      "hallgatás",
      "randi",
      "csend",
      "feszültség"
    ]
  },
  {
    "id": "HU0251",
    "category": "Party",
    "difficulty": "Nehéz",
    "word": "FÉLREÉRTÉS",
    "taboo": [
      "kommunikáció",
      "rosszul",
      "jelentés",
      "beszéd",
      "hiba"
    ]
  },
  {
    "id": "HU0252",
    "category": "Party",
    "difficulty": "Nehéz",
    "word": "KAMU",
    "taboo": [
      "hazugság",
      "hamis",
      "igaz",
      "trükk",
      "valódi"
    ]
  },
  {
    "id": "HU0253",
    "category": "Party",
    "difficulty": "Nehéz",
    "word": "VIRÁLIS",
    "taboo": [
      "internet",
      "TikTok",
      "videó",
      "népszerű",
      "megosztás"
    ]
  },
  {
    "id": "HU0254",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "REPÜLŐGÉP",
    "taboo": [
      "repülés",
      "pilóta",
      "szárny",
      "repülőtér",
      "égbolt"
    ]
  },
  {
    "id": "HU0255",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "VONAT",
    "taboo": [
      "sín",
      "MÁV",
      "állomás",
      "mozdony",
      "utazás"
    ]
  },
  {
    "id": "HU0256",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "BUSZ",
    "taboo": [
      "megálló",
      "sofőr",
      "jegy",
      "közlekedés",
      "járat"
    ]
  },
  {
    "id": "HU0257",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "KERÉKPÁR",
    "taboo": [
      "bicikli",
      "pedál",
      "kerék",
      "sisak",
      "teker"
    ]
  },
  {
    "id": "HU0258",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "AUTÓPÁLYA",
    "taboo": [
      "autó",
      "M1",
      "út",
      "sebesség",
      "matrica"
    ]
  },
  {
    "id": "HU0259",
    "category": "Közlekedés",
    "difficulty": "Normál",
    "word": "REPÜLŐTÉR",
    "taboo": [
      "gép",
      "terminál",
      "beszállás",
      "poggyász",
      "kapu"
    ]
  },
  {
    "id": "HU0260",
    "category": "Közlekedés",
    "difficulty": "Normál",
    "word": "METRÓ",
    "taboo": [
      "Budapest",
      "föld alatt",
      "állomás",
      "BKV",
      "szerelvény"
    ]
  },
  {
    "id": "HU0261",
    "category": "Közlekedés",
    "difficulty": "Normál",
    "word": "KÖRFORGALOM",
    "taboo": [
      "autó",
      "elsőbbség",
      "út",
      "kör",
      "tábla"
    ]
  },
  {
    "id": "HU0262",
    "category": "Közlekedés",
    "difficulty": "Normál",
    "word": "BICIKLISÁV",
    "taboo": [
      "kerékpár",
      "út",
      "autó",
      "felfestés",
      "közlekedés"
    ]
  },
  {
    "id": "HU0263",
    "category": "Közlekedés",
    "difficulty": "Normál",
    "word": "AUTÓMENTŐ",
    "taboo": [
      "tréler",
      "lerobbant",
      "autó",
      "út",
      "sárga"
    ]
  },
  {
    "id": "HU0264",
    "category": "Közlekedés",
    "difficulty": "Nehéz",
    "word": "LÉGIFOLYOSÓ",
    "taboo": [
      "repülő",
      "útvonal",
      "égbolt",
      "irányítás",
      "légi"
    ]
  },
  {
    "id": "HU0265",
    "category": "Közlekedés",
    "difficulty": "Nehéz",
    "word": "MENETJEGY",
    "taboo": [
      "vonat",
      "busz",
      "jegy",
      "utazás",
      "állomás"
    ]
  },
  {
    "id": "HU0266",
    "category": "Közlekedés",
    "difficulty": "Nehéz",
    "word": "VÁMMENTES",
    "taboo": [
      "repülőtér",
      "bolt",
      "adó",
      "utazás",
      "duty free"
    ]
  },
  {
    "id": "HU0267",
    "category": "Közlekedés",
    "difficulty": "Nehéz",
    "word": "NAVIGÁCIÓ",
    "taboo": [
      "GPS",
      "útvonal",
      "térkép",
      "autó",
      "irány"
    ]
  },
  {
    "id": "HU0268",
    "category": "Közlekedés",
    "difficulty": "Nehéz",
    "word": "FORGALOMDUGÓ",
    "taboo": [
      "autó",
      "út",
      "közlekedés",
      "lassú",
      "Budapest"
    ]
  },
  {
    "id": "HU0269",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "KANAPÉ",
    "taboo": [
      "ülés",
      "nappali",
      "TV",
      "párna",
      "bútor"
    ]
  },
  {
    "id": "HU0270",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "ÁGY",
    "taboo": [
      "alvás",
      "matrac",
      "párna",
      "hálószoba",
      "takaró"
    ]
  },
  {
    "id": "HU0271",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "TÜKÖR",
    "taboo": [
      "arc",
      "üveg",
      "néz",
      "fürdőszoba",
      "kép"
    ]
  },
  {
    "id": "HU0272",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "LÁMPA",
    "taboo": [
      "fény",
      "villany",
      "izzó",
      "asztal",
      "kapcsoló"
    ]
  },
  {
    "id": "HU0273",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "HÁZIKULCS",
    "taboo": [
      "ajtó",
      "zár",
      "kulcs",
      "lakás",
      "nyit"
    ]
  },
  {
    "id": "HU0274",
    "category": "Otthon",
    "difficulty": "Normál",
    "word": "MOSOGATÓGÉP",
    "taboo": [
      "edény",
      "konyha",
      "mosás",
      "tányér",
      "tabletta"
    ]
  },
  {
    "id": "HU0275",
    "category": "Otthon",
    "difficulty": "Normál",
    "word": "MIKROHULLÁMÚ SÜTŐ",
    "taboo": [
      "konyha",
      "melegít",
      "étel",
      "gomb",
      "sütő"
    ]
  },
  {
    "id": "HU0276",
    "category": "Otthon",
    "difficulty": "Normál",
    "word": "FÜGGÖNY",
    "taboo": [
      "ablak",
      "textil",
      "sötét",
      "szoba",
      "elhúz"
    ]
  },
  {
    "id": "HU0277",
    "category": "Otthon",
    "difficulty": "Normál",
    "word": "KÖNYVESPOLC",
    "taboo": [
      "könyv",
      "polc",
      "szoba",
      "bútor",
      "olvasás"
    ]
  },
  {
    "id": "HU0278",
    "category": "Otthon",
    "difficulty": "Normál",
    "word": "MOSOGATÓ",
    "taboo": [
      "konyha",
      "víz",
      "edény",
      "csap",
      "mosás"
    ]
  },
  {
    "id": "HU0279",
    "category": "Otthon",
    "difficulty": "Nehéz",
    "word": "REDŐNY",
    "taboo": [
      "ablak",
      "árnyék",
      "felhúz",
      "szoba",
      "sötét"
    ]
  },
  {
    "id": "HU0280",
    "category": "Otthon",
    "difficulty": "Nehéz",
    "word": "KONNEKTOR",
    "taboo": [
      "áram",
      "dugalj",
      "villany",
      "kábel",
      "fal"
    ]
  },
  {
    "id": "HU0281",
    "category": "Otthon",
    "difficulty": "Nehéz",
    "word": "HOSSZABBÍTÓ",
    "taboo": [
      "kábel",
      "áram",
      "konnektor",
      "vezeték",
      "dugalj"
    ]
  },
  {
    "id": "HU0282",
    "category": "Otthon",
    "difficulty": "Nehéz",
    "word": "FÜSTÉRZÉKELŐ",
    "taboo": [
      "riasztó",
      "tűz",
      "füst",
      "mennyezet",
      "elem"
    ]
  },
  {
    "id": "HU0283",
    "category": "Otthon",
    "difficulty": "Nehéz",
    "word": "LAKÁSKULCS",
    "taboo": [
      "ajtó",
      "zár",
      "kulcs",
      "lakás",
      "ajtónyitó"
    ]
  },
  {
    "id": "HU0284",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "PÉNZTÁRCA",
    "taboo": [
      "pénz",
      "bankkártya",
      "zseb",
      "bőr",
      "apró"
    ]
  },
  {
    "id": "HU0285",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "BEVÁSÁRLÓLISTA",
    "taboo": [
      "bolt",
      "vásárlás",
      "papír",
      "termék",
      "kosár"
    ]
  },
  {
    "id": "HU0286",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "KULCSCSOMÓ",
    "taboo": [
      "ajtó",
      "zár",
      "kulcs",
      "karika",
      "nyitás"
    ]
  },
  {
    "id": "HU0287",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "FOGKRÉM",
    "taboo": [
      "fog",
      "kefe",
      "mosás",
      "menta",
      "fürdőszoba"
    ]
  },
  {
    "id": "HU0288",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "TÖRÖLKÖZŐ",
    "taboo": [
      "fürdő",
      "víz",
      "szárítás",
      "textil",
      "strand"
    ]
  },
  {
    "id": "HU0289",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "ZUHANYFÜGGÖNY",
    "taboo": [
      "zuhany",
      "fürdőszoba",
      "víz",
      "függöny",
      "kád"
    ]
  },
  {
    "id": "HU0290",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "SEPRŰ",
    "taboo": [
      "takarítás",
      "padló",
      "söprés",
      "nyél",
      "por"
    ]
  },
  {
    "id": "HU0291",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "SZEMETES",
    "taboo": [
      "kuka",
      "hulladék",
      "zsák",
      "konyha",
      "szemét"
    ]
  },
  {
    "id": "HU0292",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "HŰTŐMÁGNES",
    "taboo": [
      "hűtő",
      "mágnes",
      "emlék",
      "konyha",
      "ajtó"
    ]
  },
  {
    "id": "HU0293",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "NAPSZEMÜVEG",
    "taboo": [
      "szem",
      "nap",
      "lencse",
      "nyár",
      "keret"
    ]
  },
  {
    "id": "HU0294",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "ESŐKABÁT",
    "taboo": [
      "eső",
      "víz",
      "kabát",
      "kapucni",
      "időjárás"
    ]
  },
  {
    "id": "HU0295",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "PIZSAMÁ",
    "taboo": [
      "alvás",
      "ágy",
      "ruha",
      "éjszaka",
      "háló"
    ]
  },
  {
    "id": "HU0296",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "FOGAS",
    "taboo": [
      "ruha",
      "fal",
      "kabát",
      "akasztó",
      "előszoba"
    ]
  },
  {
    "id": "HU0297",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "ÉJJELISZEKRÉNY",
    "taboo": [
      "ágy",
      "lámpa",
      "háló",
      "fiók",
      "éjszaka"
    ]
  },
  {
    "id": "HU0298",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "ASZTALTERÍTŐ",
    "taboo": [
      "asztal",
      "konyha",
      "terítő",
      "evés",
      "textil"
    ]
  },
  {
    "id": "HU0299",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "SZALVÉTA",
    "taboo": [
      "papír",
      "étel",
      "asztal",
      "törlés",
      "ebéd"
    ]
  },
  {
    "id": "HU0300",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "KONYHARUHA",
    "taboo": [
      "konyha",
      "törlés",
      "edény",
      "textil",
      "törölköző"
    ]
  },
  {
    "id": "HU0301",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "MÉRŐSZALAG",
    "taboo": [
      "mérés",
      "hossz",
      "centiméter",
      "szalag",
      "építés"
    ]
  },
  {
    "id": "HU0302",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "OLLÓ",
    "taboo": [
      "vágás",
      "papír",
      "két penge",
      "iskola",
      "kéz"
    ]
  },
  {
    "id": "HU0303",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "RAGASZTÓ",
    "taboo": [
      "papír",
      "csomagolás",
      "ragasztás",
      "tubus",
      "cellux"
    ]
  },
  {
    "id": "HU0304",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "BORÍTÉK",
    "taboo": [
      "levél",
      "papír",
      "posta",
      "bélyeg",
      "küldemény"
    ]
  },
  {
    "id": "HU0305",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "BÉLYEG",
    "taboo": [
      "posta",
      "levél",
      "boríték",
      "ragasztó",
      "bélyegzés"
    ]
  },
  {
    "id": "HU0306",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "NÉVJEGYKÁRTYA",
    "taboo": [
      "név",
      "telefon",
      "cég",
      "elérhetőség",
      "papír"
    ]
  },
  {
    "id": "HU0307",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "JEGYZETTÖMB",
    "taboo": [
      "papír",
      "írás",
      "toll",
      "lista",
      "füzet"
    ]
  },
  {
    "id": "HU0308",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "TÖLTÖTT KÁPOSZTA",
    "taboo": [
      "káposzta",
      "hús",
      "rizs",
      "karácsony",
      "tejföl"
    ]
  },
  {
    "id": "HU0309",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "RÁNTOTT SAJT",
    "taboo": [
      "sajt",
      "panír",
      "olaj",
      "rántott",
      "tartár"
    ]
  },
  {
    "id": "HU0310",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "PAPRIKÁS KRUMPLI",
    "taboo": [
      "krumpli",
      "paprika",
      "kolbász",
      "bogrács",
      "magyar"
    ]
  },
  {
    "id": "HU0311",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "LECSÓ",
    "taboo": [
      "paprika",
      "paradicsom",
      "hagyma",
      "tojás",
      "nyár"
    ]
  },
  {
    "id": "HU0312",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "SOMLÓI GALUSKA",
    "taboo": [
      "desszert",
      "csoki",
      "tejszín",
      "dió",
      "piskóta"
    ]
  },
  {
    "id": "HU0313",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "DOBOSTORTA",
    "taboo": [
      "torta",
      "karamell",
      "csoki",
      "lap",
      "cukrász"
    ]
  },
  {
    "id": "HU0314",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "KRÉMES",
    "taboo": [
      "sütemény",
      "krém",
      "vanília",
      "cukrászda",
      "lap"
    ]
  },
  {
    "id": "HU0315",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "RÉTES",
    "taboo": [
      "tészta",
      "alma",
      "meggy",
      "sütemény",
      "porcukor"
    ]
  },
  {
    "id": "HU0316",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "TÚRÓGOMBÓC",
    "taboo": [
      "túró",
      "búzadara",
      "tejföl",
      "gombóc",
      "desszert"
    ]
  },
  {
    "id": "HU0317",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "MÁKOS GUBA",
    "taboo": [
      "mák",
      "kifli",
      "tej",
      "vanília",
      "desszert"
    ]
  },
  {
    "id": "HU0318",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "ARANYGALUSKA",
    "taboo": [
      "dió",
      "tészta",
      "vaníliasodó",
      "desszert",
      "kelt"
    ]
  },
  {
    "id": "HU0319",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "HALÁSZLÉ",
    "taboo": [
      "hal",
      "paprika",
      "lé",
      "ponty",
      "bajai"
    ]
  },
  {
    "id": "HU0320",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "PÖRKÖLT",
    "taboo": [
      "hús",
      "hagyma",
      "paprika",
      "szaft",
      "köret"
    ]
  },
  {
    "id": "HU0321",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "KOCSONYA",
    "taboo": [
      "hús",
      "zselé",
      "disznó",
      "tél",
      "tál"
    ]
  },
  {
    "id": "HU0322",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "HURKA",
    "taboo": [
      "kolbász",
      "rizs",
      "májas",
      "véres",
      "disznó"
    ]
  },
  {
    "id": "HU0323",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "KOLBÁSZ",
    "taboo": [
      "hús",
      "paprika",
      "disznó",
      "füstölt",
      "grill"
    ]
  },
  {
    "id": "HU0324",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "PALÓCLEVES",
    "taboo": [
      "leves",
      "bab",
      "hús",
      "tejföl",
      "gulyás"
    ]
  },
  {
    "id": "HU0325",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "BABLEVES",
    "taboo": [
      "bab",
      "leves",
      "füstölt",
      "kolbász",
      "tejföl"
    ]
  },
  {
    "id": "HU0326",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "FRANCIAKRÉMES",
    "taboo": [
      "krém",
      "tészta",
      "cukrász",
      "vanília",
      "sütemény"
    ]
  },
  {
    "id": "HU0327",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "PANNA COTTA",
    "taboo": [
      "tejszín",
      "olasz",
      "desszert",
      "zselatin",
      "vanília"
    ]
  },
  {
    "id": "HU0328",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "LASAGNE",
    "taboo": [
      "tészta",
      "olasz",
      "hús",
      "réteg",
      "sajt"
    ]
  },
  {
    "id": "HU0329",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "CARBONARA",
    "taboo": [
      "tészta",
      "szalonna",
      "tojás",
      "parmezán",
      "olasz"
    ]
  },
  {
    "id": "HU0330",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "PEKINGI KACSA",
    "taboo": [
      "kacsa",
      "Kína",
      "palacsinta",
      "ropogós",
      "szósz"
    ]
  },
  {
    "id": "HU0331",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "AVATAR",
    "taboo": [
      "Pandora",
      "Na'vi",
      "kék",
      "James Cameron",
      "bolygó"
    ]
  },
  {
    "id": "HU0332",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "PIRATES OF THE CARIBBEAN",
    "taboo": [
      "kalóz",
      "Jack Sparrow",
      "hajó",
      "Karib",
      "kincs"
    ]
  },
  {
    "id": "HU0333",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "A GYŰRŰK URA",
    "taboo": [
      "Frodó",
      "gyűrű",
      "Mordor",
      "hobbit",
      "Gandalf"
    ]
  },
  {
    "id": "HU0334",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "ROCKY",
    "taboo": [
      "boksz",
      "Philadelphia",
      "edzés",
      "meccs",
      "Balboa"
    ]
  },
  {
    "id": "HU0335",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "SCHINDLER LISTÁJA",
    "taboo": [
      "háború",
      "zsidók",
      "Németország",
      "lista",
      "Oskar"
    ]
  },
  {
    "id": "HU0336",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "A BOLDOGSÁG NYOMÁBAN",
    "taboo": [
      "Will Smith",
      "munka",
      "apa",
      "fiú",
      "álom"
    ]
  },
  {
    "id": "HU0337",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "ÉLETREVALÓK",
    "taboo": [
      "barátság",
      "francia",
      "tolószék",
      "gondozó",
      "film"
    ]
  },
  {
    "id": "HU0338",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "SZÁMOLJUNK LE",
    "taboo": [
      "akció",
      "rendőr",
      "bosszú",
      "film",
      "fegyver"
    ]
  },
  {
    "id": "HU0339",
    "category": "Filmek",
    "difficulty": "Könnyű",
    "word": "A SZÖKEVÉNY",
    "taboo": [
      "börtön",
      "szökés",
      "orvos",
      "rendőr",
      "keresés"
    ]
  },
  {
    "id": "HU0340",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "KÖR",
    "taboo": [
      "videokazetta",
      "Samara",
      "horror",
      "telefon",
      "hét nap"
    ]
  },
  {
    "id": "HU0341",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "AZ",
    "taboo": [
      "Pennywise",
      "bohóc",
      "Derry",
      "horror",
      "csatorna"
    ]
  },
  {
    "id": "HU0342",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "DŰNE",
    "taboo": [
      "Arrakis",
      "fűszer",
      "homok",
      "Paul",
      "sivatag"
    ]
  },
  {
    "id": "HU0343",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "OPPENHEIMER",
    "taboo": [
      "atom",
      "bomba",
      "fizikus",
      "Manhattan",
      "Nolan"
    ]
  },
  {
    "id": "HU0344",
    "category": "Filmek",
    "difficulty": "Nehéz",
    "word": "OPERAHÁZ",
    "taboo": [
      "Budapest",
      "Andrássy út",
      "ének",
      "színház",
      "előadás"
    ]
  },
  {
    "id": "HU0345",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "THE OFFICE",
    "taboo": [
      "iroda",
      "Michael",
      "Dunder Mifflin",
      "Scranton",
      "munka"
    ]
  },
  {
    "id": "HU0346",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "SHERLOCK",
    "taboo": [
      "Watson",
      "Holmes",
      "London",
      "nyomozó",
      "Baker Street"
    ]
  },
  {
    "id": "HU0347",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "DR. HOUSE",
    "taboo": [
      "orvos",
      "kórház",
      "Gregory",
      "diagnózis",
      "Vicodin"
    ]
  },
  {
    "id": "HU0348",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "CSI",
    "taboo": [
      "helyszínelő",
      "labor",
      "bűnügy",
      "Las Vegas",
      "nyomozás"
    ]
  },
  {
    "id": "HU0349",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "DEXTER",
    "taboo": [
      "sorozatgyilkos",
      "Miami",
      "vér",
      "Morgan",
      "rendőrség"
    ]
  },
  {
    "id": "HU0350",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "LOST",
    "taboo": [
      "sziget",
      "repülő",
      "Oceanic",
      "túlélők",
      "rejtély"
    ]
  },
  {
    "id": "HU0351",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "A MANDALÓRI",
    "taboo": [
      "Mandalorian",
      "Grogu",
      "Star Wars",
      "sisak",
      "bounty"
    ]
  },
  {
    "id": "HU0352",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "SQUID GAME",
    "taboo": [
      "játék",
      "maszk",
      "pénz",
      "Korea",
      "verseny"
    ]
  },
  {
    "id": "HU0353",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "NARCOS",
    "taboo": [
      "kokain",
      "Kolumbia",
      "Pablo",
      "kartell",
      "Netflix"
    ]
  },
  {
    "id": "HU0354",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "THE CROWN",
    "taboo": [
      "királynő",
      "Britannia",
      "Buckingham",
      "Netflix",
      "monarchia"
    ]
  },
  {
    "id": "HU0355",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "DOWNTON ABBEY",
    "taboo": [
      "kastély",
      "angol",
      "arisztokrata",
      "cseléd",
      "család"
    ]
  },
  {
    "id": "HU0356",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "TED LASSO",
    "taboo": [
      "futball",
      "edző",
      "Richmond",
      "Apple TV",
      "amerikai"
    ]
  },
  {
    "id": "HU0357",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "THE WITCHER",
    "taboo": [
      "Geralt",
      "szörny",
      "Yennefer",
      "Ciri",
      "Netflix"
    ]
  },
  {
    "id": "HU0358",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "HOUSE OF THE DRAGON",
    "taboo": [
      "Targaryen",
      "sárkány",
      "Westeros",
      "trón",
      "HBO"
    ]
  },
  {
    "id": "HU0359",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "MINDHUNTER",
    "taboo": [
      "FBI",
      "sorozatgyilkos",
      "interjú",
      "profilozás",
      "Netflix"
    ]
  },
  {
    "id": "HU0360",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "NAGY PÉNZRABLÁS",
    "taboo": [
      "bank",
      "maszk",
      "Professzor",
      "rablás",
      "Spanyolország"
    ]
  },
  {
    "id": "HU0361",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "KÓRHÁZ A VÁROS SZÉLÉN",
    "taboo": [
      "orvos",
      "kórház",
      "cseh",
      "sorozat",
      "beteg"
    ]
  },
  {
    "id": "HU0362",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "BARÁTOK KÖZT",
    "taboo": [
      "Mátyás tér",
      "RTL",
      "magyar",
      "szappanopera",
      "sorozat"
    ]
  },
  {
    "id": "HU0363",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "ARANYÉLET",
    "taboo": [
      "maffia",
      "magyar",
      "család",
      "HBO",
      "bűnözés"
    ]
  },
  {
    "id": "HU0364",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "TERÁPIA",
    "taboo": [
      "pszichológus",
      "páciens",
      "beszélgetés",
      "magyar",
      "HBO"
    ]
  },
  {
    "id": "HU0365",
    "category": "Sorozatok",
    "difficulty": "Nehéz",
    "word": "A BESÚGÓ",
    "taboo": [
      "Kádár",
      "egyetem",
      "Budapest",
      "magyar",
      "HBO"
    ]
  },
  {
    "id": "HU0366",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "MICHAEL JACKSON",
    "taboo": [
      "pop",
      "tánc",
      "Thriller",
      "moonwalk",
      "énekes"
    ]
  },
  {
    "id": "HU0367",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "QUEEN",
    "taboo": [
      "Freddie Mercury",
      "rock",
      "Bohemian Rhapsody",
      "gitár",
      "zenekar"
    ]
  },
  {
    "id": "HU0368",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "ABBA",
    "taboo": [
      "svéd",
      "pop",
      "Dancing Queen",
      "négyes",
      "Eurovízió"
    ]
  },
  {
    "id": "HU0369",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "BEATLES",
    "taboo": [
      "Liverpool",
      "rock",
      "John Lennon",
      "Paul McCartney",
      "zenekar"
    ]
  },
  {
    "id": "HU0370",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "ROLLING STONES",
    "taboo": [
      "rock",
      "Mick Jagger",
      "Keith Richards",
      "brit",
      "zenekar"
    ]
  },
  {
    "id": "HU0371",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "ELVIS PRESLEY",
    "taboo": [
      "rock and roll",
      "király",
      "Memphis",
      "énekes",
      "gospel"
    ]
  },
  {
    "id": "HU0372",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "MADONNA",
    "taboo": [
      "pop",
      "énekesnő",
      "Like a Virgin",
      "tánc",
      "amerikai"
    ]
  },
  {
    "id": "HU0373",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "BRITNEY SPEARS",
    "taboo": [
      "pop",
      "énekesnő",
      "Baby One More Time",
      "tánc",
      "amerikai"
    ]
  },
  {
    "id": "HU0374",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "LADY GAGA",
    "taboo": [
      "pop",
      "énekesnő",
      "Poker Face",
      "haj",
      "New York"
    ]
  },
  {
    "id": "HU0375",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "ADELE",
    "taboo": [
      "Hello",
      "énekesnő",
      "brit",
      "ballada",
      "Grammy"
    ]
  },
  {
    "id": "HU0376",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "ED SHEERAN",
    "taboo": [
      "gitár",
      "Shape of You",
      "brit",
      "énekes",
      "Thinking Out Loud"
    ]
  },
  {
    "id": "HU0377",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "EMINEM",
    "taboo": [
      "rap",
      "Detroit",
      "Marshall",
      "Lose Yourself",
      "rapper"
    ]
  },
  {
    "id": "HU0378",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "DRAKE",
    "taboo": [
      "rap",
      "kanadai",
      "hiphop",
      "Toronto",
      "rapper"
    ]
  },
  {
    "id": "HU0379",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "BILLIE EILISH",
    "taboo": [
      "pop",
      "énekesnő",
      "zöld haj",
      "bad guy",
      "Grammy"
    ]
  },
  {
    "id": "HU0380",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "METALLICA",
    "taboo": [
      "metal",
      "gitár",
      "James Hetfield",
      "Nothing Else Matters",
      "zenekar"
    ]
  },
  {
    "id": "HU0381",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "NIRVANA",
    "taboo": [
      "grunge",
      "Kurt Cobain",
      "Seattle",
      "Nevermind",
      "zenekar"
    ]
  },
  {
    "id": "HU0382",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "LINKIN PARK",
    "taboo": [
      "rock",
      "Chester Bennington",
      "Numb",
      "Mike Shinoda",
      "zenekar"
    ]
  },
  {
    "id": "HU0383",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "AC/DC",
    "taboo": [
      "rock",
      "gitár",
      "Angus Young",
      "Highway to Hell",
      "Ausztrália"
    ]
  },
  {
    "id": "HU0384",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "IMAGINE DRAGONS",
    "taboo": [
      "rock",
      "Radioactive",
      "Dan Reynolds",
      "Las Vegas",
      "zenekar"
    ]
  },
  {
    "id": "HU0385",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "DAVID BOWIE",
    "taboo": [
      "Ziggy Stardust",
      "rock",
      "Space Oddity",
      "brit",
      "énekes"
    ]
  },
  {
    "id": "HU0386",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "ELTON JOHN",
    "taboo": [
      "zongora",
      "Rocket Man",
      "brit",
      "énekes",
      "szemüveg"
    ]
  },
  {
    "id": "HU0387",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "BRUNO MARS",
    "taboo": [
      "pop",
      "énekes",
      "Hawaii",
      "Uptown Funk",
      "tánc"
    ]
  },
  {
    "id": "HU0388",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "JUSTIN TIMBERLAKE",
    "taboo": [
      "pop",
      "énekes",
      "NSYNC",
      "tánc",
      "USA"
    ]
  },
  {
    "id": "HU0389",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "COLDPLAY",
    "taboo": [
      "rock",
      "Chris Martin",
      "Yellow",
      "brit",
      "zenekar"
    ]
  },
  {
    "id": "HU0390",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "U2",
    "taboo": [
      "rock",
      "Bono",
      "Írország",
      "zenekar",
      "One"
    ]
  },
  {
    "id": "HU0391",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "OMEGA",
    "taboo": [
      "magyar",
      "rock",
      "Lénárd",
      "Gyöngyhajú lány",
      "zenekar"
    ]
  },
  {
    "id": "HU0392",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "KFT",
    "taboo": [
      "magyar",
      "rock",
      "Afrika",
      "zenekar",
      "Laár"
    ]
  },
  {
    "id": "HU0393",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "NEOTON FAMÍLIA",
    "taboo": [
      "magyar",
      "pop",
      "Santa Maria",
      "Csepregi",
      "zenekar"
    ]
  },
  {
    "id": "HU0394",
    "category": "Zene",
    "difficulty": "Nehéz",
    "word": "HOOLIGANS",
    "taboo": [
      "magyar",
      "rock",
      "zenekar",
      "Királylány",
      "együttes"
    ]
  },
  {
    "id": "HU0395",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "LABDARÚGÁS",
    "taboo": [
      "foci",
      "gól",
      "labda",
      "kapu",
      "csapat"
    ]
  },
  {
    "id": "HU0396",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "KÉZILABDA",
    "taboo": [
      "kapu",
      "labda",
      "gól",
      "csapat",
      "kéz"
    ]
  },
  {
    "id": "HU0397",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "VÍZILABDA",
    "taboo": [
      "medence",
      "labda",
      "gól",
      "úszás",
      "csapat"
    ]
  },
  {
    "id": "HU0398",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "ATLÉTIKA",
    "taboo": [
      "futás",
      "ugrás",
      "dobás",
      "stadion",
      "sport"
    ]
  },
  {
    "id": "HU0399",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "ASZTALITENISZ",
    "taboo": [
      "pingpong",
      "ütő",
      "labda",
      "asztal",
      "háló"
    ]
  },
  {
    "id": "HU0400",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "VÍVÁS",
    "taboo": [
      "kard",
      "tőr",
      "maszk",
      "párbaj",
      "sport"
    ]
  },
  {
    "id": "HU0401",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "KERÉKPÁROZÁS",
    "taboo": [
      "bicikli",
      "pedál",
      "Tour de France",
      "verseny",
      "sisak"
    ]
  },
  {
    "id": "HU0402",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "FORMA-1",
    "taboo": [
      "autó",
      "verseny",
      "pilóta",
      "boxutca",
      "Ferrari"
    ]
  },
  {
    "id": "HU0403",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "RÖGBI",
    "taboo": [
      "labda",
      "angol",
      "ütközés",
      "csapat",
      "pálya"
    ]
  },
  {
    "id": "HU0404",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "AMERIKAI FUTBALL",
    "taboo": [
      "NFL",
      "labda",
      "touchdown",
      "sisak",
      "USA"
    ]
  },
  {
    "id": "HU0405",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "BASEBALL",
    "taboo": [
      "ütő",
      "labda",
      "MLB",
      "bázis",
      "kesztyű"
    ]
  },
  {
    "id": "HU0406",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "JÉGKORONG",
    "taboo": [
      "jég",
      "korcsolya",
      "korong",
      "kapu",
      "NHL"
    ]
  },
  {
    "id": "HU0407",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "SÍELÉS",
    "taboo": [
      "hó",
      "léc",
      "hegy",
      "felvonó",
      "tél"
    ]
  },
  {
    "id": "HU0408",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "SNOWBOARD",
    "taboo": [
      "hó",
      "deszka",
      "hegy",
      "tél",
      "csúszás"
    ]
  },
  {
    "id": "HU0409",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "SÍUGRÁS",
    "taboo": [
      "sánc",
      "léc",
      "ugrás",
      "hó",
      "verseny"
    ]
  },
  {
    "id": "HU0410",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "MŰUGRÁS",
    "taboo": [
      "medence",
      "ugrás",
      "víz",
      "torony",
      "pontozás"
    ]
  },
  {
    "id": "HU0411",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "TORNA",
    "taboo": [
      "gerenda",
      "gyűrű",
      "talaj",
      "lóugrás",
      "sport"
    ]
  },
  {
    "id": "HU0412",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "KARATE",
    "taboo": [
      "küzdősport",
      "öv",
      "ütés",
      "japán",
      "dojo"
    ]
  },
  {
    "id": "HU0413",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "JUDO",
    "taboo": [
      "japán",
      "küzdősport",
      "kimono",
      "dobás",
      "tatami"
    ]
  },
  {
    "id": "HU0414",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "BIRKÓZÁS",
    "taboo": [
      "szőnyeg",
      "küzdelem",
      "fogás",
      "olimpia",
      "sport"
    ]
  },
  {
    "id": "HU0415",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "DARTS",
    "taboo": [
      "nyíl",
      "tábla",
      "bull",
      "dobás",
      "pont"
    ]
  },
  {
    "id": "HU0416",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "SÚLYEMELÉS",
    "taboo": [
      "rúd",
      "súly",
      "olimpia",
      "emelés",
      "sport"
    ]
  },
  {
    "id": "HU0417",
    "category": "Sport",
    "difficulty": "Nehéz",
    "word": "FUTSAL",
    "taboo": [
      "foci",
      "terem",
      "labda",
      "kapu",
      "csapat"
    ]
  },
  {
    "id": "HU0418",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "PÉCS",
    "taboo": [
      "Baranya",
      "város",
      "egyetem",
      "Zsolnay",
      "Dél-Dunántúl"
    ]
  },
  {
    "id": "HU0419",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SZEGED",
    "taboo": [
      "Tisza",
      "paprika",
      "város",
      "dóm",
      "Csongrád"
    ]
  },
  {
    "id": "HU0420",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "DEBRECEN",
    "taboo": [
      "Hajdú-Bihar",
      "Nagytemplom",
      "város",
      "egyetem",
      "cívis"
    ]
  },
  {
    "id": "HU0421",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "EGER",
    "taboo": [
      "bor",
      "vár",
      "Dobó",
      "város",
      "Heves"
    ]
  },
  {
    "id": "HU0422",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SOPRON",
    "taboo": [
      "bor",
      "város",
      "Ausztria",
      "Lővérek",
      "hűség"
    ]
  },
  {
    "id": "HU0423",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SZENTENDRE",
    "taboo": [
      "Duna",
      "művészet",
      "város",
      "macskakő",
      "Budapest"
    ]
  },
  {
    "id": "HU0424",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "VÁC",
    "taboo": [
      "Duna",
      "város",
      "székesegyház",
      "Pest",
      "folyó"
    ]
  },
  {
    "id": "HU0425",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "HÉVÍZ",
    "taboo": [
      "gyógyvíz",
      "tó",
      "fürdő",
      "Zala",
      "turizmus"
    ]
  },
  {
    "id": "HU0426",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "HOLLÓKŐ",
    "taboo": [
      "falu",
      "Nógrád",
      "UNESCO",
      "házak",
      "palóc"
    ]
  },
  {
    "id": "HU0427",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "TIHANY",
    "taboo": [
      "apátság",
      "Balaton",
      "levendula",
      "félsziget",
      "visszhang"
    ]
  },
  {
    "id": "HU0428",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "BADACSONY",
    "taboo": [
      "Balaton",
      "bor",
      "hegy",
      "szőlő",
      "tanúhegy"
    ]
  },
  {
    "id": "HU0429",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "TOKAJ",
    "taboo": [
      "bor",
      "aszú",
      "szőlő",
      "Tisza",
      "Hegyalja"
    ]
  },
  {
    "id": "HU0430",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "HUNGARORING",
    "taboo": [
      "Forma-1",
      "Mogyoród",
      "pálya",
      "verseny",
      "autó"
    ]
  },
  {
    "id": "HU0431",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "BÜKK",
    "taboo": [
      "hegység",
      "Eger",
      "erdő",
      "barlang",
      "hegy"
    ]
  },
  {
    "id": "HU0432",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "MÁTRA",
    "taboo": [
      "Kékes",
      "hegy",
      "Gyöngyös",
      "túra",
      "Magyarország"
    ]
  },
  {
    "id": "HU0433",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "KÉKES",
    "taboo": [
      "csúcs",
      "Mátra",
      "1014",
      "hegy",
      "síelés"
    ]
  },
  {
    "id": "HU0434",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "DUNA",
    "taboo": [
      "folyó",
      "Budapest",
      "folyópart",
      "Európa",
      "víz"
    ]
  },
  {
    "id": "HU0435",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "BUDAI VÁR",
    "taboo": [
      "Budapest",
      "Buda",
      "palota",
      "Mátyás-templom",
      "hegy"
    ]
  },
  {
    "id": "HU0436",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "HŐSÖK TERE",
    "taboo": [
      "Budapest",
      "szobrok",
      "Millennium",
      "Andrássy",
      "tér"
    ]
  },
  {
    "id": "HU0437",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SZÉCHÉNYI FÜRDŐ",
    "taboo": [
      "Budapest",
      "fürdő",
      "termál",
      "medence",
      "Városliget"
    ]
  },
  {
    "id": "HU0438",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "GELLÉRT-HEGY",
    "taboo": [
      "Budapest",
      "Citadella",
      "Duna",
      "szobor",
      "hegy"
    ]
  },
  {
    "id": "HU0439",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "LÁNCHÍD",
    "taboo": [
      "Budapest",
      "Duna",
      "híd",
      "oroszlán",
      "Széchenyi"
    ]
  },
  {
    "id": "HU0440",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "MAGYAR KONYHA",
    "taboo": [
      "gulyás",
      "paprika",
      "pörkölt",
      "lángos",
      "étel"
    ]
  },
  {
    "id": "HU0441",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "FORINT",
    "taboo": [
      "pénz",
      "HUF",
      "érme",
      "bankjegy",
      "Magyarország"
    ]
  },
  {
    "id": "HU0442",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "AMERIKA",
    "taboo": [
      "kontinens",
      "USA",
      "óceán",
      "Kolumbusz",
      "Nyugat"
    ]
  },
  {
    "id": "HU0443",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "EURÓPA",
    "taboo": [
      "kontinens",
      "ország",
      "Európai Unió",
      "Ázsia",
      "földrész"
    ]
  },
  {
    "id": "HU0444",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "ÁZSIA",
    "taboo": [
      "kontinens",
      "Kína",
      "Japán",
      "Európa",
      "földrész"
    ]
  },
  {
    "id": "HU0445",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "AFRIKA",
    "taboo": [
      "kontinens",
      "Szahara",
      "Egyiptom",
      "szafari",
      "földrész"
    ]
  },
  {
    "id": "HU0446",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "ANTARKTISZ",
    "taboo": [
      "jég",
      "déli sark",
      "pingvin",
      "hideg",
      "kontinens"
    ]
  },
  {
    "id": "HU0447",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "ATLANTI-ÓCEÁN",
    "taboo": [
      "óceán",
      "Amerika",
      "Európa",
      "víz",
      "tenger"
    ]
  },
  {
    "id": "HU0448",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "CSENDES-ÓCEÁN",
    "taboo": [
      "óceán",
      "legnagyobb",
      "Japán",
      "Amerika",
      "víz"
    ]
  },
  {
    "id": "HU0449",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "INDIAI-ÓCEÁN",
    "taboo": [
      "óceán",
      "India",
      "Afrika",
      "víz",
      "tenger"
    ]
  },
  {
    "id": "HU0450",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "FÖLDKÖZI-TENGER",
    "taboo": [
      "tenger",
      "Európa",
      "Afrika",
      "Görögország",
      "nyár"
    ]
  },
  {
    "id": "HU0451",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "NÍLUS",
    "taboo": [
      "folyó",
      "Egyiptom",
      "Afrika",
      "Kairó",
      "víz"
    ]
  },
  {
    "id": "HU0452",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "ALPOK",
    "taboo": [
      "hegy",
      "Svájc",
      "Ausztria",
      "síelés",
      "hegység"
    ]
  },
  {
    "id": "HU0453",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "HIMALÁJA",
    "taboo": [
      "hegy",
      "Everest",
      "Nepál",
      "Ázsia",
      "hegység"
    ]
  },
  {
    "id": "HU0454",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "GRAND CANYON",
    "taboo": [
      "Amerika",
      "Arizona",
      "kanyon",
      "Colorado",
      "nemzeti park"
    ]
  },
  {
    "id": "HU0455",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "NIAGARA-VÍZESÉS",
    "taboo": [
      "vízesés",
      "Kanada",
      "USA",
      "víz",
      "határ"
    ]
  },
  {
    "id": "HU0456",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "GÖRÖGORSZÁG",
    "taboo": [
      "Athén",
      "tenger",
      "szigetek",
      "Európa",
      "Akropolisz"
    ]
  },
  {
    "id": "HU0457",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "OLASZORSZÁG",
    "taboo": [
      "Róma",
      "pizza",
      "csizma",
      "Európa",
      "tészta"
    ]
  },
  {
    "id": "HU0458",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "FRANCIAORSZÁG",
    "taboo": [
      "Párizs",
      "Eiffel-torony",
      "Európa",
      "bor",
      "francia"
    ]
  },
  {
    "id": "HU0459",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "NÉMETORSZÁG",
    "taboo": [
      "Berlin",
      "Európa",
      "autó",
      "német",
      "sör"
    ]
  },
  {
    "id": "HU0460",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "SPANYOLORSZÁG",
    "taboo": [
      "Madrid",
      "Barcelona",
      "flamenco",
      "Európa",
      "tengerpart"
    ]
  },
  {
    "id": "HU0461",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "USA",
    "taboo": [
      "Amerika",
      "Washington",
      "New York",
      "elnök",
      "ország"
    ]
  },
  {
    "id": "HU0462",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "KANADA",
    "taboo": [
      "Toronto",
      "jégkorong",
      "USA",
      "juhar",
      "ország"
    ]
  },
  {
    "id": "HU0463",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "BRAZÍLIA",
    "taboo": [
      "Rio",
      "foci",
      "Amazonas",
      "szamba",
      "Dél-Amerika"
    ]
  },
  {
    "id": "HU0464",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "MÁTYÁS KIRÁLY",
    "taboo": [
      "Hunyadi",
      "fekete sereg",
      "Corvinák",
      "király",
      "Buda"
    ]
  },
  {
    "id": "HU0465",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "EGERI VÁR",
    "taboo": [
      "Dobó",
      "török",
      "ostrom",
      "1552",
      "vár"
    ]
  },
  {
    "id": "HU0466",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "RÁKÓCZI-SZABADSÁGHARC",
    "taboo": [
      "Rákóczi",
      "kuruc",
      "Habsburg",
      "1703",
      "szabadságharc"
    ]
  },
  {
    "id": "HU0467",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "1848-49",
    "taboo": [
      "forradalom",
      "Kossuth",
      "Petőfi",
      "március 15",
      "szabadságharc"
    ]
  },
  {
    "id": "HU0468",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "KOSSUTH LAJOS",
    "taboo": [
      "1848",
      "politikus",
      "szabadságharc",
      "Országgyűlés",
      "bankó"
    ]
  },
  {
    "id": "HU0469",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "PETŐFI SÁNDOR",
    "taboo": [
      "költő",
      "Nemzeti dal",
      "1848",
      "János vitéz",
      "március 15"
    ]
  },
  {
    "id": "HU0470",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "ARADI VÉRTANÚK",
    "taboo": [
      "1849",
      "október 6",
      "tábornok",
      "kivégzés",
      "forradalom"
    ]
  },
  {
    "id": "HU0471",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "OSZTRÁK–MAGYAR MONARCHIA",
    "taboo": [
      "Ausztria",
      "Magyarország",
      "Ferenc József",
      "1867",
      "birodalom"
    ]
  },
  {
    "id": "HU0472",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "ELSŐ VILÁGHÁBORÚ",
    "taboo": [
      "1914",
      "háború",
      "Monarchia",
      "front",
      "1918"
    ]
  },
  {
    "id": "HU0473",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "TRIANON",
    "taboo": [
      "1920",
      "béke",
      "Magyarország",
      "határ",
      "versailles"
    ]
  },
  {
    "id": "HU0474",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "MÁSODIK VILÁGHÁBORÚ",
    "taboo": [
      "1939",
      "Hitler",
      "háború",
      "Németország",
      "1945"
    ]
  },
  {
    "id": "HU0475",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "HOLOKAUSZT",
    "taboo": [
      "zsidók",
      "Németország",
      "koncentrációs tábor",
      "háború",
      "népirtás"
    ]
  },
  {
    "id": "HU0476",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "1956-OS FORRADALOM",
    "taboo": [
      "Budapest",
      "szovjet",
      "forradalom",
      "október 23",
      "Kádár"
    ]
  },
  {
    "id": "HU0477",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "KÁDÁR JÁNOS",
    "taboo": [
      "kommunizmus",
      "1956",
      "MSZMP",
      "szocializmus",
      "Magyarország"
    ]
  },
  {
    "id": "HU0478",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "RENDSZERVÁLTÁS",
    "taboo": [
      "1989",
      "kommunizmus",
      "demokrácia",
      "köztársaság",
      "Magyarország"
    ]
  },
  {
    "id": "HU0479",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "JÚLIUSI FORRADALOM",
    "taboo": [
      "Franciaország",
      "Párizs",
      "1830",
      "forradalom",
      "király"
    ]
  },
  {
    "id": "HU0480",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "AMERIKAI FÜGGETLENSÉGI HÁBORÚ",
    "taboo": [
      "USA",
      "Anglia",
      "Washington",
      "1776",
      "függetlenség"
    ]
  },
  {
    "id": "HU0481",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "FRANCIA FORRADALOM",
    "taboo": [
      "Párizs",
      "1789",
      "Bastille",
      "király",
      "forradalom"
    ]
  },
  {
    "id": "HU0482",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "ÓKORI EGYIPTOM",
    "taboo": [
      "piramis",
      "fáraó",
      "Nílus",
      "múmia",
      "ókor"
    ]
  },
  {
    "id": "HU0483",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "ÓKORI GÖRÖGORSZÁG",
    "taboo": [
      "Athén",
      "Spárta",
      "olimpia",
      "istenek",
      "ókor"
    ]
  },
  {
    "id": "HU0484",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "VIKINGEK",
    "taboo": [
      "hajó",
      "skandináv",
      "harcos",
      "rablás",
      "sisak"
    ]
  },
  {
    "id": "HU0485",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "RELATIVITÁSELMÉLET",
    "taboo": [
      "Einstein",
      "fizika",
      "idő",
      "fény",
      "energia"
    ]
  },
  {
    "id": "HU0486",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "ELEKTRON",
    "taboo": [
      "részecske",
      "negatív",
      "atom",
      "töltés",
      "fizika"
    ]
  },
  {
    "id": "HU0487",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "PROTON",
    "taboo": [
      "atom",
      "pozitív",
      "részecske",
      "mag",
      "töltés"
    ]
  },
  {
    "id": "HU0488",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "GALAXIS",
    "taboo": [
      "csillag",
      "Tejút",
      "űr",
      "rendszer",
      "univerzum"
    ]
  },
  {
    "id": "HU0489",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "FÖLDRENGÉS",
    "taboo": [
      "föld",
      "rengés",
      "tektonikus",
      "Richter",
      "katasztrófa"
    ]
  },
  {
    "id": "HU0490",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "TORNÁDÓ",
    "taboo": [
      "szél",
      "forgószél",
      "vihar",
      "felhő",
      "USA"
    ]
  },
  {
    "id": "HU0491",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "HURRIKÁN",
    "taboo": [
      "vihar",
      "szél",
      "tenger",
      "trópusi",
      "katasztrófa"
    ]
  },
  {
    "id": "HU0492",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "KLÍMAVÁLTOZÁS",
    "taboo": [
      "felmelegedés",
      "CO2",
      "Föld",
      "üvegházhatás",
      "környezet"
    ]
  },
  {
    "id": "HU0493",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "SEJT",
    "taboo": [
      "biológia",
      "membrán",
      "mag",
      "DNS",
      "szervezet"
    ]
  },
  {
    "id": "HU0494",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "VÍRUS",
    "taboo": [
      "fertőzés",
      "betegség",
      "sejt",
      "járvány",
      "mikroszkóp"
    ]
  },
  {
    "id": "HU0495",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "OLTÁS",
    "taboo": [
      "immunrendszer",
      "betegség",
      "vakcina",
      "injekció",
      "védelem"
    ]
  },
  {
    "id": "HU0496",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "TÁVCSŐ",
    "taboo": [
      "csillag",
      "űr",
      "nagyítás",
      "égbolt",
      "Galilei"
    ]
  },
  {
    "id": "HU0497",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "GRAVITÁCIÓS HULLÁM",
    "taboo": [
      "Einstein",
      "űr",
      "fekete lyuk",
      "rezgés",
      "fizika"
    ]
  },
  {
    "id": "HU0498",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "FOSSZÍLIA",
    "taboo": [
      "őslény",
      "kőzet",
      "maradvány",
      "ásatás",
      "csont"
    ]
  },
  {
    "id": "HU0499",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "METEOR",
    "taboo": [
      "űr",
      "kő",
      "égbolt",
      "becsapódás",
      "csillag"
    ]
  },
  {
    "id": "HU0500",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "KEMÉNYÍTŐ",
    "taboo": [
      "növény",
      "szénhidrát",
      "liszt",
      "burgonya",
      "molekula"
    ]
  },
  {
    "id": "HU0501",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "LAPTOP",
    "taboo": [
      "számítógép",
      "billentyűzet",
      "képernyő",
      "akkumulátor",
      "munka"
    ]
  },
  {
    "id": "HU0502",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "TABLET",
    "taboo": [
      "képernyő",
      "érintés",
      "mobil",
      "app",
      "Apple"
    ]
  },
  {
    "id": "HU0503",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "USB",
    "taboo": [
      "kábel",
      "csatlakozó",
      "pendrive",
      "adat",
      "port"
    ]
  },
  {
    "id": "HU0504",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "ROBOT",
    "taboo": [
      "gép",
      "automatizálás",
      "ember",
      "mesterséges",
      "technológia"
    ]
  },
  {
    "id": "HU0505",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "INTERNET",
    "taboo": [
      "web",
      "böngésző",
      "online",
      "hálózat",
      "Google"
    ]
  },
  {
    "id": "HU0506",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "GOOGLE",
    "taboo": [
      "kereső",
      "internet",
      "Chrome",
      "keresés",
      "cég"
    ]
  },
  {
    "id": "HU0507",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "INSTAGRAM",
    "taboo": [
      "fotó",
      "követő",
      "Meta",
      "story",
      "social"
    ]
  },
  {
    "id": "HU0508",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "FACEBOOK",
    "taboo": [
      "Meta",
      "közösségi",
      "profil",
      "ismerős",
      "poszt"
    ]
  },
  {
    "id": "HU0509",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "TIKTOK",
    "taboo": [
      "videó",
      "app",
      "tánc",
      "social",
      "rövid"
    ]
  },
  {
    "id": "HU0510",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "NETFLIX",
    "taboo": [
      "film",
      "sorozat",
      "streaming",
      "előfizetés",
      "piros"
    ]
  },
  {
    "id": "HU0511",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "XBOX",
    "taboo": [
      "Microsoft",
      "konzol",
      "játék",
      "kontroller",
      "Game Pass"
    ]
  },
  {
    "id": "HU0512",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "NINTENDO SWITCH",
    "taboo": [
      "Nintendo",
      "konzol",
      "Mario",
      "kézi",
      "Joy-Con"
    ]
  },
  {
    "id": "HU0513",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "VR-SZEMÜVEG",
    "taboo": [
      "virtuális",
      "játék",
      "szemüveg",
      "3D",
      "metaverzum"
    ]
  },
  {
    "id": "HU0514",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "3D NYOMTATÓ",
    "taboo": [
      "nyomtatás",
      "műanyag",
      "réteg",
      "modell",
      "gép"
    ]
  },
  {
    "id": "HU0515",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "DRÓNKAMERA",
    "taboo": [
      "repülés",
      "videó",
      "kamera",
      "távirányító",
      "felvétel"
    ]
  },
  {
    "id": "HU0516",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "FELHŐSZOLGÁLTATÁS",
    "taboo": [
      "internet",
      "adat",
      "szerver",
      "online",
      "tárhely"
    ]
  },
  {
    "id": "HU0517",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "JELSZÓ",
    "taboo": [
      "fiók",
      "biztonság",
      "bejelentkezés",
      "kód",
      "titkos"
    ]
  },
  {
    "id": "HU0518",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "MEGBESZÉLÉS",
    "taboo": [
      "meeting",
      "kolléga",
      "iroda",
      "napirend",
      "munka"
    ]
  },
  {
    "id": "HU0519",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "ÁLLÁSINTERJÚ",
    "taboo": [
      "HR",
      "kérdés",
      "jelentkező",
      "munka",
      "CV"
    ]
  },
  {
    "id": "HU0520",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "KOLLÉGA",
    "taboo": [
      "munka",
      "csapat",
      "iroda",
      "munkatárs",
      "asztal"
    ]
  },
  {
    "id": "HU0521",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "EXCEL",
    "taboo": [
      "táblázat",
      "Microsoft",
      "cella",
      "képlet",
      "munka"
    ]
  },
  {
    "id": "HU0522",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "OUTLOOK",
    "taboo": [
      "email",
      "Microsoft",
      "naptár",
      "levél",
      "munka"
    ]
  },
  {
    "id": "HU0523",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "SLACK",
    "taboo": [
      "chat",
      "csatorna",
      "üzenet",
      "munka",
      "csapat"
    ]
  },
  {
    "id": "HU0524",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "NAPTÁR",
    "taboo": [
      "dátum",
      "időpont",
      "meeting",
      "hét",
      "tervezés"
    ]
  },
  {
    "id": "HU0525",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "EMAIL",
    "taboo": [
      "levél",
      "küldés",
      "címzett",
      "fiók",
      "internet"
    ]
  },
  {
    "id": "HU0526",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "BÓNUSZ",
    "taboo": [
      "pénz",
      "jutalom",
      "fizetés",
      "teljesítmény",
      "év"
    ]
  },
  {
    "id": "HU0527",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "FELMONDÁS",
    "taboo": [
      "munka",
      "kilépés",
      "főnök",
      "szerződés",
      "állás"
    ]
  },
  {
    "id": "HU0528",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "ELŐLÉPTETÉS",
    "taboo": [
      "pozíció",
      "fizetés",
      "főnök",
      "karrier",
      "munka"
    ]
  },
  {
    "id": "HU0529",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "IRODA",
    "taboo": [
      "asztal",
      "munka",
      "kolléga",
      "szék",
      "épület"
    ]
  },
  {
    "id": "HU0530",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "NYOMTATÓ",
    "taboo": [
      "papír",
      "nyomtatás",
      "iroda",
      "tinta",
      "dokumentum"
    ]
  },
  {
    "id": "HU0531",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "FŐNÖKI ÉRTEKEZLET",
    "taboo": [
      "meeting",
      "vezető",
      "iroda",
      "napirend",
      "munka"
    ]
  },
  {
    "id": "HU0532",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "UAT",
    "taboo": [
      "tesztelés",
      "fejlesztés",
      "sandbox",
      "hiba",
      "felhasználó"
    ]
  },
  {
    "id": "HU0533",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "PRODUKCIÓ",
    "taboo": [
      "éles",
      "rendszer",
      "telepítés",
      "szerver",
      "munka"
    ]
  },
  {
    "id": "HU0534",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "KÓD",
    "taboo": [
      "programozás",
      "szoftver",
      "fejlesztő",
      "számítógép",
      "program"
    ]
  },
  {
    "id": "HU0535",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "SZOFTVERFEJLESZTŐ",
    "taboo": [
      "programozás",
      "kód",
      "app",
      "fejlesztés",
      "IT"
    ]
  },
  {
    "id": "HU0536",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "CRM",
    "taboo": [
      "ügyfél",
      "adatbázis",
      "értékesítés",
      "rendszer",
      "Salesforce"
    ]
  },
  {
    "id": "HU0537",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "ADMINISZTRÁTOR",
    "taboo": [
      "rendszer",
      "jogosultság",
      "beállítás",
      "felhasználó",
      "munka"
    ]
  },
  {
    "id": "HU0538",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "TANTEREM",
    "taboo": [
      "iskola",
      "tanár",
      "pad",
      "diák",
      "óra"
    ]
  },
  {
    "id": "HU0539",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "DIÁK",
    "taboo": [
      "iskola",
      "tanulás",
      "óra",
      "tanár",
      "füzet"
    ]
  },
  {
    "id": "HU0540",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "DOLGOZAT",
    "taboo": [
      "teszt",
      "jegy",
      "tanár",
      "kérdés",
      "iskola"
    ]
  },
  {
    "id": "HU0541",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "OSZTÁLYZAT",
    "taboo": [
      "jegy",
      "iskola",
      "ötös",
      "tanár",
      "dolgozat"
    ]
  },
  {
    "id": "HU0542",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "ÖTÖS",
    "taboo": [
      "jegy",
      "jeles",
      "iskola",
      "tanuló",
      "osztályzat"
    ]
  },
  {
    "id": "HU0543",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "EGYES",
    "taboo": [
      "jegy",
      "rossz",
      "iskola",
      "dolgozat",
      "tanár"
    ]
  },
  {
    "id": "HU0544",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "SZÜNET",
    "taboo": [
      "iskola",
      "óra",
      "folyosó",
      "diák",
      "csengő"
    ]
  },
  {
    "id": "HU0545",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "CSENGŐ",
    "taboo": [
      "iskola",
      "szünet",
      "óra",
      "hang",
      "folyosó"
    ]
  },
  {
    "id": "HU0546",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "TOLLTARTÓ",
    "taboo": [
      "toll",
      "ceruza",
      "iskola",
      "füzet",
      "táska"
    ]
  },
  {
    "id": "HU0547",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "RADÍR",
    "taboo": [
      "ceruza",
      "papír",
      "törlés",
      "iskola",
      "gumi"
    ]
  },
  {
    "id": "HU0548",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "CERUZA",
    "taboo": [
      "írás",
      "grafit",
      "papír",
      "hegyező",
      "iskola"
    ]
  },
  {
    "id": "HU0549",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "HEGYZŐ",
    "taboo": [
      "ceruza",
      "forgács",
      "éles",
      "iskola",
      "írás"
    ]
  },
  {
    "id": "HU0550",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "FÜZET",
    "taboo": [
      "papír",
      "írás",
      "iskola",
      "vonalas",
      "jegyzet"
    ]
  },
  {
    "id": "HU0551",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "ISZKOLATÁSKA",
    "taboo": [
      "könyv",
      "füzet",
      "iskola",
      "hát",
      "táska"
    ]
  },
  {
    "id": "HU0552",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "KRÉTATÁBLA",
    "taboo": [
      "tábla",
      "kréta",
      "tanár",
      "óra",
      "iskola"
    ]
  },
  {
    "id": "HU0553",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "FEHÉRTÁBLA",
    "taboo": [
      "filc",
      "tábla",
      "tanár",
      "óra",
      "iskola"
    ]
  },
  {
    "id": "HU0554",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "OSZTÁLYKIRÁNDULÁS",
    "taboo": [
      "iskola",
      "busz",
      "diák",
      "kirándulás",
      "tanár"
    ]
  },
  {
    "id": "HU0555",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "DIPLOMA",
    "taboo": [
      "egyetem",
      "végzés",
      "papír",
      "oklevél",
      "tanulás"
    ]
  },
  {
    "id": "HU0556",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "TANTÁRGY",
    "taboo": [
      "iskola",
      "matek",
      "magyar",
      "óra",
      "tanár"
    ]
  },
  {
    "id": "HU0557",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "MATEMATIKA",
    "taboo": [
      "szám",
      "egyenlet",
      "iskola",
      "óra",
      "tanár"
    ]
  },
  {
    "id": "HU0558",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "TÖRTÉNELEMÓRA",
    "taboo": [
      "múlt",
      "iskola",
      "tanár",
      "évszám",
      "tankönyv"
    ]
  },
  {
    "id": "HU0559",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "ÚJÉV",
    "taboo": [
      "január",
      "fogadalom",
      "szilveszter",
      "pezsgő",
      "január elseje"
    ]
  },
  {
    "id": "HU0560",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "FARSANG",
    "taboo": [
      "jelmez",
      "álarc",
      "bál",
      "tél",
      "fánk"
    ]
  },
  {
    "id": "HU0561",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "HALLOWEEN",
    "taboo": [
      "tök",
      "jelmez",
      "horror",
      "október",
      "csoki"
    ]
  },
  {
    "id": "HU0562",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "ANYÁK NAPJA",
    "taboo": [
      "anya",
      "virág",
      "május",
      "gyerek",
      "ünnep"
    ]
  },
  {
    "id": "HU0563",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "APÁK NAPJA",
    "taboo": [
      "apa",
      "június",
      "ajándék",
      "család",
      "ünnep"
    ]
  },
  {
    "id": "HU0564",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "NŐNAP",
    "taboo": [
      "március",
      "virág",
      "nő",
      "ajándék",
      "köszöntés"
    ]
  },
  {
    "id": "HU0565",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "VALENTIN-NAP",
    "taboo": [
      "szerelem",
      "szív",
      "február",
      "pár",
      "rózsa"
    ]
  },
  {
    "id": "HU0566",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "MÁRCIUS 15.",
    "taboo": [
      "Petőfi",
      "1848",
      "forradalom",
      "kokárda",
      "ünnep"
    ]
  },
  {
    "id": "HU0567",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "AUGUSZTUS 20.",
    "taboo": [
      "Szent István",
      "tűzijáték",
      "kenyér",
      "államalapítás",
      "ünnep"
    ]
  },
  {
    "id": "HU0568",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "OKTÓBER 23.",
    "taboo": [
      "1956",
      "forradalom",
      "Budapest",
      "ünnep",
      "zászló"
    ]
  },
  {
    "id": "HU0569",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "NÉVNAP",
    "taboo": [
      "név",
      "virág",
      "köszöntés",
      "naptár",
      "ünnep"
    ]
  },
  {
    "id": "HU0570",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "ESKÜVŐ",
    "taboo": [
      "menyasszony",
      "vőlegény",
      "gyűrű",
      "lakodalom",
      "házasság"
    ]
  },
  {
    "id": "HU0571",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "LAKODALOM",
    "taboo": [
      "esküvő",
      "tánc",
      "menyasszony",
      "vőlegény",
      "mulatság"
    ]
  },
  {
    "id": "HU0572",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "LEÁNYBÚCSÚ",
    "taboo": [
      "menyasszony",
      "barátnők",
      "esküvő",
      "buli",
      "utolsó"
    ]
  },
  {
    "id": "HU0573",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "SZÜRET",
    "taboo": [
      "szőlő",
      "bor",
      "ősz",
      "must",
      "prés"
    ]
  },
  {
    "id": "HU0574",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "OKTÓBERFESZT",
    "taboo": [
      "sör",
      "München",
      "német",
      "fesztivál",
      "október"
    ]
  },
  {
    "id": "HU0575",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "KÍNAI ÚJÉV",
    "taboo": [
      "sárkány",
      "piros",
      "Kína",
      "holdév",
      "ünnep"
    ]
  },
  {
    "id": "HU0576",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "DIWALI",
    "taboo": [
      "India",
      "fény",
      "lámpás",
      "ünnep",
      "hindu"
    ]
  },
  {
    "id": "HU0577",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "RAMADÁN",
    "taboo": [
      "böjt",
      "iszlám",
      "nap",
      "mecset",
      "ünnep"
    ]
  },
  {
    "id": "HU0578",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "HANUKKA",
    "taboo": [
      "zsidó",
      "gyertya",
      "menóra",
      "ünnep",
      "nyolc"
    ]
  },
  {
    "id": "HU0579",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "ADVENT",
    "taboo": [
      "karácsony",
      "gyertya",
      "koszorú",
      "december",
      "várakozás"
    ]
  },
  {
    "id": "HU0580",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "PÜNKÖSD",
    "taboo": [
      "kereszténység",
      "tavasz",
      "ünnep",
      "Szentlélek",
      "húsvét"
    ]
  },
  {
    "id": "HU0581",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "MINDENSZENTEK",
    "taboo": [
      "november",
      "temető",
      "gyertya",
      "halottak",
      "koszorú"
    ]
  },
  {
    "id": "HU0582",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "DC",
    "taboo": [
      "Batman",
      "Superman",
      "képregény",
      "hős",
      "Warner"
    ]
  },
  {
    "id": "HU0583",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "PIKACHU",
    "taboo": [
      "Pokémon",
      "sárga",
      "villám",
      "Ash",
      "elektromos"
    ]
  },
  {
    "id": "HU0584",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "SUPER MARIO",
    "taboo": [
      "Nintendo",
      "Luigi",
      "gomba",
      "ugrás",
      "játék"
    ]
  },
  {
    "id": "HU0585",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "MINIONOK",
    "taboo": [
      "sárga",
      "Gru",
      "banán",
      "rajzfilm",
      "overál"
    ]
  },
  {
    "id": "HU0586",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "GRU",
    "taboo": [
      "Minion",
      "gonosz",
      "hold",
      "rajzfilm",
      "Despicable"
    ]
  },
  {
    "id": "HU0587",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "SHREK",
    "taboo": [
      "ogre",
      "Fiona",
      "szamár",
      "mocsár",
      "mese"
    ]
  },
  {
    "id": "HU0588",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "MINNIE EGÉR",
    "taboo": [
      "Disney",
      "Mickey",
      "egér",
      "piros",
      "rajzfilm"
    ]
  },
  {
    "id": "HU0589",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "HERMIONE",
    "taboo": [
      "Harry",
      "Ron",
      "Hogwarts",
      "varázslat",
      "Granger"
    ]
  },
  {
    "id": "HU0590",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "GOLLAM",
    "taboo": [
      "gyűrű",
      "Frodó",
      "hobbit",
      "Mordor",
      "Smeagol"
    ]
  },
  {
    "id": "HU0591",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "YODA",
    "taboo": [
      "Jedi",
      "Star Wars",
      "zöld",
      "Erő",
      "mester"
    ]
  },
  {
    "id": "HU0592",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "DARTH VADER",
    "taboo": [
      "Star Wars",
      "Luke",
      "Jedi",
      "sisak",
      "Sith"
    ]
  },
  {
    "id": "HU0593",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "IRON MAN",
    "taboo": [
      "Tony Stark",
      "Marvel",
      "páncél",
      "Avengers",
      "robot"
    ]
  },
  {
    "id": "HU0594",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "THOR",
    "taboo": [
      "Marvel",
      "kalapács",
      "Asgard",
      "villám",
      "Avengers"
    ]
  },
  {
    "id": "HU0595",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "HULK",
    "taboo": [
      "zöld",
      "Bruce Banner",
      "Marvel",
      "erős",
      "Avengers"
    ]
  },
  {
    "id": "HU0596",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "SPIDER-MAN",
    "taboo": [
      "Pók",
      "Peter Parker",
      "Marvel",
      "háló",
      "New York"
    ]
  },
  {
    "id": "HU0597",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "KEN",
    "taboo": [
      "Barbie",
      "baba",
      "rózsaszín",
      "férfi",
      "Mattel"
    ]
  },
  {
    "id": "HU0598",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "ELSA",
    "taboo": [
      "Jégvarázs",
      "Anna",
      "jég",
      "Disney",
      "királynő"
    ]
  },
  {
    "id": "HU0599",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "MICKEY MOUSE",
    "taboo": [
      "Disney",
      "egér",
      "Minnie",
      "rajzfilm",
      "fül"
    ]
  },
  {
    "id": "HU0600",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "LEGO",
    "taboo": [
      "kocka",
      "építés",
      "játék",
      "műanyag",
      "Dánia"
    ]
  },
  {
    "id": "HU0601",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "SAKK",
    "taboo": [
      "király",
      "bábuk",
      "tábla",
      "matt",
      "kocka"
    ]
  },
  {
    "id": "HU0602",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "MALOM",
    "taboo": [
      "tábla",
      "bábuk",
      "három",
      "játék",
      "stratégia"
    ]
  },
  {
    "id": "HU0603",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "AMŐBA",
    "taboo": [
      "XO",
      "négyzet",
      "kör",
      "játék",
      "papír"
    ]
  },
  {
    "id": "HU0604",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "MONOPOLY",
    "taboo": [
      "pénz",
      "ingatlan",
      "bábú",
      "kocka",
      "bank"
    ]
  },
  {
    "id": "HU0605",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "CLUEDO",
    "taboo": [
      "gyilkosság",
      "nyomozás",
      "kastély",
      "kártya",
      "ki"
    ]
  },
  {
    "id": "HU0606",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "CATAN",
    "taboo": [
      "telepes",
      "nyersanyag",
      "sziget",
      "kocka",
      "kereskedelem"
    ]
  },
  {
    "id": "HU0607",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "CARCASSONNE",
    "taboo": [
      "város",
      "lapka",
      "kolostor",
      "francia",
      "társasjáték"
    ]
  },
  {
    "id": "HU0608",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "AZUL",
    "taboo": [
      "csempe",
      "kék",
      "mintázat",
      "társasjáték",
      "portugál"
    ]
  },
  {
    "id": "HU0609",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "SPLENDOR",
    "taboo": [
      "drágakő",
      "kártya",
      "nemes",
      "pont",
      "társasjáték"
    ]
  },
  {
    "id": "HU0610",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "TENSION",
    "taboo": [
      "kategória",
      "lista",
      "tipp",
      "csapat",
      "társasjáték"
    ]
  },
  {
    "id": "HU0611",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "DECRYPTO",
    "taboo": [
      "kód",
      "csapat",
      "szám",
      "kulcs",
      "kártya"
    ]
  },
  {
    "id": "HU0612",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "HITSTER",
    "taboo": [
      "zene",
      "év",
      "kártya",
      "dal",
      "idővonal"
    ]
  },
  {
    "id": "HU0613",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "TABU",
    "taboo": [
      "tiltott",
      "szó",
      "csapat",
      "kártya",
      "magyarázás"
    ]
  },
  {
    "id": "HU0614",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "ACTIVITY",
    "taboo": [
      "rajzolás",
      "mutogatás",
      "magyarázás",
      "csapat",
      "társasjáték"
    ]
  },
  {
    "id": "HU0615",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "DIXIT",
    "taboo": [
      "kép",
      "kártya",
      "mesélés",
      "pont",
      "társasjáték"
    ]
  },
  {
    "id": "HU0616",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "DOBBLE",
    "taboo": [
      "szimbólum",
      "kártya",
      "azonos",
      "gyorsaság",
      "játék"
    ]
  },
  {
    "id": "HU0617",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "UNO",
    "taboo": [
      "kártya",
      "szín",
      "szám",
      "húzás",
      "Mattel"
    ]
  },
  {
    "id": "HU0618",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "JENGA",
    "taboo": [
      "torony",
      "fa",
      "építés",
      "kocka",
      "húzás"
    ]
  },
  {
    "id": "HU0619",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "RIZIKÓ",
    "taboo": [
      "háború",
      "térkép",
      "hadsereg",
      "kocka",
      "terület"
    ]
  },
  {
    "id": "HU0620",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "CLASH ROYALE",
    "taboo": [
      "mobil",
      "kártya",
      "torony",
      "Supercell",
      "játék"
    ]
  },
  {
    "id": "HU0621",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "EA FC",
    "taboo": [
      "foci",
      "FIFA",
      "Ultimate Team",
      "EA",
      "játék"
    ]
  },
  {
    "id": "HU0622",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "THE SIMS",
    "taboo": [
      "ember",
      "ház",
      "EA",
      "élet",
      "szimuláció"
    ]
  },
  {
    "id": "HU0623",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "SIMS 2",
    "taboo": [
      "EA",
      "ház",
      "simek",
      "élet",
      "játék"
    ]
  },
  {
    "id": "HU0624",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "POKER",
    "taboo": [
      "kártya",
      "zseton",
      "póker",
      "ász",
      "blöff"
    ]
  },
  {
    "id": "HU0625",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "BLACKJACK",
    "taboo": [
      "21",
      "kártya",
      "kaszinó",
      "osztó",
      "ász"
    ]
  },
  {
    "id": "HU0626",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "KIRAKÓS",
    "taboo": [
      "darab",
      "kép",
      "összerakás",
      "puzzle",
      "játék"
    ]
  },
  {
    "id": "HU0627",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "SUDOKU",
    "taboo": [
      "szám",
      "9",
      "rács",
      "logika",
      "rejtvény"
    ]
  },
  {
    "id": "HU0628",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "VILLAMOS",
    "taboo": [
      "sín",
      "Budapest",
      "megálló",
      "BKV",
      "áram"
    ]
  },
  {
    "id": "HU0629",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "TROLIBUSZ",
    "taboo": [
      "áram",
      "vezeték",
      "Budapest",
      "busz",
      "BKV"
    ]
  },
  {
    "id": "HU0630",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "HAJÓ",
    "taboo": [
      "víz",
      "kikötő",
      "kapitány",
      "tenger",
      "utazás"
    ]
  },
  {
    "id": "HU0631",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "KOMP",
    "taboo": [
      "hajó",
      "folyó",
      "autó",
      "átkelés",
      "víz"
    ]
  },
  {
    "id": "HU0632",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "MOTOR",
    "taboo": [
      "két kerék",
      "sisak",
      "benzin",
      "jármű",
      "motoros"
    ]
  },
  {
    "id": "HU0633",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "ELEKTROMOS ROLLER",
    "taboo": [
      "roller",
      "akku",
      "Budapest",
      "két kerék",
      "közlekedés"
    ]
  },
  {
    "id": "HU0634",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "AUTÓ",
    "taboo": [
      "négy kerék",
      "motor",
      "vezetés",
      "út",
      "jármű"
    ]
  },
  {
    "id": "HU0635",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "TEHERAUTÓ",
    "taboo": [
      "rakomány",
      "sofőr",
      "fuvar",
      "kamion",
      "jármű"
    ]
  },
  {
    "id": "HU0636",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "KAMION",
    "taboo": [
      "teher",
      "autópálya",
      "sofőr",
      "pótkocsi",
      "fuvar"
    ]
  },
  {
    "id": "HU0637",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "MENTŐ",
    "taboo": [
      "kórház",
      "sziréna",
      "beteg",
      "orvos",
      "autó"
    ]
  },
  {
    "id": "HU0638",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "TŰZOLTÓAUTÓ",
    "taboo": [
      "tűz",
      "sziréna",
      "tűzoltó",
      "piros",
      "létrák"
    ]
  },
  {
    "id": "HU0639",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "RENDŐRAUTÓ",
    "taboo": [
      "rendőr",
      "sziréna",
      "kék",
      "jármű",
      "igazoltatás"
    ]
  },
  {
    "id": "HU0640",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "KRESZ",
    "taboo": [
      "közlekedés",
      "szabály",
      "tábla",
      "vizsga",
      "vezetés"
    ]
  },
  {
    "id": "HU0641",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "KÖZLEKEDÉSI LÁMPA",
    "taboo": [
      "piros",
      "zöld",
      "sárga",
      "út",
      "kereszteződés"
    ]
  },
  {
    "id": "HU0642",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "ZEBRA",
    "taboo": [
      "gyalogos",
      "út",
      "fehér",
      "átkelés",
      "tábla"
    ]
  },
  {
    "id": "HU0643",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "PARKOLÓ",
    "taboo": [
      "autó",
      "hely",
      "fizetés",
      "parkolás",
      "tábla"
    ]
  },
  {
    "id": "HU0644",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "BENZINKÚT",
    "taboo": [
      "benzin",
      "tankolás",
      "autó",
      "kút",
      "üzemanyag"
    ]
  },
  {
    "id": "HU0645",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "BESZÁLLÓKÁRTYA",
    "taboo": [
      "repülő",
      "kapu",
      "ülés",
      "utazás",
      "QR-kód"
    ]
  },
  {
    "id": "HU0646",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "FORGALMI DUGÓ",
    "taboo": [
      "autó",
      "út",
      "várakozás",
      "közlekedés",
      "város"
    ]
  },
  {
    "id": "HU0647",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "KARÁCSONYI VONAT",
    "taboo": [
      "vonat",
      "ünnep",
      "állomás",
      "utazás",
      "december"
    ]
  },
  {
    "id": "HU0648",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "FOTEL",
    "taboo": [
      "ülés",
      "nappali",
      "szék",
      "pihenés",
      "bútor"
    ]
  },
  {
    "id": "HU0649",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "MATRAC",
    "taboo": [
      "ágy",
      "alvás",
      "hab",
      "kemény",
      "párna"
    ]
  },
  {
    "id": "HU0650",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "PÁRNA",
    "taboo": [
      "ágy",
      "alvás",
      "fej",
      "toll",
      "huzat"
    ]
  },
  {
    "id": "HU0651",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "TAKARÓ",
    "taboo": [
      "ágy",
      "meleg",
      "alvás",
      "textil",
      "tél"
    ]
  },
  {
    "id": "HU0652",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "CSILLÁR",
    "taboo": [
      "mennyezet",
      "fény",
      "lámpa",
      "szoba",
      "izzó"
    ]
  },
  {
    "id": "HU0653",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "TÉVÉ",
    "taboo": [
      "képernyő",
      "film",
      "távkapcsoló",
      "csatorna",
      "nappali"
    ]
  },
  {
    "id": "HU0654",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "HANGFAL",
    "taboo": [
      "zene",
      "hang",
      "sztereó",
      "erősítő",
      "Bluetooth"
    ]
  },
  {
    "id": "HU0655",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "HŰTŐ",
    "taboo": [
      "konyha",
      "hideg",
      "étel",
      "ajtó",
      "fagyasztó"
    ]
  },
  {
    "id": "HU0656",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "SÜTŐ",
    "taboo": [
      "konyha",
      "meleg",
      "sütés",
      "pizza",
      "tűzhely"
    ]
  },
  {
    "id": "HU0657",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "TŰZHELY",
    "taboo": [
      "konyha",
      "főzés",
      "gáz",
      "edény",
      "sütő"
    ]
  },
  {
    "id": "HU0658",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "KÁVÉFŐZŐ",
    "taboo": [
      "kávé",
      "gép",
      "reggel",
      "csésze",
      "víz"
    ]
  },
  {
    "id": "HU0659",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "VÍZFORRALÓ",
    "taboo": [
      "víz",
      "tea",
      "konyha",
      "forralás",
      "elektromos"
    ]
  },
  {
    "id": "HU0660",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "KENYÉRPIRÍTÓ",
    "taboo": [
      "kenyér",
      "pirítás",
      "reggeli",
      "konyha",
      "gép"
    ]
  },
  {
    "id": "HU0661",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "BLENDER",
    "taboo": [
      "turmix",
      "gyümölcs",
      "konyha",
      "pengék",
      "ital"
    ]
  },
  {
    "id": "HU0662",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "MOSDÓ",
    "taboo": [
      "fürdő",
      "víz",
      "csap",
      "kézmosás",
      "tükör"
    ]
  },
  {
    "id": "HU0663",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "WC",
    "taboo": [
      "fürdő",
      "toalett",
      "víz",
      "papír",
      "ülőke"
    ]
  },
  {
    "id": "HU0664",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "FÜRDŐKÁD",
    "taboo": [
      "víz",
      "fürdés",
      "fürdőszoba",
      "hab",
      "zuhany"
    ]
  },
  {
    "id": "HU0665",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "MOSÓSZER",
    "taboo": [
      "mosás",
      "ruha",
      "gép",
      "folyadék",
      "tisztítás"
    ]
  },
  {
    "id": "HU0666",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "ÖBLÍTŐ",
    "taboo": [
      "ruha",
      "mosás",
      "illat",
      "mosógép",
      "folyadék"
    ]
  },
  {
    "id": "HU0667",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "SZEKRÉNY",
    "taboo": [
      "ruha",
      "ajtó",
      "polc",
      "bútor",
      "tárolás"
    ]
  },
  {
    "id": "HU0668",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "SZŐNYEG",
    "taboo": [
      "padló",
      "textil",
      "nappali",
      "minta",
      "takarítás"
    ]
  },
  {
    "id": "HU0669",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "DISZKÓ",
    "taboo": [
      "tánc",
      "zene",
      "fény",
      "buli",
      "klub"
    ]
  },
  {
    "id": "HU0670",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "BULI",
    "taboo": [
      "barátok",
      "zene",
      "tánc",
      "ital",
      "éjszaka"
    ]
  },
  {
    "id": "HU0671",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "HÁZIBULI",
    "taboo": [
      "lakás",
      "barátok",
      "zene",
      "buli",
      "szomszéd"
    ]
  },
  {
    "id": "HU0672",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "BÁR",
    "taboo": [
      "ital",
      "pult",
      "koktél",
      "zene",
      "éjszaka"
    ]
  },
  {
    "id": "HU0673",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "KOKTÉL",
    "taboo": [
      "ital",
      "pohár",
      "alkohol",
      "keverés",
      "szívószál"
    ]
  },
  {
    "id": "HU0674",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "MOJITO",
    "taboo": [
      "rum",
      "menta",
      "lime",
      "koktél",
      "cukor"
    ]
  },
  {
    "id": "HU0675",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "MARGARITA",
    "taboo": [
      "tequila",
      "lime",
      "koktél",
      "só",
      "pohár"
    ]
  },
  {
    "id": "HU0676",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "GIN TONIC",
    "taboo": [
      "gin",
      "tonik",
      "citrom",
      "jég",
      "ital"
    ]
  },
  {
    "id": "HU0677",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "SÖR",
    "taboo": [
      "maláta",
      "komló",
      "pohár",
      "csapolt",
      "ital"
    ]
  },
  {
    "id": "HU0678",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "BOR",
    "taboo": [
      "szőlő",
      "vörös",
      "fehér",
      "palack",
      "ital"
    ]
  },
  {
    "id": "HU0679",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "PEZSGŐ",
    "taboo": [
      "buborék",
      "szilveszter",
      "pohár",
      "palack",
      "bor"
    ]
  },
  {
    "id": "HU0680",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "KARAOKE GÉP",
    "taboo": [
      "mikrofon",
      "ének",
      "zene",
      "képernyő",
      "buli"
    ]
  },
  {
    "id": "HU0681",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "MIKROFON",
    "taboo": [
      "ének",
      "hang",
      "színpad",
      "beszéd",
      "kábel"
    ]
  },
  {
    "id": "HU0682",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "TÁRSASJÁTÉK",
    "taboo": [
      "kártya",
      "kocka",
      "csapat",
      "játék",
      "asztal"
    ]
  },
  {
    "id": "HU0683",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "KVÍZ",
    "taboo": [
      "kérdés",
      "válasz",
      "pont",
      "csapat",
      "játék"
    ]
  },
  {
    "id": "HU0684",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "IGAZ VAGY HAMIS",
    "taboo": [
      "kérdés",
      "válasz",
      "játék",
      "igen",
      "nem"
    ]
  },
  {
    "id": "HU0685",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "TOMBOLA",
    "taboo": [
      "sorsolás",
      "szám",
      "nyeremény",
      "jegy",
      "buli"
    ]
  },
  {
    "id": "HU0686",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "LUFI",
    "taboo": [
      "buli",
      "felfújás",
      "gumi",
      "dekoráció",
      "levegő"
    ]
  },
  {
    "id": "HU0687",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "KONFETTI",
    "taboo": [
      "papír",
      "buli",
      "színes",
      "dobás",
      "ünnep"
    ]
  },
  {
    "id": "HU0688",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "DEKORÁCIÓ",
    "taboo": [
      "buli",
      "dísz",
      "lufi",
      "asztal",
      "ünnep"
    ]
  },
  {
    "id": "HU0689",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "MEGLEPETÉSPARTI",
    "taboo": [
      "születésnap",
      "titok",
      "barátok",
      "buli",
      "meglepetés"
    ]
  },
  {
    "id": "HU0690",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "PIHENŐSAROK",
    "taboo": [
      "kanapé",
      "buli",
      "ülés",
      "asztal",
      "barátok"
    ]
  },
  {
    "id": "HU0691",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "AFTERPARTY",
    "taboo": [
      "buli",
      "éjszaka",
      "folytatás",
      "klub",
      "tánc"
    ]
  },
  {
    "id": "HU0692",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "ÉBRESZTŐ",
    "taboo": [
      "reggel",
      "csörgés",
      "óra",
      "felkelés",
      "idő"
    ]
  },
  {
    "id": "HU0693",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "ZSEBKENDŐ",
    "taboo": [
      "papír",
      "orr",
      "táska",
      "doboz",
      "törlés"
    ]
  },
  {
    "id": "HU0694",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "KULCSTARTÓ",
    "taboo": [
      "kulcs",
      "zseb",
      "ajtó",
      "karika",
      "fém"
    ]
  },
  {
    "id": "HU0695",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "BEVÁSÁRLÓKOCSI",
    "taboo": [
      "bolt",
      "kosár",
      "kerék",
      "áruház",
      "vásárlás"
    ]
  },
  {
    "id": "HU0696",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "SZÁMLA",
    "taboo": [
      "fizetés",
      "pénz",
      "papír",
      "bolt",
      "összeg"
    ]
  },
  {
    "id": "HU0697",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "FUTÁR",
    "taboo": [
      "csomag",
      "kiszállítás",
      "bicikli",
      "cím",
      "webshop"
    ]
  },
  {
    "id": "HU0698",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "HOT DOG",
    "taboo": [
      "virsli",
      "kifli",
      "mustár",
      "kolbász",
      "büfé"
    ]
  },
  {
    "id": "HU0699",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "GYROS",
    "taboo": [
      "pita",
      "hús",
      "tzatziki",
      "görög",
      "kebab"
    ]
  },
  {
    "id": "HU0700",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "BURRITO",
    "taboo": [
      "tortilla",
      "mexikói",
      "bab",
      "hús",
      "tekercs"
    ]
  },
  {
    "id": "HU0701",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "WAFFEL",
    "taboo": [
      "gofri",
      "tészta",
      "édes",
      "sütő",
      "reggeli"
    ]
  },
  {
    "id": "HU0702",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "CHEESECAKE",
    "taboo": [
      "sajt",
      "torta",
      "krém",
      "desszert",
      "keksz"
    ]
  },
  {
    "id": "HU0703",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "MUFFIN",
    "taboo": [
      "sütemény",
      "csoki",
      "papír",
      "sütés",
      "desszert"
    ]
  },
  {
    "id": "HU0704",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "TERMINATOR",
    "taboo": [
      "robot",
      "Schwarzenegger",
      "Skynet",
      "időutazás",
      "film"
    ]
  },
  {
    "id": "HU0705",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "ALIEN",
    "taboo": [
      "űr",
      "xenomorph",
      "Ripley",
      "horror",
      "űrhajó"
    ]
  },
  {
    "id": "HU0706",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "FELSZÁLL A KÖD",
    "taboo": [
      "film",
      "dráma",
      "mozi",
      "színész",
      "történet"
    ]
  },
  {
    "id": "HU0707",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "GREASE",
    "taboo": [
      "John Travolta",
      "Olivia Newton-John",
      "musical",
      "iskola",
      "tánc"
    ]
  },
  {
    "id": "HU0708",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "TOP GUN",
    "taboo": [
      "pilóta",
      "repülő",
      "Tom Cruise",
      "vadász",
      "film"
    ]
  },
  {
    "id": "HU0709",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "DIE HARD",
    "taboo": [
      "Bruce Willis",
      "Nakatomi",
      "terrorista",
      "karácsony",
      "akció"
    ]
  },
  {
    "id": "HU0710",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "FAMILY GUY",
    "taboo": [
      "Peter",
      "Stewie",
      "Griffin",
      "rajzfilm",
      "Quahog"
    ]
  },
  {
    "id": "HU0711",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "SOUTH PARK",
    "taboo": [
      "Cartman",
      "Kyle",
      "Stan",
      "Colorado",
      "rajzfilm"
    ]
  },
  {
    "id": "HU0712",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "PRISON BREAK",
    "taboo": [
      "börtön",
      "Michael",
      "Lincoln",
      "szökés",
      "sorozat"
    ]
  },
  {
    "id": "HU0713",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "SUITS",
    "taboo": [
      "ügyvéd",
      "Harvey",
      "Mike",
      "New York",
      "jogi"
    ]
  },
  {
    "id": "HU0714",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "FRIENDS",
    "taboo": [
      "Rachel",
      "Ross",
      "Monica",
      "Chandler",
      "sitcom"
    ]
  },
  {
    "id": "HU0715",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "HOW I MET YOUR MOTHER",
    "taboo": [
      "Ted",
      "Robin",
      "Barney",
      "New York",
      "sitcom"
    ]
  },
  {
    "id": "HU0716",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "WHITNEY HOUSTON",
    "taboo": [
      "énekesnő",
      "I Will Always Love You",
      "USA",
      "hang",
      "pop"
    ]
  },
  {
    "id": "HU0717",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "MAROON 5",
    "taboo": [
      "Adam Levine",
      "pop",
      "zenekar",
      "Moves Like Jagger",
      "USA"
    ]
  },
  {
    "id": "HU0718",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "GREEN DAY",
    "taboo": [
      "punk",
      "rock",
      "Billie Joe",
      "basket case",
      "zenekar"
    ]
  },
  {
    "id": "HU0719",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "RED HOT CHILI PEPPERS",
    "taboo": [
      "rock",
      "Flea",
      "Anthony Kiedis",
      "California",
      "zenekar"
    ]
  },
  {
    "id": "HU0720",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "THE POLICE",
    "taboo": [
      "Sting",
      "rock",
      "Every Breath You Take",
      "brit",
      "zenekar"
    ]
  },
  {
    "id": "HU0721",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "BON JOVI",
    "taboo": [
      "rock",
      "New Jersey",
      "Livin' on a Prayer",
      "Jon Bon Jovi",
      "zenekar"
    ]
  },
  {
    "id": "HU0722",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "PINK FLOYD",
    "taboo": [
      "rock",
      "The Wall",
      "David Gilmour",
      "pszichedelikus",
      "zenekar"
    ]
  },
  {
    "id": "HU0723",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "GUNS N' ROSES",
    "taboo": [
      "rock",
      "Axl Rose",
      "Slash",
      "gitár",
      "zenekar"
    ]
  },
  {
    "id": "HU0724",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "ÖTTUSA",
    "taboo": [
      "úszás",
      "vívás",
      "lovaglás",
      "futás",
      "lövészet"
    ]
  },
  {
    "id": "HU0725",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "KALAPÁCSVETÉS",
    "taboo": [
      "atlétika",
      "dobás",
      "kalapács",
      "kör",
      "olimpia"
    ]
  },
  {
    "id": "HU0726",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "GERELYHAJÍTÁS",
    "taboo": [
      "atlétika",
      "gerely",
      "dobás",
      "táv",
      "olimpia"
    ]
  },
  {
    "id": "HU0727",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "TÁVOLUGRÁS",
    "taboo": [
      "atlétika",
      "homok",
      "ugrás",
      "nekifutás",
      "verseny"
    ]
  },
  {
    "id": "HU0728",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "MAGASUGRÁS",
    "taboo": [
      "léc",
      "ugrás",
      "atlétika",
      "magasság",
      "verseny"
    ]
  },
  {
    "id": "HU0729",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "SPRINT",
    "taboo": [
      "futás",
      "100 méter",
      "gyors",
      "atlétika",
      "verseny"
    ]
  },
  {
    "id": "HU0730",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "BALATONFÜRED",
    "taboo": [
      "Balaton",
      "város",
      "Tagore",
      "Anna-bál",
      "Veszprém"
    ]
  },
  {
    "id": "HU0731",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SIÓFOK",
    "taboo": [
      "Balaton",
      "strand",
      "város",
      "nyár",
      "Somogy"
    ]
  },
  {
    "id": "HU0732",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "GYŐR",
    "taboo": [
      "Rába",
      "város",
      "Audi",
      "Dunántúl",
      "foci"
    ]
  },
  {
    "id": "HU0733",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "MISKOLC",
    "taboo": [
      "Borsod",
      "város",
      "Diósgyőr",
      "barlangfürdő",
      "Észak"
    ]
  },
  {
    "id": "HU0734",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "NYÍREGYHÁZA",
    "taboo": [
      "Szabolcs",
      "város",
      "állatkert",
      "Sóstó",
      "Nyírség"
    ]
  },
  {
    "id": "HU0735",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "KECSKEMÉT",
    "taboo": [
      "Bács",
      "város",
      "barack",
      "Mercedes",
      "Alföld"
    ]
  },
  {
    "id": "HU0736",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SZÉKESFEHÉRVÁR",
    "taboo": [
      "Fejér",
      "király",
      "város",
      "basilica",
      "Dunántúl"
    ]
  },
  {
    "id": "HU0737",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "ESZTERGOM",
    "taboo": [
      "Bazilika",
      "Duna",
      "város",
      "Szent István",
      "Komárom"
    ]
  },
  {
    "id": "HU0738",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "RÓMA",
    "taboo": [
      "Olaszország",
      "Colosseum",
      "Vatikán",
      "főváros",
      "ókor"
    ]
  },
  {
    "id": "HU0739",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "BERLIN",
    "taboo": [
      "Németország",
      "fal",
      "főváros",
      "Brandenburg",
      "város"
    ]
  },
  {
    "id": "HU0740",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "TOKIÓ",
    "taboo": [
      "Japán",
      "főváros",
      "anime",
      "Ázsia",
      "Shibuya"
    ]
  },
  {
    "id": "HU0741",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "DUBAI",
    "taboo": [
      "Egyesült Arab Emírségek",
      "felhőkarcoló",
      "Burj Khalifa",
      "sivatag",
      "luxus"
    ]
  },
  {
    "id": "HU0742",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "REYKJAVÍK",
    "taboo": [
      "Izland",
      "főváros",
      "gejzír",
      "vulkán",
      "északi"
    ]
  },
  {
    "id": "HU0743",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "HUNYADI JÁNOS",
    "taboo": [
      "Hunyadi",
      "Nándorfehérvár",
      "török",
      "kormányzó",
      "harcos"
    ]
  },
  {
    "id": "HU0744",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "NÁNDORFEHÉRVÁRI DIADAL",
    "taboo": [
      "Hunyadi",
      "1456",
      "török",
      "harangszó",
      "győzelem"
    ]
  },
  {
    "id": "HU0745",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "MARCUS AURELIUS",
    "taboo": [
      "Róma",
      "császár",
      "filozófus",
      "sztoikus",
      "ókor"
    ]
  },
  {
    "id": "HU0746",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "JÚLIUS CAESAR",
    "taboo": [
      "Róma",
      "császár",
      "Brutus",
      "Rubicon",
      "ókor"
    ]
  },
  {
    "id": "HU0747",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "NAGY SÁNDOR",
    "taboo": [
      "Makedónia",
      "hódító",
      "Görögország",
      "Perzsia",
      "ókor"
    ]
  },
  {
    "id": "HU0748",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "CLEOPATRA",
    "taboo": [
      "Egyiptom",
      "fáraó",
      "Caesar",
      "Antonius",
      "Nílus"
    ]
  },
  {
    "id": "HU0749",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "GENGISZ KÁN",
    "taboo": [
      "mongol",
      "hódító",
      "Ázsia",
      "birodalom",
      "lovas"
    ]
  },
  {
    "id": "HU0750",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "KOLUMBUSZ",
    "taboo": [
      "Amerika",
      "hajó",
      "1492",
      "felfedezés",
      "Európa"
    ]
  },
  {
    "id": "HU0751",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "DNS-VIZSGÁLAT",
    "taboo": [
      "genetika",
      "minta",
      "labor",
      "öröklődés",
      "teszt"
    ]
  },
  {
    "id": "HU0752",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "VAKCINA",
    "taboo": [
      "oltás",
      "immunrendszer",
      "injekció",
      "vírus",
      "védelem"
    ]
  },
  {
    "id": "HU0753",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "NAPFOGYATKOZÁS",
    "taboo": [
      "Nap",
      "Hold",
      "árnyék",
      "égbolt",
      "fogyatkozás"
    ]
  },
  {
    "id": "HU0754",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "HOLDFOGYATKOZÁS",
    "taboo": [
      "Hold",
      "Föld",
      "árnyék",
      "éjszaka",
      "fogyatkozás"
    ]
  },
  {
    "id": "HU0755",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "FÉNYSEBESSÉG",
    "taboo": [
      "fény",
      "299792",
      "km/s",
      "Einstein",
      "fizika"
    ]
  },
  {
    "id": "HU0756",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "HŐMÉRSÉKLET",
    "taboo": [
      "fok",
      "Celsius",
      "meleg",
      "hideg",
      "mérés"
    ]
  },
  {
    "id": "HU0757",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "NYOMÁS",
    "taboo": [
      "Pascal",
      "erő",
      "felület",
      "fizika",
      "barométer"
    ]
  },
  {
    "id": "HU0758",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "ENERGIA",
    "taboo": [
      "munka",
      "fizika",
      "joule",
      "erő",
      "átalakulás"
    ]
  },
  {
    "id": "HU0759",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "IPHONE",
    "taboo": [
      "Apple",
      "mobil",
      "iOS",
      "Steve Jobs",
      "telefon"
    ]
  },
  {
    "id": "HU0760",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "ANDROID",
    "taboo": [
      "Google",
      "mobil",
      "operációs rendszer",
      "telefon",
      "app"
    ]
  },
  {
    "id": "HU0761",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "MACBOOK",
    "taboo": [
      "Apple",
      "laptop",
      "macOS",
      "Steve Jobs",
      "számítógép"
    ]
  },
  {
    "id": "HU0762",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "WINDOWS",
    "taboo": [
      "Microsoft",
      "PC",
      "operációs rendszer",
      "Bill Gates",
      "asztal"
    ]
  },
  {
    "id": "HU0763",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "GOOGLE MAPS",
    "taboo": [
      "térkép",
      "útvonal",
      "Google",
      "navigáció",
      "telefon"
    ]
  },
  {
    "id": "HU0764",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "WAZE",
    "taboo": [
      "navigáció",
      "út",
      "forgalom",
      "Google",
      "app"
    ]
  },
  {
    "id": "HU0765",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "WHATSAPP",
    "taboo": [
      "üzenet",
      "Meta",
      "telefon",
      "chat",
      "hívás"
    ]
  },
  {
    "id": "HU0766",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "ZOOM",
    "taboo": [
      "videó",
      "meeting",
      "kamera",
      "online",
      "munka"
    ]
  },
  {
    "id": "HU0767",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "FIZETÉSI PAPÍR",
    "taboo": [
      "bér",
      "fizetés",
      "nettó",
      "bruttó",
      "munka"
    ]
  },
  {
    "id": "HU0768",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "MUNKASZERZŐDÉS",
    "taboo": [
      "állás",
      "aláírás",
      "főnök",
      "jog",
      "munka"
    ]
  },
  {
    "id": "HU0769",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "FELADATLISTA",
    "taboo": [
      "teendő",
      "munka",
      "lista",
      "határidő",
      "projekt"
    ]
  },
  {
    "id": "HU0770",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "KÖLTSÉGVETÉS",
    "taboo": [
      "pénz",
      "terv",
      "kiadás",
      "bevétel",
      "cég"
    ]
  },
  {
    "id": "HU0771",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "SZÁMLÁZÁS",
    "taboo": [
      "számla",
      "ügyfél",
      "fizetés",
      "cég",
      "könyvelés"
    ]
  },
  {
    "id": "HU0772",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "KÖNYVELŐ",
    "taboo": [
      "adó",
      "számla",
      "pénz",
      "cég",
      "könyvelés"
    ]
  },
  {
    "id": "HU0773",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "HR",
    "taboo": [
      "munka",
      "ember",
      "állás",
      "toborzás",
      "iroda"
    ]
  },
  {
    "id": "HU0774",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "FIZIKA",
    "taboo": [
      "erő",
      "iskola",
      "óra",
      "kísérlet",
      "tanár"
    ]
  },
  {
    "id": "HU0775",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "KÉMIA",
    "taboo": [
      "labor",
      "molekula",
      "iskola",
      "kísérlet",
      "tanár"
    ]
  },
  {
    "id": "HU0776",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "BIOLÓGIA",
    "taboo": [
      "sejt",
      "növény",
      "állat",
      "iskola",
      "tanár"
    ]
  },
  {
    "id": "HU0777",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "FÖLDRAJZÓRA",
    "taboo": [
      "térkép",
      "ország",
      "iskola",
      "tanár",
      "földgömb"
    ]
  },
  {
    "id": "HU0778",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "IRODALOM",
    "taboo": [
      "könyv",
      "költő",
      "vers",
      "iskola",
      "tanár"
    ]
  },
  {
    "id": "HU0779",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "NYELVTAN",
    "taboo": [
      "ige",
      "főnév",
      "mondat",
      "iskola",
      "magyar"
    ]
  },
  {
    "id": "HU0780",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "ANGOLÓRA",
    "taboo": [
      "English",
      "tanár",
      "szókincs",
      "iskola",
      "nyelv"
    ]
  },
  {
    "id": "HU0781",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "KARÁCSONYFA",
    "taboo": [
      "fenyő",
      "dísz",
      "gömb",
      "karácsony",
      "égősor"
    ]
  },
  {
    "id": "HU0782",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "SZALONCUKOR",
    "taboo": [
      "karácsony",
      "csoki",
      "papír",
      "fenyőfa",
      "édesség"
    ]
  },
  {
    "id": "HU0783",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "LOCsolóVERS",
    "taboo": [
      "húsvét",
      "vers",
      "kölnivíz",
      "fiú",
      "tojás"
    ]
  },
  {
    "id": "HU0784",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "KOKÁRDA",
    "taboo": [
      "március 15",
      "piros",
      "fehér",
      "zöld",
      "forradalom"
    ]
  },
  {
    "id": "HU0785",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "SZÜLETÉSNAPI TORTA",
    "taboo": [
      "gyertya",
      "torta",
      "ünnep",
      "csoki",
      "születésnap"
    ]
  },
  {
    "id": "HU0786",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "AJÁNDÉK",
    "taboo": [
      "csomag",
      "meglepetés",
      "születésnap",
      "karácsony",
      "doboz"
    ]
  },
  {
    "id": "HU0787",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "MEGHÍVÓ",
    "taboo": [
      "esküvő",
      "buli",
      "papír",
      "vendég",
      "ünnep"
    ]
  },
  {
    "id": "HU0788",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "DISNEY",
    "taboo": [
      "Mickey",
      "film",
      "rajzfilm",
      "hercegnő",
      "egér"
    ]
  },
  {
    "id": "HU0789",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "PIXAR",
    "taboo": [
      "animáció",
      "film",
      "Disney",
      "Toy Story",
      "stúdió"
    ]
  },
  {
    "id": "HU0790",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "TOY STORY",
    "taboo": [
      "Woody",
      "Buzz",
      "Pixar",
      "játék",
      "Andy"
    ]
  },
  {
    "id": "HU0791",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "FROZEN",
    "taboo": [
      "Elsa",
      "Anna",
      "jég",
      "Disney",
      "Olaf"
    ]
  },
  {
    "id": "HU0792",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "OLAF",
    "taboo": [
      "Frozen",
      "hóember",
      "Elsa",
      "Anna",
      "Disney"
    ]
  },
  {
    "id": "HU0793",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "BATMOBILE",
    "taboo": [
      "Batman",
      "autó",
      "Gotham",
      "denevér",
      "jármű"
    ]
  },
  {
    "id": "HU0794",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "AVENGERS",
    "taboo": [
      "Marvel",
      "szuperhős",
      "Iron Man",
      "Thor",
      "csapat"
    ]
  },
  {
    "id": "HU0795",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "HOGWARTS",
    "taboo": [
      "Harry Potter",
      "iskola",
      "varázsló",
      "Roxfort",
      "mágia"
    ]
  },
  {
    "id": "HU0796",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "KÁRTYAJÁTÉK",
    "taboo": [
      "lap",
      "pakli",
      "játék",
      "osztás",
      "ász"
    ]
  },
  {
    "id": "HU0797",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "FEKETE PÉTER",
    "taboo": [
      "kártya",
      "pár",
      "játék",
      "lap",
      "gyerek"
    ]
  },
  {
    "id": "HU0798",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "MEMORY",
    "taboo": [
      "pár",
      "kártya",
      "memória",
      "fordítás",
      "játék"
    ]
  },
  {
    "id": "HU0799",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "TWISTER",
    "taboo": [
      "színes",
      "kör",
      "padló",
      "játék",
      "test"
    ]
  },
  {
    "id": "HU0800",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "CARROM",
    "taboo": [
      "bábú",
      "tábla",
      "ütés",
      "indiai",
      "játék"
    ]
  },
  {
    "id": "HU0801",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "PUZZLE",
    "taboo": [
      "darab",
      "kép",
      "kirakás",
      "játék",
      "doboz"
    ]
  },
  {
    "id": "HU0802",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "KÖZLEKEDÉSI TÁBLA",
    "taboo": [
      "út",
      "jelzés",
      "autó",
      "KRESZ",
      "figyelmeztetés"
    ]
  },
  {
    "id": "HU0803",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "STOP TÁBLA",
    "taboo": [
      "piros",
      "megállás",
      "út",
      "KRESZ",
      "tábla"
    ]
  },
  {
    "id": "HU0804",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "SEBESSÉGHATÁR",
    "taboo": [
      "km/h",
      "tábla",
      "autó",
      "KRESZ",
      "gyors"
    ]
  },
  {
    "id": "HU0805",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "AUTÓBUSZ-MEGÁLLÓ",
    "taboo": [
      "busz",
      "tábla",
      "járat",
      "várakozás",
      "utca"
    ]
  },
  {
    "id": "HU0806",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "VONATÁLLOMÁS",
    "taboo": [
      "vonat",
      "peron",
      "sín",
      "jegy",
      "utazás"
    ]
  },
  {
    "id": "HU0807",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "PERON",
    "taboo": [
      "vonat",
      "állomás",
      "sín",
      "utazó",
      "várakozás"
    ]
  },
  {
    "id": "HU0808",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "TAXIÓRA",
    "taboo": [
      "taxi",
      "ár",
      "fuvar",
      "sofőr",
      "pénz"
    ]
  },
  {
    "id": "HU0809",
    "category": "Közlekedés",
    "difficulty": "Könnyű",
    "word": "ÚTLEVÉL",
    "taboo": [
      "repülő",
      "határ",
      "ország",
      "utazás",
      "okmány"
    ]
  },
  {
    "id": "HU0810",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "KONYHA",
    "taboo": [
      "főzés",
      "tűzhely",
      "szekrény",
      "étel",
      "lakás"
    ]
  },
  {
    "id": "HU0811",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "NAPPALI",
    "taboo": [
      "kanapé",
      "TV",
      "szoba",
      "lakás",
      "bútor"
    ]
  },
  {
    "id": "HU0812",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "HÁLÓSZOBA",
    "taboo": [
      "ágy",
      "alvás",
      "szekrény",
      "szoba",
      "párna"
    ]
  },
  {
    "id": "HU0813",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "FÜRDŐSZOBA",
    "taboo": [
      "zuhany",
      "kád",
      "WC",
      "tükör",
      "mosdó"
    ]
  },
  {
    "id": "HU0814",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "ERKÉLY",
    "taboo": [
      "lakás",
      "korlát",
      "kint",
      "virág",
      "ajtó"
    ]
  },
  {
    "id": "HU0815",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "ABLAK",
    "taboo": [
      "üveg",
      "függöny",
      "fal",
      "fény",
      "nyitás"
    ]
  },
  {
    "id": "HU0816",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "AJTÓ",
    "taboo": [
      "kilincs",
      "zár",
      "nyitás",
      "bejárat",
      "szoba"
    ]
  },
  {
    "id": "HU0817",
    "category": "Otthon",
    "difficulty": "Könnyű",
    "word": "KILINCS",
    "taboo": [
      "ajtó",
      "kéz",
      "nyitás",
      "zár",
      "fogás"
    ]
  },
  {
    "id": "HU0818",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "SZILVESZTERI BULI",
    "taboo": [
      "pezsgő",
      "tűzijáték",
      "éjfél",
      "barátok",
      "december"
    ]
  },
  {
    "id": "HU0819",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "KARAOKE BÁR",
    "taboo": [
      "mikrofon",
      "ének",
      "ital",
      "zene",
      "buli"
    ]
  },
  {
    "id": "HU0820",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "DANCE FLOOR",
    "taboo": [
      "tánc",
      "zene",
      "klub",
      "buli",
      "parkett"
    ]
  },
  {
    "id": "HU0821",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "BULIZÓS DJ",
    "taboo": [
      "DJ",
      "zene",
      "pult",
      "tánc",
      "buli"
    ]
  },
  {
    "id": "HU0822",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "PARTI KALAP",
    "taboo": [
      "buli",
      "papír",
      "fej",
      "dekoráció",
      "jelmez"
    ]
  },
  {
    "id": "HU0823",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "CSILLÁMPOR",
    "taboo": [
      "fény",
      "buli",
      "dekoráció",
      "csillogás",
      "smink"
    ]
  },
  {
    "id": "HU0824",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "PARTYFOTÓ",
    "taboo": [
      "fénykép",
      "buli",
      "kamera",
      "barátok",
      "emlék"
    ]
  },
  {
    "id": "HU0825",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "SZAPPAN",
    "taboo": [
      "fürdő",
      "kéz",
      "mosás",
      "hab",
      "illat"
    ]
  },
  {
    "id": "HU0826",
    "category": "Mindennapok",
    "difficulty": "Könnyű",
    "word": "DEZODOR",
    "taboo": [
      "illat",
      "hónalj",
      "spray",
      "test",
      "reggel"
    ]
  },
  {
    "id": "HU0827",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "RISZOTTÓ",
    "taboo": [
      "rizs",
      "olasz",
      "parmezán",
      "krémes",
      "gomba"
    ]
  },
  {
    "id": "HU0828",
    "category": "Ételek",
    "difficulty": "Könnyű",
    "word": "TACOS",
    "taboo": [
      "mexikói",
      "tortilla",
      "hús",
      "salsa",
      "kukorica"
    ]
  },
  {
    "id": "HU0829",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "AVENGERS: ENDGAME",
    "taboo": [
      "Marvel",
      "Thanos",
      "Avengers",
      "idő",
      "film"
    ]
  },
  {
    "id": "HU0830",
    "category": "Filmek",
    "difficulty": "Normál",
    "word": "GREMLINS",
    "taboo": [
      "szörny",
      "karácsony",
      "Gizmo",
      "víz",
      "film"
    ]
  },
  {
    "id": "HU0831",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "SOPRANOS",
    "taboo": [
      "maffia",
      "Tony",
      "New Jersey",
      "HBO",
      "család"
    ]
  },
  {
    "id": "HU0832",
    "category": "Sorozatok",
    "difficulty": "Normál",
    "word": "NAGY KATALIN",
    "taboo": [
      "orosz",
      "cárnő",
      "udvar",
      "sorozat",
      "történelmi"
    ]
  },
  {
    "id": "HU0833",
    "category": "Zene",
    "difficulty": "Normál",
    "word": "DIRE STRAITS",
    "taboo": [
      "rock",
      "Mark Knopfler",
      "gitár",
      "Money for Nothing",
      "zenekar"
    ]
  },
  {
    "id": "HU0834",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "RÖPLABDA",
    "taboo": [
      "háló",
      "labda",
      "ütés",
      "csapat",
      "pálya"
    ]
  },
  {
    "id": "HU0835",
    "category": "Sport",
    "difficulty": "Normál",
    "word": "BOWLING",
    "taboo": [
      "golyó",
      "bábuk",
      "pálya",
      "strike",
      "játék"
    ]
  },
  {
    "id": "HU0836",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "VÉRTES",
    "taboo": [
      "hegység",
      "Dunántúl",
      "túra",
      "erdő",
      "hegy"
    ]
  },
  {
    "id": "HU0837",
    "category": "Magyarország",
    "difficulty": "Normál",
    "word": "SZOLNOK",
    "taboo": [
      "Tisza",
      "város",
      "Jász-Nagykun",
      "híd",
      "Alföld"
    ]
  },
  {
    "id": "HU0838",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "PORTUGÁLIA",
    "taboo": [
      "Lisszabon",
      "Európa",
      "óceán",
      "foci",
      "ország"
    ]
  },
  {
    "id": "HU0839",
    "category": "Földrajz",
    "difficulty": "Normál",
    "word": "SVÁJC",
    "taboo": [
      "Alpok",
      "Zürich",
      "óra",
      "semleges",
      "ország"
    ]
  },
  {
    "id": "HU0840",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "SPÁRTA",
    "taboo": [
      "Görögország",
      "harcos",
      "katona",
      "Leonidász",
      "ókor"
    ]
  },
  {
    "id": "HU0841",
    "category": "Történelem",
    "difficulty": "Nehéz",
    "word": "TRÓJAI HÁBORÚ",
    "taboo": [
      "Trója",
      "görög",
      "faló",
      "Akhilleusz",
      "ókor"
    ]
  },
  {
    "id": "HU0842",
    "category": "Tudomány",
    "difficulty": "Nehéz",
    "word": "TELEPORTÁCIÓ",
    "taboo": [
      "utazás",
      "hely",
      "azonnal",
      "tudomány",
      "sci-fi"
    ]
  },
  {
    "id": "HU0843",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "AIRPODS",
    "taboo": [
      "Apple",
      "fülhallgató",
      "vezeték nélküli",
      "zene",
      "Bluetooth"
    ]
  },
  {
    "id": "HU0844",
    "category": "Technológia",
    "difficulty": "Nehéz",
    "word": "SMARTWATCH",
    "taboo": [
      "óra",
      "telefon",
      "Apple",
      "értesítés",
      "csukló"
    ]
  },
  {
    "id": "HU0845",
    "category": "Munka",
    "difficulty": "Nehéz",
    "word": "SZAKMAI ÖNÉLETRAJZ",
    "taboo": [
      "CV",
      "állás",
      "tapasztalat",
      "jelentkezés",
      "munka"
    ]
  },
  {
    "id": "HU0846",
    "category": "Iskola",
    "difficulty": "Könnyű",
    "word": "DIÁKIGAZOLVÁNY",
    "taboo": [
      "iskola",
      "kártya",
      "diák",
      "igazolás",
      "kedvezmény"
    ]
  },
  {
    "id": "HU0847",
    "category": "Ünnepek",
    "difficulty": "Normál",
    "word": "MÁRTON NAP",
    "taboo": [
      "liba",
      "november",
      "bor",
      "ünnep",
      "Szent Márton"
    ]
  },
  {
    "id": "HU0848",
    "category": "Party",
    "difficulty": "Könnyű",
    "word": "SZÓLJON A ZENE",
    "taboo": [
      "zene",
      "buli",
      "DJ",
      "hangszóró",
      "tánc"
    ]
  },
  {
    "id": "HU0849",
    "category": "Játékok",
    "difficulty": "Normál",
    "word": "KÍGYÓK ÉS LÉTRÁK",
    "taboo": [
      "tábla",
      "kocka",
      "létra",
      "kígyó",
      "játék"
    ]
  },
  {
    "id": "HU0850",
    "category": "Popkultúra",
    "difficulty": "Normál",
    "word": "WEDNESDAY",
    "taboo": [
      "Addams",
      "Netflix",
      "tánc",
      "gót",
      "sorozat"
    ]
  }
];
