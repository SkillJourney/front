import React, { useState } from 'react';
import { Input, Button, AutoComplete } from 'antd';
import { CloseSquareFilled } from '@ant-design/icons';
import city from '../data/city.json';
import job from '../data/job.json'

const HomePage = () => {
    const [options, setOptions] = useState([]);


    const handleJobSearch = (searchText) => {
        if (searchText) {
            const filteredJobs = job.jobs // Le fichier JSON contenant les métiers s'appelle "job"
                .filter((job) =>
                    job.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    job.synonyms.some((synonym) => synonym.toLowerCase().includes(searchText.toLowerCase()))
                )
                .slice(0, 8); // Limite les résultats à 8

            const formattedOptions = filteredJobs.map((job) => ({
                value: job.name,
                synonyms: job.synonyms.join(", ")  // Affiche les synonymes séparés par des virgules
            }));

            setOptions(formattedOptions);
        } else {
            setOptions([]); // Efface les résultats si la recherche est vide
        }
    };



    const handleCitySearch = (searchText) => {
        if (searchText) {
            const filteredCities = city
                .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
                .slice(0, 8);

            const formattedOptions = filteredCities.map((city) => ({ value: city }));

            setOptions(formattedOptions);
        } else {
            setOptions([]);
        }
    };

    return (
        <div className='containers_home'>
            <div className='containers_back'>
                <div className='containers_info_job'>
                    <div className='title'>
                        <h2>Find your job</h2>
                        <div className='search-bar'>

                            <AutoComplete
                                style={{ width: 240 }}
                                options={options}
                                onSearch={handleJobSearch}
                                placeholder="Job title, keywords"
                                allowClear={{
                                    clearIcon: <CloseSquareFilled />,
                                }}
                            />
                            <AutoComplete
                                style={{ width: 240 }}
                                options={options}
                                onSearch={handleCitySearch}
                                placeholder="city, province or région"
                                allowClear={{
                                    clearIcon: <CloseSquareFilled />,
                                }}
                            />
                            <Button>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
