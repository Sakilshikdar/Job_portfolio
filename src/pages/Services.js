// import React from 'react';
// import emailjs from "emailjs-com";
// import { toast } from 'react-toastify';

// const Services = () => {
//     function sendEmail(e) {
//         e.preventDefault();

//     emailjs.sendForm('service_ssnnxtr', 'template_ntx86yo', e.target, 'JD4KonpCb7XGna6tR')
//         .then((result) => {
//             toast(result.text)
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }

//     return (
//         <div>
//              <h1 className='text-center font-bold text-3xl text-primary my-7'>Contract Me</h1>
       
//         <div class="shadow-xl image-full card w-11/12 lg:w-6/12  mx-auto bg-base-100">
//             <figure><img src="https://static-cse.canva.com/blob/572029/removingbackgroundimages_Unsplash.5de0da19.avif" alt="email" /></figure>
//             <div class="card-body">
//                 <div className="container">
//                     <form onSubmit={sendEmail}>
//                         <div className="row pt-5 mx-auto">
//                             <div className="col-8 form-group mx-auto">
//                                 <input type="text" className="form-control" placeholder="Name" name="name" />
//                             </div>
//                             <div className="col-8 form-group pt-2 mx-auto">
//                                 <input type="email" className="form-control" placeholder="Email Address" name="email" />
//                             </div>
//                             <div className="col-8 form-group pt-2 mx-auto">
//                                 <input type="text" className="form-control" placeholder="Subject" name="subject" />
//                             </div>
//                             <div className="col-8 form-group pt-2 mx-auto">
//                                 <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                             </div>
//                             <div className="col-8 pt-3 mx-auto">
//                                 <input type="submit" className="btn btn-primary" value="Send Message"></input>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Services;