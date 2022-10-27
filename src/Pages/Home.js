import React from 'react';
import logo from '../Assets/logo.png'
const Home = () => {
    return (
        <div className='m-lg-5 m-3 d-lg-flex justify-content-center align-items-center'>
            <img className='w-100 mx-lg-5 mb-lg-0 mb-5' src={logo} alt="" />
            <div className='w-lg-50 w-100 mx-lg-5'>
                <h1 className='fw-bold text-center mb-3'>Web Learning</h1>
                <p className='text-center'>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.</p>
            </div>
        </div>
    );
};

export default Home;