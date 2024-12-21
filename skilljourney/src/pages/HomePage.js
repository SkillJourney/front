import React from 'react';
import { Input, Button, } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const HomePage = () => {



    return (

        <div className='containers_home'>
            <div className='containers_back'>
                <div className='containers_info_job'>
                    <div className='title'>
                        <h2>Find your job</h2>
                        <div className='search-bar'>
                            <Input
                                placeholder="Job title, keywords or company name"
                            />
                            <Input
                                placeholder="city, province or région"
                            />
                            <Button>Rechercher</Button>
                        </div>

                    </div>
                </div>
            </div>


        </div >
    );
};

export default HomePage;