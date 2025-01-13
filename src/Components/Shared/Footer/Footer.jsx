import footerimg from "../../../assets/icons/Logo White.png";
import faceBookLogo from "../../../assets/icons/Facebook_Logo.png";
import LinkdinLogo from "../../../assets/icons/Linkdin_logo.png";
import InstagramLogo from "../../../assets/icons/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div  style={{ fontFamily: "Taviraj, serif" }}>
      <div
        className="bg-gradient-to-l from-[#399FE0] to-[#3062A9] text-white grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10 mx-auto p-8"
      >
        {/* footer div 1  */}
        <div>
          <img className="w-[80px] pb-3" src={footerimg} alt="" />
          <p style={{ fontFamily: "Montserrat, serif" }}>
          Alziarath International providing Hajj & Umrah services for over 23+ years with honesty and dignity.
          </p>
          <p className="flex mt-5 gap-5">
            <Link to="https://www.facebook.com/alziarath" target="_blank">
              <img
                className="w-[35px] hover:shadow-xl hover:shadow-gray-600 hover:scale-[1.1]"
                src={faceBookLogo}
                alt=""
              />
            </Link>
            {/* <Link to="" target="_blank">
              <img
                className="w-[35px] hover:shadow-xl hover:shadow-gray-600 hover:scale-[1.1]"
                src={LinkdinLogo}
                alt=""
              />
            </Link> */}
            <Link to="https://www.instagram.com/alziarath_246" target="_blank">
              <img
                className="w-[35px] hover:shadow-xl hover:shadow-gray-600 hover:scale-[1.1]"
                src={InstagramLogo}
                alt=""
              />
            </Link>
          </p>
        </div>
        {/* footer div 2  */}
        <div style={{ fontFamily: "Montserrat, serif" }} className="text-center">
          <h1  style={{ fontFamily: "Taviraj, serif" }} className="font-bold text-xl pb-5">Useful Links</h1>
          <Link className="hover:underline" to="/aboutUs">ABOUT US</Link> <br />
          <Link className="hover:underline" to="/aboutUs">EVENT</Link><br />
          <Link className="hover:underline" to="/aboutUs">OUR TEAM</Link>
        </div>
        {/* footer div 3  */}
        <div  className="text-center">
          <h1 className="font-bold text-xl pb-5">Location</h1>
          <p style={{ fontFamily: "Montserrat, serif" }}>
          57, mirzapool k-plaza , <br /> Chittagong, Bangladesh, 4212
          </p>
        </div>
        {/* footer div 4  */}
        <div  className="text-center">
          <h1 className="font-bold text-xl pb-5">Hotline</h1>
          <p style={{ fontFamily: "Montserrat, serif" }}  className="hover:underline">+8801515-243278</p>
        </div>
      </div>
{/* footer 2 ------------------------------------------- */}
      <p style={{ fontFamily: "Montserrat, serif" }} 
      className="bg-gradient-to-l from-[#399FE0] to-[#3062A9] text-white flex justify-center py-4 uppercase text-sm">
        © 2024 Al Ziarath International . All rights reserved by
      <span className="ms-1 underline hover:text-black">
        <Link to="https://marketienltd.com/" target="_blank"> Marketien</Link>
      </span>
      </p>
    </div>
  );
};

export default Footer;
