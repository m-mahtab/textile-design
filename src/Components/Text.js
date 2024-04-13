import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Text({title1, title2, subTitle, mainText, backgroundImage}) {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])



    return (
        <div className='my-11 sm:my-14 md:my-16  xl:my-20' >
            
            <div >
                <div className='text-white '>
                    <div className='text-4xl sm:text-5xl lg:text-6xl xl:text-10xl font-thin'>

                        <div>
                            <h1 className='pt-3 sm:pt-4 lg:pt-6 xl:pt-9' data-aos="fade-up">{title1}</h1>
                        </div>
                        <div>
                            <h1 className='py-5 text_stroke' data-aos="fade-up">{title2}</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-base sm:text-2xl text-yellow lg:text-3xl xl:text-4xl' data-aos="fade-up">{subTitle}</h1>
                    </div>
                </div>
                <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray font-thin' data-aos="fade-up">
                    <h1>{mainText}</h1>
                </div>
            </div>
        </div>
    )
}

export default Text

//checking for adding

