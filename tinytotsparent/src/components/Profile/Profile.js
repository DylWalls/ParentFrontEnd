import React, { useState } from 'react';
import ImageUploader from 'react-images-upload'
import axios from 'axios';
import '/Profile.css';



const UploadComponent = props => (
    <form>
        <label>
            File Upload URL:
            <input id='urlInput' type='text' onChange={props.onUrlChange} value={props.url}></input>
        </label>
        <ImageUploader
            key='image-uploader'
            withIcon={true}
            singleImage={true}
            withPreview={true}
            label="Maximum file size: 5MB"
            buttonText='Choose an Image'
            onChange={props.onImage}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
            ></ImageUploader>
    </form>
)


    const onUrlChange = e => {
        setImageUrl(e.target.value);
    }

    const onImage = async (failedImages, successImages) =>{
        if(!url){
            console.log("Missing Url")
            setErrorMessage('Missing a URL to upload to')
            setProgress('uploadError');
            return
        }

        setProgress('uploading')

        try {
            console.log('successImages', successImages)
            const parts = successImages=[0].split(';');
            const mime = parts[0].split(':')[1];
            const name = parts[1]/split('=')[1];
            const data = parts[2];
            const res = await axios.post(url, {mime, name, image: data});

            setImageUrl(res.data.imageUrl)
            setProgress('uploaded')
        } catch (error) {
            console.log('error in upload')
            setErrorMessage(error.message);
            setProgress(uploadError)
        }
    }



const Profile = ({user}) => {
    const [progress, setProgress] = useState('getUpload')
    const [url, setImageUrl] = useState(undefined)
    const [errorMessage, setErrorMessage] = useState('')

    const content = () =>{
        switch(progress){
            case 'getUpload':
                return <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url}/>
            case 'uploading':
                return <h2>Uploading</h2>
            case 'uploaded':
                return <img src={url} alt='uploaded'/>
            case 'uploadedError':
                return (
                    <>
                        <div>Error message = {errorMessage}</div>
                        <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url}/>
                    </>
                )
        }
    }

    return(

        <div>
            <h1>Upload Image</h1>
            {content()}
        </div>
    )


}
export default Profile