import React from "react";
import man from "../assets/images/Digital_Agency_images/man.png";
import element from "../assets/images/Digital_Agency_images/elements.png"
import './Landing.css'


const Landing = () => {
  return (
    <div className='relative'>
      <div class='hero h-screen lg:h-[60vh] relative z-10 mt-16'>
        <div class='hero-content flex-col lg:flex-row'>
          <div>
            <p
              className='text-4xl font-bold text-white'
            >
              This is me Sakil Shikdar
            </p>
            <h1
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='900'
              class='text-5xl font-bold'
            >

            </h1>
            <p className="my-4"
              // data-aos='fade-right'
              // data-aos-delay='600'
              // data-aos-duration='800'
              // className='text-white py-6 max-w-xl text-xl'
            >
              I am a professional Full-Stack website developer. I have more than 1+ years of experience in ReactJS and java , Nodejs. I always try to learn and share new skills and stay updated
            </p>
            <a target='_blank' href="https://drive.google.com/file/d/1NnM2N6_g1p-6MuyB05ACxZ9G6TDeQi6f/view">
              <button
                // data-aos='zoom-in'
                // data-aos-delay='1300'
                className='btn px-4 btn-primary'
              >
                Resume
              </button>
            </a>
          </div>
          <div className='h-[60vh] shrink-0'>
            <img src={man} className='man h-full' alt='' />
            <img src={element} alt='' className='element'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
