'use strict'

import { Image } from 'react-native';

export default async function fetchArtObjects(callback) {
  let response = await fetch("https://street-art-server.herokuapp.com/artworks");
  let json = await response.json()
  let jsonWithImages = await json.filter(object => object.photos[0].image);
  await jsonWithImages.forEach(object => Image.prefetch(object.photos[0].image));
  callback(jsonWithImages);
}
