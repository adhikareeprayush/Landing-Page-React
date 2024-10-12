import Button from '../Button/Button';
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content bg-lila-500">
                <h2>Pioneering the future of decentralized finance and blockchain</h2>
                <p>Join us on our journey to transform the financial landscape with cutting-edge cryptocurrency solutions and groundbreaking blockchain technologies.</p>
                <Button text="Explore all pages" type="secondary" className='w-fit' />
            </div>
            <div className="hero-image bg-[#fee3c6]">
                Hi
            </div>
        </section>
    )
}

export default Hero
