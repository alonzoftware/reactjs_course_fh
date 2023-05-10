export const fileUpload = async (file: File) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dm6i6flch/image/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-fh');
    formData.append('file', file);


    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        console.log(resp);
        if (!resp.ok) throw new Error('Problem Uploading Images');
        const cloudResp = await resp.json();
        console.log(cloudResp);
        return cloudResp.secure_url;
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }


}