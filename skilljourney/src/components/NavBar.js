import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <div className='nav-title'>
                <h1>Skill<strong>Journey</strong></h1>
            </div>
            <div className='nav_list'>
                <ul>
                    <a onClick={() => navigate('/')}><li>HOME</li></a>
                    <a onClick={() => navigate('/corporate')}><li>FOR EMPLOYEES</li></a>
                    <a onClick={() => navigate('/contact')}><li>CONTACT</li></a>
                </ul>

                <div className='containers_butt'>
                    <a onClick={() => navigate('/register')}><Button>SIGN UP</Button></a>
                    <a onClick={() => navigate('/login')}><Button>LOGIN</Button></a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;