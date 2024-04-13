import React, { useState } from 'react';
import Slider from "react-slick";
import Modal from '../Modal'; 


function Shirt({ imageList }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null); 
    };

    const settings = {
        dots: true,
        dotsClass: 'slick-dots custom-dots',
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className='mx-6 md:mx-11 my-11 sm:my-14 md:my-16  xl:my-20'>
                <div className='my-12 text-yellow'>
                    <h2 className='text-2xl'>Shirt</h2>
                    <div>
                        <span className='line bg-light-gray rounded-lg inline-block'></span>
                    </div>
                </div>
                <div className='mx-3 md:mx-6'>
                    <Slider {...settings}>
                        {imageList.map((image, index) => (
                            <div key={index} data-aos="fade-up" className='img-hover-zoom img-hover-zoom--brightness'>
                                <img
                                    src={image.src}
                                    className='w-auto transition-all duration-100 rounded-lg cursor-pointer'
                                    alt='Shirt Style'
                                    onClick={() => openModal(image)}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal} imageList={[selectedImage]} />
            )}
        </div>
    );
}

export default Shirt;
