import React, { useState } from 'react'

const Testing = () => {
    const [file, setFile] = useState();
  return (
    <div>  <h2>Add Image:</h2>
    <input type="file" onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} />
    <img src={file} /></div>
  )
}

export default Testing