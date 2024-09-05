import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#F9F9F9] lg:py-44 md:py-32 sm:py-32 py-32 px-0">
      <div id="container" className="mx-auto my-0 max-w-[120rem] lg:px-16 md:px-16 sm:px-16 px-7 py-0">
        <div className="flex flex-col">
          <div className="text-center lg:text-start md:text-start sm:text-center">
            <p className="uppercase text-[#147efb] text-[1.7rem] font-extrabold mb-4">
              Contact
            </p>
            <h3 className="text-[#2d2e32] text-[2.5rem] font-bold">
              Don't be shy! Hit me up!
            </h3>
          </div>
          <div className="flex flex-wrap gap-20 lg:gap-32 md:gap-32 sm:gap-20 mt-24 flex-col lg:flex-row md:flex-row sm:flex-col justify-center lg:justify-start md:justify-start sm:justify-center text-center lg:text-start md:text-start sm:text-center">
            <div className="items-center flex lg:gap-6 md:gap-6 flex-col lg:flex-row md:flex-row">
              <span className="flex items-center text-[#147efb] h-20 justify-center w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#2d2e32] text-[1.7rem] font-bold">
                  Location
                </h3>
                <p className="text-[#767676] cursor-pointer text-[1.7rem] font-medium hover:text-[#147efb]">
                  Gujarat,India
                </p>
              </div>
            </div>
            <div className="items-center flex lg:gap-6 md:gap-6 flex-col lg:flex-row md:flex-row">
              <span className="flex items-center text-[#147efb] h-20 justify-center w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#2d2e32] text-[1.7rem] font-bold">Mail</h3>
                <a
                  href="mailto:samyak55.shah@gmail.com"
                  className="text-[#767676] cursor-pointer text-[1.7rem] font-medium hover:text-[#147efb]"
                >
                  samyak55.shah@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
