import { ICONS } from "../../assets/ICONS"
import './Uleash.css'
import Button from "../Button/Button"
import PropTypes from 'prop-types'


const UnleashCard = ({ title, description, index }) => {
    return (
        <div className="card flex flex-col gap-4 items-start justify-start p-6 border-b-2 h-[320px]">
            <div className="rounded-full w-[36px] h-[36px] bg-success-300 flex items-center justify-center border-2 shadow">{index}</div>
            <p>{title}</p>
            <div >{description}</div>
        </div>
    )
}


const unleashCardContents = [
    {
        title: "Secure Wallets",
        description: "Rest easy knowing your crypto assets are protected by state-of-the-art security measures and encryption, ensuring the safety of your digital wealth.",
    },
    {
        title: "Instant Transactions",
        description: "Experience the convenience of near-instantaneous cryptocurrency transfers, allowing you to send and receive digital assets in real-time, eliminating delays.",
    },
    {
        title: "Multi Currency Support",
        description: "Access a diverse range of cryptocurrencies in one unified platform, enabling you to explore and manage various digital assets effortlessly.",
    },
    {
        title: "Decentralized Exchanges",
        description: "Embrace peer-to-peer trading without intermediaries. Trade directly with other users on our platform, enjoying the benefits of decentralization.",
    },
    {
        title: "Stacking Rewards",
        description: "Put your crypto assets to work and earn passive income through staking, a feature that allows you to participate in network validation and reap rewards.",
    },
    {
        title: "NFT Marketplace",
        description: "Immerse yourself in the world of non-fungible tokens (NFTs) with our marketplace. Buy, sell, and even create unique digital collectibles.",
    },
    {
        title: "User-Friendly Interface",
        description: "Our platform boasts an intuitive and user-friendly design, ensuring a seamless and pleasant experience for both novice and experienced users.",
    },
    {
        title: "Crypto Education",
        description: "Access a wealth of educational resources to expand your knowledge of blockchain technology and cryptocurrencies, empowering you to make informed decisions.",
    },
    {
        title: "Real-time Maarket Data",
        description: "Stay informed and make well-informed trading decisions with access to live cryptocurrency prices, charts, and trends, available 24/7.",
    }, {
        title: "24/7 Customer Support",
        description: "Count on our dedicated customer support team to assist you round the clock, addressing your queries and concerns promptly and effectively.",
    },
    {
        title: "Mobile App",
        description: "Seamlessly trade and manage your crypto assets on the go with our mobile application, offering all the features and convenience you expect."
    },
    {
        title: "Community Fourm",
        description: "Connect with like-minded crypto enthusiasts, share insights, and participate in discussions within our community forum, fostering knowledge sharing and collaboration."
    }
]



const Unleash = () => {
    return (
        <div className="Unleash flex justify-between">
            <div className="lelftUnleash flex flex-col py-16 px-16 border-r-2 bg-green-500 min-w-[50%] h-[640px]">
                <img src={ICONS.heartIcon} alt="heartIcon" className="w-[100px] h-[100px] object-contain" />
                <h2>Unleash the potential
                    of digital assets</h2>
                <p>Count on our dedicated customer support team to assist you round the clock, addressing your queries and concerns promptly and effectively.</p>
                <p>Seamlessly trade and manage your crypto assets on the go with our mobile application, offering all the features and convenience you expect.</p>
                <Button text="Explore all Pages" type="secondary" className="max-w-fit" />
            </div>
            <div className="rightUleash items-start justify-between grid grid-cols-2 h-[640px]">
                {unleashCardContents.map((card, index) => (
                    <UnleashCard key={index} title={card.title} description={card.description} index={index} />
                ))}
            </div>

        </div>
    )
}

// props validation

UnleashCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}


export default Unleash
