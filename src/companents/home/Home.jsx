import Reac, {useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import video from "../../Assets/video.mp4"
const Home=()=>{
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])


    return(
        <div className='home flex' id='home'>
            <div className='overlay'></div>
            <video src={video} muted loop autoPlay type="video/mp4"></video>
            <div className='container flex'>
                <div className='homeContent flex'>
                    <h1 className='title' data-aos="fade-up">Welcome FOOD.</h1>
                    <h3 className='description' data-aos="fade-up">From Farm to Table, Every Bite Fresh and Unforgettable</h3>
                </div>
            </div>
        </div>

    )
}
export default Home;