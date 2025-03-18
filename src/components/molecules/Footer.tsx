import locationICon from '/assets/icons/locationIcon.svg'
import linkIcon from '/assets/icons/linkIcon.svg'
import ifakoLogo from '/assets/images/ifako-ijaiye-logo.png'

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white px-10 py-10 w-full font-medium">
        <img src={ifakoLogo} alt="ifako logo" className="w-20 h-20" />
        <p className="mt-2 text-lg">
          Official website, <span>Ifako Local Government</span>
        </p>
        <div className="flex items-center mt-2">
          <img src={locationICon} alt="location icon" />
          <p className="ml-2">
            <span>Ifako-Ijaiye. Lagos State, Nigeria</span>
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row lg:space-x-20 lg:items-center space-y-2 lg:space-y-0">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={linkIcon} alt="link icon" />
              <p className="ml-2 text-lg">Quick links:</p>
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 mt-2 justi">
              <a href="#" className="text-white">
                About
              </a>
              <a href="#" className="text-white">
                Govt executives
              </a>
              <a href="#" className="text-white">
                News
              </a>
              <a href="#" className="text-white">
                Jobs
              </a>
              <a href="#" className="text-white">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={linkIcon} alt="link icon" />
              <p className="ml-2 text-lg">Social media:</p>
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 mt-2">
              <a href="#" className="text-white">
                Facebook
              </a>
              <a href="#" className="text-white">
                Instagram
              </a>
              <a href="#" className="text-white">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={linkIcon} alt="link icon" />
              <p className="ml-2 text-lg">Contact:</p>
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-2">
              <p className="text-white">08012345678, 07021234568</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
