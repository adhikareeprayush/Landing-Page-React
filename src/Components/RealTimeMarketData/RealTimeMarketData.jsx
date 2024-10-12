import Button from '../Button/Button';

const RealTimeMarketData = () => {
    return (
        <section className="flex w-full align-items-center">
            <div className="real-content">
                <h2>Real-time Market Data </h2>
                <p>Rest easy knowing your crypto assets are protected by state-of-the-art security measures and encryption, ensuring the safety of your digital wealth.</p>
            </div>
            <div className="controls">
                <Button icon='leftArrow' type="secondary" className='foucs:bg-[#fff] rounded-[50%]' />
            </div>
            <div className="real-slides"></div>
        </section>
    )
}

export default RealTimeMarketData
