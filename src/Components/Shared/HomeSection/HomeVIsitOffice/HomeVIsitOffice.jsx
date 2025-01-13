import officeVideo from "../../../../assets/images/our-office.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeVIsitOffice = () => {
  Aos.init();

  return (
    <div className="bg-white text-black">
      <div className="py-20 lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-5 sm: mx-4">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5"
        >
          {/* information section  */}
          <div className="flex justify-center items-center">
            <div>
              <h1
                style={{ fontFamily: "Taviraj, serif" }}
                className="font-semibold text-xl"
              >
                Visit Our Campus
              </h1>
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="my-5"
              >
                Take the first step in achieving your career goals by visiting
                the AIMS campus. During your school visit you'll get to meet
                one-on-one with an admissions specialist. They'll help you
                choose the right career path and answer any questions you have.
                You'll also get the chance to tour the AIMS campus, including
                all of our classrooms, medical labs, and student facilities.
              </p>
              <div className=" flex md:justify-start sm: justify-center mt-10 mb-10">
                <button className=" bg-gradient-to-r from-[#399FE0] to-[#3062A9] text-white font-semibold rounded-md px-4 py-2 uppercase shadow-md  hover:bg-gradient-to-l from-[#399FE0] to-[#3062A9]">
                  <Link to="/contact" target="_blank">
                    Schedule a Visit
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* office picture section  */}
          <div className="flex justify-center items-center">
            <video
              className="w-[450px] h-[450px] rounded-md shadow-lg"
              src={officeVideo}
              // controls
              autoPlay
              loop
              muted
            ></video>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeVIsitOffice;
