
import PropTypes from 'prop-types';
import { ICONS } from '../../assets/ICONS';

const FeaturedCard = ({ backgroundColor, icon, title, description }) => {
    return (
        <div className={`${backgroundColor} flex flex-col featuredCard border-2 border-black shadow p-8 rounded-3xl gap-4`}
            style={{ '--tw-shadow-color': '#000000' }}
        >
            <div className="featureIcon">
                <img src={ICONS[icon]} alt={icon} className='h-[70px] w-[70px] rounded-[50%] object-contain border-2' />
            </div>
            <p className='font-medium'>{title}</p>
            <p>{description}</p>
        </div>
    )
}

//props validation
FeaturedCard.propTypes = {
    backgroundColor: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default FeaturedCard
