import img from "../image/dress4.png";
import img2 from "../image/dress2.jpg";
import img3 from "../image/dress3.jpg";
import img4 from "../image/dress.jpg";

export const menuItems = [
  {
    title: "Mężczyzna",
    path: "products/men",
    submenu: [
      {
        title: "Ubrania",
        path: "products/men/ubrania",
        przyklad: ["Szorty", "Koszulki", "Jeansy", "Bluzy", "Swetry", "Kurtki i płaszcze", "Koszule"],
        przykladd: [
          {
            title: "Szorty",
            path:"/szorty"
          },
          {
            title: "Koszulki",
          }
        ]

      },
      {
        title: "Buty i dodatki",
        path: "products/men/buty%20i%20dodatki",
        przyklad: ["Buty i kapcie", "Torebki i plecaki", "Stroje kąpielowe", "Czapki", "Okulary", "Paski"]
      },
      {
        title: "Bielizna",
        path: "products/men/bielizna",
        przyklad: ["Piżamy i szlafroki", "Majtki", "Biustonosze", "Skarpetki"]
      },
      {
        title: "Kolekcje",
        path: "products/men/kolekcje",
        przyklad: ["Kolekcja plażowa", "Kolekcja sportowa"]
      },

    ]
  },

  {
    title: "Kobieta",
    path: "products/women",
    submenu: [
      {
        title: "Ubrania",
        path: "products/women/ubrania",
        przyklad: ["Sukienki", "Szorty", "Koszulki", "Topy", "Spódnice", "Jeansy", "Legginsy", "Bluzy", "Swetry", "Kurtki i płaszcze"],

      },
      {
        title: "Buty i dodatki",
        path: "products/women/buty%20i%20dodatki",
        przyklad: ["Buty i kapcie", "Torebki i plecaki", "Stroje kąpielowe", "Czapki", "Okulary", "Paski"]
      },
      {
        title: "Bielizna",
        path: "products/women/bielizna",
        przyklad: ["Piżamy i szlafroki", "Majtki", "Biustonosze", "Skarpetki"]
      },
      {
        title: "Kolekcje",
        path: "products/women/kolekcje",
        przyklad: ["Kolekcja plażowa", "Kolekcja sportowa"]
      },

    ]
  },
  {
    title: "Dziecko",
    path: "products/kid",
    submenu: [
      {
        title: "Dziewczynka 2-10lat",
        path: "products/kid/dziewczynka%202-10lat",
        przyklad: ["Sukienki", "Koszulki", "Spódnice", "Jeansy", "Legginsy", "Bluzy", "Swetry", "Kurtki i płaszcze"],
      },
      {

        title: "Chłopiec 2-10lat",
        path: "products/kid/chlopiec%202-10lat",
        przyklad: ["Szorty", "Koszulki", "Jeansy", "Bluzy", "Swetry", "Kurtki i płaszcze", "Koszule"],
      },
      {
        title: "Dziewczynka 10-14lat",
        path: "products/kid/dziewczynka%2010-14lat",
        przyklad: ["Sukienki", "Koszulki", "Spódnice", "Jeansy", "Legginsy", "Bluzy", "Swetry", "Kurtki i płaszcze"],
      },
      {

        title: "Chłopiec 10-14lat",
        path: "products/kid/chlopiec%2010-14lat",
        przyklad: ["Szorty", "Koszulki", "Jeansy", "Bluzy", "Swetry", "Kurtki i płaszcze", "Koszule"],
      },
    ]
  }
];
export const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Kolekcja plażowa",
    cat: "women"
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Kolekcja sportowa",
    cat: "women"
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Kolekcja sportowa",
    cat: "men"
  },
];

export const popularProducts = [
  {
    id: 0,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    subImg: ["https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404__340.jpg","https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg"],
    cat: "men",
    title: "Crusher",
    kategoria: "ubrania",
    podkategoria: "Koszulki",
    colors: ["White", "Red", "Blue"],
    // color: "White",
    // sizes: [["S", 2], ["M", 4], ["L", 7], ["XL",12], ["2XL",11], ["3XL",60]],
    sizes: [
      { size: "S", quantity: 10 }, { size: "M", quantity: 4 }, { size: "L", quantity: 7 }, { size: "XL", quantity: 12 }, { size: "2XL", quantity: 11 }, { size: "3XL", quantity: 60 },],
    size: "",
    price: 100,
  },
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
    subImg: ["https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404__340.jpg","https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg"],
    cat: "men",
    kategoria: "ubrania",
    podkategoria: "Koszule",
    title: "Lazy Shirt",
    colors: ["White", "Red", "Green", "Blue"],
    // color:"White",
    sizes: [
      { size: "S", quantity: 0 }, { size: "M", quantity: 4 }, { size: "L", quantity: 7 }, { size: "XL", quantity: 12 }, { size: "2XL", quantity: 11 }, { size: "3XL", quantity: 60 },],
    price: 120,
    // size:"S",
  },

  {
    id: 2,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    subImg: ["https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404__340.jpg","https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg"],
    cat: "women",
    kategoria: "ubrania",
    podkategoria: "Koszulki",
    title: "Koszula rozpinana W45DGECOI Czerwona",
    colors: ["Green", "Blue"],
    sizes: [
      { size: "S", quantity: 0 }, { size: "M", quantity: 4 }, { size: "L", quantity: 7 }, { size: "XL", quantity: 12 }, { size: "2XL", quantity: 11 }, { size: "3XL", quantity: 60 },],
    price: 140,
    marka: "PRADA"
  },
  {
    id: 3,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    subImg: ["https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg","https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg"],
    cat: "women",
    kategoria: "ubrania",
    podkategoria: "Sukienki",
    price: 180.99,
    size: "S",
    marka: "LOUIS",
    title: "Sukienka buggy ARGD4GECOI Biała",
    color: "Red",
    colors: ["White", "Red", "Green", "Blue"],
    sizes: [
      { size: "S", quantity: 2 }, { size: "M", quantity: 4 }, { size: "L", quantity: 7 }, { size: "XL", quantity: 12 }, { size: "2XL", quantity: 0 }, { size: "3XL", quantity: 60 },],

  },
  {
    id: 4,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    subImg: ["https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404__340.jpg","https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg"],
    colors: ["White", "Red", "Green", "Blue"],
    sizes: [
      { size: "S", quantity: 2 }, { size: "M", quantity: 4 }, { size: "L", quantity: 7 }, { size: "XL", quantity: 12 }, { size: "2XL", quantity: 11 }, { size: "3XL", quantity: 60 },],
    price: 250,
    cat: "women",
    marka: "ECO",
    title: "Torba naramie GDH56JKKL3 Biała",

  },
  {
    id: 5,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    subImg: ["https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404__340.jpg","https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg"],
    size: "XL",
    cat: "women",
    podkategoria: "Paski",
    price: "45",
    colors: ["White", "Red", "Green", "Blue"],
    sizes: [
      { size: "S", quantity: 2 }, { size: "M", quantity: 4 }, { size: "L", quantity: 7 }, { size: "XL", quantity: 12 }, { size: "2XL", quantity: 11 }, { size: "3XL", quantity: 60 },],
    title: "Czapka z daszkiem model W45DGECOI",
    marka: "DOG FOREVER"

  },
  {
    id: 6,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    subImg: ["https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404__340.jpg","https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg"],
    colors: ["White", "Red", "Green", "Blue"],
    cat: "women",
    sizes: [
      { size: "S", quantity: 2 }, { size: "M", quantity: 4 }, { size: "L", quantity: 7 }, { size: "XL", quantity: 12 }, { size: "2XL", quantity: 11 }, { size: "3XL", quantity: 60 },],
    price: 65,
    title: "Czapka z daszkiem model W45DGECOI",
    marka: "DOG FOREVER",
  },

  {
    id: 7,
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    subImg: ["https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404__340.jpg","https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg"],
    title: "Płaszcz model FGKBD54FHKK",
    marka: "VERSACE",
    colors: ["White", "Red", "Green", "Blue", "Purple"],
    cat: "women",
    sizes: [
      { size: "S", quantity: 2 }, { size: "M", quantity: 4 }, { size: "L", quantity: 7 }, { size: "XL", quantity: 12 }, { size: "2XL", quantity: 11 }, { size: "3XL", quantity: 60 },],
    price: 360,
  },

];
export const sliderItems = [
  {
    title: "Letnia wyprzedaż sukienek",
    desc: "Wszystkie sukienki -30%!",
    image: img,
    pathButton: "/products/women/ubrania/Sukienki"
  },
  {
    title: "Letnia wyprzedaż sukienek",
    desc: "Wszystkie sukienki -30%!",
    image: img2,
    pathButton: "/products/women/ubrania/Sukienki"
  },
  {
    title: "Letnia wyprzedaż sukienek",
    desc: "Wszystkie sukienki -30%!",
    image: img3,
    pathButton: "/products/women/ubrania/Sukienki"
  },
  {
    title: "Letnia wyprzedaż sukienek",
    desc: "Wszystkie sukienki -30%!",
    image: img4,
    pathButton: "/products/women/ubrania/Sukienki"
  },
]