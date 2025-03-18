import mailIcon from '/assets/icons/mailIcon.svg'
const ContactUs = () => {
  return (
    <div className="font-medium flex flex-col items-center justify-center">
      <p className="text-2xl ">Connect with Ifako-Ijaiye Local Government</p>
      <p className="text-base mt-4">
        Send a message to the email address below to get in touch.
      </p>
      <button className="flex items-center space-x-4 py-2 px-2 bg-yellow mt-10">
        <img src={mailIcon} alt="mail icon" />
        <span>info@ifakoijaiye.lg.gov.ng</span>
      </button>
      <p className="text-base mt-10">Follow Ifako-Ijaiye on social media</p>
      <div className="flex items-center space-x-4 mt-2 text-black/50">
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">LinkedIn</a>
      </div>
    </div>
  )
}

export default ContactUs
