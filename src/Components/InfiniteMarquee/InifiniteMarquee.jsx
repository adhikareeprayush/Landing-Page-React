import facebookIcon from '../../assets/brands/facebook.svg';
import disneyIcon from '../../assets/brands/disney.svg';
import airbnbIcon from '../../assets/brands/airbnb.svg';
import appleIcon from '../../assets/brands/apple.svg';
import sparkIcon from '../../assets/brands/spark.svg';
import samsungIcon from '../../assets/brands/samsung.svg';
import quoraIcon from '../../assets/brands/quora.svg';
import sassIcon from '../../assets/brands/sass.svg';

const logos = [
    { src: facebookIcon, alt: "Facebook" },
    { src: disneyIcon, alt: "Disney" },
    { src: airbnbIcon, alt: "Airbnb" },
    { src: appleIcon, alt: "Apple" },
    { src: sparkIcon, alt: "Spark" },
    { src: samsungIcon, alt: "Samsung" },
    { src: quoraIcon, alt: "Quora" },
    { src: sassIcon, alt: "Sass" },
];

const InfiniteMarquee = () => {
    const renderLogos = (isHidden = false, direction = 'normal') => (
        <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll`}
            style={{ animationDirection: direction }}
            aria-hidden={isHidden}>
            {logos.map((logo, index) => (
                <li key={index}>
                    <img src={logo.src} alt={logo.alt} />
                </li>
            ))}
        </ul>
    );

    return (
        <div className='bg-[#141520] py-6 flex flex-col items-center'>
            <div className="w-full inline-flex flex-nowrap overflow-hidden mb-5">
                {renderLogos()}
                {renderLogos(true)}
            </div>
            <div className="w-full inline-flex flex-nowrap overflow-hidden">
                {renderLogos(false, 'reverse')}
                {renderLogos(true, 'reverse')}
            </div>
        </div>
    );
};

export default InfiniteMarquee;