import React from 'react';

const Skill = () => {
    return (
        <div>
            <h1
             className='text-3xl font-bold text-primary text-center my-5'>Skills & Exprience</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='ml-8 lg:ml-48'>
                    <h1 className='text-lg text-secondary font-bold'>Python:</h1>
                    <progress class="progress progress-primary w-75  mb-2" value="90" max="100"></progress>
                    <h1 className='text-lg text-secondary font-bold'>Django:</h1>
                    <progress class="progress progress-primary mb-2 w-75 " value="80" max="100"></progress>
                    <h1 className='text-lg text-secondary font-bold'>DataStructure & Algorithem:</h1>
                    <progress class="progress progress-primary w-75 " value="70" max="100"></progress>
                    <h1 className='text-lg text-secondary font-bold'>React:</h1>
                    <progress class="progress progress-primary mb-2 w-75 " value="70" max="100"></progress>
                    <h1 className='text-lg text-secondary font-bold'>Html:</h1>
                    <progress class="progress progress-primary w-75  mb-2" value="80" max="60"></progress>
                    <h1 className='text-lg text-secondary font-bold'>Css:</h1>
                    <progress class="progress progress-primary  w-75  mb-2" value="700" max="60"></progress>
                </div>
                <div>
                    <div className="card w-96 lg:w-75 bg-base-100 shadow-xl mt-3 sm:mt-5 lg:ml-36 image-full"  
                    >
                        <figure><img src="https://uploads-ssl.webflow.com/5e733294d7b5a568ffa60a00/60533c746f84de2a9acc0e09_5f180186daa558da7b7dcdaa_0_SHZhejMPJFYc-vzd.jpeg" alt="experience" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-white">Backend Development Experience</h2>
                            <p className='text-white'>I have great experience in web development using different scripting language including React, JavaScript,Python,Django hands on experience in HTML, CSS and bootstrap, Tailwind-CSS to make the website responsive and eye catching.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;