import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import "../../css/app.css"

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                {/* Sidebar */}
                <aside className="bg-white w-64 min-h-screen side-bar border-r border-gray-100">
                    <div className="px-4 py-4">
                        <div className="logo">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>
                    </div>
                    <nav className="mt-6">
                        <div className="menu-list">
                            <ul>
                                <li className='navli' style={{ fontSize: '25px' }}>
                                    <NavLink id="heading" href={route('dashboard')} active={route().current('dashboard')}>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className="li-items">
                                    <Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="35" viewBox="0 0 48 48">
<path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.070312 4.3222656 L 8.8730469 15.521484 C 7.0935305 16.919676 6 19.100391 6 21.400391 L 6 40.5 C 6 41.133333 6.2367979 41.80711 6.7148438 42.285156 C 7.1928895 42.763202 7.8666667 43 8.5 43 L 18.5 43 C 19.133333 43 19.80711 42.763202 20.285156 42.285156 C 20.763202 41.80711 21 41.133333 21 40.5 L 21 30.5 C 21 30.218182 21.218182 30 21.5 30 L 26.5 30 C 26.781818 30 27 30.218182 27 30.5 L 27 40.5 C 27 41.133333 27.236798 41.80711 27.714844 42.285156 C 28.19289 42.763202 28.866667 43 29.5 43 L 39.5 43 C 40.133333 43 40.80711 42.763202 41.285156 42.285156 C 41.763202 41.80711 42 41.133333 42 40.5 L 42 21.400391 C 42 19.155946 41.012069 16.901298 39.087891 15.490234 L 24.929688 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.271484 17.876953 A 1.50015 1.50015 0 0 0 37.3125 17.910156 C 38.388318 18.699095 39 20.044835 39 21.400391 L 39 40 L 30 40 L 30 30.5 C 30 28.581818 28.418182 27 26.5 27 L 21.5 27 C 19.581818 27 18 28.581818 18 30.5 L 18 40 L 9 40 L 9 21.400391 C 9 20.100391 9.7060794 18.680715 10.726562 17.878906 A 1.50015 1.50015 0 0 0 10.728516 17.876953 L 24 7.4101562 z"></path>
</svg></Link>
                                </li>
                                <li className="li-items">
                                    <Link>General</Link>
                                </li>
                                <li className="li-items">
                                    <Link>Science</Link>
                                </li>
                                <li className="li-items">
                                    <Link>Home</Link>
                                </li>
                                <li className="li-items">
                                    <Link>Home</Link>
                                </li>
                                {/* Add more sidebar links as needed */}
                            </ul>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1 min-h-screen">
                    <nav className="bg-white border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    <div className="shrink-0 flex items-center">
                                        <Link href="/">
                                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <div className="ml-3 relative">
                                        <Dropdown>
                                        <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="-mr-2 flex items-center sm:hidden">
                                    <button
                                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                    >
                                        {/* ... Mobile menu icon ... */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {header && (
                        <header className="bg-white shadow">
                            <div className="dash">{header}</div>
                        </header>
                    )}

                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}
