// src/components/Button.jsx
import PropTypes from "prop-types";
import './Button.css'
import { ICONS } from '../../assets/ICONS'
import { useState, useRef, useEffect } from "react";

const Button = ({
    text = "Button",   // Default button text
    type = "primary",  // Default type
    disabled = false,  // Disabled state
    className = "",    // Custom class names
    icon = null,       // Icon component
    ghost = false,     // Ghost button
    dropdownItems = [], // Dropdown items (an array of {label, value})
    onDropdownSelect,  // Function to handle selection of dropdown item
}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const buttonRef = useRef(null); // Create a ref for the button

    // Define styles for different button types (variants)
    const buttonTypes = {
        "primary": {
            "base": "text-black bg-lila-300 border-2",
            "hover": "hover:bg-lila-500",
            "focus": "focus:bg-lila-600 focus:translate-y-1 focus:shadow-none",
            "border": "border-lila-600",
            "shadowColor": "#b4a6fc"
        },
        secondary: {
            "base": "text-black bg-[#fff] border-2",
            "hover": "hover:text-lila-800 hover:border-[#000]",
            "focus": "focus:border-black focus:translate-y-1 focus:shadow-none focus:bg-[#000] focus:text-[#fff]",
            "border": "border-black-900",
            "shadowColor": "#000000"
        },
        info: {
            "base": "text-black bg-info-300 border-2",
            "hover": "hover:text-[#fff] hover:bg-[#7ca4de]",
            "focus": "focus:bg-info-600 focus:translate-y-1 focus:shadow-none focus:text-white",
            "border": "border-[#5d85d4]",
            "shadowColor": "#5d85d4",
        },
        success: {
            "base": "text-white bg-success-300 border-2",
            "hover": "hover:bg-success-500 hover:text-[#fff]",
            "focus": "focus:bg-success-600 focus:text-white focus:translate-y-1 focus:shadow-none",
            "border": "border-[#2c7572]",
            "shadowColor": "#2c7572",
        },
        warning: {
            "base": "text-black bg-warning-300 border-2",
            "hover": "hover:bg-warning-500 hover:text-[#fff]",
            "focus": "focus:bg-warning-600 focus:text-white focus:translate-y-1 focus:shadow-none",
            "border": "border-[#d8471e]",
            "shadowColor": "#d8471e",
        },
        danger: {
            "base": "text-white bg-danger-300 border-2",
            "hover": "hover:bg-danger-500 hover:text-[#fff]",
            "focus": "focus:bg-danger-600 focus:text-white focus:translate-y-1 focus:shadow-none",
            "border": "border-[#cd4e35]",
            "shadowColor": "#cd4e35",
        }
    };

    // Merge classes based on the selected type
    const currentType = buttonTypes[type] || buttonTypes.primary;

    const handleClick = () => {
        if (!isDropdownOpen) {
            setIsDropdownOpen(true); // Open the dropdown only if it's not already open
        }
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsDropdownOpen(false); // Close dropdown if clicked outside
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the button
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener on component unmount or state change
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (item) => {
        if (onDropdownSelect) {
            onDropdownSelect(item); // Trigger the provided function for item selection
        }
        setIsDropdownOpen(false); // Close the dropdown after selection
    };


    return (
        <div className="relative" ref={buttonRef}> {/* Wrap button and dropdown in a relative container */}
            <button
                type="button"
                onClick={handleClick}
                disabled={disabled}
                className={`
                    ${ghost ? `bg-transparent ${type === "secondary" ? "hover-lila" : "hover-black"}` :
                        `items-center shadow text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center
                        py-3 rounded-lg h-16 tracking-wide w-full ease-in-out transform transition-all duration-100
                        ${currentType.base} ${currentType.hover} ${currentType.focus} ${currentType.border}`}
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                    ${className}
                `}
                style={ghost ? { color: currentType.shadowColor } : { '--tw-shadow-color': currentType.shadowColor }}
            >
                {
                    icon ? <img src={ICONS[icon]} alt="icon" className="mr-2" /> : ''
                }

                {text}
                {dropdownItems.length > 0 && (
                    <img
                        src={isDropdownOpen ? ICONS.angleDownWhite : ICONS.angleDownBlack}
                        alt="dropdown"
                        className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && dropdownItems.length > 0 && (
                <ul className="dropdownMenu absolute left-0 mt-2 w-full bg-[#fff] border border-gray-200 rounded-lg shadow-lg z-10">
                    {dropdownItems.map((item) => (
                        <button
                            key={item.value}
                            className="cursor-pointer px-4 py-2 hover:text-lila-600"
                            onClick={() => handleSelect(item)}
                        >
                            {item.label}
                        </button>
                    ))}
                </ul>
            )}
        </div>
    );
};

// props validation
Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(["primary", "secondary", "success", "warning"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
    ghost: PropTypes.bool,
    dropdown: PropTypes.bool,
    dropdownItems: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })), // Dropdown items prop
    onDropdownSelect: PropTypes.func, // Function to handle dropdown item selection
};

export default Button;
