'use strict'

export default async function fetchArtObjects(callback) {
  let response = await fetch("https://street-art-server.herokuapp.com/artworks");
  let json = await response.json()
  let jsonWithImages = json.filter(object => object.photos[0].image);
  callback(jsonWithImages);
}
