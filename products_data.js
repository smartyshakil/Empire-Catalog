const PRODUCTS = [
  {
    "code": "KRF008B-G",
    "desc": "KARBON STAND FRUIT BOWL 10 INCHES COL BOX 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS COLORED BOWL",
    "department": "GLASSWARE",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "EMP210-250",
    "desc": "VALENCIA DOUBLE WALL JUICE GLASS 250 ML BOX PACK 72 PCS CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "LXY1511",
    "desc": "LANGXU WELCOME DRINK GLASS 115ML 6 PC BOX 16 SET CTN",
    "price": "140.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY5010",
    "desc": "LANGXU OCTAGONAL JUICE GLASS 184 ML BROWN BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "JGGC-04",
    "desc": "GLACIRA JUICE GLASS 220 ML 6 PC COL BOX 12 SET CTN",
    "price": "160.0",
    "unit": "FOR 6 PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "JGGC-05",
    "desc": "GLACIRA JUICE GLASS 220 ML 6 PC COL BOX 12 SET CTN",
    "price": "160.0",
    "unit": "FOR 6 PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "JGGC-07",
    "desc": "GLACIRA JUICE GLASS 220 ML 6 PC COL BOX 12 SET CTN",
    "price": "160.0",
    "unit": "FOR 6 PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY5004",
    "desc": "LANGXU JUICE GLASS 248 ML BROWN BOX-12 SET CTN",
    "price": "175.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY4008",
    "desc": "LANGXU SQUARE PLAZA JUICE GLASS 170 ML COLOR BOX 12 SET CTN",
    "price": "175.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY1101",
    "desc": "LANGXU PLAIN ROUND JUICE GLASS 230 ML COLOR BOX 12 SET CTN",
    "price": "190.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY4015",
    "desc": "LANGXU JUICE GLASS 186 ML BROWN BOX-12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY5014",
    "desc": "LANGXU JUICE GLASS 180 ML COLOR BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "STY721",
    "desc": "SHINE MAX FISH GLASS 195 ML 6 PC COL BOX 12 SET CTN",
    "price": "225.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY4306",
    "desc": "LANGXU PENTAGONAL JUICE GLASS 20 ML COLOR BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY4010",
    "desc": "LANXU JUICE GLASS 215 ML BROWN BOX 8 SET CTN",
    "price": "260.0",
    "unit": "FOR 6PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "ES5163-2A",
    "desc": "GREEN APPLE WHISKEY GLASS 330 ML 6 PC COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "WIGC-2",
    "desc": "GLACIRA WHISKEY GLASS 315 ML 6 PC COL BOX 8 SET CTN",
    "price": "250.0",
    "unit": "FOR 6 PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRW044",
    "desc": "KARBON WHISKEY GLASS 350 ML 6 PC COL BOX 8 SET CTN",
    "price": "250.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SWG2022",
    "desc": "SHINE MAX WHISKEY GLASS 290 ML 6 PC COL BOX 12 SET CTN",
    "price": "250.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "STY5012",
    "desc": "SHINE MAX WHISKEY GLASS 290 ML 6 PC COL BOX 8 SET CTN",
    "price": "280.0",
    "unit": "FOR 6 PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZS0609",
    "desc": "LANGXU WHISKEY GLASS 285 ML COL BOX 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZS0613-1",
    "desc": "LANGXU WHISKEY GLASS 390 ML COL BOX-8 SET CTN",
    "price": "280.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZS0610",
    "desc": "LANGXU PLAIN WHISKEY GLASS 350 ML COL BOX-8 SET CTN",
    "price": "290.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "WIGC-21",
    "desc": "GLACIRA HI BALL WHISKEY GLASS 380 ML 6 PC COL BOX 8 SET CTN",
    "price": "300.0",
    "unit": "FOR 6 PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SWG0615-1",
    "desc": "SHINE MAX WHISKEY GLASS 340 ML 6 PC COL BOX 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SWG0615-2",
    "desc": "SHINE MAX WHISKEY GLASS 340 ML 6 PC COL BOX 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SWG0615-3",
    "desc": "SHINE MAX WHISKEY GLASS 340 ML 6 PC COL BOX 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SWG0615-4",
    "desc": "SHINE MAX WHISKEY GLASS 340 ML 6 PC COL BOX 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZS0608",
    "desc": "LANGXU WHIKSEY GLASS 310 ML COLOR BOX 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZS0615-1",
    "desc": "LANGXU WHISKEY GLASS 340 ML COL BOX 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMV5051A",
    "desc": "SHINE MAX ANIMAL GLASS 400 ML EMBOSSED TIGER 6 PC COL BOX 6 SET CTN",
    "price": "425.0",
    "unit": "FOR 6 PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMV5051B",
    "desc": "SHINE MAX ANIMAL GLASS 400 ML EMBOSSED LION 6 PC COL BOX 6 SET CTN",
    "price": "425.0",
    "unit": "FOR 6 PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMV5051C",
    "desc": "SHINE MAX ANIMAL GLASS 400 ML EMBOSSED ANIMAL 6 PC COL BOX 6 SET CTN",
    "price": "425.0",
    "unit": "FOR 6 PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "LXNX001",
    "desc": "LANG XU FALOODA GLASS 342 ML 6 PCS COLOR BOX  8 SET CTN",
    "price": "180.0",
    "unit": "FOR 2 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "JS5139-1",
    "desc": "DELI SOGA WATER GLASS 500 ML 6 PC COL BOX 12 SET CTN",
    "price": "190.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY1001",
    "desc": "LANGXU WATER GLASS 230 ML BROWN BOX - 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "CNGC-03",
    "desc": "GLACIRA WATER GLASS 310 ML 6 PC COLOR BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMW6021",
    "desc": "SHINEMAX WATER GLASS 315 ML 6 PCS COL BOX 8 SET CTN",
    "price": "220.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMW6022",
    "desc": "SHINEMAX WATER GLASS 315 ML 6 PCS COL BOX 8 SET CTN",
    "price": "220.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMW6031",
    "desc": "SHINEMAX WATER GLASS 315 ML 6 PCS COL BOX 8 SET CTN",
    "price": "220.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "WAGC-1",
    "desc": "GLACIRA WATER GLASS 280 ML 6 PC COLOR BOX 8 SET CTN",
    "price": "220.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "WAGC-2",
    "desc": "GLACIRA WATER GLASS 280 ML 6 PC COLOR BOX 8 SET CTN",
    "price": "220.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRT077",
    "desc": "KARBON WATER GLASS 315 ML 6 PCS COL BOX 8 SET CTN",
    "price": "220.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRY5010-1",
    "desc": "KARBON WATER GLASS OCTAGONAL 330 ML 6 PC COL BOX 8 SET CTN",
    "price": "220.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "STY5006",
    "desc": "SHINE MAX WATER GLASS 310 ML  6 PCS COL BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "STY5010-1",
    "desc": "SHINEMAX WATER GLASS 330 ML COL BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KB047-2",
    "desc": "DELI WATER GLASS 340 ML 6 PCS KRAFT BOX 8 SET CTN",
    "price": "230.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXY5010-1",
    "desc": "LANGXU WATER GLASS 330 ML COL BOX 12 SET CTN",
    "price": "240.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SWG2023",
    "desc": "SHINE MAX WATER GLASS 250 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "DSKB032-3",
    "desc": "DELI SOGA PREMIUM WATER GLASS 320 ML 6 PC COL BOX 8 SET CTN",
    "price": "260.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "ES1005",
    "desc": "DELI PREMIUM 320 ML WATER GLASS 6 PCS COL BOX 8 SET CTN",
    "price": "270.0",
    "unit": "FOR 6PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "HBGC-1",
    "desc": "GLACIRA HI BALL WATER GLASS 480 ML 6 PCS COL BOX 8 SET CTN",
    "price": "350.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "GCBR02",
    "desc": "GLACIRA BOROSILICATE JUICE GLASS 270 ML ROUND 6 PC COL BOX 12 SET CTN",
    "price": "185.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SP-270-L6",
    "desc": "SOWA PARIS BOROSILICATE JUICE GLASS 270 ML ROUND 6 PC COL BOX 12 SET CTN",
    "price": "185.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY11-1",
    "desc": "SHINEMAX BOROSILICATE JUICE GLASS 270 ML COL BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SP-270A-L6",
    "desc": "SOWA PARIS BOROSILICATE JUICE GLASS 270 ML SQUARE 6 PC COL BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY21-1",
    "desc": "SHINEMAX BOROSILICATE SQUARE JUICE GLASS 270 ML COL BOX 12 SET CTN",
    "price": "240.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY11-1-B",
    "desc": "SHINEMAX BOROSILICATE JUICE GLASS 270 ML COL BOX 12 SET CTN",
    "price": "300.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY11-1-G",
    "desc": "SHINEMAX BOROSILICATE JUICE GLASS 270 ML COL BOX 12 SET CTN",
    "price": "300.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY21-1-E",
    "desc": "SHINE MAX 260ML BOROSILICATE SQUARE GLASS COL BOX 12 SET CTN",
    "price": "310.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY21-1-G",
    "desc": "SHINEMAX BOROSILICATE SQUARE JUICE GLASS 270 ML COL BOX 12 SET CTN",
    "price": "320.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY21-1-BE",
    "desc": "SHINE MAX 260ML BOROSILICATE SQUARE GLASS COL BOX 12 SET CTN",
    "price": "400.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBY21-1-GE",
    "desc": "SHINE MAX 260ML BOROSILICATE SQUARE GLASS COL BOX 12 SET CTN",
    "price": "400.0",
    "unit": "FOR 6PCS",
    "category": "BORO JUICE GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SP-320-L6",
    "desc": "SOWA PARIS BOROSILICATE JUICE GLASS 320 ML ROUND 6 PC COL BOX 12 SET CTN",
    "price": "195.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SP-320A-L6",
    "desc": "SOWA PARIS BOROSILICATE JUICE GLASS 320 ML SQUARE 6 PC COL BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY11-2",
    "desc": "SHINEMAX BOROSILICATE WATER GLASS 320 ML COL BOX 12 SET CTN",
    "price": "240.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY11-2-E",
    "desc": "SHINE MAX 320 ML BOROSILICATE GLASS 6 PCS COL BOX 12 SET CTN",
    "price": "310.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY21-2-E",
    "desc": "SHINE MAX 320ML BOROSILICATE SQUARE GLASS COL BOX 12 SET CTN",
    "price": "340.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBY11-2-BE",
    "desc": "SHINE MAX 320 ML BOROSILICATE GLASS 6 PCS COL BOX 12 SET CTN",
    "price": "400.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBY11-2-GE",
    "desc": "SHINE MAX 320 ML BOROSILICATE GLASS 6 PCS COL BOX 12 SET CTN",
    "price": "400.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBY21-2-GE",
    "desc": "SHINE MAX 320ML BOROSILICATE SQUARE GLASS COL BOX 12 SET CTN",
    "price": "420.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBY21-2-BE",
    "desc": "SHINE MAX 320ML BOROSILICATE SQUARE GLASS COL BOX 12 SET CTN",
    "price": "430.0",
    "unit": "FOR 6PCS",
    "category": "BORO WATER GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "GL1303",
    "desc": "DELI WINE GLASS 360 ML 6 PC COL BOX 8 SET CTN",
    "price": "360.0",
    "unit": "FOR 6PCS",
    "category": "WINE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "GL1304",
    "desc": "DELI WINE GLASS 425 ML 6 PC COL BOX 8 SET CTN",
    "price": "380.0",
    "unit": "FOR 6PCS",
    "category": "WINE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "GL1323",
    "desc": "DELI WINE GLASS 235 ML 6 PC COL BOX 8 SET CTN",
    "price": "400.0",
    "unit": "FOR 6PCS",
    "category": "WINE GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "GL3796",
    "desc": "DELI WINE GLASS 170 ML 6 PC COL BOX 8 SET CTN",
    "price": "400.0",
    "unit": "FOR 6PCS",
    "category": "WINE GLASS",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "GCN-01",
    "desc": "GLACIRA HI BALL COLORED WHISKEY GLASS 380 ML 6 PC COL BOX 8 SET CTN",
    "price": "310.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "GCN-02",
    "desc": "GLACIRA HI BALL COLORED WHISKEY GLASS 380 ML 6 PC COL BOX 8 SET CTN",
    "price": "310.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "GCN-03",
    "desc": "GLACIRA HI BALL COLORED WHISKEY GLASS 380 ML 6 PC COL BOX 8 SET CTN",
    "price": "310.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMV3013-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS 350 ML COL BOX 8 SET CTN",
    "price": "330.0",
    "unit": "FOR 1 SET",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMV3022-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS 350 ML COL BOX 8 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMV3022-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS 350 ML COL BOX 8 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMV3032-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS 350 ML COL BOX 8 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMV3013-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS 350 ML COL BOX 8 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMV3021-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS 350 ML COL BOX 8 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMV3021-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS 350 ML COL BOX 8 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMV3031-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS 350 ML COL BOX 8 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0391G-T",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "700.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0391-GL",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "700.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0370A-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0393-GT",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0393-GL",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0370B-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0370C-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0372A-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0372B-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0372C-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0393-GE",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0312B-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "900.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0374C-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "900.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0374D-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "900.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0374E-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "900.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0376C-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "925.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0376D-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "925.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0376E-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "925.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0312A-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0314A-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0314B-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0314C-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0312C-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "LXY5003",
    "desc": "LANGXU SHOT GLASS 50 ML 6 PC COL BOX 48 SET CTN",
    "price": "100.0",
    "unit": "FOR 6PCS",
    "category": "SHOT GLASS",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "STY401",
    "desc": "SHINE MAX FISH SHOT GLASS 40 ML 6 PCS COL BOX 24 SET CTN",
    "price": "130.0",
    "unit": "FOR 6 PCS",
    "category": "SHOT GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRWH702A-L7",
    "desc": "KARBON SHOT SET / ZAMZAM SET  120ML+45ML  COL BOX 24 SET CTN",
    "price": "135.0",
    "unit": "FOR 7 PCS",
    "category": "SHOT SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRWH702B-L7",
    "desc": "KARBON SHOT SET / ZAMZAM SET  120ML+45ML  COL BOX 24 SET CTN",
    "price": "135.0",
    "unit": "FOR 7 PCS",
    "category": "SHOT SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRWH702C-L7",
    "desc": "KARBON SHOT SET / ZAMZAM SET  120ML+45ML  COL BOX 24 SET CTN",
    "price": "135.0",
    "unit": "FOR 7 PCS",
    "category": "SHOT SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRWH702D-L7",
    "desc": "KARBON SHOT SET / ZAMZAM SET  120ML+45ML  COL BOX 24 SET CTN",
    "price": "135.0",
    "unit": "FOR 7 PCS",
    "category": "SHOT SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRWH702E-L7",
    "desc": "KARBON SHOT SET / ZAMZAM SET  120ML+45ML  COL BOX 24 SET CTN",
    "price": "135.0",
    "unit": "FOR 7 PCS",
    "category": "SHOT SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMWH701-L7",
    "desc": "SHINEMAX SHOT SET / ZAMZAM SET  120ML+30ML  COL BOX 24 SET CTN",
    "price": "170.0",
    "unit": "FOR 7 PCS",
    "category": "SHOT SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRB013-3",
    "desc": "KARBON BOWL SET 210 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "145.0",
    "unit": "FOR 6PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRB013-1",
    "desc": "KARBON BOWL SET 210 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "145.0",
    "unit": "FOR 6PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRB013-2",
    "desc": "KARBON BOWL SET 210 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "145.0",
    "unit": "FOR 6PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB407",
    "desc": "SHINE MAX BOWL 160 ML 6 PCS COL BOX 12 SET CTN",
    "price": "185.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406A-B",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406B-B",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406C-B",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406D-B",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406E-B",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406F-B",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406A-G",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406B-G",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406C-G",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406D-G",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406E-G",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB406F-G",
    "desc": "SHINEMAX DESSERT BOWL 170 ML 6 PCS COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB253A",
    "desc": "SHINEMAX DESSERT BOWL 150 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMB253A-B",
    "desc": "SHINEMAX DESSERT BOWL 150 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMB253A-G",
    "desc": "SHINEMAX DESSERT BOWL 150 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMB253B-B",
    "desc": "SHINEMAX DESSERT BOWL 150 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMB253C-B",
    "desc": "SHINEMAX DESSERT BOWL 150 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMB253C-G",
    "desc": "SHINEMAX DESSERT BOWL 150 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC632-L2B",
    "desc": "SHINE MAX 170 ML ICE CUP 2 PCS COL BOX-36 SET CTN",
    "price": "130.0",
    "unit": "FOR 2PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMIC616",
    "desc": "SHINE MAX FISH ICE CUP 140 ML 6 PC COL BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMIC626",
    "desc": "SHINE MAX NEW ICE CUP 140 ML 6 PC COL BOX 12 SET CTN",
    "price": "220.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMIC656H",
    "desc": "SHINE MAX FISH ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC603",
    "desc": "SHINE MAX ICE CREAM CUP 150 ML 6 PCS COL BOX 12 SET CTN",
    "price": "270.0",
    "unit": "FOR 6PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656D-B",
    "desc": "SHINE MAX FISH ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656D-G",
    "desc": "SHINE MAX FISH ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "LXP104-3",
    "desc": "LANG XU SERVING PLATE 9.5 X 8 INCHES 1 PC COLOR BOX  24 PCS CTN",
    "price": "150.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "LXP104-4",
    "desc": "LANG XU SERVING PLATE 9.5 X 8 INCHES 1 PC COLOR BOX  24 PCS CTN",
    "price": "150.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "LXP108",
    "desc": "LANG XU SERVING PLATE 11 X 8.5 INCHES 1 PC COLOR BOX  16 PCS CTN",
    "price": "160.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP501",
    "desc": "SHINEMAX SAUCER 5 INCHES COLOR BOX 12 SET CTN",
    "price": "180.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP509-3",
    "desc": "SHINE MAX SOUP PLATE 7.5 INCHES - 840 ML 2 PCS COL BOX 18 SET CTN",
    "price": "210.0",
    "unit": "FOR 2PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXP109-1",
    "desc": "SHINE MAX SOUP PLATE 5.7 INCHES - 240 ML 6 PCS COL BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXP109-3",
    "desc": "SHINE MAX SOUP PLATE 8.25 INCHES - 840 ML 2 PCS COL BOX 18 SET CTN",
    "price": "210.0",
    "unit": "FOR 2PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRP120",
    "desc": "KARBON SNACK PLATES 350ML 6 PCS COL BOX 12 SET CTN",
    "price": "220.0",
    "unit": "FOR 6PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRS7201",
    "desc": "KARBON LADDU PLATE 200 ML COL BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXP109-2",
    "desc": "SHINE MAX SOUP PLATE 7 INCHES - 480 ML 4 PCS COL BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 4PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP508A",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP508B",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP508D",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP508E",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP508F",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP508C",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP510-1",
    "desc": "SHINE MAX GLASS QUARTER PLATE 6 PC COL BOX 12 SET CTN",
    "price": "300.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP510-3",
    "desc": "SHINE MAX GLASS DINNER PLATE 2 PC COL BOX 12 SET CTN",
    "price": "300.0",
    "unit": "FOR 2 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP508D-G",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMP508F-G",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRS7201-B",
    "desc": "KARBON LADDU PLATE 200 ML SMOKE COL BOX 12 SET CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRS7201-G",
    "desc": "KARBON LADDU PLATE 200 ML AMBER COL BOX 12 SET CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "DZB01-300",
    "desc": "GREEN APPLE BEER MUG 570 ML 6 PC BOX 6 SET CTN",
    "price": "130.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZB08",
    "desc": "LANGXU BEER MUG 375 ML 2 PC COL BOX 18 SET CTN",
    "price": "140.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZB20-1",
    "desc": "LANGXU BEER MUG 2 PC 290 ML - 24 SET CTN",
    "price": "140.0",
    "unit": "FOR 2 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "GCBE-04",
    "desc": "GLACIRA BEER MUG 380 ML 2 PC COL BOX 18 SET CTN",
    "price": "150.0",
    "unit": "FOR 2 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZB18",
    "desc": "LANGXU BEER MUG 2 PC 405 ML - 18 SET CTN",
    "price": "150.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMJC138-1",
    "desc": "SHINEMAX BEER MUG 2 PC 400 ML-18 SET CTN",
    "price": "150.0",
    "unit": "FOR 2 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "LXZB17-1",
    "desc": "LANGXU 2 PC BEER MUG 360 ML-18 SET CTN",
    "price": "160.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZB05-375",
    "desc": "LANGXU BEER MUG 2 PC 392 ML - 18 SET CTN",
    "price": "160.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZB02-1",
    "desc": "LANGXU BEER MUG 1 PC 830 ML - 12 PCS CTN",
    "price": "170.0",
    "unit": "FOR 1 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "LXZB15",
    "desc": "LANGXU BEER MUG 2 PC 348 ML-18 SET CTN",
    "price": "180.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZB09",
    "desc": "LANGXU BEER MUG 380 ML 2 PC COL BOX 12 SET CTN",
    "price": "180.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "GCBE-02",
    "desc": "GLACIRA BEER MUG 2 PC 480 ML-12 SET CTN",
    "price": "180.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZB53",
    "desc": "LANGXU SKULL BEER MUG 490 ML 2 PC COL BOX 18 SET CTN",
    "price": "190.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "LXZB20",
    "desc": "LANGXU BEER MUG 2 PC 385 ML - 12 SET CTN",
    "price": "190.0",
    "unit": "FOR 2 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "LXZB02",
    "desc": "LANGXU BEER MUG 2 PC 447 ML-12 SET CTN",
    "price": "200.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "P124",
    "desc": "SOOGO FISH MUG WITH HANDLE 220 ML COLOR BOX 8 SET CTN",
    "price": "220.0",
    "unit": "FOR 6 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXZB19",
    "desc": "LANGXU BEER MUG 2 PC 666 ML-12 SET CTN",
    "price": "250.0",
    "unit": "FOR 2PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB406",
    "desc": "KARBON TEA MUG 65 ML COL BOX 24 SET CTN",
    "price": "130.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMTC217-1",
    "desc": "SHINE MAX SMALL TEA CUP 95 ML 6 PC COL BOX 24 SET CTN",
    "price": "135.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB162",
    "desc": "KARBON TEA MUG 110 ML COL BOX 16 SET CTN",
    "price": "140.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB163",
    "desc": "KARBON TEA MUG 110 ML COL BOX 16 SET CTN",
    "price": "140.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB164",
    "desc": "KARBON TEA MUG 110 ML COL BOX 16 SET CTN",
    "price": "140.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMTC213-1",
    "desc": "SHINE MAX TEA MUG 150 ML 6 PCS COL BOX 12 SET CTN",
    "price": "140.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMTC369A",
    "desc": "SHINEMAX SMALL TEA MUG 90 ML 6 PCS COLOR BOX 24 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC369B",
    "desc": "SHINEMAX SMALL TEA MUG 90 ML 6 PCS COLOR BOX 24 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC369C",
    "desc": "SHINEMAX SMALL TEA MUG 90 ML 6 PCS COLOR BOX 24 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB48A",
    "desc": "KARBON SQUARE TEA MUG 115 ML COL BOX 16 SET CTN",
    "price": "150.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB48B",
    "desc": "KARBON SQUARE TEA MUG 115 ML COL BOX 16 SET CTN",
    "price": "150.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB48C",
    "desc": "KARBON SQUARE TEA MUG 115 ML COL BOX 16 SET CTN",
    "price": "150.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "GC003",
    "desc": "GLACIRA TEA MUG 150 ML COL BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB78",
    "desc": "KARBON TEA MUG 150 ML COL BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB135",
    "desc": "KARBON TEA MUG 150 ML COL BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB173",
    "desc": "KARBON TEA MUG 145 ML COL BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB178",
    "desc": "KARBON TEA MUG 145 ML COL BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB187",
    "desc": "KARBON TEA MUG 145 ML COL BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMTC24-1",
    "desc": "SHINE MAX GREEN TEA MUG 230 ML 6 PC COL BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMTC24-5",
    "desc": "SHINE MAX GREEN TEA MUG 230 ML 6 PC COL BOX 12 SET CTN",
    "price": "150.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB05B",
    "desc": "KARBON TEA MUG 200 ML COL BOX 12 SET CTN",
    "price": "160.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB05A",
    "desc": "KARBON TEA MUG 200 ML COL BOX 12 SET CTN",
    "price": "160.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB05D",
    "desc": "KARBON TEA MUG 200 ML COL BOX 12 SET CTN",
    "price": "160.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB161",
    "desc": "KARBON TEA MUG 145 ML COL BOX 12 SET CTN",
    "price": "160.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "ZB24-WEAVE",
    "desc": "GREEN APPLE WEAVE TEA MUG 240 ML COL BOX 12 SET CTN",
    "price": "160.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMTC257",
    "desc": "SHINEMAX TEA MUG  110 ML 6 PCS COLOR BOX 16 SET CTN",
    "price": "160.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "GCT007",
    "desc": "GLACIRA TEA MUG 160 ML COL BOX 12 SET CTN",
    "price": "165.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB47-1",
    "desc": "KARBON SQUARE TEA MUG 150 ML COL BOX 16 SET CTN",
    "price": "166.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB143",
    "desc": "KARBON TEA MUG 155 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "170.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB143B",
    "desc": "KARBON TEA MUG 155 ML 6 PCS COLOR BOX 12 SET CTN",
    "price": "170.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB47",
    "desc": "KARBON SQUARE TEA MUG 190 ML COLOR BOX 12 SET CTN",
    "price": "175.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXJ400",
    "desc": "LANGXU GLASS TEA CUP 137 ML 6 PC COL BOX - 12 SET CTN",
    "price": "190.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB199A",
    "desc": "KARBON JUICE MUG 200 ML 6 PC COL BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRZB199B",
    "desc": "KARBON JUICE MUG 200 ML 6 PC COL BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBC51-1-L2",
    "desc": "SHINE MAX BOROSILICATE MUG COLORED HANDLE 350 ML 36 SET CTN",
    "price": "110.0",
    "unit": "FOR 2PCS",
    "category": "BORO TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC51-2-L2",
    "desc": "SHINE MAX BOROSILICATE MUG COLORED HANDLE 400 ML 36 SET CTN",
    "price": "120.0",
    "unit": "FOR 2PCS",
    "category": "BORO TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "GCBR08",
    "desc": "GLACIRA BOROSILICATE TEA MUG 140ML 6 PC COL BOX 24 SET CTN",
    "price": "130.0",
    "unit": "FOR 6PCS",
    "category": "BORO TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBC14",
    "desc": "SHINE MAX BOROSILICATE TEA MUG 220ML 6 PC COL BOX 24 SET CTN",
    "price": "220.0",
    "unit": "FOR 6PCS",
    "category": "BORO TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMTC1601",
    "desc": "SHINEMAX SUGAR POT WITH LID 280 ML COL BOX 48 SET CTN",
    "price": "80.0",
    "unit": "FOR 1 PCS",
    "category": "LID MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "LXCY006",
    "desc": "LANGXU SUGAR POT WITH LID 385 ML COL BOX 24 SET CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "LID MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "LXCY007",
    "desc": "LANGXU SUGAR POT WITH LID 385 ML COL BOX 24 SET CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "LID MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "KRCF027-L12",
    "desc": "KARBON FISH CUP SAUCER 220 ML COLOR BOX 8 SET CTN",
    "price": "290.0",
    "unit": "FOR 12PCS",
    "category": "CUP SAUCER",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "CF241-L12",
    "desc": "GREEN APPLE FISH CUP SAUCER COL BOX 8 SET CTN",
    "price": "300.0",
    "unit": "FOR 12PCS",
    "category": "CUP SAUCER",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMWH96-L8",
    "desc": "SHINE MAX KETTLE SET WITH BAMBOO TRAY CLEAR 8 PCS SET 6 SET CTN",
    "price": "525.0",
    "unit": "FOR 8PCS",
    "category": "KETTLE SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH96-L8B",
    "desc": "SHINE MAX KETTLE SET WITH BAMBOO TRAY SMOKE 8 PCS SET 6 SET CTN",
    "price": "625.0",
    "unit": "FOR 8PCS",
    "category": "KETTLE SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH96-L8G",
    "desc": "SHINE MAX KETTLE SET WITH BAMBOO TRAY AMBER 8 PCS SET 6 SET CTN",
    "price": "625.0",
    "unit": "FOR 8PCS",
    "category": "KETTLE SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH64-L8B",
    "desc": "SHINEMAX 7 PCS KETTLE SET WITH REVOLVING STAND 1000ML+130ML COLOR BOX 4 SET CTN",
    "price": "990.0",
    "unit": "FOR 1 SET",
    "category": "KETTLE SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH64-L8G",
    "desc": "SHINEMAX 7 PCS KETTLE SET WITH REVOLVING STAND 1000ML+130ML COLOR BOX 4 SET IN CTN",
    "price": "990.0",
    "unit": "FOR 1 SET",
    "category": "KETTLE SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH65-L8B",
    "desc": "SHINEMAX 7 PCS KETTLE SET WITH REVOLVING STAND 1000ML+130ML COLOR BOX 4 SET IN CTN",
    "price": "1190.0",
    "unit": "FOR 1 SET",
    "category": "KETTLE SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH65-L8G",
    "desc": "SHINEMAX 7 PCS KETTLE SET WITH REVOLVING STAND 1000ML+130ML COLOR BOX 4 SET IN CTN",
    "price": "1190.0",
    "unit": "FOR 1 SET",
    "category": "KETTLE SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "YZH36",
    "desc": "DELI SOGA 1700 ML JUG WITH LID IN COL BOX 12 PC CTN",
    "price": "160.0",
    "unit": "FOR 1PCS",
    "category": "JUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "DSH040B",
    "desc": "DELI SOGA WATER JUG 1.25L COL BOX-12 PC CTN",
    "price": "200.0",
    "unit": "FOR 1PCS",
    "category": "JUG",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMWH76-L7",
    "desc": "SHINE MAX  7 PCS LEMON SET 1550ML+320ML COL BOX 6 SET CTN",
    "price": "550.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH89-L7G",
    "desc": "SHINE MAX COLORED 7 PCS LEMON SET COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH88A-L7G",
    "desc": "SHINEMAX BOROSILICATE LEMON SET 7 PCS COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH73-L7G",
    "desc": "SHINE MAX COLORED 7 PCS LEMON SET COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH74-L7G",
    "desc": "SHINE MAX COLORED 7 PCS LEMON SET COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "GCLS-01",
    "desc": "GLACIRA COLORED 7 PCS LEMON SET COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH88-L7-",
    "desc": "SHINE MAX 7 PCS LEMON SET 1900ML+320ML COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH75-L7",
    "desc": "SHINEMAX LEMON SET 1500ML+320ML COLOR BOX PACK 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH69-L7",
    "desc": "SHINEMAX BOROSILICATE 7 PCS LEMON SET 1800ML+370ML GIFT BOX PACK 8 SET CTN",
    "price": "600.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH89-L7B",
    "desc": "SHINE MAX COLORED 7 PCS LEMON SET 1440ML+270ML COL BOX 6 SET CTN",
    "price": "650.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH76-L7B",
    "desc": "SHINE MAX COLORED 7 PCS LEMON SET COL BOX 6 SET CTN",
    "price": "675.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH82-L7B",
    "desc": "SHINE MAX COLORED 7 PCS LEMON SET COL BOX 6 SET CTN",
    "price": "675.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH91-L8",
    "desc": "SHINE MAX LEMON SET WITH BAMBOO TRAY CLEAR 8 PCS SET 6 SET CTN",
    "price": "675.0",
    "unit": "FOR 8PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH88-L7B",
    "desc": "SHINE MAX COLORED 7 PCS LEMON SET 1900ML+320ML COL BOX 6 SET CTN",
    "price": "675.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "YWH-7",
    "desc": "SHINE MAX FISH LEMON SET CLEAR - COL BOX 4 SET CTN",
    "price": "675.0",
    "unit": "FOR 7 PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH97-L7B",
    "desc": "SHINEMAX 7 PCS WATER SET 1700ML+320ML COLOR BOX 6 SET CTN",
    "price": "700.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "YWH-7-B",
    "desc": "SHINE MAX FISH LEMON SET SMOKE COL - COL BOX 4 SET CTN",
    "price": "775.0",
    "unit": "FOR 7 PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH91-L8B",
    "desc": "SHINE MAX LEMON SET WITH BAMBOO TRAY SMOKE 8 PCS SET 6 SET CTN",
    "price": "775.0",
    "unit": "FOR 8PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMWH91-L8G",
    "desc": "SHINE MAX LEMON SET WITH BAMBOO TRAY AMBER 8 PCS SET 6 SET CTN",
    "price": "775.0",
    "unit": "FOR 8PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "YWH-7-G",
    "desc": "SHINE MAX FISH LEMON SET GOLD COL - COL BOX 4 SET CTN",
    "price": "775.0",
    "unit": "FOR 7 PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH99-L7B",
    "desc": "SHINE MAX COLORED 7 PCS LEMON SET COL 1450ML+280ML BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH66-L8B",
    "desc": "SHINEMAX 7 PCS WATER SET WITH REVOLVING STAND 1550ML+320ML COLOR BOX 4 SET IN CTN",
    "price": "1190.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH66-L8G",
    "desc": "SHINEMAX 7 PCS WATER SET WITH REVOLVING STAND 1550ML+320ML COLOR BOX 4 SET IN CTN",
    "price": "1190.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH67-L8B",
    "desc": "SHINEMAX 7 PCS WATER SET WITH REVOLVING STAND 1550ML+320ML COLOR BOX 4 SET IN CTN",
    "price": "1375.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH67-L8G",
    "desc": "SHINEMAX 7 PCS WATER SET WITH REVOLVING STAND 1550ML+320ML COLOR BOX 4 SET IN CTN",
    "price": "1375.0",
    "unit": "FOR 1 SET",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC18-L1-B",
    "desc": "SHINE MAX GLASS SIPPER 380 ML - COL BOX-72 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC18-L1-G",
    "desc": "SHINE MAX GLASS SIPPER 380 ML - COL BOX-72 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC52-L1",
    "desc": "SHINE MAX GLASS SIPPER 480 ML - COL BOX-48 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC54-L1",
    "desc": "SHINE MAX GLASS SIPPER 450 ML - COL BOX-48 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC57-L1",
    "desc": "SHINE MAX GLASS SIPPER 450 ML - COL BOX-48 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC28-L1",
    "desc": "SHINE MAX GLASS SIPPER 490 ML COL BOX 48 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC52-L1G",
    "desc": "SHINE MAX GLASS SIPPER 480 ML - COL BOX-48 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC54-L1G",
    "desc": "SHINE MAX GLASS SIPPER 450 ML - COL BOX-48 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC56-L1B",
    "desc": "SHINE MAX GLASS SIPPER 480 ML - COL BOX-48 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC56-L1G",
    "desc": "SHINE MAX GLASS SIPPER 480 ML - COL BOX-48 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC57-L1B",
    "desc": "SHINE MAX GLASS SIPPER 450 ML - COL BOX-48 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC57-L1G",
    "desc": "SHINE MAX GLASS SIPPER 450 ML - COL BOX-48 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC58-L1B",
    "desc": "SHINE MAX GLASS SIPPER 420 ML - COL BOX-72 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC58-L1G",
    "desc": "SHINE MAX GLASS SIPPER 420 ML - COL BOX-72 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC33-L1G",
    "desc": "SHINE MAX GLASS SIPPER 600 ML - COL BOX-48 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC33-L1B",
    "desc": "SHINE MAX GLASS SIPPER 600 ML - COL BOX-48 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC22-L1",
    "desc": "SHINE MAX GLASS SIPPER WOODEN LID 540 ML COL BOX 48 PC CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC20-L1-B",
    "desc": "SHINE MAX GLASS SIPPER WOODEN LID 540 ML COL BOX 48 PC CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBC20-L1-G",
    "desc": "SHINE MAX GLASS SIPPER WOODEN LID 540 ML COL BOX 48 PC CTN",
    "price": "120.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "HK-105",
    "desc": "GLASS BOTTLE WITH COVER 350 ML COLOR BOX 80 PCS CTN",
    "price": "52.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-210",
    "desc": "GLASS BOTTLE WITH COVER 380 ML COLOR BOX 80 PCS CTN",
    "price": "52.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-165",
    "desc": "GLASS BOTTLE WITH COVER 360 ML COLOR BOX 80 PCS CTN",
    "price": "62.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-130",
    "desc": "GLASS BOTTLE WITH COVER 360 ML COLOR BOX 80 PCS CTN",
    "price": "65.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-145",
    "desc": "GLASS BOTTLE WITH COVER 350 ML COLOR BOX 80 PCS CTN",
    "price": "65.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-205",
    "desc": "GLASS BOTTLE WITH COVER 400 ML COLOR BOX 80 PCS CTN",
    "price": "65.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-150",
    "desc": "GLASS BOTTLE WITH COVER 380 ML COLOR BOX 80 PCS CTN",
    "price": "68.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-180",
    "desc": "GLASS BOTTLE WITH COVER 200 ML COLOR BOX 80 PCS CTN",
    "price": "68.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-160",
    "desc": "GLASS BOTTLE WITH COVER 400 ML COLOR BOX 80 PCS CTN",
    "price": "80.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "HK-175",
    "desc": "GLASS BOTTLE WITH COVER 450 ML COLOR BOX 80 PCS CTN",
    "price": "85.0",
    "unit": "FOR 1PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 80,
    "status": "In Stock"
  },
  {
    "code": "SMWB1036-500",
    "desc": "SHINEMAX BOROSILICATE GLASS BOTTLE 500 ML 1 PC COLOR BOX 60 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "KRCB006A",
    "desc": "KARBON CANDY JAR BIG 1 PC COL BOX 12 PCS CTN",
    "price": "180.0",
    "unit": "FOR 1PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SPS023-L7",
    "desc": "SHINE MAX 3 LEG PUDDING SET COL BOX 6 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SPS024-L7",
    "desc": "SHINE MAX 3 LEG PUDDING SET COL BOX 6 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SPS025-L7",
    "desc": "SHINE MAX 3 LEG PUDDING SET COL BOX 6 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "YZW20080-L7A",
    "desc": "GLACIRA 7 PCS SQUARE BOWL PUDDING SET COL BOX 6 SET CTN",
    "price": "360.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "YZW20080-L7B",
    "desc": "GLACIRA 7 PCS SQUARE BOWL PUDDING SET COL BOX 6 SET CTN",
    "price": "360.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "YZW20080-L7C",
    "desc": "GLACIRA 7 PCS SQUARE BOWL PUDDING SET COL BOX 6 SET CTN",
    "price": "360.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRPS021-L7",
    "desc": "KARBON NEW 7 PCS PUDING SET COL BOX - 6 SET CTN",
    "price": "400.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "KRPS031-L7",
    "desc": "KARBON NEW 7 PCS PUDING SET COL BOX - 6 SET CTN",
    "price": "400.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "KRPS041-L7",
    "desc": "KARBON NEW 7 PCS PUDING SET COL BOX - 6 SET CTN",
    "price": "400.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "KRPS031-L7G",
    "desc": "KARBON PUDDING SET 7 PCS COL BOX 6 SET IN CTN",
    "price": "400.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SPS023-L7B",
    "desc": "SHINEMAX 3 LEG BLACK PUDDING SET-6 SETS IN CARTOON",
    "price": "500.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS024-L7B",
    "desc": "SHINEMAX 3 LEG BLACK PUDDING SET-6 SETS IN CARTOON",
    "price": "500.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SPS025-L7B",
    "desc": "SHINEMAX 3 LEG BLACK PUDDING SET-6 SETS IN CARTOON",
    "price": "500.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SPS033-L7",
    "desc": "SHINE MAX 7 PCS LID PUDDING SET 3  LEG COL BOX 6 SET CTN",
    "price": "500.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SPS023-L7G",
    "desc": "SHINEMAX 3 LEG GOLD PUDDING SET-6 SETS IN CARTOON",
    "price": "500.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS024-L7G",
    "desc": "SHINEMAX 3 LEG GOLD PUDDING SET-6 SETS IN CARTOON",
    "price": "500.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS025-L7G",
    "desc": "SHINEMAX 3 LEG GOLD PUDDING SET-6 SETS IN CARTOON",
    "price": "500.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS034-L7",
    "desc": "SHINE MAX 7 PCS LID PUDDING SET 3  LEG COL BOX 6 SET CTN",
    "price": "500.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS063-L7B",
    "desc": "SHINE MAX 7 PCS LID PUDDING SET COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SPS033-L7B",
    "desc": "SHINE MAX 7 PCS LID PUDDING SET 3  LEG COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS033-L7G",
    "desc": "SHINE MAX 7 PCS LID PUDDING SET 3  LEG COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS034-L7B",
    "desc": "SHINE MAX 7 PCS LID PUDDING SET 3  LEG COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS035-L7B",
    "desc": "SHINE MAX 7 PCS LID PUDDING SET 3  LEG COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SPS035-L7G",
    "desc": "SHINE MAX 7 PCS LID PUDDING SET 3  LEG COL BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7 PCS",
    "category": "PUDDING SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "GPG4060-2",
    "desc": "DELI SOGA SQUARE BAMBOO LID JAR 425 ML COL BOX 72 PCS CTN",
    "price": "60.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 24,
    "status": "In Stock"
  },
  {
    "code": "SP-520ML",
    "desc": "SOWA PARIS BOROSILICATE JAR WDN LID 520 ML ROUND 1 PC COL BOX 36 PC CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SP-685ML",
    "desc": "SOWA PARIS BOROSILICATE JAR WDN LID 685 ML ROUND 1 PC COL BOX 36 PC CTN",
    "price": "95.0",
    "unit": "FOR 1 PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "GPG74-1",
    "desc": "DELI SOGA BAMBOO LID JAR 550 ML COL BOX 48 PCS CTN",
    "price": "100.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SP-480ML",
    "desc": "SOWA PARIS BOROSILICATE JAR WDN LID 480 ML SQUARE 1 PC COL BOX 36 PC CTN",
    "price": "100.0",
    "unit": "FOR 1 PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBJ05-1050",
    "desc": "SHINE MAX BOROSILICATE JAR WITH WOODEN LID 1050 ML 36 PC CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "GPG74-2",
    "desc": "DELI SOGA BAMBOO LID JAR 750 ML COL BOX 36 PCS CTN",
    "price": "115.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "GPG74-3",
    "desc": "DELI SOGA BAMBOO LID JAR 950 ML COL BOX 24 PCS CTN",
    "price": "125.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBJ05-1400",
    "desc": "SHINE MAX BOROSILICATE JAR WITH WOODEN LID 1400 ML 36 PC CTN",
    "price": "130.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "GPG16-1580",
    "desc": "DELI SOGA SQUARE BAMBOO LID JAR 1580 ML COL BOX 36 PCS CTN",
    "price": "135.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN JAR SINGLE",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "SMBJ02-500-L2",
    "desc": "SHINE MAX DRYFRUIT SET 500ML*2 WITH WOODEN TRAY 24 SET CTN",
    "price": "425.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN CANDY",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBJ-542R-L4",
    "desc": "SHINE MAX DRYFRUIT SET 500ML*4 WITH WOODEN TRAY 16 SET CTN",
    "price": "800.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN CANDY",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBJ-614-L4",
    "desc": "SHINE MAX DRYFRUIT SET 500ML*4 WITH METAL STAND 8SET CTN",
    "price": "950.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN CANDY",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBJ613-L4",
    "desc": "SHINE MAX DRYFRUIT SET 500ML*4 WITH METAL REVOLVING STAND 8SET CTN",
    "price": "1100.0",
    "unit": "FOR 1PCS",
    "category": "WOODEN CANDY",
    "department": "Glassware",
    "moq": 1,
    "status": "In Stock"
  },
  {
    "code": "GPG10-220",
    "desc": "DELI SOGA BAMBOO LID JAR 220 ML 3 PCS COL BOX 16 SET CTN",
    "price": "139.0",
    "unit": "FOR 3PCS",
    "category": "WOODEN 3 PCS",
    "department": "Glassware",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SP-220A-L3",
    "desc": "SOWA PARIS BOROSILICATE JAR WDN LID 220 ML SQUARE 3 PC COL BOX 16 SET CTN",
    "price": "145.0",
    "unit": "FOR 3PCS",
    "category": "WOODEN 3 PCS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SP-320-L3",
    "desc": "SOWA PARIS BOROSILICATE JAR WDN LID 320 ML ROUND 3 PC COL BOX 16 SET CTN",
    "price": "160.0",
    "unit": "FOR 3PCS",
    "category": "WOODEN 3 PCS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SP-270A-L3",
    "desc": "SOWA PARIS BOROSILICATE JAR WDN LID 270 ML SQUARE 3 PC COL BOX 16 SET CTN",
    "price": "165.0",
    "unit": "FOR 3PCS",
    "category": "WOODEN 3 PCS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SP-320A-L3",
    "desc": "SOWA PARIS BOROSILICATE JAR WDN LID 320 ML SQUARE 3 PC COL BOX 16 SET CTN",
    "price": "180.0",
    "unit": "FOR 3PCS",
    "category": "WOODEN 3 PCS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "HMFG60-900",
    "desc": "DELI SOGA STEEL LID JAR 900 ML 6 PC CRAFT BOX 36 PCS CTN",
    "price": "90.0",
    "unit": "FOR 1PCS",
    "category": "GLASS JAR",
    "department": "Glassware",
    "moq": 24,
    "status": "In Stock"
  },
  {
    "code": "HMFG60-1200",
    "desc": "DELI SOGA STEEL LID JAR 1200 ML 6 PC CRAFT BOX 24 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "GLASS JAR",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "HMFG56S-1800",
    "desc": "DELI SOGA PP LID JAR 1800 ML COL BOX 12 PCS CTN",
    "price": "130.0",
    "unit": "FOR 1PCS",
    "category": "GLASS JAR",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "HMFG57S-1800",
    "desc": "DELI ROUND BROWN LID JAR 1800 ML IN COL BOX 12 PCS CTN",
    "price": "135.0",
    "unit": "FOR 1PCS",
    "category": "GLASS JAR",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "HMFG57S-2500",
    "desc": "DELI SOGA PP LID JAR 2500 ML COL BOX 12 PCS CTN",
    "price": "150.0",
    "unit": "FOR 1PCS",
    "category": "GLASS JAR",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "TAG-350-1",
    "desc": "STEEL CANISTER INNER GLASS 325 ML 1 PC COLOR BOX 48 PCS CTN",
    "price": "75.0",
    "unit": "FOR 1PCS",
    "category": "CANISTER",
    "department": "Glassware",
    "moq": 24,
    "status": "In Stock"
  },
  {
    "code": "TAG-350-2",
    "desc": "STEEL CANISTER INNER GLASS 325 ML 2 PC COLOR BOX 24 SET CTN",
    "price": "140.0",
    "unit": "FOR 2PCS",
    "category": "CANISTER",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "TAG-350-3",
    "desc": "STEEL CANISTER INNER GLASS 325 ML 3 PC COLOR BOX 24 SET CTN",
    "price": "210.0",
    "unit": "FOR 3PCS",
    "category": "CANISTER",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBT-921-L3",
    "desc": "SHINE MAX BAKEWARE SET 0.9L+1.1L+1.8L COL BOX - 8 SET CTN",
    "price": "500.0",
    "unit": "FOR 3 PCS",
    "category": "GLASS BAKEWARE",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBT-901-L3",
    "desc": "SHINE MAX BAKEWARE SET (1L+1.6L+2.2L) COL BOX-6 SET CTN",
    "price": "600.0",
    "unit": "FOR 3PCS",
    "category": "GLASS BAKEWARE",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBT-911-L3",
    "desc": "SHINE MAX BAKEWARE SET 1.5L+2L+3L COL BOX - 6 SET CTN",
    "price": "620.0",
    "unit": "FOR 3 PCS",
    "category": "GLASS BAKEWARE",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBB01-2600G",
    "desc": "SHINE MAX DISPENSER PLAIN 2600 ML WITH STAND 16 SET CTN",
    "price": "575.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBB01-2600E",
    "desc": "SHINE MAX DISPENSER PRINTED 2600 ML WITH STAND 16 SET CTN",
    "price": "600.0",
    "unit": "FOR 1PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBB01-2600-BE",
    "desc": "SHINE MAX DISPENSER PRINTED 2600 ML WITH STAND 16 SET CTN",
    "price": "650.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB02-3600G",
    "desc": "SHINE MAX DISPENSER PLAIN 3600 ML WITH STAND 12 SET CTN",
    "price": "700.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBB11-3200-B",
    "desc": "SHINE MAX SQUARE DISPENSER PLAIN 3200 ML WITH STAND 16 SET CTN",
    "price": "725.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB11-3200G",
    "desc": "SHINE MAX DISPENSER SQUARE 3200 ML WITH STAND 16 SET CTN",
    "price": "750.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBB01-3600E",
    "desc": "SHINE MAX DISPENSER PRINTED 3600 ML WITH STAND 12 SET CTN",
    "price": "750.0",
    "unit": "FOR 1PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBB11-3200-BE",
    "desc": "SHINE MAX SQUARE DISPENSER PRINTED 3200 ML WITH STAND 16 SET CTN",
    "price": "775.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB11-3200-GE",
    "desc": "SHINE MAX SQUARE DISPENSER PRINTED 3200 ML WITH STAND 16 SET CTN",
    "price": "775.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB12-4200-B",
    "desc": "SHINE MAX SQUARE DISPENSER PLAIN 4200 ML WITH STAND 12 SET CTN",
    "price": "775.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB12-4200-G",
    "desc": "SHINE MAX SQUARE DISPENSER PLAIN 4200 ML WITH STAND 12 SET CTN",
    "price": "775.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB12-4200-BE",
    "desc": "SHINE MAX SQUARE DISPENSER PRINTED 4200 ML WITH STAND 12 SET CTN",
    "price": "850.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB12-4200-GE",
    "desc": "SHINE MAX SQUARE DISPENSER PRINTED 4200 ML WITH STAND 12 SET CTN",
    "price": "850.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB03-L3-G",
    "desc": "SHINE MAX DISPENSER 5.5L (1.85*3) 1 PC COL BOX 8 SET CTN",
    "price": "1350.0",
    "unit": "FOR 1PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 1,
    "status": "In Stock"
  },
  {
    "code": "CTDP714-L8-HA",
    "desc": "SHINEMAX DISPENSER SET 2800ML+330ML GIFT BOX PACK 4 SET CTN",
    "price": "2050.0",
    "unit": "FOR 1 SET",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "CTDP714-L8-HS",
    "desc": "SHINEMAX DISPENSER SET 2800ML+330ML GIFT BOX PACK 4 SET CTN",
    "price": "2050.0",
    "unit": "FOR 1 SET",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "LXGP001",
    "desc": "LANGXU BUBBLE PLATE - 16 PC CTN",
    "price": "135.0",
    "unit": "FOR 1PCS",
    "category": "FRUIT PLATE",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXGP002",
    "desc": "LANGXU BUBBLE PLATE 11 INCHES- 12 PCS CTN",
    "price": "220.0",
    "unit": "FOR 1PCS",
    "category": "FRUIT PLATE",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXGP003",
    "desc": "LANGXU BUBBLE PLATE 14 INCHES 8 PCS CTN",
    "price": "300.0",
    "unit": "FOR 1PCS",
    "category": "FRUIT PLATE",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXW116",
    "desc": "LANGXU ROUND BOWL 325 ML 4 PCS SET COLOR BOX 16 SET CTN",
    "price": "170.0",
    "unit": "FOR 4PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXW132-1",
    "desc": "SHINEMAX SQUARE BOWL 150 ML 6 PCS SET COLOR BOX 12 SET CTN",
    "price": "190.0",
    "unit": "FOR 6 PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB216",
    "desc": "SHINEMAX SQUARE BOWL 2000 ML 1 PCS SET COLOR BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 1PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMB215",
    "desc": "SHINE MAX SQUARE BOWL 1150 ML 2 PC COL BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 2 PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMB213",
    "desc": "SHINEMAX SQUARE BOWL 300 ML 6 PCS SET COLOR BOX 12 SET CTN",
    "price": "240.0",
    "unit": "FOR 6 PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXW115",
    "desc": "LANGXU ROUND BOWL 1250 ML 2 PCS SET COLOR BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 2PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXW113",
    "desc": "LANGXU ROUND BOWL 700 ML 4 PCS SET COLOR BOX 12 SET CTN",
    "price": "300.0",
    "unit": "FOR 4PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXGW002",
    "desc": "LANGXU BUBBLE FRUIT BOWL 11.5 INCHES COL BOX 8 SET CTN",
    "price": "350.0",
    "unit": "FOR 1PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXW127-2",
    "desc": "LANGXU SLANT BOWL 700 ML 2 PCS BOX 6 SET CTN",
    "price": "400.0",
    "unit": "FOR 2PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "LXW112",
    "desc": "LANGXU ROUND BOWL 2200 ML 2 PCS SET COLOR BOX 6 SET CTN",
    "price": "440.0",
    "unit": "FOR 2PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "KRF008A-B",
    "desc": "KARBON STAND FRUIT BOWL 10 INCHES COL BOX 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS COLORED BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRF008B-B",
    "desc": "KARBON STAND FRUIT BOWL 10 INCHES COL BOX 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS COLORED BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRF008C-B",
    "desc": "KARBON STAND FRUIT BOWL 10 INCHES COL BOX 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS COLORED BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRF008A-G",
    "desc": "KARBON STAND FRUIT BOWL 10 INCHES COL BOX 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS COLORED BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "KRF008C-G",
    "desc": "KARBON STAND FRUIT BOWL 10 INCHES COL BOX 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS COLORED BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMBP02-2500-G",
    "desc": "SHINE MAX BIRYANI SERVING BOWL 2500 ML COL BOX 12 PC CTN",
    "price": "400.0",
    "unit": "FOR 1 PCS",
    "category": "BORO SERVING BOWL",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBP122A-B",
    "desc": "SHINE MAX SERVING BOWL 2250 ML COL BOX 12 PC CTN",
    "price": "480.0",
    "unit": "FOR 1 PCS",
    "category": "BORO SERVING BOWL",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBP122A-G",
    "desc": "SHINE MAX SERVING BOWL 2250 ML COL BOX 12 PC CTN",
    "price": "480.0",
    "unit": "FOR 1 PCS",
    "category": "BORO SERVING BOWL",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBP125",
    "desc": "SHINE MAX BIRYANI SERVING BOWL 2500 ML COL BOX 12 PC CTN",
    "price": "670.0",
    "unit": "FOR 1 PCS",
    "category": "BORO SERVING BOWL",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBP125-B",
    "desc": "SHINE MAX BIRYANI SERVING BOWL 2500 ML COL BOX 12 PC CTN",
    "price": "725.0",
    "unit": "FOR 1 PCS",
    "category": "BORO SERVING BOWL",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "SMBP125-G",
    "desc": "SHINE MAX BIRYANI SERVING BOWL 2500 ML COL BOX 12 PC CTN",
    "price": "725.0",
    "unit": "FOR 1 PCS",
    "category": "BORO SERVING BOWL",
    "department": "Glassware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "LXHP19B-30",
    "desc": "LANGXU FLOWER VASE 11 INCHES COL BOX 8 SET CTN",
    "price": "360.0",
    "unit": "FOR 1PCS",
    "category": "FLOWER POT",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "LXYG7116-4",
    "desc": "LANG XU ASH TRAY 1 PC COLOR BOX 48 PCS CTN",
    "price": "55.0",
    "unit": "FOR 1 PCS",
    "category": "ASH TRAY",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "BW602-320",
    "desc": "HOME FOCUS RECTANGLE BOWL WITH LID 320 ML BULK PACK 48 PCS CTN",
    "price": "70.0",
    "unit": "FOR 1PCS",
    "category": "GLASS LUNCH BOX",
    "department": "Glassware",
    "moq": 24,
    "status": "In Stock"
  },
  {
    "code": "LXYG7116-3",
    "desc": "LANG XU ASH TRAY 1 PC COLOR BOX 36 PCS CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "ASH TRAY",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBW602-320",
    "desc": "SHINE MAX SQAURE BOWL WITH LID 320 ML COL BOX 48 PCS CTN",
    "price": "95.0",
    "unit": "FOR 1PCS",
    "category": "GLASS LUNCH BOX",
    "department": "Glassware",
    "moq": 24,
    "status": "In Stock"
  },
  {
    "code": "SMBW601-375",
    "desc": "SHINE MAX ROUND BOWL WITH LID 375 ML COL BOX 48 PCS CTN",
    "price": "100.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS LUNCH BOX",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBW603-350",
    "desc": "SHINE MAX RECTANGLE BOWL WITH LID 350 ML COL BOX 48 PCS CTN",
    "price": "100.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS LUNCH BOX",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "RE-600",
    "desc": "TAG RECTANGLE BOWL WITH LID 600 ML COLOR BOX 36 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "GLASS LUNCH BOX",
    "department": "Glassware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "KJG071A",
    "desc": "KARBON JUG 1000 ML COLOR BOX PACKING 12 SET CTN",
    "price": "120.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG071B",
    "desc": "KARBON JUG 1000 ML COLOR BOX PACKING 12 SET CTN",
    "price": "120.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG072A",
    "desc": "KARBON JUG 1000 ML COLOR BOX PACKING 12 SET CTN",
    "price": "120.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG072B",
    "desc": "KARBON JUG 1000 ML COLOR BOX PACKING 12 SET CTN",
    "price": "120.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG071A-B",
    "desc": "KARBON JUG 1000 ML COLOR BOX PACKING 12 SET CTN",
    "price": "140.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG071B-B",
    "desc": "KARBON JUG 1000 ML COLOR BOX PACKING 12 SET CTN",
    "price": "140.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG072A-B",
    "desc": "KARBON JUG 1000 ML COLOR BOX PACKING 12 SET CTN",
    "price": "140.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG072B-B",
    "desc": "KARBON JUG 1000 ML COLOR BOX PACKING 12 SET CTN",
    "price": "140.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "RE-1000",
    "desc": "TAG RECTANGLE BOWL WITH LID 1000 ML COLOR BOX 24 PCS CTN",
    "price": "150.0",
    "unit": "FOR 1PCS",
    "category": "GLASS LUNCH BOX",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "RE-1500",
    "desc": "TAG RECTANGLE BOWL WITH LID 1500 ML BULK PACK 16 PCS CTN",
    "price": "180.0",
    "unit": "FOR 1PCS",
    "category": "GLASS LUNCH BOX",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMH95A-1L-B",
    "desc": "SHINEMAX BOROSILICATE KETTLE/KAWA JUG 1 LTR COL BOX 24 PCS CTN",
    "price": "190.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH95A-1L-G",
    "desc": "SHINEMAX BOROSILICATE KETTLE/KAWA JUG 1 LTR COL BOX 24 PCS CTN",
    "price": "190.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH95B-1L-B",
    "desc": "SHINEMAX BOROSILICATE KETTLE/KAWA JUG 1 LTR COL BOX 24 PCS CTN",
    "price": "190.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH95C-1L-B",
    "desc": "SHINEMAX BOROSILICATE KETTLE/KAWA JUG 1 LTR COL BOX 24 PCS CTN",
    "price": "190.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC606",
    "desc": "SHINE MAX LOTUS ICE CUP 140 ML 6 PC COL BOX 12 SET CTN",
    "price": "200.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH95A-1.5L-B",
    "desc": "SHINEMAX BOROSILICATE KETTLE/KAWA JUG 1.5 LTR COL BOX 24 PCS CTN",
    "price": "220.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH95A-1.5L-G",
    "desc": "SHINEMAX BOROSILICATE KETTLE/KAWA JUG 1.5 LTR COL BOX 24 PCS CTN",
    "price": "220.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH95B-1.5L-B",
    "desc": "SHINEMAX BOROSILICATE KETTLE/KAWA JUG 1.5 LTR COL BOX 24 PCS CTN",
    "price": "220.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH95B-1.5L-G",
    "desc": "SHINEMAX BOROSILICATE KETTLE/KAWA JUG 1.5 LTR COL BOX 24 PCS CTN",
    "price": "220.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656I",
    "desc": "SHINE MAX FISH ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656D",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656G",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656I-",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC\nCOL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC606-B",
    "desc": "SHINE MAX NEW ICE CUP 140 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC606-G",
    "desc": "SHINE MAX NEW ICE CUP 140 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC626-B",
    "desc": "SHINE MAX NEW ICE CUP 140 ML 6 PC COL BOX 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656B-B",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656B-G",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656C-B",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656C-G",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656E-B",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656E-G",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656G-B",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656G-G",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656H-B",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656H-G",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656I-B",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656I-G",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656J-B",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656J-G",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656A-B",
    "desc": "SHINE MAX NEW ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-616",
    "desc": "SHINEMAX PREMIUM 2+1 WOODEN STAND GIFT BOX PACK 24 SET CTN",
    "price": "435.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 24,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP011-L7",
    "desc": "SHINEMAX 7 PCS ROUND SNACK SET GIFT BOX PACK 6 SET CTN",
    "price": "475.0",
    "unit": "FOR 1 SET",
    "category": "SNACK SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-610",
    "desc": "SHINEMAX PREMIUM 2+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "475.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 24,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-611",
    "desc": "SHINEMAX PREMIUM 2+1 WOODEN STAND GIFT BOX PACK 24 SET CTN",
    "price": "475.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 24,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP011-L7B",
    "desc": "SHINEMAX 7 PCS ROUND SNACK SET GIFT BOX PACK 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 1 SET",
    "category": "SNACK SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-713-G",
    "desc": "SHINEMAX PREMIUM 2+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 12 SET CTN",
    "price": "675.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-713-G1",
    "desc": "SHINEMAX PREMIUM 2+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 12 SET CTN",
    "price": "675.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-713-G2",
    "desc": "SHINEMAX PREMIUM 2+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 12 SET CTN",
    "price": "675.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-613",
    "desc": "SHINEMAX PREMIUM 3+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "750.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-614",
    "desc": "SHINEMAX PREMIUM 3+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "775.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-608",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "800.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-603",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "825.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-604",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "850.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-605",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "850.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-609",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "850.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-601",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "875.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-606",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "900.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-607",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "900.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-602",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX PACK 12 SET CTN",
    "price": "900.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP051A-L7B",
    "desc": "SHINEMAX 7 PCS SQUARE SNACK SET GIFT BOX PACK 4 SET CTN",
    "price": "1000.0",
    "unit": "FOR 1 SET",
    "category": "SNACK SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP051C-L7G",
    "desc": "SHINEMAX 7 PCS SQUARE SNACK SET GIFT BOX PACK 4 SET CTN",
    "price": "1000.0",
    "unit": "FOR 1 SET",
    "category": "SNACK SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP051B-L7B",
    "desc": "SHINEMAX 7 PCS SQUARE SNACK SET GIFT BOX PACK 4 SET CTN",
    "price": "1000.0",
    "unit": "FOR 1 SET",
    "category": "SNACK SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP051B-L7G",
    "desc": "SHINEMAX 7 PCS SQUARE SNACK SET GIFT BOX PACK 4 SET CTN",
    "price": "1000.0",
    "unit": "FOR 1 SET",
    "category": "SNACK SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP051C-L7B",
    "desc": "SHINEMAX 7 PCS SQUARE SNACK SET GIFT BOX PACK 4 SET CTN",
    "price": "1000.0",
    "unit": "FOR 1 SET",
    "category": "SNACK SET",
    "department": "Glassware",
    "moq": 1,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-719-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 12 SET CTN",
    "price": "1025.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-714-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 8 SET CTN",
    "price": "1050.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-714-G1",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 8 SET CTN",
    "price": "1050.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-714-G2",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 8 SET CTN",
    "price": "1050.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-719-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON TRAY STAND GIFT BOX PACK 12 SET CTN",
    "price": "1100.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-714-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON TRAY STAND GIFT BOX PACK 8 SET CTN",
    "price": "1125.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-714-S1",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON TRAY STAND GIFT BOX PACK 8 SET CTN",
    "price": "1125.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-714-S2",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON TRAY STAND GIFT BOX PACK 8 SET CTN",
    "price": "1125.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-720-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON TRICYCLE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1225.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-708-G",
    "desc": "SHINEMAX PREMIUM 3+1 GOLDEN PEACOCK TRAY STAND GIFT BOX PACK 8 SET CTN",
    "price": "1225.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-708-S",
    "desc": "SHINEMAX PREMIUM 3+1 SILVER IRON PEACOCK TRAY STAND GIFT BOX PACK 8 SET CTN",
    "price": "1225.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-720-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON TRICYCLE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1275.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-711-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON CURVE HANDLE STAND GIFT BOX PACK 8 SET CTN",
    "price": "1350.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-715-G",
    "desc": "SHINEMAX PREMIUM 6+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1400.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-715-G1",
    "desc": "SHINEMAX PREMIUM 6+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1400.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-715-G2",
    "desc": "SHINEMAX PREMIUM 6+1 GOLDEN IRON TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1400.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-716-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1450.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-701-S",
    "desc": "SHINEMAX PREMIUM 2+1 SILVER IRON 2 HORSE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1475.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-709-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON PEACOCK TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1475.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-715-S",
    "desc": "SHINEMAX PREMIUM 6+1 SILVER IRON TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1475.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-715-S1",
    "desc": "SHINEMAX PREMIUM 6+1 SILVER IRON TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1475.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-715-S2",
    "desc": "SHINEMAX PREMIUM 6+1 SILVER IRON TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1475.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-703-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON 2 HORSE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1525.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-709-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON PEACOCK TRAY STAND GIFT BOX PACK 6 SET CTN",
    "price": "1525.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-707-G",
    "desc": "SHINEMAX PREMIUM 3+1 GOLDEN IRON 1 BIG HORSE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1600.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-705-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON 1 BIG HORSE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1625.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-706-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON 1 BIG ELEPHANT STAND GIFT BOX PACK 6 SET CTN",
    "price": "1650.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-707-S",
    "desc": "SHINEMAX PREMIUM 3+1 SILVER IRON 1 BIG HORSE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1650.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-703-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON 2 HORSE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1675.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-705-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON 1 BIG HORSE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1675.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-712-S",
    "desc": "SHINEMAX PREMIUM 6+1 SILVER IRON CURVE HANDLE STAND GIFT BOX PACK 6 SET CTN",
    "price": "1875.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "EMP-99",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "75.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-11",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "80.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-54",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "80.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-81B",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "80.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP--81W",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "80.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-50",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "85.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-41",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-67",
    "desc": "EMPIRE ACRYLIC DISPENSER BULK PACKING 144 PCS CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-66",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-70",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "125.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-174",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "170.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-114",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "175.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-178",
    "desc": "EMPIRE ACRYLIC SOAP DISPENSER BULK PACK 144 PCS CTN",
    "price": "190.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "1321-1",
    "desc": "EMPIRE ACRYLIC SIPPER BOX PACK 60 PCS CTN",
    "price": "125.0",
    "unit": "FOR 1 PCS",
    "category": "ACRYLIC SIPPER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "1321-2",
    "desc": "EMPIRE ACRYLIC SIPPER BOX PACK 60 PCS CTN",
    "price": "125.0",
    "unit": "FOR 1 PCS",
    "category": "ACRYLIC SIPPER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "1321-3",
    "desc": "EMPIRE ACRYLIC SIPPER BOX PACK 60 PCS CTN",
    "price": "125.0",
    "unit": "FOR 1 PCS",
    "category": "ACRYLIC SIPPER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "1321-4",
    "desc": "EMPIRE ACRYLIC SIPPER BOX PACK 60 PCS CTN",
    "price": "125.0",
    "unit": "FOR 1 PCS",
    "category": "ACRYLIC SIPPER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "1321-5",
    "desc": "EMPIRE ACRYLIC SIPPER BOX PACK 60 PCS CTN",
    "price": "125.0",
    "unit": "FOR 1 PCS",
    "category": "ACRYLIC SIPPER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "1321-6",
    "desc": "EMPIRE ACRYLIC SIPPER BOX PACK 60 PCS CTN",
    "price": "125.0",
    "unit": "FOR 1 PCS",
    "category": "ACRYLIC SIPPER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "1321-7",
    "desc": "EMPIRE ACRYLIC SIPPER BOX PACK 60 PCS CTN",
    "price": "145.0",
    "unit": "FOR 1 PCS",
    "category": "ACRYLIC SIPPER",
    "department": "Kitchenware",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "1321-12",
    "desc": "EMPIRE ACRYLIC SIPPER BOX PACK 60 PCS CTN",
    "price": "145.0",
    "unit": "FOR 1 PCS",
    "category": "ACRYLIC SIPPER",
    "department": "Kitchenware",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "WDN-3PCS",
    "desc": "WOODEN MDF TRAY 3 PCS BRISTLE PACK 4 COLOR MIX IN CTN 12 SET CTN",
    "price": "285.0",
    "unit": "FOR 3PCS",
    "category": "TRAY",
    "department": "Kitchenware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "WSS",
    "desc": "PORCELAIN WHITE SOUP SPOON BULK PACK 800 PCS CTN",
    "price": "15.0",
    "unit": "FOR 1 PCS",
    "category": "SPOON",
    "department": "Kitchenware",
    "moq": 100,
    "status": "In Stock"
  },
  {
    "code": "EMP-TP48-12",
    "desc": "EMPIRE SALT/PEPPER JAR  12 PCS INNER 144 PC CTN",
    "price": "33.0",
    "unit": "FOR 1 PCS",
    "category": "SALT PEPPER",
    "department": "Kitchenware",
    "moq": 36,
    "status": "In Stock"
  },
  {
    "code": "JARA 14",
    "desc": "ANMOL JARA 14 INCH BACK SUPPORTED JARA BULK PACK 100 PCS CTN",
    "price": "50.0",
    "unit": "FOR 1 PCS",
    "category": "MISC",
    "department": "Kitchenware",
    "moq": 100,
    "status": "In Stock"
  },
  {
    "code": "WSB",
    "desc": "PORCELAIN SERVING SPOON  BIG 24 CM 200 PCS CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "SPOON",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "WSEB",
    "desc": "PORCELAIN SERVING SPOON EXTRA BIG 28 CM 200 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1 PCS",
    "category": "SPOON",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "EMP-TP48-SET",
    "desc": "SALT PEPPER STAND COLOR BOX PACKING 72 SET CTN",
    "price": "112.0",
    "unit": "FOR 1 SET",
    "category": "SALT PEPPER",
    "department": "Kitchenware",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "GARLIC BLADE",
    "desc": "GARLIC BLADE COMPATIBLE WITH ANMOL 2L CHOOPER 100 PCS CTN",
    "price": "150.0",
    "unit": "FOR 1 PCS",
    "category": "MISC",
    "department": "Kitchenware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "BOHEMIC-2PC",
    "desc": "BOHEMIA BOWL SET 2 PC GIFT BOX 50 SET IN CTN",
    "price": "200.0",
    "unit": "FOR 1 SET",
    "category": "CERAMIC BOWL SET",
    "department": "Kitchenware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "CHOPPING BOARD",
    "desc": "CHOPPING BOARD 3 SIZES BULK PACK 12 SET CTN",
    "price": "250.0",
    "unit": "FOR 1 SET",
    "category": "MISC",
    "department": "Kitchenware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "FOOD WARMER",
    "desc": "FOOD WARMER BOWL SET COL BOX MIX COLOR 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 1 SET",
    "category": "MISC",
    "department": "Kitchenware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "BOHEMIA-4PC",
    "desc": "BOHEMIA 4 PCS BOWL SET GIFT BOX PACK 24 SET IN CTN",
    "price": "325.0",
    "unit": "FOR 1 SET",
    "category": "CERAMIC BOWL SET",
    "department": "Kitchenware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "ANMOL SS KETTLE",
    "desc": "ANMOL ELECTRIC KETTLE 1.8 LTR COL BOX 12 PCS CTN",
    "price": "350.0",
    "unit": "FOR 1 PCS",
    "category": "ELECTRIC KETTLE",
    "department": "Kitchenware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "EMP-115",
    "desc": "ANMOL MULTIPURPOSE STAND WITH COL BOX 36 PCS IN CTN",
    "price": "360.0",
    "unit": "FOR 1 PCS",
    "category": "MULTIPURPOSE STAND",
    "department": "Kitchenware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "ANMOL PP CUTLERY",
    "desc": "ANMOL PP CUTLERY COLOR BOX PACKING 4 COL MIX 12 SET CTN",
    "price": "400.0",
    "unit": "FOR 1 SET",
    "category": "CUTLERY SET",
    "department": "Kitchenware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "METAL TRAY",
    "desc": "ANMOL METAL TRAY 3 PCS SET COLOR BOX 20 SET IN CTN",
    "price": "400.0",
    "unit": "FOR 1 SET",
    "category": "MISC",
    "department": "Kitchenware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "BOHEMIA-6PC",
    "desc": "BOHEMIA 6 PCS BOWL SET GIFT BOX 20 SET IN CTN",
    "price": "450.0",
    "unit": "FOR 1 SET",
    "category": "CERAMIC BOWL SET",
    "department": "Kitchenware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "CHOPPER 2L",
    "desc": "ANMOL ELECTRIC CHOPPER 2L COLOR BOX MIX COLOR 20 PCS IN CTN",
    "price": "700.0",
    "unit": "FOR 1 PCS",
    "category": "ELECTRIC CHOPPER",
    "department": "Kitchenware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "CHOPPER 3L",
    "desc": "ANMOL ELECTRIC CHOPPER 3L COLOR BOX MIX COLOR 16 PCS IN CTN",
    "price": "850.0",
    "unit": "FOR 1 PCS",
    "category": "ELECTRIC CHOPPER",
    "department": "Kitchenware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "CHOPPER 4 IN 1",
    "desc": "ANMOL CHOPPER 4 IN 1 WITH 4 BOWL AND 2 BLADES 24 PCS IN CTN",
    "price": "850.0",
    "unit": "FOR 1 PCS",
    "category": "ELECTRIC CHOPPER",
    "department": "Kitchenware",
    "moq": 2,
    "status": "In Stock"
  },
  {
    "code": "PNP-001",
    "desc": "ANMOL PINEAPPLE CUTLERY SET COL BOX 8 SET CTN",
    "price": "1200.0",
    "unit": "FOR 1 SET",
    "category": "MISC",
    "department": "Kitchenware",
    "moq": 1,
    "status": "In Stock"
  },
  {
    "code": "AM-786-5",
    "desc": "ANMOL 38 PCS NEW BONE CHINA DINNE SET POLYFOAM PACKNG 1 SET CTN",
    "price": "4000.0",
    "unit": "FOR 1 SET",
    "category": "DINNER SET",
    "department": "Kitchenware",
    "moq": 1,
    "status": "In Stock"
  },
  {
    "code": "AM-786-4",
    "desc": "ANMOL 38 PCS NEW BONE CHINA DINNE SET POLYFOAM PACKNG 1 SET CTN",
    "price": "4000.0",
    "unit": "FOR 1 SET",
    "category": "DINNER SET",
    "department": "Kitchenware",
    "moq": 1,
    "status": "In Stock"
  },
  {
    "code": "AM-786-3",
    "desc": "ANMOL 38 PCS NEW BONE CHINA DINNE SET POLYFOAM PACKNG 1 SET CTN",
    "price": "4000.0",
    "unit": "FOR 1 SET",
    "category": "DINNER SET",
    "department": "Kitchenware",
    "moq": 1,
    "status": "In Stock"
  },
  {
    "code": "AM-786-2",
    "desc": "ANMOL 38 PCS NEW BONE CHINA DINNE SET POLYFOAM PACKNG 1 SET CTN",
    "price": "4000.0",
    "unit": "FOR 1 SET",
    "category": "DINNER SET",
    "department": "Kitchenware",
    "moq": 1,
    "status": "In Stock"
  },
  {
    "code": "AM-786-1",
    "desc": "ANMOL 38 PCS NEW BONE CHINA DINNE SET POLYFOAM PACKNG 1 SET CTN",
    "price": "4000.0",
    "unit": "FOR 1 SET",
    "category": "DINNER SET",
    "department": "Kitchenware",
    "moq": 1,
    "status": "In Stock"
  },
  {
    "code": "PP-900-281",
    "desc": "PLASTIC  CHARCTER BOTTLE BULK PACKING 100 PCS CTN",
    "price": "55.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 100,
    "status": "In Stock"
  },
  {
    "code": "PP-900-282",
    "desc": "PLASTIC  CHARCTER BOTTLE BULK PACKING 100 PCS CTN",
    "price": "55.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 100,
    "status": "In Stock"
  },
  {
    "code": "PP-900-283",
    "desc": "PLASTIC  CHARCTER BOTTLE BULK PACKING 100 PCS CTN",
    "price": "55.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 100,
    "status": "In Stock"
  },
  {
    "code": "PP-900-284",
    "desc": "PLASTIC  CHARCTER BOTTLE BULK PACKING 100 PCS CTN",
    "price": "55.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 100,
    "status": "In Stock"
  },
  {
    "code": "PP-900-285",
    "desc": "PLASTIC  CHARCTER BOTTLE BULK PACKING 100 PCS CTN",
    "price": "55.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 100,
    "status": "In Stock"
  },
  {
    "code": "PP-900-286",
    "desc": "PLASTIC  CHARCTER BOTTLE BULK PACKING 100 PCS CTN",
    "price": "55.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 100,
    "status": "In Stock"
  },
  {
    "code": "EMP150",
    "desc": "JMAX STEEL SINGL WALL BOTTLE 1000 ML COLOR BOX 60 PCS CTN",
    "price": "105.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 60,
    "status": "In Stock"
  },
  {
    "code": "EMP300",
    "desc": "JMAX STEEL SINGL WALL BOTTLE 1000 ML COLOR BOX 60 PCS CTN",
    "price": "105.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 60,
    "status": "In Stock"
  },
  {
    "code": "EMP450",
    "desc": "JMAX STEEL SINGL WALL BOTTLE 1000 ML COLOR BOX 60 PCS CTN",
    "price": "105.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 60,
    "status": "In Stock"
  },
  {
    "code": "HK-420-2",
    "desc": "STEEL POCKET BOTTLE 300 ML COL BOX 100 PCS CTN",
    "price": "152.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "DEPKI-PRINTED",
    "desc": "STEEL BOTTLE 350 ML MIX PRINT COL BOX 120 PCS CTN",
    "price": "165.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "DEPKI-CAPCOLOR",
    "desc": "350ML STEEL BOTTLE CAP COLOR BOX 120 PCS CTN",
    "price": "165.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "HK-510ML",
    "desc": "STEEL BOTTLE COFFEE CUP / SIPPER 510 ML COL BOX 50 PCS CTN",
    "price": "175.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "ND-800",
    "desc": "STEEL SLIM BOTTLE 800 ML COLOR BOX MIX COLOR 50",
    "price": "180.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "8725",
    "desc": "STEEL BOTTLE 500 ML PUSH BUTTON COL BOX MIX CHARACTER 50 PCS CTN",
    "price": "190.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "HK-001",
    "desc": "STEEL BOTTLE 500 ML COL BOX MIX PRINT 50 PCS CTN",
    "price": "200.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "ND-1000",
    "desc": "STEEL BOTTLE  1000 ML COL BOX MIX COLOR 50 PCS CTN",
    "price": "200.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SML CAP 800",
    "desc": "STEEL SMALL CAP BOTTLE 800 ML COLOR BOX MIX COLOR 50 PCS CTN",
    "price": "200.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "TEMP CUP",
    "desc": "STEEL TEMPRATURE CUP 510 ML COL BOX MIX PRINT 50 PCS CTN",
    "price": "200.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "HK-420-9",
    "desc": "STEEL SMALL CAP BOTTLE 800 ML COLOR BOX MIX COLOR 50",
    "price": "210.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "KND-1000",
    "desc": "STEEL BOTTLE  1000 ML COL BOX MIX COLOR 50 PCS CTN",
    "price": "215.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SD-800",
    "desc": "STEEL BOTTLE  800 ML COL BOX MIX COLOR 50 PCS CTN",
    "price": "215.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SP-500",
    "desc": "SOWA PARIS COLA BOTTLE HOT & COLD 500 ML COLOR BOX 60 PCS CTN",
    "price": "225.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 12,
    "status": "In Stock"
  },
  {
    "code": "HK-900",
    "desc": "STEEL HANDLE  SIPPER 900 ML COLOR BOX 50 PCS CTN",
    "price": "240.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "7744",
    "desc": "STEEL BOTTLE 500 ML COL BOX MIX COLOR 50 PCS CTN",
    "price": "240.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "82018",
    "desc": "STEEL BOTTLE 500 ML COL BOX MIX PRINT 50 PCS CTN",
    "price": "240.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SD-1000",
    "desc": "STEEL BOTTLE  1000 ML COL BOX MIX COLOR 50 PCS CTN",
    "price": "245.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "HK-750",
    "desc": "STEEL BOTTLE 750 ML BEER SHAPE BOTTLE COL BOX MIX COLOR 50 PCS CTN",
    "price": "250.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "HK-420-4",
    "desc": "STEEL BOTTLE 600 ML PUSH BUTTON COL BOX DISNEY CHARACTER 50 PCS CTN",
    "price": "260.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "BULLET-500",
    "desc": "STEEL FLASK 500 ML WITH POUCH COL BOX 50 PCS CTN",
    "price": "260.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "C-1000",
    "desc": "STEEL COLA BOTTLE WITHOUT LOGO 1000 ML WHITE BOX 30 PCS CTN",
    "price": "265.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "HK-1000",
    "desc": "STEEL BOTTLES 1000 ML WHITE BOX PACKING 2 COLORS 40 PCS CTN",
    "price": "265.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "HK-005",
    "desc": "STEEL BOTTLE 600 ML COL BOX MIX PRINT 50 PCS CTN",
    "price": "280.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "HK-800",
    "desc": "STEEL BOTTLES WITH STRAW AND PUSH BUTTON COLOR BOX 30 PCS CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "ANTLER CUP",
    "desc": "STEEL BOTTLE ANTLER WITH EXTRA CUP 550 ML COL BOX 50 PCS CTN",
    "price": "285.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "8193",
    "desc": "STEEL BOTTLE 600 ML COL BOX SIPPER CAP MIX PRINT 50 PCS CTN",
    "price": "290.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SP-750",
    "desc": "STEEL COLA BOTTLE SOWA PARIS 750 ML COLOR BOX 40 PCS CTN",
    "price": "295.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "1200-TUMBLER-BLK",
    "desc": "STEEL TUMBLER 1200 ML WHITE BOX BLACK COLOR 25 PCS CTN",
    "price": "310.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "1200-TUMBLER-MIX",
    "desc": "STEEL TUMBLER 1200 ML WHITE BOX MIX COLOR 25 PCS CTN",
    "price": "310.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "8173",
    "desc": "STEEL BOTTLE 600 ML COL BOX PUSH BUTTON MIX PRINT 50 PCS CTN",
    "price": "310.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "8202",
    "desc": "STEEL BOTTLE 600 ML COL BOX PUSH BUTTON MIX PRINT 50 PCS CTN",
    "price": "320.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SP-1000",
    "desc": "SOWA PARIS COLA BOTTLE 1000 ML COLOR BOX 40 PCS CTN",
    "price": "340.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "STANLEY-500",
    "desc": "STANLEY LOGO 500  ML SIDE HANDLE OG BOX 50 PCS CTN",
    "price": "340.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "BULLET-750",
    "desc": "STEEL FLASK 750 ML WITH POUCH COL BOX 40 PCS CTN",
    "price": "350.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "BULLET-1000",
    "desc": "STEEL FLASK 1000 ML WITH POUCH COL BOX 40 PCS CTN",
    "price": "385.0",
    "unit": "FOR 1PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SP-2200",
    "desc": "SOWA PARIS COLA BOTTLE 2200 ML WITH HANDLE COLOR BOX 25 PCS CTN",
    "price": "650.0",
    "unit": "FOR 1 PCS",
    "category": "BOTTLES",
    "department": "vaccum_bottles",
    "moq": 6,
    "status": "In Stock"
  },
  {
    "code": "SMIC656F-B",
    "desc": "SHINE MAX FISH ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656F-G",
    "desc": "SHINE MAX FISH ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "330.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656C",
    "desc": "SHINE MAX FISH ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC656F",
    "desc": "SHINE MAX FISH ICE CUP 180 ML 6 PC COL BOX 12 SET CTN",
    "price": "260.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP012",
    "desc": "SHINEMAX 6 PCS SNACK PLATE 6 INCH COLOR BOX-12 SET IN CTN",
    "price": "220.0",
    "unit": "FOR 2 PCS",
    "category": "SAUCER",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SP-220-L3",
    "desc": "SOWA PARIS BOROSILICATE JAR WDN LID 220 ML ROUND 3 PC COL BOX 16 SET CTN",
    "price": "130.0",
    "unit": "FOR 3PCS",
    "category": "WOODEN 3 PCS",
    "department": "Glassware",
    "moq": 4,
    "status": "In Stock"
  },
  {
    "code": "SMTC277",
    "desc": "SHINEMAX TEA MUG 140ML COLOR BOX PACKING 12 SET IN CTN",
    "price": "178.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021A-L6",
    "desc": "SHINEMAX SNACK PLATES 6 PCS GIFT BOX PACKING 8 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021B-L6",
    "desc": "SHINEMAX SNACK PLATES 6 PCS GIFT BOX PACKING 8 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021D-L6",
    "desc": "SHINEMAX SNACK PLATES 6 PCS GIFT BOX PACKING 8 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "LXY4012",
    "desc": "LANG XU PLAZA WATER GLASS 6 PCS COLOR BOX PACKING 12 SET CTN",
    "price": "300.0",
    "unit": "FOR 6 PCS",
    "category": "WATER GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "LXY4008-1",
    "desc": "LANGXU PLAZA WHISKEY GLASS 260 ML 6 PC COL BOX 12 SET CTN",
    "price": "300.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWB1031-1000",
    "desc": "SHINEMAX BOROSILICATE GLASS WATER BOTTLE 1000 ML COL BOX 24 PCS CTN",
    "price": "230.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLES",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWB1036-1000",
    "desc": "SHINEMAX GLASS BOTTLE PUSH CAP 1000 ML COLOR BOX 30 PCS CTN",
    "price": "180.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLES",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC20-L1",
    "desc": "SHINE MAX GLASS SIPPER WOODEN LID 540 ML COL BOX 48 PC CTN",
    "price": "110.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG061A",
    "desc": "KARBON JUG 500 ML COLOR BOX PACKING 24 SET CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG061B",
    "desc": "KARBON JUG 500 ML COLOR BOX PACKING 24 SET CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG062A",
    "desc": "KARBON JUG 500 ML COLOR BOX PACKING 24 SET CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KJG062B",
    "desc": "KARBON JUG 500 ML COLOR BOX PACKING 24 SET CTN",
    "price": "90.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC18-L1",
    "desc": "SHINE MAX GLASS SIPPER 380 ML - COL BOX-72 PCS CTN",
    "price": "100.0",
    "unit": "FOR 1PCS",
    "category": "SIPPER",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC247-2A",
    "desc": "SHINEMAX SMALL TEA MUG 90ML COLOR BOX-24 SETS IN CTN",
    "price": "130.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC247-2B",
    "desc": "SHINEMAX SMALL TEA MUG 90ML COLOR BOX-24 SETS IN CTN",
    "price": "130.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC247-2C",
    "desc": "SHINEMAX SMALL TEA MUG 90ML COLOR BOX-24 SETS IN CTN",
    "price": "130.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBB02-3600-BE",
    "desc": "SHINE MAX DISPENSER PRINTED 3600 ML WITH STAND 12 SET CTN",
    "price": "750.0",
    "unit": "FOR 1 PCS",
    "category": "DISPENSER",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC47",
    "desc": "SHINEMAX DOUBLE WALL MILK MUG 400 ML COL BOX 60 PCS CTN",
    "price": "130.0",
    "unit": "FOR 1 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP7201A",
    "desc": "SHINEMAX LADDU PLATE 200 ML COLOR GIFT BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP7201B",
    "desc": "SHINEMAX LADDU PLATE 200 ML COLOR GIFT BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP7201C",
    "desc": "SHINEMAX LADDU PLATE 200 ML COLOR GIFT BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP7201D",
    "desc": "SHINEMAX LADDU PLATE 200 ML COLOR GIFT BOX 12 SET CTN",
    "price": "230.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC237-2",
    "desc": "SHINE MAX SMALL TEA MUG 93 ML 6 PC COL BOX 24 SET CTN",
    "price": "145.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0312A-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0312B-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0312C-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0314A-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0314B-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0314C-B",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "950.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0391-BE",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "700.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0391-BT",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "700.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0393-BE",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0393-BL",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0393-BT",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC44",
    "desc": "SHINEMAX DOUBLE WALL MILK MUG 400 ML COL BOX 60 PCS CTN",
    "price": "160.0",
    "unit": "FOR 1PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB345B",
    "desc": "KARBON SMALL TEA MUG 90ML COLOR BOX-24 SETS IN CTN",
    "price": "145.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB345C",
    "desc": "KARBON SMALL TEA MUG 90ML COLOR BOX-24 SETS IN CTN",
    "price": "145.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB345D",
    "desc": "KARBON SMALL TEA MUG 90ML COLOR BOX-24 SETS IN CTN",
    "price": "145.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRZB345E",
    "desc": "KARBON SMALL TEA MUG 90ML COLOR BOX-24 SETS IN CTN",
    "price": "145.0",
    "unit": "FOR 6PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021C-L6",
    "desc": "SHINEMAX SNACK PLATES 6 PCS GIFT BOX PACKING 8 SET IN CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH74-L7",
    "desc": "SHINEMAX BOROSILICATE 7 PCS LEMON SET 1400ML+320ML GIFT BOX 6 SET CTN",
    "price": "550.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH74-L7B",
    "desc": "SHINEMAX BOROSILICATE 7 PCS LEMON SET 1400ML+320ML GIFT BOX 6 SET CTN",
    "price": "600.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH75-L7B",
    "desc": "SHINEMAX BOROSILICATE 7 PCS LEMON SET 1400ML+320ML GIFT BOX 6 SET CTN",
    "price": "700.0",
    "unit": "FOR 7PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "LXY4009",
    "desc": "LANG XU TWISTED JUICE GLASS 190 ML COLOR BOX 12 SET CTN",
    "price": "210.0",
    "unit": "FOR 6 PCS",
    "category": "JUICE GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH11-L7B",
    "desc": "SHINEMAX BOROSILICATE 7 PCS LEMON SET 1500ML+400ML GIFT BOX 6 SET CTN",
    "price": "725.0",
    "unit": "FOR 7 PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC283A",
    "desc": "SHINEMAX SMALL TEA MUG 105 ML COLOR BOX 16 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC283B",
    "desc": "SHINEMAX SMALL TEA MUG 105 ML COLOR BOX 16 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC283C",
    "desc": "SHINEMAX SMALL TEA MUG 105 ML COLOR BOX 16 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC286A",
    "desc": "SHINEMAX SMALL TEA MUG 105 ML COLOR BOX 16 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC286B",
    "desc": "SHINEMAX SMALL TEA MUG 105 ML COLOR BOX 16 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC289",
    "desc": "SHINEMAX SMALL TEA MUG 82 ML COLOR BOX 16 SET CTN",
    "price": "145.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021A-L7",
    "desc": "SHINEMAX SNACK SET 7 PCS SET GIFT BOX PACK 4 SET CTN",
    "price": "700.0",
    "unit": "FOR 7 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021B-L7",
    "desc": "SHINEMAX SNACK SET 7 PCS SET GIFT BOX PACK 4 SET CTN",
    "price": "700.0",
    "unit": "FOR 7 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021C-L7",
    "desc": "SHINEMAX SNACK SET 7 PCS SET GIFT BOX PACK 4 SET CTN",
    "price": "700.0",
    "unit": "FOR 7 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021D-L7",
    "desc": "SHINEMAX SNACK SET 7 PCS SET GIFT BOX PACK 4 SET CTN",
    "price": "700.0",
    "unit": "FOR 7 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021A-L7B",
    "desc": "SHINEMAX SNACK SET 7 PCS SET GIFT BOX PACK 4 SET CTN",
    "price": "825.0",
    "unit": "FOR 7 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021B-L7B",
    "desc": "SHINEMAX SNACK SET 7 PCS SET GIFT BOX PACK 4 SET CTN",
    "price": "825.0",
    "unit": "FOR 7 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021C-L7B",
    "desc": "SHINEMAX SNACK SET 7 PCS SET GIFT BOX PACK 4 SET CTN",
    "price": "825.0",
    "unit": "FOR 7 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP021D-L7B",
    "desc": "SHINEMAX SNACK SET 7 PCS SET GIFT BOX PACK 4 SET CTN",
    "price": "825.0",
    "unit": "FOR 7 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMIC632",
    "desc": "SHINEMAX ICE CREAM BOWL 6 PCS SET 170 ML COLOR BOX 12 SET CTN",
    "price": "320.0",
    "unit": "FOR 6 PCS",
    "category": "ICE CREAM BOWL",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMJC138-2",
    "desc": "SHINEMAX BEER MUG 400 ML 2 PC COLOR BOX 18 SET CTN",
    "price": "150.0",
    "unit": "FOR 2 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTG373A-L3",
    "desc": "SHINEMAX CANDY BOWL SET / PICKLE SET GIFT BOX PACK 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 3 PCS",
    "category": "CANDY BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTG373B-L3",
    "desc": "SHINEMAX CANDY BOWL SET / PICKLE SET GIFT BOX PACK 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 3 PCS",
    "category": "CANDY BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTG373C-L3",
    "desc": "SHINEMAX CANDY BOWL SET / PICKLE SET GIFT BOX PACK 12 SET CTN",
    "price": "280.0",
    "unit": "FOR 3 PCS",
    "category": "CANDY BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMB214",
    "desc": "SHINEMAX SQUARE BOWL 610 ML 2 PC COLOR BOX 18 SET CTN",
    "price": "150.0",
    "unit": "FOR 2 PCS",
    "category": "GLASS PLAIN BOWL",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMWH65-L8",
    "desc": "SHINEMAX 7 PCS KETTLE SET WITH REVOLVING STAND 1000ML+130ML COLOR BOX 4 SET IN CTN",
    "price": "1140.0",
    "unit": "FOR 1 SET",
    "category": "KETTLE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMB253B",
    "desc": "SHINEMAX DESSERT BOWL 150 ML 6 PCS COLOR BOX 12 SET",
    "price": "210.0",
    "unit": "FOR 6 PCS",
    "category": "BOWL SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH76-B",
    "desc": "SHINEMAX SQUARE BOROSILICATE JUG 1500 ML COLOR BOX 24 PCS CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMH76-G",
    "desc": "SHINEMAX SQUARE BOROSILICATE JUG 1500 ML COLOR BOX 24 PCS CTN",
    "price": "280.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS JUG",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC272A",
    "desc": "SHINEMAX NEW TEA MUG 100 ML COLOR BOX PACKING 12 SET CTN",
    "price": "168.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC272B",
    "desc": "SHINEMAX NEW TEA MUG 100 ML COLOR BOX PACKING 12 SET CTN",
    "price": "168.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMTC272C",
    "desc": "SHINEMAX NEW TEA MUG 100 ML COLOR BOX PACKING 12 SET CTN",
    "price": "168.0",
    "unit": "FOR 6 PCS",
    "category": "TEA MUG",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052A",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052B",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052C",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "320.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052A-B",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "350.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052B-B",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "350.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052C-B",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "350.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052A-G",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "350.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052B-G",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "350.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMP052C-G",
    "desc": "SHINEMAX SQUARE SERVING PLATE GIFT BOX PACKING 8 SET CTN",
    "price": "350.0",
    "unit": "FOR 1 PCS",
    "category": "PLATE SET",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC48",
    "desc": "SHINEMAX DOUBLE WALL HANDLE GLASS 250 ML COLOR BOX PACKING 60 PCS CTN",
    "price": "105.0",
    "unit": "FOR 1 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC78",
    "desc": "SHINEMAX BOROSILICATE DOUBLE WALL 450 ML HANDLE CUP COLOR BOX 60 PC CTN",
    "price": "160.0",
    "unit": "FOR 1 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC88",
    "desc": "SHINEMAX BOROSILICATE DOUBLE WALL 450 ML HANDLE CUP COLOR BOX 60 PC CTN",
    "price": "140.0",
    "unit": "FOR 1 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "CTWS489-L7",
    "desc": "CRYSTO MAX LEMON SET 7 PCS SET GIFT BOX 6 SET CTN",
    "price": "550.0",
    "unit": "FOR 7 PCS",
    "category": "LEMON SET",
    "department": "Glassware",
    "moq": 2,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC76",
    "desc": "SHINEMAX BOROSILICATE MILK MUG 250ML WITH HANDLE COLOR BOX 60 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBC49",
    "desc": "SHINEMAX BOROSILICATE DOUBLE WALL MUG 250ML WITH HANDLE COLOR BOX 60 PCS CTN",
    "price": "120.0",
    "unit": "FOR 1 PCS",
    "category": "BEER MUG",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0370E-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "850.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0381B-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1250.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0382A-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1300.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0382B-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1300.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0382D-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1300.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0383E-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1300.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-713-S",
    "desc": "SHINEMAX PREMIUM 2+1 SILVER IRONHANDLE STAND WITH TRAY",
    "price": "725.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-713-S1",
    "desc": "SHINEMAX PREMIUM 2+1 SILVER IRONHANDLE STAND WITH TRAY",
    "price": "725.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-713-S2",
    "desc": "SHINEMAX PREMIUM 2+1 SILVER IRONHANDLE STAND WITH TRAY",
    "price": "725.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-716-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON TRAY STAND GIFT BOX",
    "price": "1400.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-718-G",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON STAND GIFT BOX",
    "price": "1450.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-718-S",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON STAND GIFT BOX",
    "price": "1450.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-721-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON REVOLVING STAND GIFT BOX",
    "price": "1575.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-721-S",
    "desc": "SHINEMAX PREMIUM 4+1 SILVER IRON REVOLVING STAND GIFT BOX",
    "price": "1650.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-701-G",
    "desc": "SHINEMAX PREMIUM 2+1 GOLDEN IRON 2 HORSE STAND GIFT BOX",
    "price": "1425.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-702-G",
    "desc": "SHINEMAX PREMIUM 2+1 GOLDEN IRON 2 ELEPHANT STAND GIFT BOX",
    "price": "1425.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-702-S",
    "desc": "SHINEMAX PREMIUM 2+1 SILVER IRON 2 ELEPHANT STAND GIFT BOX",
    "price": "1500.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-704-S",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON 2 ELEPHANT STAND GIFT BOX",
    "price": "1625.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-704-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON 2 ELEPHANT STAND GIFT BOX",
    "price": "1575.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-706-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON 1 BIG ELEPHANT STAND",
    "price": "1600.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-711-G",
    "desc": "SHINEMAX PREMIUM 4+1 GOLDEN IRON CURVE HANDLE STAND",
    "price": "1275.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 8,
    "status": "ADV BOOK"
  },
  {
    "code": "STY5013",
    "desc": "SHINE MAX WHISKEY GLASS 330 ML 6 PC COL BOX 12 SET CTN",
    "price": "320.0",
    "unit": "FOR 6PCS",
    "category": "WHISKEY GLASS",
    "department": "Glassware",
    "moq": 4,
    "status": "ADV BOOK"
  },
  {
    "code": "KRY403A",
    "desc": "KARBON WINE SHOT GLASS 43 ML 6 PCS COLOR BOX 24 SET CTN",
    "price": "130.0",
    "unit": "FOR 6 PCS",
    "category": "SHOT GLASS",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRY403B",
    "desc": "KARBON WINE SHOT GLASS 43 ML 6 PCS COLOR BOX 24 SET CTN",
    "price": "130.0",
    "unit": "FOR 6 PCS",
    "category": "SHOT GLASS",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRY403C",
    "desc": "KARBON WINE SHOT GLASS 43 ML 6 PCS COLOR BOX 24 SET CTN",
    "price": "130.0",
    "unit": "FOR 6 PCS",
    "category": "SHOT GLASS",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRY403E",
    "desc": "KARBON WINE SHOT GLASS 43 ML 6 PCS COLOR BOX 24 SET CTN",
    "price": "130.0",
    "unit": "FOR 6 PCS",
    "category": "SHOT GLASS",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  },
  {
    "code": "KRWB1059-1100",
    "desc": "KARBON FRIDGE BOTTLE 1100 ML WITH HANDLE 1 PC COLOR BOX 30 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 10,
    "status": "ADV BOOK"
  },
  {
    "code": "KRWB1059-1100-B",
    "desc": "KARBON FRIDGE BOTTLE 1100 ML WITH HANDLE 1 PC COLOR BOX 30 PCS CTN",
    "price": "130.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 10,
    "status": "ADV BOOK"
  },
  {
    "code": "KRWB1059-1100-G",
    "desc": "KARBON FRIDGE BOTTLE 1100 ML WITH HANDLE 1 PC COLOR BOX 30 PCS CTN",
    "price": "130.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 10,
    "status": "ADV BOOK"
  },
  {
    "code": "KRWB1049-1100",
    "desc": "KARBON FRIDGE BOTTLE 1100 ML WITH HANDLE 1 PC COLOR BOX 30 PCS CTN",
    "price": "110.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 10,
    "status": "ADV BOOK"
  },
  {
    "code": "KRWB1049-1100-B",
    "desc": "KARBON FRIDGE BOTTLE 1100 ML WITH HANDLE 1 PC COLOR BOX 30 PCS CTN",
    "price": "130.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 10,
    "status": "ADV BOOK"
  },
  {
    "code": "KRWB1049-1100-G",
    "desc": "KARBON FRIDGE BOTTLE 1100 ML WITH HANDLE 1 PC COLOR BOX 30 PCS CTN",
    "price": "130.0",
    "unit": "FOR 1 PCS",
    "category": "GLASS BOTTLE",
    "department": "Glassware",
    "moq": 10,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0381A-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1250.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0383A-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1300.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0383B-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1300.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0383C-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1300.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0383D-G",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 6 SET CTN",
    "price": "1300.0",
    "unit": "FOR 6 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0386B-GL2",
    "desc": "SHINE MAX COLORED WHISKEY GLASS GIFT BOX 18 SET CTN",
    "price": "550.0",
    "unit": "FOR 2 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 18,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0411A-G",
    "desc": "SHINE MAX COLORED WHISKEY AND BEER GLASS COMBO 2+2 GIFT BOX 6 SET CTN",
    "price": "1000.0",
    "unit": "FOR 4 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0411B-G",
    "desc": "SHINE MAX COLORED WHISKEY AND BEER GLASS COMBO 2+2 GIFT BOX 6 SET CTN",
    "price": "1000.0",
    "unit": "FOR 4 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0412A-G",
    "desc": "SHINE MAX COLORED WHISKEY AND BEER GLASS COMBO 2+2 GIFT BOX 6 SET CTN",
    "price": "1050.0",
    "unit": "FOR 4 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SWG0412B-G",
    "desc": "SHINE MAX COLORED WHISKEY AND BEER GLASS COMBO 2+2 GIFT BOX 6 SET CTN",
    "price": "1050.0",
    "unit": "FOR 4 PCS",
    "category": "COLORED GLASS",
    "department": "Glassware",
    "moq": 6,
    "status": "ADV BOOK"
  },
  {
    "code": "SMBJ-615",
    "desc": "SHINEMAX PREMIUM 4+1 WOODEN STAND GIFT BOX",
    "price": "725.0",
    "unit": "FOR 1 SET",
    "category": "GLASS CANDY SET",
    "department": "Glassware",
    "moq": 12,
    "status": "ADV BOOK"
  }
];

const MASTER_SORT_ORDER = ["JUICE GLASS", "WHISKEY GLASS", "WATER GLASS", "BORO JUICE GLASS", "BORO WATER GLASS", "WINE GLASS", "COLORED GLASS", "SHOT GLASS", "SHOT SET", "BOWL SET", "ICE CREAM BOWL SET", "PLATE SET", "BEER MUG", "TEA MUG", "BORO TEA MUG", "LID MUG", "SAUCER", "CUP SAUCER", "KETTLE SET", "JUG", "JUG SET", "LEMON SET", "SIPPER", "GLASS BOTTLE", "GLASS FRIDGE BOTTLE", "TURTLE", "PUDDING SET", "WOODEN JAR SINGLE", "WOODEN CANDY", "WOODEN 3 PCS", "GLASS JAR", "CANISTER", "GLASS LUNCHBOX", "GLASS BAKEWARE", "DISPENSER", "FRUIT PLATE", "GLASS PLAIN BOWL", "GLASS COLORED BOWL", "BORO SERVING BOWL", "FLOWER POT", "ACRYLIC SIPPER", "TRAY", "OTHER"];