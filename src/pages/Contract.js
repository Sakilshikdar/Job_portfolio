import React from 'react';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ssnnxtr', 'template_ntx86yo', e.target, 'JD4KonpCb7XGna6tR')
            .then((result) => {
                toast(result.text);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div id='contract' className='mt-5 mb-10'>
            <h1 className='text-center font-bold text-3xl text-primary my-7'>Contact Me</h1>

            <div className="relative shadow-xl card w-11/12 lg:w-6/12 mx-auto bg-base-100 bg-cover bg-center" style={{ backgroundImage: "url('https://static-cse.canva.com/blob/572029/removingbackgroundimages_Unsplash.5de0da19.avif')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for darkening the background */}
                <div className="card-body relative z-10">
                    <div className="container">
                        <form onSubmit={sendEmail}>
                            <div className="pt-5 mx-auto">
                                <div className="mx-auto">
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Name" name="name" />
                                </div>
                                <div className="pt-2 mx-auto">
                                    <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Email Address" name="email" />
                                </div>
                                <div className="pt-2 mx-auto">
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Subject" name="subject" />
                                </div>
                                <div className="pt-2 mx-auto">
                                    <textarea className="w-full p-2 border border-gray-300 rounded" cols="5" rows="2" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="pt-3 mx-auto">
                                    <input type="submit" className="btn btn-primary w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
