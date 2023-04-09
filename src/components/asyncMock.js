const products = [
  {
    id: '1',
    name: 'Procesador AMD RYZEN',
    price: 53500,
    category: 'procesador',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16752_Procesador_AMD_RYZEN_3_3200G_4.0GHz_Turbo___Radeon_Vega_8_AM4_Wraith_Stealth_Cooler_f414a507-grn.jpg',
    stock: 60,
    description: 'Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler',
  },
  {
    id: '2',
    name: 'Mother ASUS PRIME',
    price: 62850,
    category: 'mother',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15566_Mother_ASUS_PRIME_A320M-K_AM4_5th_Gen_Ready_9f5c58de-grn.jpg',
    stock: 50,
    description: 'Mother ASUS PRIME A320M-K AM4 5th Gen Ready',
  },
  {
    id: '3',
    name: 'Placa de Video Asrock',
    price: 99200,
    category: 'placa',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28822_Placa_de_Video_Asrock_RX_570_8GB_GDDR5_Phantom_Gaming_Elite_9ecf3ec5-grn.jpg',
    stock: 45,
    description: 'Placa de Video Asrock RX 570 8GB GDDR5 Phantom Gaming Elite',
  },
  {
    id: '4',
    name: 'Procesador Core i7',
    price: 144200,
    category: 'procesador',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23359_Procesador_Intel_Core_i7_10700KF_5.1GHz_Turbo_Socket_1200_Comet_Lake_3ae9893b-grn.jpg',
    stock: 60,
    description: 'Procesador Intel Core i7 10700KF 5.1GHz Turbo Socket 1200 Comet Lake',
  },
  {
    id: '5',
    name: 'Mother Gigabyte H410M',
    price: 23950,
    category: 'mother',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29221_Mother_Gigabyte_H410M_S2H_V3_S1200_382c65df-grn.jpg',
    stock: 10,
    description: 'Mother Gigabyte H410M S2H V3 S1200',
  },
  {
    id: '6',
    name: 'Placa de Video GeForce',
    price: 258250,
    category: 'placa',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35001_Placa_de_Video_Zotac_GeForce_RTX_3070_Ti_8GB_GDDR6X_Trinity_10803182-grn.jpg',
    stock: 15,
    description: 'Placa de Video Zotac GeForce RTX 3070 Ti 8GB GDDR6X Trinity',
  },
  {
    id: '7',
    name: 'Procesador AMD Turbo',
    price: 123850,
    category: 'procesador',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34349_Procesador_AMD_Ryzen_5_7600X_5.3GHz_Turbo_AM5_-_No_incluye_Cooler_-_C_VIDEO_43eebbeb-grn.jpg',
    stock: 11,
    description: 'Procesador Intel Core i7 10700KF 5.1GHz Turbo Socket 1200 Comet Lake',
  },
  {
    id: '8',
    name: 'Mother Gigabyte H410M',
    price: 88400,
    category: 'mother',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20376_Mother_Asrock_B550_Phantom_Gaming_ITX_AX_04e00223-grn.jpg',
    stock: 7,
    description: 'Mother Asrock B550 Phantom Gaming ITX/AX',
  },
  {
    id: '9',
    name: 'Placa de Video RTX 3080',
    price: 370400,
    category: 'placa',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35676_Placa_de_Video_ASUS_GeForce_RTX_3080_Ti_12GB_GDDR6X_ROG_STRIX_OC_c8f40911-grn.jpg',
    stock: 8,
    description: 'Placa de Video ASUS GeForce RTX 3080 Ti 12GB GDDR6X ROG STRIX OC',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
