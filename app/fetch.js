'use strict'

import { Image } from 'react-native';

export default async function fetchArtObjects(callback) {
  let response = await fetch("https://imozerov.pythonanywhere.com/artworks/api/v1.0/artworks");
  let json = await response.json()
  let artObjects = json.artworks;
  let jsonWithImages = await artObjects.filter(object => object.image);
  await jsonWithImages.forEach(object => Image.prefetch(object.image));
  callback(jsonWithImages);
}
