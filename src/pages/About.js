import React from 'react';
import man2 from "../assets/images/man_png2.jpg"

const About = () => {
    return (
        <div id='about' className='mt-28'>
            <div class="grid sm:grid-cols-1 lg:grid-cols-2 lg:pl-0 sm:pl-5 lg:ml-0">
                <img src={man2} className="max-w-sm lg:ml-48 rounded-lg shadow-2xl" />
                <div className='lg:px-0 sm:px-3 mt-3'>
                    <h1 class=" text-5xl font-bold text-white">About Me</h1><br />
                    <p className='text-xl text-white'>Developer <span className='text-red-700'>and Designer</span></p>
                    <p className="font-mono text-white py-6">I am a front-end web-developer. I can make the website clean code <br /> and pixel perfect design.I also make the website more & more <br /> interactive with web animation.I can provide clean code and pixel <br /> perfect design.I also make the website more & more interactive with <br /> web animation.A responsive design makes your website accessible to <br /> all user, regardless of their device.</p>
                    <button class="btn hover:btn-primary border-t-pink-700">Let's talk</button>
                </div>
            </div>
        </div>
    );
};

export default About;