import "cross-fetch/polyfill";
import { fileUpload } from "../../src/helpers/fileUpload";

describe('tests in fileUpload', () => {
    test('should upload a file to cloudinary', async () => {

        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        //const imageUrl = 'https://res.cloudinary.com/dm6i6flch/image/upload/v1683860381/journal/yz6fmllzmm2wfgqgdfvn.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        console.log(blob.size);
        const file = new File([blob], "foto.jpg");
        const url = await fileUpload(file);
        // expect(typeof url).toBe('string');


    })
});