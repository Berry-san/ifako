// import princeHamzat from '/assets/images/prince_hamzat.png'
import princeHamzat from '/assets/images/corporate_overview.jpg'
// import aboutImage from '/assets/images/about_image1.jpeg'
import ifakoMap from '/assets/images/ifakoMap.jpeg'

const AboutUs = () => {
  return (
    <div className="text-lg">
      {/* image */}
      <section>
        {/* <div className="bg-red-400 h-56 w-full"></div> */}
        <img
          src={ifakoMap}
          alt="Slide 1"
          className="w-full h-96 object-cover"
        />
      </section>
      {/* Brief History */}
      <section className="flex flex-col mt-10">
        <h2 className="text-2xl font-medium">Brief History</h2>
        <p className="text-base mt-4">
          The Ifako-Ijaiye Local Government was created along with 183 other
          local governments on October 1, 1996, by General Sani Abacha, the then
          military head of state. It was carved out of Agege Local Government,
          with headquarters in Ifako, and predominantly populated by the Egba
          Yoruba people.
        </p>
        <p>
          Ifako-Ijaiye Local Government is a border suburb town as it shares
          border with Ogun State. The major settlements are Ogba-Ijaiye, Ifako,
          Oke-Ira, Iju-Ishaga, Obawole, Iju-Ogundimu, Fagba, Agege Pen Cinema,
          Ojokoro among others.
        </p>
        <p>
          The past leaders of the Local Government are: Engr. Richard Akinpelu
          (late), Alh. Ma'rufdeen Adeola Adefolabi (late), Hon. Demola Doherty,
          Hon. (Apostle) Oloruntoba Oke (2011-2014), Hon Akinwunmi Nurudeen
          Olaitan (2014-2016), Hon Babatunde I.Q. Rajh-Label (2016-2017).
        </p>
        <p className="mt-5">
          The Former Governor of Lagos State, Mr. Akinwunmi Ambode, appointed
          Babatunde I.Q. Rajh-Label as Sole Administrator of the Local
          Government in June 2016. The election was held on July 22, 2017,
          throughout the 20 Local Government Areas and 37 Local Council
          Development Areas of Lagos State. Hon (Apostle) Oloruntoba Oke was
          elected and sworn in as the Executive Chairman for a second term by
          the former State Governor, His Excellency, Gov. Akinwunmi Ambode.
        </p>
        <p className="mt-5">
          The Local Government is at present being led by Hon. (Prince) Usman
          Akanbi Hamzat as the Executive Chairman, after a local government
          election held in July 2021.
        </p>
      </section>
      {/* Chairman */}
      <section className="flex flex-col md:flex-row gap-4 md:gap-10 mt-10">
        <div className="flex flex-col w-full md:w-2/3 order-2 md:order-1">
          <h2 className="text-2xl font-medium">Meet the Chairman</h2>
          <p className="mt-2">
            Prince Usman Akanbi Hamzat is an icon of community activism,
            renowned for his exceptional leadership style. Currently serving as
            the Chairman of the Ifako-Ijaiye local government, he has been the
            driving force behind the successes and development trajectory of
            community work in the Ifako-Ijaiye Local Government. Since assuming
            his position as Chairman.
          </p>
          <p className="mt-2">
            Prince Usman Akanbi Hamzat has blazed the trail with groundbreaking
            achievements, choosing the path of objectivity, selflessness,
            innovation, teamwork, transparency, and mission-oriented policies.
            These qualities have made him and his team the first chairman to
            deliver significant projects and continuously win accolades, which
            are both unprecedented and mind-blowing.
          </p>
        </div>
        <div className="order-1 md:order-2 md:w-1/3">
          {/* <div className="w-full h-48 xl:h-full bg-amber-700"></div> */}
          <img src={princeHamzat} alt="Prince Hamzat" className="w-full h-76" />
        </div>
      </section>
    </div>
  )
}

export default AboutUs
