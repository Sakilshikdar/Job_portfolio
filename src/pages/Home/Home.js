import React from 'react';
import Footer from '../../shared/Footer/Footer';
import About from '../About';
import Contract from '../Contract';
import Landing from '../Landing';
import Projects from '../Projects';
import Services from '../Services';
import Skill from '../Skill';
import Blog from './Blog';
import Info from './Info'

const Home = () => {
    return (
        <div className='sm-p-5'>
            <Landing></Landing>
            <Projects></Projects>
            <Skill></Skill>
            <About></About>
            <Blog></Blog>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;