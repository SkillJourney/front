import React from 'react';
import img1 from "../assets/cardFeatured/loca.svg"
import img2 from "../assets/cardFeatured/mon.svg"
import img3 from "../assets/cardFeatured/wo.svg"

const CardFeatured = ({ salary, img, company, map, type, title }) => {
    return (
        <div className='container_card_featured'>

            <div className='content_img_featured'>
                <div className='crop_img_fe'>
                    <img src={img} alt='job' />
                </div>
            </div>

            <div className='content_text_featured'>
                <h3>{title}</h3>
                <div className='content_icons_fe'>
                    <div className='fe_item'>
                        <img src={img3} />
                        <p>{company}</p>
                    </div>
                    <div className='fe_item'>
                        <img src={img1} />
                        <p>{map}</p>
                    </div>
                    <div className='fe_item'>
                        <img src={img2} />
                        <p>{salary} $</p>
                    </div>
                </div>
            </div>

            <div className='content_type_featured'>
                <div className='ty_item'>
                    <p>{type}</p>
                </div>
            </div>

        </div>
    );
};

export default CardFeatured;