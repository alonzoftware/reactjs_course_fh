import "cross-fetch/polyfill";
import { fileUpload } from "../../src/helpers";

describe('tests in fileUpload', () => {
    test('should upload a file to cloudinary', async () => {

        // const imageUrl = 'https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png';
        const imageUrl = 'https://res.cloudinary.com/dm6i6flch/image/upload/v1683860381/journal/yz6fmllzmm2wfgqgdfvn.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], "foto.jpg");
        console.log(file);
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');


    })
});