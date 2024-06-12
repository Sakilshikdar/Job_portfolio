import React from 'react';
import pic from '../../assets/images/web_image/web_1_1.png'
import pic2 from '../../assets/images/web_image/web_1_2.png'
import pic3 from '../../assets/images/web_image/web_1_3.png'

const ProjectsOne = () => {
    return (
        <div style={{color:'#c2c3ca'}}>
            <div>
                <h1 className='text-3xl text-white text-center text-primary font-bold my-6 '>Project Details</h1>
            </div>
            <div class=" grid grid-cols-1 lg:grid-cols-2 my-2 ">
                <div className='my-3'>
                    <div className='grid grid-cols-1 gap-2 sm:mx-1 lg:mx-32'>
                        <div>
                            <img src={pic} class="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <img src={pic2} class="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <img src={pic3} class="max-w-sm rounded-lg shadow-red-600" />
                        </div>
                    </div>
                </div>
                <div className='my-auto p-4 '>
                    <h1 class="text-5xl font-bold text-yellow-100">Quiz Master</h1>
                    <div class="py-6">
                        <p className='text-2xl'>• This is a Quiz webside.</p>
                        <p className='text-2xl'>• This webside have login and register page </p>
                        <p className='text-2xl'>• ALL component is a Accessable.</p>
                        <p className='text-2xl'>• I used Django, Django_rest_fremwork.</p>
                    </div>

                    <div className='flex gap-3'>
                        <a href="https://quiz-master-2.onrender.com/"> <div class="card-actions">
                            <button class="btn btn-primary">Live link</button>
                        </div></a>
                        <a href="https://github.com/Sakilshikdar/quiz_master_2"> <div class="card-actions">
                            <button class="btn btn-primary">Code link</button>
                        </div></a>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-2xl font-serif font-bold text-yellow-100'>Technology Used:</h1>
                        <p className='text-xl'>Github,Django, Django_MVT_Pattern, Django_authenticate
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsOne;