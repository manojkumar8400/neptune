import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "SONY",
    title: "SONY CyberShot DSC-H300/BC E32 IN5",
    rating: "2.8" ,
    categoryName: "Sony",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/camera/y/x/b/sony-cyber-shot-dsc-w800-point-shoot-original-imadvgz7tgqw8gw8.jpeg?q=70",
    price: 15499,
    offPrice: 49999,
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: false
  },
  {
    _id: uuid(),
    brand: "NIKON",
    title: "NIKON D750 DSLR Camera",
    rating: "4.4",
    categoryName: "Nikon",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/juu4jgw0/dslr-camera/d/9/c/d750-black-d750-nikon-original-imaffv8y2y3mamqm.jpeg?q=70",
    price: 99999,
    offPrice: 95999,
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: false
  },
  {
    _id: uuid(),
    brand: "CANON",
    title: "Canon EOS 7D Mark || DSLR Camera",
    price: 99999,
    offPrice: 112999,
    rating: "4.1",
    categoryName: "Canon",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/camera/s/q/f/canon-eos-7d-mark-ii-body-dslr-original-imae3yryhwq7fgyx.jpeg?q=70",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "CANON",
    title: "Canon PowerShot ELPH 180 Digital Camera",
    price: 57895,
    offPrice: 59999,
    rating: "4.5",
    categoryName: "Canon",
    imgURL: "https://m.media-amazon.com/images/I/81513Lg11hL._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: false
  },
  {
    _id: uuid(),
    brand: "SONY",
    title: "SONY Cyber-shot DSC-RX100M3",
    rating: "3.5",
    categoryName: "Sony",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/camera/b/y/f/sony-dsc-rx100m3-original-imadxm5yfrhcbeaz.jpeg?q=70",
    price: 50045,
    offPrice: 59999,
    mpixel: "Effective Pixels: 12.5MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 20x",
    display_size: "Display Size: 3 inch",
    delivery: false,
    stock: false
    },
  {
    _id: uuid(),
    brand: "SONY",
    title: "Sony Z 6 Mirrorless Camera",
    price: 75999,
    offPrice: 79999,
    rating: "4.5",
    categoryName: "Sony",
    imgURL: "https://m.media-amazon.com/images/I/818n0xapjnS._AC_SX355_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "NIKON",
    title: "NIKON D780 DSLR Camera",
    rating: "2.3",
    categoryName: "Nikon",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/k9oj8280/dslr-camera/p/c/e/d780-d780-nikon-original-imafrexfxntwzhnz.jpeg?q=70",
    price: 183690,
    offPrice: 19999,
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: false ,
    stock: true
  },
  {
    _id: uuid(),
    brand: "SONY",
    title: "SONY Cyber-shot DSC-RX100M7",
    rating: "4.6",
    categoryName: "Sony",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/k226oi80/point-shoot-camera/j/d/p/dsc-rx100m7-cyber-shot-dsc-rx100m7-sony-original-imafhh7mymzy5rfu.jpeg?q=70",
    price: 96990,
    offPrice: 99999,
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: false,
    stock: true
    },
  {
    _id: uuid(),
    brand: "NIKON",
    title: "NIKON ZFC-28MM DSLR Camera",
    price: 91199,
    offPrice: 95999,
    rating: "3.5",
    categoryName: "Nikon",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/kyt0ya80/dslr-camera/u/g/t/zfc-21-51-zfc-28mm-nikon-original-imagaymzysghq3zz.jpeg?q=70",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },

  {
    _id: uuid(),
    brand: "NIKON",
    title: "NIKON D3500 DSLR Camera",
    price: 52999,
    offPrice: 59999,
    rating: "4.8",
    categoryName: "Nikon",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/khkvukw0/dslr-camera/z/w/h/d3500-d3500-nikon-original-imafxjugcncxgdgp.jpeg?q=70",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: false,
    stock: false
    },
  {
    _id: uuid(),
    brand: "CANON",
    title: "Canon EOS M50 Mark || Vlogger Kit",
    price: 58995,
    offPrice: 59999,
    rating: "3.5",
    categoryName: "Canon",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/kr2e3680/dslr-camera/j/1/n/eos-m50-mark-ii-vlogger-kit-eos-m50-mark-ii-vlogger-kit-canon-original-imag4xzzrhfeycuu.jpeg?q=70",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "CANON",
    title: "Canon EOS 3925 DSLR Camera",
    price: 58000,
    offPrice: 69999,
    rating: "2.5",
    categoryName: "Canon",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "NIKON",
    title: "NIKON Z50-18-140MM DSLR Camera",
    price: 72995,
    offPrice: 77999,
    rating: "4.5",
    categoryName: "Nikon",
    imgURL: "https://rukminim1.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "CANON",
    title: "Canon EOS 90D Digital DSLR Camera",
    price: 137834,
    offPrice: 149999,
    rating: "4.5",
    categoryName: "Canon",
    imgURL: "https://m.media-amazon.com/images/I/811F38yoMeL._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: false,
    stock: true
    },
  {
    _id: uuid(),
    brand: "PANASONIC",
    title: "panasonic 4K Ultra HD Video Camera",
    price: 87559,
    offPrice: 89999,
    rating: "4",
    categoryName: "Panasonic",
    imgURL: "https://m.media-amazon.com/images/I/81FQCy-qsSL._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: false,
    stock: true
    },
  {
    _id: uuid(),
    brand: "PANASONIC",
    title: "Panasoninc AG-CX8ED 4K Camcorder",
    price: 156490,
    offPrice: 159999,
    rating: "4.5",
    categoryName: "Panasonic",
    imgURL: "https://m.media-amazon.com/images/I/31Z-KeQNmlL._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "SAMSUNG",
    title: "FAV ONE 1080p hd WiFi Camera",
    price: 1999,
    offPrice: 2199,
    rating: "3.5",
    categoryName: "Samsung",
    imgURL: "https://m.media-amazon.com/images/I/31LjbGyf5ML._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "PANASONIC",
    title: "Panasonic Amazplus Ultra HD 4K WiFi Action Camera",
    price: 12999,
    offPrice: 14999,
    rating: "2.2",
    categoryName: "Panasonic",
    imgURL: "https://m.media-amazon.com/images/I/51tXB0e6Z3L._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "PANASONIC",
    title: "Panasonic Lumix DMC-FZ300k DSLR Camera",
    price: 39999,
    offPrice: 38999,
    rating: "3.5",
    categoryName: "Panasonic",
    imgURL: "https://m.media-amazon.com/images/I/81xVbbwlqlL._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "SAMSUNG",
    title: "Mabron Full HD Hidden Camera",
    price: 1299,
    offPrice: 1499,
    rating: "3.5",
    categoryName: "Samsung",
    imgURL: "https://m.media-amazon.com/images/I/51T+OUtcJLL._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: true
  },
  {
    _id: uuid(),
    brand: "SAMSUNG",
    title: "SONY DSC w830 Cyber-Shot Camera",
    price: 11790,
    offPrice: 12999,
    rating: "4",
    categoryName: "Samsung",
    imgURL: "https://m.media-amazon.com/images/I/71bCLcUXhJL._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: true,
    stock: false
  },
  {
    _id: uuid(),
    brand: "SAMSUNG",
    title: "Samsung Conbre V380 Pro Wireless Smart CCTV Camera",
    price: 11790,
    offPrice: 13999,
    rating: "4",
    categoryName: "Samsung",
    imgURL: "https://m.media-amazon.com/images/I/51Yj4MiuFrL._AC_UY218_.jpg",
    mpixel: "Effective Pixels: 20.1MP",
    zoom: "Optical Zoom: 5|Digital Zoom: 70x",
    display_size: "Display Size: 3 inch",
    delivery: false,
    stock: true
    }
];
