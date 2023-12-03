import React, {useEffect} from 'react'
import './footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiUbereats } from "react-icons/si";
import { TbBrandDeliveroo } from "react-icons/tb";
const Footer=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div className='footer flex' id='footer'>
            <div className='container flex'>
            <h3 className='title' data-aos="fade-up">Contact Us</h3>
                <div className='form' data-aos="fade-up">
                    
                    <form>
                        <div className='email'>
                            <label>Email :  </label>
                            <input type='email' placeholder='Enter Your Email ...'/>
                        </div>
                        <div className='message'>
                            <label > Message :</label>
                            <textarea type="text" placeholder='Enter Your Message ....'>

                            </textarea>
                        </div>

                        <button type='submit' className='btn'>Submit</button>
                    </form>
                    
                </div>
                <div className='links flex'>
                    <div className='network'>
                        <a href='#'>
                        <FaInstagram className='icon'/>
                        </a>
                        <a href='#'>
                            <FaFacebookF className='icon'/>
                        </a>
                        <a href='#'>
                            <RiTwitterXFill className='icon'/>
                        </a>
                    </div>
                    

                    <div className='delivery'>
                        <a href='#'>
                            <SiUbereats  className='icon'/>
                        </a>
                        <a href='#'>
                            <TbBrandDeliveroo className='icon'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='copyright flex'>
                <small>FOOD.</small>
                <small>COPYRIGHTS RESERVED - dib.code 2023</small>
            </div>
        </div>
    )
}
export default Footer