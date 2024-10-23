import PropTypes from 'prop-types'


const TestimonialCard = (props) => {
    return (
        <div className="testimonialCard rounded-3xl shadow p-8 lg:p-12  bg-[#fff]  border-2 border-black flex flex-col gap-10"
            style={{ '--tw-shadow-color': '#000000' }}>
            <div className="flex items-center justify-start gap-3">
                <div className="image-container border-2 border-black shadow-sm rounded-full"
                    style={{ '--tw-shadow-color': '#000000' }}
                >
                    <img src={props.imgUrl} alt="" className='w-12 h-12 object-cover rounded-full' />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-medium leading-tight">{props.name}</span>
                    <a href="">{props.designation}</a>
                </div>
            </div>
            <p className="content">
                {props.content}
            </p>
        </div>
    )
}


// props Validation
TestimonialCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}



export default TestimonialCard
