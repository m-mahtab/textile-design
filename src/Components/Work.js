import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiPencilBrush } from "react-icons/gi";
import { GiRolledCloth } from "react-icons/gi";




function Work({title, artheading, artpara, photoheading, photopara}) {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className='mx-6 sm:mx-11 my-11 sm:my-14 md:my-16  xl:my-20'>
            <div className='mb-12 text-yellow'>

                <h2 className=' text-2xl '>{title}</h2>
                <div>

                    <span className='line bg-gray rounded-lg inline-block'></span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  text-white'>
                <div className=' sm:mx-4 md:mx-11 mt-4 md:mt-0 ' data-aos="fade-up">
                    <div className=' custom-shadow bg-transparent rounded-lg py-3 sm:py-5 md:py-7'>
                       
                        <div className=' w-full'>

                            <div className='flex justify-center my-5'>

                                <span className='circle2 '><GiPencilBrush className='text-4xl text-gray' /></span>
                            </div>
                            <h2 className='text-2xl'>{artheading}</h2>
                            <div className='mx-11 my-5 opacity-60'>

                                <p>{artpara}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' sm:mx-4 md:mx-11 my-9 md:my-0' data-aos="fade-up">
                    <div className='custom-shadow bg-transparent rounded-lg py-3 sm:py-5 md:py-7 w-full'>
                        <div>

                            <div className='flex justify-center my-5'>
                                <span className='circle2'><GiRolledCloth  className='text-4xl text-gray' /></span>
                            </div>
                            <h2 className='text-2xl'>{photoheading}</h2>
                            <div className='mx-11 my-5 opacity-60'>
                                <p>{photopara}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work

//checking for adding