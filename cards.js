// Tabu Magyar – eredeti, saját kártyapakli
// A kártyák nem a Hasbro fizikai paklijának másolatai.
const TABU_CARDS = [
  {
    "id": "HU001",
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
    "id": "HU002",
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
    "id": "HU003",
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
    "id": "HU004",
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
    "id": "HU005",
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
    "id": "HU006",
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
    "id": "HU007",
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
    "id": "HU008",
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
    "id": "HU009",
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
    "id": "HU010",
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
    "id": "HU011",
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
    "id": "HU012",
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
    "id": "HU013",
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
    "id": "HU014",
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
    "id": "HU015",
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
    "id": "HU016",
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
    "id": "HU017",
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
    "id": "HU018",
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
    "id": "HU019",
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
    "id": "HU020",
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
    "id": "HU021",
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
    "id": "HU022",
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
    "id": "HU023",
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
    "id": "HU024",
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
    "id": "HU025",
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
    "id": "HU026",
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
    "id": "HU027",
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
    "id": "HU028",
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
    "id": "HU029",
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
    "id": "HU030",
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
    "id": "HU031",
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
    "id": "HU032",
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
    "id": "HU033",
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
    "id": "HU034",
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
    "id": "HU035",
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
    "id": "HU036",
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
    "id": "HU037",
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
    "id": "HU038",
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
    "id": "HU039",
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
    "id": "HU040",
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
    "id": "HU041",
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
    "id": "HU042",
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
    "id": "HU043",
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
    "id": "HU044",
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
    "id": "HU045",
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
    "id": "HU046",
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
    "id": "HU047",
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
    "id": "HU048",
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
    "id": "HU049",
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
    "id": "HU050",
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
    "id": "HU051",
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
    "id": "HU052",
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
    "id": "HU053",
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
    "id": "HU054",
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
    "id": "HU055",
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
    "id": "HU056",
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
    "id": "HU057",
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
    "id": "HU058",
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
    "id": "HU059",
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
    "id": "HU060",
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
    "id": "HU061",
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
    "id": "HU062",
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
    "id": "HU063",
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
    "id": "HU064",
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
    "id": "HU065",
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
    "id": "HU066",
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
    "id": "HU067",
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
    "id": "HU068",
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
    "id": "HU069",
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
    "id": "HU070",
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
    "id": "HU071",
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
    "id": "HU072",
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
    "id": "HU073",
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
    "id": "HU074",
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
    "id": "HU075",
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
    "id": "HU076",
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
    "id": "HU077",
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
    "id": "HU078",
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
    "id": "HU079",
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
    "id": "HU080",
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
    "id": "HU081",
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
    "id": "HU082",
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
    "id": "HU083",
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
    "id": "HU084",
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
    "id": "HU085",
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
    "id": "HU086",
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
    "id": "HU087",
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
    "id": "HU088",
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
    "id": "HU089",
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
    "id": "HU090",
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
    "id": "HU091",
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
    "id": "HU092",
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
    "id": "HU093",
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
    "id": "HU094",
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
    "id": "HU095",
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
    "id": "HU096",
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
    "id": "HU097",
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
    "id": "HU098",
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
    "id": "HU099",
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
    "id": "HU100",
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
    "id": "HU101",
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
    "id": "HU102",
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
    "id": "HU103",
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
    "id": "HU104",
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
    "id": "HU105",
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
    "id": "HU106",
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
    "id": "HU107",
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
    "id": "HU108",
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
    "id": "HU109",
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
    "id": "HU110",
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
    "id": "HU111",
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
    "id": "HU112",
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
    "id": "HU113",
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
    "id": "HU114",
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
    "id": "HU115",
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
    "id": "HU116",
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
    "id": "HU117",
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
    "id": "HU118",
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
    "id": "HU119",
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
    "id": "HU120",
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
    "id": "HU121",
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
    "id": "HU122",
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
    "id": "HU123",
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
    "id": "HU124",
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
    "id": "HU125",
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
    "id": "HU126",
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
    "id": "HU127",
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
    "id": "HU128",
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
    "id": "HU129",
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
    "id": "HU130",
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
    "id": "HU131",
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
    "id": "HU132",
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
    "id": "HU133",
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
    "id": "HU134",
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
    "id": "HU135",
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
    "id": "HU136",
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
    "id": "HU137",
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
    "id": "HU138",
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
    "id": "HU139",
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
    "id": "HU140",
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
    "id": "HU141",
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
    "id": "HU142",
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
    "id": "HU143",
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
    "id": "HU144",
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
    "id": "HU145",
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
    "id": "HU146",
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
    "id": "HU147",
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
    "id": "HU148",
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
    "id": "HU149",
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
    "id": "HU150",
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
    "id": "HU151",
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
    "id": "HU152",
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
    "id": "HU153",
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
    "id": "HU154",
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
    "id": "HU155",
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
    "id": "HU156",
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
    "id": "HU157",
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
    "id": "HU158",
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
    "id": "HU159",
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
    "id": "HU160",
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
    "id": "HU161",
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
    "id": "HU162",
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
    "id": "HU163",
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
    "id": "HU164",
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
    "id": "HU165",
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
    "id": "HU166",
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
    "id": "HU167",
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
    "id": "HU168",
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
    "id": "HU169",
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
    "id": "HU170",
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
    "id": "HU171",
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
    "id": "HU172",
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
    "id": "HU173",
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
    "id": "HU174",
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
    "id": "HU175",
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
    "id": "HU176",
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
    "id": "HU177",
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
    "id": "HU178",
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
    "id": "HU179",
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
    "id": "HU180",
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
    "id": "HU181",
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
    "id": "HU182",
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
    "id": "HU183",
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
    "id": "HU184",
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
    "id": "HU185",
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
    "id": "HU186",
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
    "id": "HU187",
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
    "id": "HU188",
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
    "id": "HU189",
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
    "id": "HU190",
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
    "id": "HU191",
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
    "id": "HU192",
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
    "id": "HU193",
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
    "id": "HU194",
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
    "id": "HU195",
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
    "id": "HU196",
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
    "id": "HU197",
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
    "id": "HU198",
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
    "id": "HU199",
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
    "id": "HU200",
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
    "id": "HU201",
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
    "id": "HU202",
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
    "id": "HU203",
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
    "id": "HU204",
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
    "id": "HU205",
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
    "id": "HU206",
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
    "id": "HU207",
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
    "id": "HU208",
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
    "id": "HU209",
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
    "id": "HU210",
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
    "id": "HU211",
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
    "id": "HU212",
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
    "id": "HU213",
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
    "id": "HU214",
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
    "id": "HU215",
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
    "id": "HU216",
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
    "id": "HU217",
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
    "id": "HU218",
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
    "id": "HU219",
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
    "id": "HU220",
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
    "id": "HU221",
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
    "id": "HU222",
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
    "id": "HU223",
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
    "id": "HU224",
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
    "id": "HU225",
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
    "id": "HU226",
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
    "id": "HU227",
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
    "id": "HU228",
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
    "id": "HU229",
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
    "id": "HU230",
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
    "id": "HU231",
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
    "id": "HU232",
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
    "id": "HU233",
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
    "id": "HU234",
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
    "id": "HU235",
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
    "id": "HU236",
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
    "id": "HU237",
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
    "id": "HU238",
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
    "id": "HU239",
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
    "id": "HU240",
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
    "id": "HU241",
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
    "id": "HU242",
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
    "id": "HU243",
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
    "id": "HU244",
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
    "id": "HU245",
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
    "id": "HU246",
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
    "id": "HU247",
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
    "id": "HU248",
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
    "id": "HU249",
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
    "id": "HU250",
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
    "id": "HU251",
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
    "id": "HU252",
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
    "id": "HU253",
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
    "id": "HU254",
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
    "id": "HU255",
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
    "id": "HU256",
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
    "id": "HU257",
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
    "id": "HU258",
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
    "id": "HU259",
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
    "id": "HU260",
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
    "id": "HU261",
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
    "id": "HU262",
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
    "id": "HU263",
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
    "id": "HU264",
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
    "id": "HU265",
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
    "id": "HU266",
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
    "id": "HU267",
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
    "id": "HU268",
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
    "id": "HU269",
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
    "id": "HU270",
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
    "id": "HU271",
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
    "id": "HU272",
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
    "id": "HU273",
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
    "id": "HU274",
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
    "id": "HU275",
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
    "id": "HU276",
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
    "id": "HU277",
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
    "id": "HU278",
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
    "id": "HU279",
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
    "id": "HU280",
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
    "id": "HU281",
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
    "id": "HU282",
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
    "id": "HU283",
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
  }
];
