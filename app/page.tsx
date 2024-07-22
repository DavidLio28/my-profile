import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="h-full w-full relative">
      <div className="preloader"></div>
      <header
        className="header fixed right-[30px] bottom-0 z-30 flex 
      items-center h-[calc(100vh-200px)] w-[50px] top-[100px] opacity-100 transition 
      duration-300 [&.hide-header]:z-0 [&.hide-header]:opacity-0"
      >
        <ul
          id="desktop-nav"
          className="icon-menu w-[50px] down-lg:hidden from-md:block uppercase"
        >
          <li className="desktop-nav-element group cursor-pointer w-[50px] h-[50px] relative flex items-center transition duration-300 my-[20px] mx-0 rounded-full bg-light-grey active">
            {/* <i className="fa fa-home absolute left-0 right-0 mx-auto block text-center top-[15px] pointer-events-none text-[19px] group-hover:text-white group-[.active]:text-white transition-all duration-300"></i> */}
            <div className="block p-0 w-[50px] h-[50px] bg-[#72b626] rounded-full">
              <h2 className="absolute text-center -z-10 block h-[50px] pr-[25px] pl-[30px] text-[15px] right-0 opacity-0 text-white leading-lh-[50px] font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
                Home
              </h2>
            </div>
          </li>
          <li className="desktop-nav-element group cursor-pointer w-[50px] h-[50px] relative flex items-center transition duration-300 my-[20px] mx-0 rounded-full bg-light-grey">
            <i className="fa fa-user absolute left-0 right-0 mx-auto block text-center top-[15px] pointer-events-none text-[19px] group-hover:text-white group-[.active]:text-white transition-all duration-300"></i>
            <div className="block p-0 w-[50px] h-[50px]  bg-gray-300 rounded-full">
              <h2 className="absolute text-center -z-10 block h-[50px] pr-[25px] pl-[30px] text-[15px] right-0 opacity-0 text-white leading-lh-[50px] font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
                About
              </h2>
            </div>
          </li>
          <li className="desktop-nav-element group cursor-pointer w-[50px] h-[50px] relative flex items-center transition duration-300 my-[20px] mx-0 rounded-full bg-light-grey">
            <i className="fa fa-briefcase absolute left-0 right-0 mx-auto block text-center top-[15px] pointer-events-none text-[19px] group-hover:text-white group-[.active]:text-white transition-all duration-300"></i>
            <div className="block p-0 w-[50px] h-[50px]  bg-gray-300 rounded-full">
              <h2 className="absolute text-center -z-10 block h-[50px] pr-[25px] pl-[30px] text-[15px] right-0 opacity-0 text-white leading-lh-[50px] font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
                Portfolio
              </h2>
            </div>
          </li>
          <li className="desktop-nav-element group cursor-pointer w-[50px] h-[50px] relative flex items-center transition duration-300 my-[20px] mx-0 rounded-full bg-light-grey">
            <i className="fa fa-envelope-open absolute left-0 right-0 mx-auto block text-center top-[15px] pointer-events-none text-[19px] group-hover:text-white group-[.active]:text-white transition-all duration-300"></i>
            <div className="block p-0 w-[50px] h-[50px]  bg-gray-300 rounded-full">
              <h2 className="absolute text-center -z-10 block h-[50px] pr-[25px] pl-[30px] text-[15px] right-0 opacity-0 text-white leading-lh-[50px] font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
                Contact
              </h2>
            </div>
          </li>
          <li className="desktop-nav-element group cursor-pointer w-[50px] h-[50px] relative flex items-center transition duration-300 my-[20px] mx-0 rounded-full bg-light-grey">
            <i className="fa fa-comments absolute left-0 right-0 mx-auto block text-center top-[15px] pointer-events-none text-[19px] group-hover:text-white group-[.active]:text-white transition-all duration-300"></i>
            <div className="block p-0 w-[50px] h-[50px]  bg-gray-300 rounded-full">
              <h2 className="absolute text-center -z-10 block h-[50px] pr-[25px] pl-[30px] text-[15px] right-0 opacity-0 text-white leading-lh-[50px] font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
                Blog
              </h2>
            </div>
          </li>
        </ul>
      </header>
      <div className=" overflow-hidden pages">
        {/* Home */}
        <div className="page page--current relative hidden">
          <div className="bg-[#72b626] fixed w-full h-[200%] -rotate-[15deg] -top-1/2 -left-[83%]"></div>
          <div className="flex items-center h-screen w-full down-lg:mx-auto down-lg:justify-center xs:text-left down-lg:text-center">
            {/* Desktop Image */}
            <Image
              className="fixed w-1/3 h-[calc(100vh-80px)] left-10 top-10 rounded-[30px] shadow-2 object-cover"
              src="/assets/img/light.jpg"
              width={600}
              height={1200}
              alt=""
            />
            {/* Desktop Image end */}
            <div className="ml-[33.333333%] w-2/3">
              <div className="mx-auto max-w-[550px] custom-md-1:max-w-450">
                <Image
                  src="/assets/img/img-mobile-light.jpg"
                  className="hidden down-lg:block xs:!hidden rounded-full w-270 h-270 mx-auto mb-25 border-4 border-solid border-light-grey"
                  width={600}
                  height={1200}
                  alt="my picture"
                />
                <h1
                  className="text-[50px] text-[#72b626] font-Poppins relative uppercase font-bold leading-lh-62 
                  pl-70 before:absolute before:left-0 before:top-29 before:contents before:w-[40px] before:rounded-[10px] before:h-[4px]
                  custom-md-2:text-fs-42 down-xl:pl-0 custom-md-2:leading-lh-52 
                  down-md:text-fs-38 down-md:leading-lh-48 down-md:mt-29 
                  down-md:mb-13 xs:text-fs-29 xs:leading-lh-39 xs:mt-18"
                >
                  I&lsquo;m lucy milner.
                  <span className="block text-black">web designer</span>
                </h1>
                <p className="font-Open-sans mt-[15px] mb-[28px] leading-[35px] down-lg:mt-2.5 down-lg:mb-23 down-lg:text-[15px] down-lg:leading-[30px]">
                  I&lsquo;m a Tunisian based web designer &amp; front‑end
                  developer focused on crafting clean &amp; user‑friendly
                  experiences, I am passionate about building excellent software
                  that improves the lives of those around me.
                </p>
                <div
                  id="link-about"
                  className="button group cursor-pointer overflow-hidden inline-block leading-[1.4] rounded-[30px] text-ellipsis text-center 
                  border border-solid border-[#72b626] text-black group-hover:bg-[#72b626] hover:bg-[#72b626]
                  align-middle select-none transition-all duration-300 ease-in-out uppercase no-underline relative z-10 py-[16px] pr-[70px] pl-[35px] 
                  text-[15px] font-semibold group-hover:text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 
                  before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                >
                  <span className="relative z-20 text-black-6 group-hover:text-white transition-all duration-300">
                    more about me
                  </span>
                  <span
                    className="absolute -right-px bottom-0 w-[55px] h-[55px] flex items-center justify-center rounded-full 
                  text-white text-[19px] bg-[#72b626]"
                  >
                    <FontAwesomeIcon
                      width={16}
                      height={16}
                      icon={faArrowRight}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        <div className="page page--animate-top page--current">
          <div className="w-full">
            <div
              className="mx-auto w-full relative py-[80px] text-center xs:px-25 xs:pt-16 xs:pb-14 xs:bg-gray-200 xs:border-b 
            xs:border-grey xs:fixed xs:left-0 xs:right-0 xs:top-0 xs:z-20 z-10"
            >
              <h2 className="text-[56px] font-black font-Poppins uppercase text-black m-0 xs:text-[26px] xs:text-left xs:leading-[1.2]">
                about <span className="text-[#72b626]">me</span>
              </h2>
              <span
                className="text-[110px] absolute left-0 right-0 top-1/2 tracking-[10px] leading-[0.7] font-extrabold text-[#1E253012]
               -translate-y-1/2 uppercase xs:hidden -z-1"
              >
                resume
              </span>
            </div>
          </div>
        </div>
        {/* Portfolio */}
        <div></div>
        {/* Contact */}
        <div></div>
        {/* Blog */}
        <div></div>
      </div>
    </main>
  );
}
