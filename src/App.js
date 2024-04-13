import { React, Suspense, lazy } from 'react';
import { FaUserGraduate } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { IoConstruct } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";


import './App.css';
import Cover from './Components/Cover';
import Text from './Components/Text';
import Manual from './Manual';
import Footer from './Components/Footer';

import ContactForm from './Components/ContactForm';
import Work from './Components/Work';
import Allover from './Components/Allover';
import Shirt from './Components/Shirt';

const AboutComp = lazy(()=>import('./Components/About'))




function App() {
  


  const manual = [
    { src: 'assets/images/1_1.webp', id: 1 },
    { src: 'assets/images/3.webp', id: 2 },
    { src: 'assets/images/paint.webp', id: 3 },
    { src: 'assets/images/1.webp', id: 4 },
    { src: 'assets/images/2.webp', id: 5 },
    { src: 'assets/images/7.webp', id: 6 },
    { src: 'assets/images/4.webp', id: 7 },
    { src: 'assets/images/5.webp', id: 8 },
    { src: 'assets/images/6.webp', id: 9 },
  ];

  const allover = [
    { src: 'assets/images/red.webp', id: 1 },
    { src: 'assets/images/sky.webp', id: 2 },
    { src: 'assets/images/orange.webp', id: 3 },
    { src: 'assets/images/beige.webp', id: 4 },
    { src: 'assets/images/black.webp', id: 5 },

  ];
  const shirt = [
    { src: 'assets/images/kurti.webp', id: 1 },
    { src: 'assets/images/mishaal.webp', id: 2 },
  ];

  const shirtnduplist = [

    { src: 'assets/images/blue.webp', id: 1 }, 
    { src: 'assets/images/blackfloral.webp', id: 2 },
    { src: 'assets/images/brown.webp', id: 3 },
  ];

  const suit = [
    { src: 'assets/images/mm0.webp', id: 1 },
    { src: 'assets/images/mm2.webp', id: 2 },
    { src: 'assets/images/mm1.webp', id: 3 },
    { src: 'assets/images/mm3.webp', id: 4 },
    { src: 'assets/images/mm.webp', id: 5},
    { src: 'assets/images/sk01.webp', id: 6 },


    { src: 'assets/images/nw.webp', id: 7 },
    { src: 'assets/images/skin.webp', id: 7 },
    { src: 'assets/images/pink.webp', id: 9 },
    { src: 'assets/images/green.webp', id: 10 },
    { src: 'assets/images/all.webp', id: 11 },
    { src: 'assets/images/greensuit.webp', id: 12 },
    { src: 'assets/images/redsuit.webp', id: 13},
    { src: 'assets/images/grinsuit.webp', id: 14 },
    { src: 'assets/images/mustard.webp', id: 15 },
  ]



  const contactInfo = {
    email: 'mishaalmalaika@gmail.com',
    phone1: '+92 306 659 5224',
    phone2: '+92 315 172 1049',
  };
  const about = {
    headtitle: 'About Me',
    abth1: "Hi There! I'm Malaika Mishaal",
    abth2: 'A Textile Designer',
    abtdesc: 'As a textile designer, I craft visually captivating pieces that weave intricate stories, ignite curiosity, and inspire contemplation. Through a dedication to innovation and collaborative exploration, my objective is to imprint a lasting impression, cultivating profound connections with viewers through the medium of textiles.',
    items : [
      { title: 'Education', desc: 'Bachelor of Textile Designing ' , iconSrc : <FaUserGraduate className='text-3xl' />    },
      { title : 'Work Experience', iconSrc: <IoBriefcase className='text-3xl'/>, desc : `2 Months - Crescent Textile Mills Faisalabad,   6 Months - Ayesha Manan Textile Industry, 1 Month - Hunbul Textile Mill`},
      { title: 'Expertise' , iconSrc: <IoConstruct className='text-3xl' />      , desc: `Creative Design, Photography, Adobe, Photoshop Video, Illustration, Manual Creativity`     },
      { title: 'Skills',iconSrc: <GiSkills  className='text-3xl' />      , desc: `Digital tracings, Design Recreation, Loom Weaving, Research and Data Handling, Material Analysis, Interpretations` },
      { title: 'Freelance',iconSrc: <SiFreelancer  className='text-4xl' />      , desc: 'Open for Textile Design Commissions'  }
      
    ]

  }

  const companyInfo = {
    aboutUs: 'About Us',
    services: 'Services',
    ourWork: 'Our Work',
  };


  const legalInfo = {
    termsAndConditions: 'Terms and Conditions',
    refundCancellation: 'Refund & Cancellation',
    coreValues: 'Core Values',
  };


  return (
    <div className="App bg-black" >



      <Cover
        backgroundImage='/assets/images/orange.webp'
        
        learnMoreText='Whatsapp'
      />
      <Text
        title1="Textile"
        title2="Designing"
        subTitle=" Where Threads Intertwine And"
        mainText="dreams are woven into reality"
        backgroundImage='/assets/images/pattern.png'
      />
      <Suspense fallback = {<div>
        Please Wait...
      </div>}>
        <AboutComp  about={about} />

      </Suspense>
     
      <Work
        title='My Work'
        artheading='Manual'
        artpara='Through vibrant strokes and a harmonious interplay of colors and threads, my work serve as visual narratives that transcend boundaries.'
        photoheading='Fabric'
        photopara='Through intricate weaves and a harmonious interplay of textures and hues, my textile designs serve as tactile narratives that transcend boundaries.'
      />
      <Manual
        imageList={allover} title= 'All Over'
      />
      <Shirt
       imageList={shirt}
      />
      <Manual
        imageList={shirtnduplist} title = 'Shirt & Dupatta'
      />
      <Manual
      imageList={suit} title = 'Dresses'
      />
     
      <Manual imageList={manual} title = 'Manual'/>
      
      <ContactForm
        contactInfo={contactInfo}
      />

      <Footer
        prop1 = 'SERVICE AND WG SUPPORT'

      />
    </div>
  );
}

export default App;
