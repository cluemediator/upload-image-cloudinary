import React from "react";
const base64Imaage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

function App() {

  // upload image to cloudinary
  const uploadToCloudinary = () => {
    const API_ENDPOINT = 'https://api.cloudinary.com/v1_1/<CLOUD_NAME>/upload';

    const fileData = new FormData();
    fileData.append('file', base64Imaage);
    fileData.append('upload_preset', '<UPLOAD_PRESET>'); // upload preset
    fileData.append('tags', 'xxxxxx'); // optional

    fetch(API_ENDPOINT, {
      method: 'post',
      body: fileData
    }).then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(err => console.error('Error:', err));
  }

  return (
    <div className="App">
      <h3>Upload image to Cloudinary - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h3>
      <input
        type="button"
        value="Upload image to Cloudinary"
        onClick={uploadToCloudinary} />
    </div>
  );
}

export default App;
