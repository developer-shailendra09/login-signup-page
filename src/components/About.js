import React from "react";

function About() {
  return (
    <>
      <div className="flex h-screen w-full bg-gray-500">
        {/* <div className="h-60 w-60 bg-yellow-500 m-auto my-auto"> */}
        <div className="flex justify-center items-center w-full h-screen min-h-screen">
          <div className="w-1/2  bg-white  shadow-md rounded-xl mx-auto ">
            <img
              className="h-36 w-full rounded-xl relative ..."
              src="./photos/svg.png"
            />
            <img
              className="h-20 w-20 ml-14 mb-2 ..."
              src="./photos/logo.png"
              alt="bg image"
            />
            <span className="text-4xl text-blue-400 font-extrabold ml-20 mb-4">
              Lorem
            </span>
            <div className="w-80 ml-20 mt-4">
              <span className="text-sm text-blue-300">
                In publishing and graphic design lorem ipsum is a placeholder
                text commonly used todemonstrate the visual form of document or
                a typeface without relying on meaningful content.
              </span>
            </div>
            <img
              className=" h-60 rounded-xl w-full"
              src="./photos/svg(1).png"
            />
            <button class=" h-14 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-xl ml-64 lg:ml-72 xl:ml-96 text-3xl absolute -mt-20 my-auto">
              Get Started
            </button>
            {/* </div>  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
