//import "cross-fetch/polyfill";
import "whatwg-fetch";
import { fileUpload } from "../../src/helpers/fileUpload";
import 'setimmediate';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: 'dm6i6flch',
    api_key: '568556679512227',
    api_secret: 'Py4Ohv81L5dAHBayMprbJ2uKj4A',
    secure: true
});

describe('tests in fileUpload', () => {
    test('should upload a file to cloudinary', async () => {

        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        //const imageUrl = 'https://res.cloudinary.com/dm6i6flch/image/upload/v1683860381/journal/yz6fmllzmm2wfgqgdfvn.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob()
        // Crear un objeto File
        const file = new File([blob], "foto.png");

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        //Proccess id image
        const segments = url.split('/');
        const imageID = segments[segments.length - 1].replace('.png', '');
        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageID], {
            resource_type: 'image'
        });
        console.log({ cloudResp });
    });
    test('should return Empty String', async () => {

        // Crear un objeto File
        const file = new File([], "foto.png");

        const url = await fileUpload(file);
        //expect(url).toBe('');
        expect(url).toBe('');
    });



});

