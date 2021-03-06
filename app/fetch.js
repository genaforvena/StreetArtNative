'use strict'

import { Image } from 'react-native';

export default async function fetchArtObjects(callback) {
    try {
        let response = await fetch("https://imozerov.pythonanywhere.com/artworks/api/v1.0/artworks");
        let json = await response.json();
        let artworks = json.artworks;
        await artworks.forEach(object => {
            let image = object.image;
            Image.prefetch(image).catch(error => console.log(error));
        });
        callback(artworks);
    } catch (error) {
        console.log(error);
    }
}
