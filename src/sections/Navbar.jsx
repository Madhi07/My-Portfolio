import React from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onResumeClick, onItemClick }) => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className='nav-li'>
                    {name === 'Resume' ? (
                        <button onClick={() => { onResumeClick(); onItemClick(); }} className='nav-li_a'>
                            {name}
                        </button>
                    ) : (
                        <a href={href} onClick={onItemClick} className='nav-li_a'>
                            {name}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
};

const ResumeModal = ({ show, onClose }) => {
    return (
        <div className={`fixed mx-4 inset-0 z-[1000] bg-black bg-opacity-50 ${show ? 'flex' : 'hidden'} justify-center items-center`}>
            <div className='bg-white p-5 rounded-lg'>
                <h2 className='text-lg font-bold mb-4 text-center'>My Resume</h2>
                <p>You can view or download my resume using the link below:</p>
                <div className="res">
                    <a href="/resume/Madhi_resume_pt.pdf" target="_blank" rel="noopener noreferrer" className='text-white bg-black rounded-xl p-3 mt-5'>
                        View Resume
                    </a>
                    
                    <a href="/resume/Madhi_resume_pt.pdf" download className='text-white bg-black rounded-xl p-3 mt-5'>
                        Download Resume
                    </a>
                    <button onClick={onClose} className='mt-5 bg-red-500 text-white rounded-xl p-2'>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [showNav, setShowNav] = React.useState(false);
    const [showResumeModal, setShowResumeModal] = React.useState(false);
    
    const toggleMenu = () => setShowNav((prevShowNav) => !prevShowNav);
    const handleResumeClick = () => setShowResumeModal(true);
    const handleCloseModal = () => setShowResumeModal(false);
    
    // Function to close the mobile menu
    const handleItemClick = () => {
        setShowNav(false); // Hide the nav when an item is clicked
    };

    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
                <div className='max-w-7xl'>
                    <div className='flex justify-between items-center py-5 mx-auto c-space'>
                        <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                            MADHI
                        </a>
                        <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu'>
                            <img src={showNav ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                        </button>
                        <nav className="hidden sm:flex">
                            <NavItems onResumeClick={handleResumeClick} onItemClick={handleItemClick} />
                        </nav>
                    </div>
                </div>
                <div className={`nav-sidebar ${showNav ? 'max-h-screen' : 'max-h-0'}`}>
                    <nav className='p-5'>
                        <NavItems onResumeClick={handleResumeClick} onItemClick={handleItemClick} />
                    </nav>
                </div>
            </header>
            <ResumeModal show={showResumeModal} onClose={handleCloseModal} />
        </>
    );
};

export default Navbar;