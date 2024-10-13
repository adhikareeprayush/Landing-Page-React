import { ICONS } from "../../assets/ICONS"
import './Uleash.css'
import Button from "../Button/Button"


const Unleash = () => {
    return (
        <div className="Unleash flex items-center justify-between">
            <div className="lelftUnleash flex flex-col py-16 px-6 border-r-2 bg-green-500">
                <img src={ICONS.heartIcon} alt="heartIcon" className="w-[100px] h-[100px] object-contain" />
                <h2>Unleash the potential
                    of digital assets</h2>
                <p>Count on our dedicated customer support team to assist you round the clock, addressing your queries and concerns promptly and effectively.</p>
                <p>Seamlessly trade and manage your crypto assets on the go with our mobile application, offering all the features and convenience you expect.</p>
                <Button text="Explore all Pages" type="secondary" className="w-fit" />
            </div>

        </div>
    )
}

export default Unleash
