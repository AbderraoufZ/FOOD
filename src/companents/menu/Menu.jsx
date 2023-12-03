import Reac, {useEffect} from 'react'
import './menu.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

// Import image
import dish1 from '../../Assets/dish1.jpg'
import dish2 from '../../Assets/dish2.jpg'
import dish3 from '../../Assets/dish3.jpg'
import dish4 from '../../Assets/dish4.jpg'
import pizza1 from '../../Assets/pizza.jpg'
import burger1 from '../../Assets/burger1.jpg'
import dessert1 from '../../Assets/dessert1.jpg'
import dessert2 from '../../Assets/dessert2.jpg'


const Menu=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return(
        <div className='menu flex' id='menu'>
            <div className='container flex'>
                <div className='title' data-aos="fade-up">
                    List of Popular Dishes
                </div>
                <div className='filter flex' data-aos="fade-up">
                    <div className='btn active'>All</div>
                    <div className='btn'>Dishes</div>
                    <div className='btn'>Burger</div>
                    <div className='btn'>Pizza</div>
                    <div className='btn'>Dessert</div>
                </div>
                <div className='cards grid'>

                    <div className='card' data-aos="fade-up" data-aos-duration='1000'>
                        <div className='image'>
                            <img src={dish1} alt=''/>
                        </div>
                        <div className='infoCard'>
                            <h3 className='title'>Steak</h3>
                            <p>La lueur douce de l'aube caresse le monde endormi. Les oiseaux chantent, annonçant un nouveau jour. La nature s'éveille, enveloppant tout dans sa magie matinale.</p>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up" data-aos-duration='2000'>
                        <div className='image'>
                            <img src={dish2} alt=''/>
                        </div>
                        <div className='infoCard'>
                            <h3 className='title'>Saumon</h3>
                            <p>La lueur douce de l'aube caresse le monde endormi. Les oiseaux chantent, annonçant un nouveau jour. La nature s'éveille, enveloppant tout dans sa magie matinale.</p>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up" data-aos-duration='3000'>
                        <div className='image'>
                            <img src={dish3} alt=''/>
                        </div>
                        <div className='infoCard'>
                            <h3 className='title'>Pasta</h3>
                            <p>La lueur douce de l'aube caresse le monde endormi. Les oiseaux chantent, annonçant un nouveau jour. La nature s'éveille, enveloppant tout dans sa magie matinale.</p>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up" data-aos-duration='3000'>
                        <div className='image'>
                            <img src={dish4} alt=''/>
                        </div>
                        <div className='infoCard'>
                            <h3 className='title'>Pasta</h3>
                            <p>La lueur douce de l'aube caresse le monde endormi. Les oiseaux chantent, annonçant un nouveau jour. La nature s'éveille, enveloppant tout dans sa magie matinale.</p>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up" data-aos-duration='2000'>
                        <div className='image'>
                            <img src={pizza1} alt=''/>
                        </div>
                        <div className='infoCard'>
                            <h3 className='title'>Pizza</h3>
                            <p>La lueur douce de l'aube caresse le monde endormi. Les oiseaux chantent, annonçant un nouveau jour. La nature s'éveille, enveloppant tout dans sa magie matinale.</p>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up" data-aos-duration='1000'>
                        <div className='image'>
                            <img src={burger1} alt=''/>
                        </div>
                        <div className='infoCard'>
                            <h3 className='title'>Burger</h3>
                            <p>La lueur douce de l'aube caresse le monde endormi. Les oiseaux chantent, annonçant un nouveau jour. La nature s'éveille, enveloppant tout dans sa magie matinale.</p>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up" data-aos-duration='2000'>
                        <div className='image'>
                            <img src={dessert1} alt=''/>
                        </div>
                        
                        <div className='infoCard'>
                            <h3 className='title'>Fige</h3>
                            <p>La lueur douce de l'aube caresse le monde endormi. Les oiseaux chantent, annonçant un nouveau jour. La nature s'éveille, enveloppant tout dans sa magie matinale.</p>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up" data-aos-duration='1000'>
                        <div className='image'>
                            <img src={dessert2} alt=''/>
                        </div>
                        <div className='infoCard'>
                            <h3 className='title'>Bananas</h3>
                            <p>La lueur douce de l'aube caresse le monde endormi. Les oiseaux chantent, annonçant un nouveau jour. La nature s'éveille, enveloppant tout dans sa magie matinale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Menu;