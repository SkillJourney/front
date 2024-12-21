import React from 'react';
import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav>
            <div className='nav-title'>
                <h1>Skill<strong>Journey</strong></h1>
            </div>
            <div className='nav_list'>
                <ul>
                    <a onClick={() => navigate('/')}><li>HOME</li></a>
                    <a onClick={() => navigate('/corporate')}><li>ENTREPRISES</li></a>
                    <a onClick={() => navigate('/contact')}><li>CONTACT</li></a>
                </ul>

                <div className='containers_butt'>
                    <a onClick={() => navigate('/register')}><Button>S'INSCRIRE</Button></a>
                    <a onClick={() => navigate('/login')}><Button>CONNEXION</Button></a>
                </div>
            </div>


        </nav>
    );
};

export default NavBar;