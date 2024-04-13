import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";


function ContactForm({contactInfo}) {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is Empty'),
    })
    const onSubmit = (values, { resetForm }) => {

        console.log('Form submitted:', values);

        resetForm();
    };
    return (
        <div className='mx-6 md:mx-11 my-36'>
            <div className='my-12 text-yellow'>

                <h2 className=' text-2xl '>Contact Me</h2>
                <div className='double_line '>

                    <span className='line  bg-light-gray w-32 rounded-lg inline-block'></span>
                </div>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2'>
                <div data-aos="fade-up">


                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}



                    >
                        <Form className=' sm:px-11 lg:px-24 my-3 md:my-11 w-full'>
                            <h4 className='text-start text-3xl text-white '>Just Say Hello</h4>
                            <div className='mt-5'>

                                <Field className='input ' type='text' id='name' name='name' placeholder='Name' />
                                <ErrorMessage name="name" component="div" className='text-white' />

                            </div>
                            <div className='mt-5 w-full'>

                                <Field className='input' type='email' id='email' name='email' placeholder='Email' />
                            </div>
                            <div className='mt-5'>
                                <Field className='input' type='text' id='subject' name='subject' placeholder='Subject' />
                            </div>
                            <div className='mt-5'>
                                <Field className='input1' type='text' id='message' name='message' placeholder='Message' />
                            </div>
                            <div className='flex justify-start'>

                                <span className='span '>

                                    <button type='submit' className='befor buttony-5 px-3 py-2 mt-5   shadow-white  text-black  bg-yellow  rounded-3xl' ><a className='befor'>Send Message</a></button>
                                </span>
                            </div>

                        </Form>
                    </Formik>
                </div>
                <div className='text-white my-7 md:my-11 sm:px-11 lg:px-24' data-aos="fade-up" >
                    <h4 className='text-start text-3xl'>Contact Info</h4>
                    <p className='text-xl mt-5 text-start'>For any inquiries or communication, I welcome you to get in touch with me via email and phone. I value your connection and look forward to hearing from you</p>
                    <div >
                        <ul className='mt-5'>
                            <li className='flex'>

                                <span className='name1'><MdEmail className='text-2xl' /></span>  <span className='pl-6 text-left'>
                                    <h4 className='text-2xl'>Email</h4>
                                    <p>{contactInfo.email}</p>
                                    {/* <p>maryam_mahtab@icloud.com</p> */}
                                </span>
                            </li>
                            <li className='pt-5 flex'>

                                <span className='name1'><FaPhoneAlt className='text-2xl' /></span>  <span className='pl-6 text-left'>
                                    <h4 className='text-2xl' >Phone</h4>
                                    <p>{contactInfo.phone1}</p>
                                    <p>{contactInfo.phone2}</p>
                                </span>
                            </li>
                            <li className='pt-5 flex'>

                                <span className='name1 '><MdLocationOn className='text-2xl' /></span>  <span className='pl-6 text-left'>
                                    <h4 className='text-2xl' >Address</h4>
                                    <p>University of Sargodha, Sargodha</p>

                                </span>
                            </li>



                        </ul>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default ContactForm
//checking for adding