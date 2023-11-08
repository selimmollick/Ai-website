// import React from 'react'
import React, { useState } from 'react';
// import { Routes, Route, } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import first_slider from '../Images/slider-1.jpg';
import a from '../Images/AG.png';
import b from '../Images/AI.png';
import c from '../Images/AL.png';
import d from '../Images/AO.png';
import e from '../Images/AR.png';




function Home() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const onDrop = (acceptedFiles) => {

    setUploadedImages([...uploadedImages, ...acceptedFiles]);
  };

  const removeImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });
  return (
    <div>
    
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={first_slider} className="d-block w-100 h-70" alt="#" />
            </div>
            <div className="carousel-item">
              <img src={first_slider} className="d-block w-100 h-70" alt="#" />
            </div>
            <div className="carousel-item">
              <img src={first_slider} className="d-block w-100 h-70" alt="#" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>


      











      <section>
        <div className='row justify-content-evenly my-5'>

          <div className='col-md-5'>
            <h3>Top images</h3>
            <img src={a} alt="#" />
            <img src={b} alt="#" />
            <img src={c} alt="#" />
            <img src={d} alt="#" />
            <img src={e} alt="#" />





          </div>
          <div className='col-md-5'>


            <div>
              <h2>Drag and Drop Image Upload</h2>
              <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here...</p>
                ) : (
                  <p>Drag 'n' drop some images here, or click to select files</p>
                )}
              </div>
              <div>
                {uploadedImages.map((file, index) => (
                  <div key={index}>
                    <button onClick={() => removeImage(index)}>Remove</button>
                    <img src={URL.createObjectURL(file)} alt={`Image ${index}`} />
                    <p>{file.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home