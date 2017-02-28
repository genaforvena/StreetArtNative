'use strict'

import { Image } from 'react-native';

const jsonWithImages = [{
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
    }];

export default async function fetchArtObjects(callback) {
  // let response = await fetch("https://street-art-server.herokuapp.com/artworks");
  // let json = await response.json()
  // let jsonWithImages = await json.filter(object => object.photos[0].image);
  // await jsonWithImages.forEach(object => Image.prefetch(object.photos[0].image));
  callback(jsonWithImages);
}
