import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar bg-lila-500 flex justify-between">
            <ul className='relative flex gap-3 w-full h-full py-6'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li className='rightBtn ml-auto absolute right-0 top-0'>Hire me</li>
            </ul>

        </nav>
    )
}

export default Navbar
