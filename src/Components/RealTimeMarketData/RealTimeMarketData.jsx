import { useState, useRef, useEffect } from 'react';
import Button from '../Button/Button';
import './RealTimeMarketData.css';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const featuredCards = [
    {
        backgroundColor: 'bg-lila-500',
        icon: 'proIcon',
        title: 'Decentralized Exchanges',
        description: 'Embrace peer-to-peer trading without intermediaries. Trade directly with other users on our platform, enjoying the benefits of decentralization.'
    },
    {
        backgroundColor: 'bg-green-500',
        icon: 'heartIcon',
        title: 'Yield Farming',
        description: 'Maximize your returns by participating in our yield farming program. Earn passive income by providing liquidity to our liquidity pools.'
    },
    {
        backgroundColor: 'bg-yellow-500',
        icon: 'starterIcon',
        title: 'Staking',
        description: 'Secure the network and earn rewards by staking your tokens. Participate in the governance of our platform and influence the future of our ecosystem.'
    },
    {
        backgroundColor: 'bg-red-500',
        icon: 'cyrptoEducationIcon',
        title: 'NFT Marketplace',
        description: 'Discover unique digital assets and collectibles on our NFT marketplace. Buy, sell, and trade NFTs with other users, or create your own NFTs.'
    },
    {
        backgroundColor: 'bg-lila-500',
        icon: 'cyrptoEducationIcon',
        title: 'Decentralized Lending',
        description: 'Borrow and lend digital assets without the need for a centralized intermediary. Enjoy lower fees, higher interest rates, and increased privacy.'
    },
    {
        backgroundColor: 'bg-green-500',
        icon: 'mobileIcon',
        title: 'Cross-Chain Bridges',
        description: 'Connect different blockchains and transfer assets between them seamlessly. Bridge the gap between different networks and unlock new possibilities.'
    },
];

const RealTimeMarketData = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null);
    const cardWidth = 360;

    const handleNext = () => {
        if (currentIndex < featuredCards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }

    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(featuredCards.length - 1);
        }

    };

    useEffect(() => {
        slideRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, [currentIndex]);


    return (
        <section className="flex w-full items-center border-b-2">
            <div className="real-content py-16 px-6 border-r-2 bg-yellow-500">
                <h2>Real-time Market Data</h2>
                <p>Rest easy knowing your crypto assets are protected by state-of-the-art security measures and encryption, ensuring the safety of your digital wealth.</p>
                <div className="controls flex gap-2 items-center">
                    <Button
                        icon='leftArrow'
                        type="secondary"
                        className='focus:bg-lila-500 hover:bg-lila-500 focus:border-[#000]'
                        onClick={handlePrev}
                    />
                    <Button
                        icon='rightArrow'
                        type="secondary"
                        className='focus:bg-lila-500 hover:bg-lila-500 focus:border-[#000]'
                        onClick={handleNext}
                    />
                </div>
            </div>

            <div className="real-slides overflow-hidden w-[65%]">
                <div
                    ref={slideRef}
                    className="flex transition-transform duration-300 ease-in-out px-80 py-3 gap-3"
                    style={{ width: `${featuredCards.length * 100}%` }}
                >
                    {featuredCards.map((card, index) => (
                        <div key={index} className="w-[360px]">
                            <FeaturedCard {...card} className="max-w-none w-[360px]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealTimeMarketData;