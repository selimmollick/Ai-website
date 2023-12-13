// import React from 'react'
import React, { useState, useEffect, useRef } from 'react';

import Swiper from 'swiper';
import './Home.css';
import { useDropzone } from 'react-dropzone';
import a from '../Images/AG.png';
import b from '../Images/AI.png';
import c from '../Images/AL.png';
import d from '../Images/AO.png';
import e from '../Images/AR.png';
function Home() {
 

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const sliderRef = useRef(null);
  
    const itemsData = [
      // ... your existing items data
    ];
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? itemsData.length - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === itemsData.length - 1 ? 0 : prevIndex + 1));
    }


   


  // banner-section
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


  // new-banner


  useEffect(() => {
    const activate = (e) => {
      const items = sliderRef.current.querySelectorAll('.item');
      if (e.target.matches('.next')) {
        sliderRef.current.append(items[0]);
      } else if (e.target.matches('.prev')) {
        sliderRef.current.prepend(items[items.length - 1]);
      }
      console.log(items);
    };

    document.addEventListener('click', activate, false);

    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, []);
  
  return (
    <div>
      <>
      <main>
      <ul className='slider' ref={sliderRef}>
        <li className='item' style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Lossless Youths"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Lossless Youths"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Lossless Youths"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Lossless Youths"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Lossless Youths"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Lossless Youths"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        {/* Repeat the pattern for other items */}
      </ul>
      <nav className='nav'>
        <a href='#' ><ion-icon className='btn prev' name="arrow-back-outline">next</ion-icon></a>
        <ion-icon className='btn next' name="arrow-forward-outline">preview</ion-icon>
      </nav>
    </main>

      {/* Hero-banner */}



       
      </>
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