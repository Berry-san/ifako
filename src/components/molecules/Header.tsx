import { useState, useRef, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import ifakoLogo from '/assets/images/ifako-ijaiye-logo.png'
import arrow from '/assets/icons/arrow.svg'
import activeArrow from '/assets/icons/active-arrow.svg'
import { ChevronDown } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const [desktopActiveSubMenu, setDesktopActiveSubMenu] = useState<
    string | null
  >(null)
  const [mobileMenuState, setMobileMenuState] = useState({
    isOpen: false,
    activeSubMenu: null as string | null,
  })

  const aboutUsRef = useRef<HTMLDivElement>(null)
  const cdaRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutUsRef.current &&
        !aboutUsRef.current.contains(event.target as Node) &&
        cdaRef.current &&
        !cdaRef.current.contains(event.target as Node) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setDesktopActiveSubMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const linkClasses = (path: string): string => {
    if (path === '/') {
      return location.pathname === '/'
        ? 'text-green font-bold'
        : 'text-gray-700 font-medium'
    }
    return location.pathname.startsWith(path)
      ? 'text-green font-bold'
      : 'text-gray-700 font-medium'
  }

  const getArrowIcon = (path: string) => {
    return location.pathname.startsWith(path) ? activeArrow : arrow
  }

  const toggleMobileMenu = () => {
    setMobileMenuState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
  }

  const closeMobileMenu = () => {
    setMobileMenuState({ isOpen: false, activeSubMenu: null })
  }

  const toggleSubMenu = (menu: string) => {
    setMobileMenuState((prev) => ({
      ...prev,
      activeSubMenu: prev.activeSubMenu === menu ? null : menu,
    }))
  }

  // const toggleDesktopSubMenu = (menu: string) => {
  //   setDesktopActiveSubMenu((prev) => (prev === menu ? null : menu))
  // }

  const DesktopMenu = () => (
    <div className="items-center hidden space-x-8 lg:flex">
      <Link to="/" className={linkClasses('/')}>
        Home
      </Link>

      {/* About Us */}
      <div
        ref={aboutUsRef}
        className="relative flex items-center cursor-pointer"
        onMouseEnter={() => setDesktopActiveSubMenu('about-us')}
        onMouseLeave={() => setDesktopActiveSubMenu(null)}
      >
        <span className={linkClasses('/about-us')}>About Us</span>
        <img
          src={getArrowIcon('/about-us')}
          alt="arrow"
          className={`ml-2 transform transition-transform duration-300 ${
            desktopActiveSubMenu === 'about-us' ? 'rotate-180' : ''
          }`}
          width={12}
          height={12}
        />
        {desktopActiveSubMenu === 'about-us' && (
          <div className="absolute left-0 z-50 w-48 pt-2 bg-white rounded-lg shadow-md top-full">
            <ul className="py-2">
              <li>
                <Link
                  to="/about-us/corporate-overview"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Corporate Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/council-excos"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Council Excos
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/management-team"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Management Team
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/legislative-arm"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Legislative Arm
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/achievements"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Our Achievements
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* News */}
      <Link to="/news" className={linkClasses('/news')}>
        News
      </Link>

      {/* Resources Dropdown */}
      <div
        ref={resourcesRef}
        className="relative flex items-center cursor-pointer"
        // onClick={() => toggleDesktopSubMenu('resources')}
        onMouseEnter={() => setDesktopActiveSubMenu('resources')}
        onMouseLeave={() => setDesktopActiveSubMenu(null)}
      >
        <span className={linkClasses('/resources')}>Resources</span>
        <img
          src={getArrowIcon('/resources')}
          alt="arrow"
          className={`ml-2 transform transition-transform duration-300 ${
            desktopActiveSubMenu === 'resources' ? 'rotate-180' : ''
          }`}
          width={12}
          height={12}
        />
        {desktopActiveSubMenu === 'resources' && (
          <div className="absolute left-0 z-50 w-64 pt-2 bg-white rounded-lg shadow-md top-full">
            <ul className="py-2">
              <li>
                <Link
                  to="/resources/heeds-agenda"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Heeds agenda
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/services"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Our services
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/emergency-services"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Emergency services
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Link to="/report-problem" className={linkClasses('/report-problem')}>
        Report a Problem
      </Link>

      <Link to="/contact-us" className={linkClasses('/contact-us')}>
        Contact Us
      </Link>
    </div>
  )

  const MobileMenu = () => (
    <>
      {mobileMenuState.isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-full h-full bg-green text-white text-lg  z-50 transition-transform duration-300 ${
          mobileMenuState.isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items center justify-between px-5 py-4">
          <img
            alt="logo"
            src={ifakoLogo}
            className="w-14 h-14 md:w-20 md:h-20"
          />
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            </svg>
          </button>
        </div>
        <div className="px-5 space-y-4">
          <Link to="/" className="block font-medium" onClick={closeMobileMenu}>
            Home
          </Link>
          {/* about-us Dropdown */}
          <div className="relative">
            <div
              className="flex items-center justify-between w-full font-medium text-left"
              onClick={() => toggleSubMenu('about-us')}
            >
              About Us
              <div
                className={`transform transition-transform ${
                  mobileMenuState.activeSubMenu === 'about-us'
                    ? 'rotate-180'
                    : ''
                }`}
              >
                <ChevronDown />
              </div>
              {/* <img
                src={
                  mobileMenuState.activeSubMenu === 'about-us'
                    ? activeArrow
                    : arrow
                }
                alt="arrow"
                className={`transform transition-transform ${
                  mobileMenuState.activeSubMenu === 'about-us'
                    ? 'rotate-180'
                    : ''
                }`}
              /> */}
            </div>
            {mobileMenuState.activeSubMenu === 'about-us' && (
              <div className="ml-4 mt-2 space-y-2 divide-y text-base divide-gray-200 border-b border-gray-200">
                <Link
                  to="/about-us/corporate-overview"
                  className="block"
                  onClick={closeMobileMenu}
                >
                  Corporate Overview
                </Link>
                <Link
                  to="/about-us/council-excos"
                  className="block"
                  onClick={closeMobileMenu}
                >
                  Council Excos
                </Link>
                <Link
                  to="/about-us/management-team"
                  className="block"
                  onClick={closeMobileMenu}
                >
                  Management Team
                </Link>
                <Link
                  to="/about-us/legislative-arm"
                  className="block"
                  onClick={closeMobileMenu}
                >
                  Legislative Arm
                </Link>
                <Link
                  to="/about-us/achievements"
                  className="block"
                  onClick={closeMobileMenu}
                >
                  Our Achievements
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <div
              className="flex items-center justify-between w-full font-medium text-left"
              onClick={() => toggleSubMenu('resources')}
            >
              Resources
              <div
                className={`transform transition-transform ${
                  mobileMenuState.activeSubMenu === 'resources'
                    ? 'rotate-180'
                    : ''
                }`}
              >
                <ChevronDown />
              </div>
              {/* <img
                src={
                  mobileMenuState.activeSubMenu === 'resources'
                    ? activeArrow
                    : arrow
                }
                alt="arrow"
                className={`transform transition-transform ${
                  mobileMenuState.activeSubMenu === 'resources'
                    ? 'rotate-180'
                    : ''
                }`}
              /> */}
            </div>
            {mobileMenuState.activeSubMenu === 'resources' && (
              <div className="ml-4 mt-2 space-y-2 divide-y text-base divide-gray-200 border-b border-gray-200">
                <Link
                  to="/resources/heeds-agenda"
                  className="block"
                  onClick={closeMobileMenu}
                >
                  Heeds agenda
                </Link>
                <Link
                  to="/resources/services"
                  className="block"
                  onClick={closeMobileMenu}
                >
                  Our service
                </Link>
                <Link
                  to="/resources/emergency-services"
                  className="block"
                  onClick={closeMobileMenu}
                >
                  Emergency services
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/news"
            className="block font-medium"
            onClick={closeMobileMenu}
          >
            News
          </Link>
          <Link
            to="/report-problem"
            className="block font-medium"
            onClick={closeMobileMenu}
          >
            Report a problem
          </Link>
          <Link
            to="/contact-us"
            className="block font-medium"
            onClick={closeMobileMenu}
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <div className="w-full">
      <div className="text-lg border-t-4 border-yellow bg-green text-yellow w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-10 py-2 flex flex-col md:flex-row items-center justify-between">
          <p className="">Office Hours: Mon - Fri 8am - 6pm</p>
          <div className="">
            <p className="">info@ifakoijaiye.lg.gov.ng</p>
          </div>
        </div>
      </div>
      <div className="border-b-4 border-background bg-white">
        <section className="flex items-center justify-between px-4 py-3 mx-auto lg:px-10">
          <div className="flex flex-col w-full">
            <img
              alt="logo"
              src={ifakoLogo}
              className="w-14 h-14 md:w-20 md:h-20"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-gray-500 text-lg font-medium">
                  Official website,{' '}
                  <span className="text-black">Ifako Local Government</span>
                </p>
              </div>
              <div className="hidden xl:block">
                <DesktopMenu />
              </div>
            </div>
          </div>

          <div className="flex items-center xl:hidden">
            <button
              className="block text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {mobileMenuState.isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </section>

        <MobileMenu />
      </div>
    </div>
  )
}

export default Header
