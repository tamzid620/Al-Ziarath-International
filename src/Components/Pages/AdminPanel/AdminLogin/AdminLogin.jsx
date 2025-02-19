import { useState } from "react";
// import adminloginbanner from "../../../../public/images/loginBackground.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import showPasswordIcon from "../../../../assets/icons/show-password-icon-19.jpg";
import hidePasswordIcon from "../../../../assets/icons/show-password-icon-18.jpg";
import { IoPersonCircleSharp } from "react-icons/io5";
import Loading from "../../../Loading/Loading";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
      if (!e.target.value) {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const data = { email, password };

  // handle submit button -------------

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    setIsLoading(true);
    axios
      .post(`https://consultantbackend.softplatoon.com/api/login`, data)
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          if (res.data.user.role === "1") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dp");
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/adminLogin");
          }
        } else if (res.status === 403) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          Swal.fire({
            icon: "error",
            title: "Authentication Error",
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An unexpected error occurred.",
          });
        }
        setIsLoading(false);
      });
  };

//   const backgroundStyles = {
//     backgroundImage: `url(${adminloginbanner})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        // <div
        //   style={backgroundStyles}
        //   className="relative flex items-center justify-center min-h-screen"
        // >
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="absolute inset-0 bg-black opacity-30" />
          {/*------------------ transparent  div-------------------  */}
          <div className="md:hidden lg:flex w-full flex justify-center">
            {/* form section  */}
            <form
              onSubmit={handleSubmit}
              className="hidden bg-gradient-to-r from-[#399FE0] to-[#3062A9] drop-shadow-2xl rounded-md px-8 pt-6 pb-8 mb-4 "
            >
              <h1 className="font-semibold text-white text-center mb-3">
                Management Login Only
              </h1>
              {/* email field  */}
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Enter Gmail
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <span className="text-red-600">{emailError}</span>
              </div>
              {/* password field  */}
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <span
                    onClick={handleShowPassword}
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  >
                    {showPassword ? (
                      <img
                        className="w-[20px] h-[20px]"
                        src={showPasswordIcon}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-[20px] h-[20px]"
                        src={hidePasswordIcon}
                        alt=""
                      />
                    )}
                  </span>
                </div>
                <span className="text-red-600">{passwordError}</span>
              </div>
              {/* login button  */}
              <div className="flex items-center justify-between">
                <button
                  className="mt-10 bg-white hover:bg-yellow-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          {/* ------------------login div--------------------  */}
          <div
            style={{ minHeight: "100vh" }}
            className=" w-full flex justify-center items-center bg-gradient-to-r from-[#399FE0] to-[#3062A9] lg:rounded-s-full"
          >
            <div>
              {/* form logo  */}
              <div className="absolute z-10 -mt-5 ms-[160px] w-[55px] bg-gray-100 rounded-full flex justify-center items-center">
                <IoPersonCircleSharp size={55} className="text-[#25476a]" />
              </div>

              {/* form section  */}
              <form
                onSubmit={handleSubmit}
                className="relative w-[380px] bg-gray-300 drop-shadow-2xl rounded-md px-8 pt-6 pb-8 mb-4 "
              >
                <h1 className="font-semibold text-[#25476a] uppercase text-center mt-8 mb-3">
                  Management Login Only
                </h1>
                {/* email field  */}
                <div className="mb-4">
                  <label
                    className="block text-[#25476a] text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Enter Gmail
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <span className="text-red-600">{emailError}</span>
                </div>
                {/* password field  */}
                <div className="mb-6">
                  <label
                    className="block text-[#25476a] text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    <span
                      onClick={handleShowPassword}
                      className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                    >
                      {showPassword ? (
                        <img
                          className="w-[20px] h-[20px]"
                          src={showPasswordIcon}
                          alt=""
                        />
                      ) : (
                        <img
                          className="w-[20px] h-[20px]"
                          src={hidePasswordIcon}
                          alt=""
                        />
                      )}
                    </span>
                  </div>
                  <span className="text-red-600">{passwordError}</span>
                </div>
                {/* login button  */}
                <div className="flex items-center justify-between">
                  <button
                    className="mt-5 bg-gradient-to-r from-[#399FE0] to-[#3062A9] hover:bg-gray-500 text-white hover:bg-gradient-to-l from-[#399FE0] to-[#3062A9] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLogin;
