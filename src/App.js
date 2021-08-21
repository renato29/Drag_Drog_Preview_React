import { useState } from 'react';
import './App.css';

function App() {
    const [images, setImages] = useState([])

  const dragEvents = { 
    onDragEnter: (e)=> { 
      e.preventDefault();
      console.log('onDragEnter');
    },
    onDragLeave: (e)=> { 
      e.preventDefault();
      console.log('onDragLeave');
    },
    onDragOver: (e)=> { 
      e.preventDefault();
      console.log('onDragOver');
    },
    onDrop: (e)=> { 
      e.preventDefault();
      console.log('onDrop');

      const files = Array.from(e.dataTransfer.files);
      
      //Method 2 - using  FileReader 

      files.map(file=> {
        const {name,size} = file;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend =()=>{ 
          const preview = reader.result;
          const image = {
            name,
            size,
            preview};
            

            setImages((prevImages)=>{
              return[...prevImages, image];
            });
        };
        return null;
      });


      //Method 1 - using  URL.createObjectURL(file)

      // const images = files.map((file)=>{
      //   const {name,size} = file;
      //   return {
      //     name,
      //     size, 
      //     preview: URL.createObjectURL(file)
      //   }
      // });
      // setImages(images)
    },
  }
  console.log(images)
  return (
    <div className="container">
      <div className='logo'>
        <img src='/photography-group.png' alt='Photography Group' />
      </div>
      <div className='file-drop'  {...dragEvents} >
        <div className='text'>Drag & Drop your Image here.</div>
      </div>
      <div className='preview'>
        {images.map((image)=>{
          return (
          <div className='image' key={image.name}>
            <img src={image.preview} alt={image.name} />
          </div>)
        })}


        {/* <div className='image'><img src="https://loremflickr.com/600/600?random=1" alt='' /></div>
        <div className='image'><img src="https://loremflickr.com/600/600?random=2" alt='' /></div>
        <div className='image'><img src="https://loremflickr.com/600/600?random=3" alt='' /></div>
        <div className='image'><img src="https://loremflickr.com/600/600?random=4" alt='' /></div>
        <div className='image'><img src="https://loremflickr.com/600/600?random=5" alt='' /></div>
        <div className='image'><img src="https://loremflickr.com/600/600?random=6" alt='' /></div>
        <div className='image'><img src="https://loremflickr.com/600/600?random=7" alt='' /></div>
        <div className='image'><img src="https://loremflickr.com/600/600?random=8" alt='' /></div> */}

      </div>
    </div>
  );
}

export default App;


