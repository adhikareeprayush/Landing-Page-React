import FeaturedCard from "../FeaturedCard/FeaturedCard"


const Features = () => {

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
    return (
        <section className="py-[48px] px-[16px] grid grid-cols-3 items-center gap-x-2 gap-y-4 border-b-2">
            {featuredCards.map((card, index) => (
                <FeaturedCard key={index} {...card} />
            ))}
        </section>
    )
}

export default Features
