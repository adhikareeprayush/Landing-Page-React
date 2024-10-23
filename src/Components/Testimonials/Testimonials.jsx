import React from 'react';
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonials = [
    {
        imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        name: "John Doe",
        designation: "CEO, Company",
        content: "I highly recommend this company. Their attention to detail and commitment to quality is unmatched."
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        name: "Prayush Adhikari",
        designation: "CEO, Company",
        content: "I highly recommend this company. Their attention to detail and commitment to quality is unmatched."
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        name: "Aayush Adhikari",
        designation: "CEO, Company",
        content: "I highly recommend this company. Their attention to detail and commitment to quality is unmatched."
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        name: "Yunesh Shrestha",
        designation: "CEO, Company",
        content: "I highly recommend this company. Their attention to detail and commitment to quality is unmatched."
    }
];

const Testimonials = () => {
    const renderTestimonials = (isHidden = false, direction = 'normal') => (
        <div
            className={`flex flex-col space-y-6 animate-marquee mt-8`}
            style={{ animationDirection: direction }}
            aria-hidden={isHidden}
        >
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    imgUrl={testimonial.imgUrl}
                    name={testimonial.name}
                    designation={testimonial.designation}
                    content={testimonial.content}
                />
            ))}
        </div>
    );

    return (
        <div className="bg-yellow-500 px-20 py-0 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* First Column */}
                    <div className="relative h-[600px] overflow-hidden inline-flex flex-col flex-nowrap">
                        <div className="absolute top-0 flex flex-col">
                            {renderTestimonials()}
                            {renderTestimonials(true)}
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="relative h-[600px] overflow-hidden inline-flex flex-col flex-nowrap">
                        <div className="absolute top-0 flex flex-col">
                            {renderTestimonials(false, 'reverse')}
                            {renderTestimonials(true, 'reverse')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;