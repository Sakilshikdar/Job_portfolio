import React from 'react';
import pic from '../../assets/images/web_image/web_3_1.png'
import pic2 from '../../assets/images/web_image/web_3_2.png'
import pic3 from '../../assets/images/web_image/web_3_3.png'

const ProjectsThree = () => {
    return (
        <div style={{color:'#c2c3ca'}}>
            <div>
                <h1 className='text-3xl text-center text-primary font-bold my-6'>Project Details</h1>
            </div>
            <div class=" grid grid-cols-1 lg:grid-cols-2 my-2">
                <div className='my-3'>
                    <div className='grid grid-cols-1 gap-2 sm:mx-1 lg:mx-32'>
                        <div>
                            <img src={pic} class="max-w-sm rounded-lg shadow-2xl " alt='' />
                        </div>
                        <div>
                            <img src={pic2} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                        </div>
                        <div>
                            <img src={pic3} class="max-w-sm rounded-lg shadow-red-600" alt=''/>
                        </div>
                    </div>
                </div>
                <div className='my-auto p-4 '>
                    <h1 class="text-5xl font-bold text-yellow-100">Manufacturer-webside</h1>
                    <div class="py-6">
                        <p className='text-2xl'>• This is a Tools manufactures webside and some protected page.</p>
                        <p className='text-2xl'>• This webside have login and register page.</p>
                        <p className='text-2xl'>• Checkout component is a protect component.</p>
                        <p className='text-2xl'>• This webside have login and register page and have BLOG and PORTFOLIO page.</p>
                    </div>

                    <div className='flex gap-3'>
                        <a href="https://manufacturer-website-2ba74.web.app/"> <div class="card-actions">
                            <button class="btn btn-primary">Live link</button>
                        </div></a>
                        <a href="https://github.com/Sakilshikdar/manufacturer-website-assigment-12-client-side"> <div class="card-actions">
                            <button class="btn btn-primary">Client Code</button>
                        </div></a>
                        <a href="https://github.com/Sakilshikdar/manufacturer-website-assigment-12-server-side"> <div class="card-actions">
                            <button class="btn btn-primary">Server Code</button>
                        </div></a>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-2xl font-serif font-bold text-yellow-100'>Technology Used:</h1>
                        <p className='text-xl'>Github,ReactJS, MongoDB, Firebase, ExpressJS, NodeJS, Tailwind, EmailJS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsThree;