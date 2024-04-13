import React, { useState, useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { IoClose } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Modal({ onClose, imageList, selectedImage }) {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const [currentslide, setCurrentslide] = useState(0);

   

    useEffect(() => {
        if (imageList && imageList.length > 0) {
            // const initialSlide = imageList.indexOf(selectedImage);
            setCurrentslide(selectedImage >= 0 ? selectedImage : 0);

        }
    }, [imageList, selectedImage]);

    return (
        <div>
            <div className=' fixed flex top-0 left-0 w-full h-full bg-black bg-opacity-75  items-center justify-center '
            >

                <button className='cursor-pointer text-white absolute top-2 right-2 ' onClick={onClose}>
                    <IoClose className='text-2xl' />


                </button>
                <div className='modal'>
                    {imageList.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image.src}
                                className='w-screen sm:w-auto sm:h-screen'
                                alt={`${index + 1}`}
                            />
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );

}


function Allover({ imageList }) {
   const settings = {
  dots: true,
  dotsClass: 'slick-dots custom-dots',
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024, // Medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768, // Small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null); // Clear selected image when closing modal
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        openModal();
    };

    return (
        <div>
            <div className='mx-6 md:mx-11'>
                <div className='my-12 text-yellow'>

                    <h2 className=' text-2xl '>ALL OVER</h2>
                    <div>

                        <span className='line bg-light-gray rounded-lg inline-block'></span>
                    </div>
                </div>
                <div className='mx-3 md:mx-6'  >
                <Slider {...settings}>
                    {imageList.map((image, index) => (
                        <div key={index} data-aos="fade-up " className='img-hover-zoom  img-hover-zoom--brightness' >
                            <img
                                src={image.src}
                                className=' w-auto transition-all duration-100 rounded-lg cursor-pointer ' //filter grayscale hover:grayscale-0
                                alt={` ${index + 1}`}
                                onClick={() => handleImageClick(image)}
                            />
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            {isModalOpen && <Modal onClose={closeModal} imageList={[selectedImage]} />}
        </div>
    );

}

export default Allover;

//checking for adding