import React from "react";

function Register() {
  return (
    <>
      <div className="h-screen w-full bg-gray-500 ">
        <div className="flex justify-center items-center w-full h-screen min-h-screen">
          <div className="w-1/2  bg-white  shadow-md rounded-xl mx-auto ">
            <img
              className="h-36 w-full rounded-xl ..."
              src="./photos/svg.png"
            />

            <span className=" bg-white text-blue-400 text-4xl font-extrabold ml-20">
              Login
            </span>
            <br />
            <br />

            {/* <div className=" ml-20 mb-20 mx-auto"> */}
            <lebel className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-blue-300 ml-20">
              Email
            </lebel>
            <br />
            <input
              type="name"
              className="border border-blue-400 ml-20 rounded-2xl ml-14 h-10 w-8/12"
            />
            <br />
            <br />
            <lebel className=" text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-blue-300 ml-20">
              Password
            </lebel>
            <br />
            <input
              type="name"
              className="border border-blue-400 ml-20 rounded-2xl ml-14 h-10 w-8/12"
            />
            <br />
            <lebel className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-blue-300 ml-72  lg:ml-48 xl:ml-48 2xl:ml-40 ">
              forgot Password?
            </lebel>
            <div className="mt-10">
              <div className="h-14 w-14 ml-28 shadow-md rounded-2xl inline-flex	">
                <img src="photos/google.png" className="h-10 m-auto" />
              </div>

              <div className="h-14 w-14 ml-12 shadow-md rounded-2xl inline-flex	">
                <img src="photos/fb.png" className="h-10 m-auto" />
              </div>
              <div className="h-14 w-14 ml-12 shadow-md rounded-xl inline-flex	">
                <img src="photos/git.png" className="h-10 m-auto" />
              </div>
            </div>
            {/* <div  className="bg-fixed h-48 w-96 rounded-xl relative -mt-2"> */}
            <img
              className="rounded-xl h-60 w-full "
              src="./photos/svg(1).png"
            />
            <div className="text-white absolute -mt-16 lg:-mt-16 h-7 ml-10  md:text-md lg:text-lg xl:text-lg">
              <span>New here?</span>
              <span className="font-semibold"> &nbsp;Register</span>
            </div>

            <button className=" h-14 -mt-20 w-36 border-white bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border rounded-xl text-3xl absolute ml-80">
              Login
            </button>
            {/* </div> */}
            {/* <div style={{ backgroundImage:'url(./photos/logo.png)'}} className="h-20 w-96 bg-cover bg-contain">

</div> */}

            {/* <img
            className="rounded-xl mx-auto h-44 w-96 object-cover mb-20 ..."
            src="./photos/svg(1).png"
          /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
