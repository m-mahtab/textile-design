import React from 'react';
import { IoClose } from "react-icons/io5";

function Modal({ onClose, imageList }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center'>
            <div className='modal-container'>
                <button className='cursor-pointer text-white absolute top-2 right-2' onClick={onClose}>
                    <IoClose className='text-2xl' />
                </button>
                <div className='modal-content'>
                    {imageList.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            className='w-screen sm:w-auto sm:h-screen'
                            alt='Modal'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Modal;
