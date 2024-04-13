import React from 'react';
import { TypeAnimation } from 'react-type-animation';



function openWhatsApp(phoneNumber) {
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    window.open(`whatsapp://send?phone=${encodedPhoneNumber}`, '_blank');
}


function Cover({ backgroundImage, learnMoreText }) {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    const coverStyle = {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: '100% ',
        backgroundRepeat: 'no-repeat',
    };
    //checking for adding


    return (
        <div>
            <div style={coverStyle} className=' md:h-screen filter grayscale-100 bg-fixed'>
                <div className="text-white ">

                    <div className='font-thin bg-black bg-opacity-80 h-64 sm:h-96 md:h-screen flex flex-col justify-center items-center'>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-6xl  '>
                            <TypeAnimation className='gredient'
                                sequence={[
                                    
                                    "I'm Malaika Mishaal",
                                    3000,
                                    "I'm Textile Designer"
                                    ,
                                    3000,
                                    
                                ]}
                                speed={50}
                                
                                repeat={Infinity}
                            />
                        </h1>
                        <div className='pt-5 text-base sm:text-lg pb-10  lg:text-xl xl:text-2xl flex  justify-center'>
                            <h2>
                                A pattern is worth a thousand threads...!

                            </h2>


                        </div>
                        <span>

                            <button className=' buttony-5 px-3 py-2  shadow-white  text-black  bg-gray  rounded-3xl' onClick={() => openWhatsApp('+923066595224')}><a className='befor'>{learnMoreText}</a></button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cover;
