import { ICONS } from '../../assets/ICONS';
import Button from '../Button/Button';
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content bg-lila-500">
                <h2>Pioneering the future of decentralized finance and blockchain</h2>
                <p>Join us on our journey to transform the financial landscape with cutting-edge cryptocurrency solutions and groundbreaking blockchain technologies.</p>
                <Button text="Explore all pages" type="secondary" />
            </div>
            <div className="hero-image bg-[#fee3c6]">
                <img src={ICONS.blob1} alt="" className='w-[150px] h-[150px] rounded-[50%] border-4 border-[#141520]' />
            </div>
        </section>
    )
}

export default Hero
