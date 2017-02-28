'use strict'

import { Image } from 'react-native';

const jsonWithImages = [
  {
      "address": "Ул. Нижегородская 16",
      "artist": "Андрей Дружаев",
      "id": 1,
      "image": "https://lh4.googleusercontent.com/proxy/bc1H3ehOchz2XKu-QW4r-qJJuV6F6F5kgpWcjvaODJUAIbccitOh90afkA1wh1EA0k8jJmksTVmunIbgFsUpuojphkTqfvZzuQ",
      "lat": 56.3208579,
      "lng": 43.9848053,
      "title": "Без названия",
      "year": 2014
    },
    {
      "address": "ул. Гоголя 6",
      "artist": "Мария Ермилова",
      "id": 2,
      "image": "https://lh3.googleusercontent.com/proxy/vnUujuDM8WU_Zxna6FUagXG1vCafBSSJT1B_vUfkdqXuciFi8AE4FzqFYcmXUtUuEGXS7MCzn0qSzSRk4VdR_sqxYN11KZ80AEWpJRV0Lsg9ZDfF8eGWAbGJ3wdpBC6ux9aRdJaFE7GydwO1BrS_APOVLPSZqBip",
      "lat": 56.3182474,
      "lng": 43.9856315,
      "title": "Narcissus(комплимент старому дому)",
      "year": 2015
    },
    {
      "address": "Около ул. Ванеева 19",
      "artist": "AR",
      "id": 3,
      "image": "https://lh5.googleusercontent.com/proxy/KhDiyA95QyLVXFg_iE9_RS_V3-l7dfQ-FcivGfKz6lYCTLrTglwP8rEsES_AZ54Gryaa-yJlxEP3VqZJmfl8fW_F8GGkzujnYvi81rEU",
      "lat": 56.31256174260175,
      "lng": 44.018590450286865,
      "title": "Цвет граната",
      "year": 2013
    },
    {
      "address": "Около ул. Ульянова 52",
      "artist": "Стас Добрый",
      "id": 4,
      "image": "https://lh6.googleusercontent.com/proxy/5O27FUZfjQIR4Z5_mxEDH_IEImLwQuymwKl9D_VXeheYeiRfwUtkgsQTHoeTndRzEpRAXKbeXBE_j-cksLmeGvxAuIDuye91vcenimaV1dAQ69TDWQH0mrCxHFxoabVCuFosJ-WBhNibuESCpA5zFfc",
      "lat": 56.32275423598228,
      "lng": 44.02474880218506,
      "title": "Без названия",
      "year": 2012
    },
    {
      "address": "Около ул. Ульянова 6Д",
      "artist": "Кирилл Кто",
      "id": 5,
      "image": "https://lh3.googleusercontent.com/proxy/06JuhO_aOJekopAw_c1SPZl4y9n29kYpmJYdmoLrQrM8Z0zJxFRsovNNeuG7YTfSQ44KYEL9tw6ApxblvJ9LDcXDC9fL",
      "lat": 56.32286132304523,
      "lng": 44.0243598818779,
      "title": "Необходимо не декларировать",
      "year": 2013
    },
    {
      "address": "За домом ул. Большая Печерская 17",
      "artist": "Федор Махлаюк",
      "id": 6,
      "image": "https://lh4.googleusercontent.com/proxy/Kp_ACC4fIVXgYEVcurc8lQeZlTuwA-l5AhTlhs1nD_pZxM2ENH1C4diDyf-pcqInk98PlG4OLDBIkZwFu_iesCvgCHAZ14zh2kr4NADN",
      "lat": 56.32553840200702,
      "lng": 44.01892304420471,
      "title": "Ночь",
      "year": 2011
    },
    {
      "address": "Около ул. Сеченова 8",
      "artist": "AR и Вова Чернышев",
      "id": 7,
      "image": "https://lh5.googleusercontent.com/proxy/euWoQ77pUceiGwR1ZtoNxl0XnhTLQA4zs8RP0npYKFylwiFZzJGP8RQ4bVl16GOdnZDWTngY65vV0xkkN8ZiBjfKx7-xt5L-ZpchlwYwVbDr4_rdPA",
      "lat": 56.321588157407206,
      "lng": 44.037837982177734,
      "title": "Камыш",
      "year": 2013
    },
    {
      "address": "ул. Ильинская 4",
      "artist": "Вова Чернышев",
      "id": 8,
      "image": "https://lh4.googleusercontent.com/proxy/bq6Zh8YkWGF2aiQzbdruGpy2Iz3mmcxfjMCyqu9z9-iYseiGavjNJ2omo4iHucF2ncxZeoUWkij8hsSQAxLTGinMJ5P2ryjF",
      "lat": 56.32840861701124,
      "lng": 43.994654417037964,
      "title": "Сом",
      "year": 2013
    },
    {
      "address": "Около ул. Нестерова 41",
      "artist": "AR",
      "id": 9,
      "image": "https://lh4.googleusercontent.com/proxy/wx20jAhrTL8cUstjqp8s8VJfUIauK-w78BiytqsDmEvMRoALGz7kUHMAlt7Jl-Wsn76zXepdktR4_sSYvHzA1bKq4WFu_L-5JeVA",
      "lat": 56.32315283630686,
      "lng": 44.01366591453552,
      "title": "Скала",
      "year": 2011
    },
    {
      "address": "ул. Нестерова 16",
      "artist": "АО и Федор Махлаюк",
      "id": 10,
      "image": "https://lh3.googleusercontent.com/proxy/CDNF4BS5qIXVwtoCQbbf8CCsssL18ATlUmrxZobRWWp6bIC4tqc495hhrnTJhHK2cDtTIHKM2NVL16LReS6Mu3vUBOBrxZ2EbinoPCy4",
      "lat": 56.3228554,
      "lng": 44.0138805,
      "title": "Рыба",
      "year": 2013
    },
    {
      "address": "ул. Ковалихинская 18",
      "artist": "AO",
      "id": 11,
      "image": "https://lh3.googleusercontent.com/proxy/uA81D8K9MHKmzyDFHwF9K75Mv7ITHfDPnSZSv-yLF0QfKj81UMKoGv3RUNX55W0_BqlosAYt0Y1JKpe_OW9mqN85_O0i1S4qFZ9lSlor5muVyg1a9D5KSYJeSCY_DxzYdyAfR8DROMrvhk3fnLjmzi_GKiKrpPO31Lz8dlktjLDyx7IwtWeyQ4d_fQ",
      "lat": 56.322706641635556,
      "lng": 44.01419162750245,
      "title": "Без названия",
      "year": 2013
    },
    {
      "address": "ул. Грузинская 9А",
      "artist": "AR",
      "id": 12,
      "image": "https://lh4.googleusercontent.com/proxy/SPNGy8lWj0RnSWWHZn1pC6SU6TKfOGp29Q_dX3N_WH3wTHk1ShQt-6YgwXxfFY_c_CERPUFKQIBEG0d997tHWxiDK7E7mejMvUV13otcWgsUrc8koF66ZrI9ndjiE25c",
      "lat": 56.320178106663306,
      "lng": 43.99567365646362,
      "title": "Одуванчик",
      "year": 2013
    }
  ];

export default async function fetchArtObjects(callback) {
  // let response = await fetch("https://street-art-server.herokuapp.com/artworks");
  // let json = await response.json()
  // let jsonWithImages = await json.filter(object => object.photos[0].image);
  // await jsonWithImages.forEach(object => Image.prefetch(object.photos[0].image));
  callback(jsonWithImages);
}
