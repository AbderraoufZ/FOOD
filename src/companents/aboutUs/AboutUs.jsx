import React, {useEffect} from 'react'
import './aboutUs.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import FOOD from '../../Assets/FOOD.jpg'

const AboutUs=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <div className='aboutUs flex' id='aboutUs'>
            <div className='container flex'>
                <div className='imageFOOD' data-aos="fade-up">
                    <img src={FOOD} alt=''/>
                </div>
                <div className='information'>
                    <div className='title' data-aos="fade-up">FOOD.</div>
                    <div className='description' data-aos="fade-up">
                        A gastronomic haven, offers a sensory journey where culinary artistry meets comfort. The contemporary ambiance, adorned with tasteful decor, sets the stage for an exquisite dining experience. Meticulously crafted dishes showcase a fusion of flavors, promising a delightful celebration of food and a memorable escape for discerning palates.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs