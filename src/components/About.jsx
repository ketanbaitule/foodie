"use client";
import Image from "next/image";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { PrimaryHeading, SecondaryHeading } from "./Heading";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden mx-4 md:mx-10">
        <div className="flex-1 p-6 text-3xl">
          <SecondaryHeading>About Us</SecondaryHeading>
          <p className="text-gray-900 text-lg md:text-2xl mb-4 mt-10 font-poppins">
            "Explore a world of culinary delight as we <br />
            offer franchisee opportunities for our <br />
            food shops across 51 primary locations. Join us <br />
            in bringing exceptional flavors to every corner, <br />
            creating a savory experience for franchisees <br /> and
            customers alike"
          </p>
          <button className="bg-primary text-white font-medium py-2 px-4 rounded-full text-sm mt-8">
            Know more &rarr;
          </button>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/abothom.png"
            alt="About Us"
            objectFit="cover"
            height={530}
            width={800}
          />
        </div>
      </div>

       {/* Features Section */}
       <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl mt-10 md:mt-20 gap-6 md:gap-24 px-4 md:px-20">
        {/* Card 1 */}
        <div className="flex flex-col bg-glasscolor bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 w-full md:w-80">
          <div className="flex items-center mb-4">
            <div className="bg-primary text-white rounded-full p-4">
              <TbTruckDelivery size={34} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg md:text-xl font-bold mb-2">Free Delivery</h2>
              <p className="textwhite text-sm md:text-base">
                Explore our website and enjoy free delivery on all orders an effortless way to enhance
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-glasscolor bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 w-full md:w-80">
          <div className="flex items-center mb-4">
            <div className="bg-primary text-white rounded-full p-4">
              <MdOutlineAccountBalanceWallet size={34} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg md:text-xl font-bold mb-2">24/7 Support</h2>
              <p className="textwhite text-sm md:text-base">
                Empowering Excellence Around the Clock: Your 24/7 Support Partner
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col bg-glasscolor bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 w-full md:w-80">
          <div className="flex items-center mb-4">
            <div className="bg-primary text-white rounded-full p-4">
              <BiSupport size={34} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg md:text-xl font-bold mb-2">Secure Payment</h2>
              <p className="textwhite text-sm md:text-base">
                Empowering Trust, Ensuring Security: Your Path to Seamless and Secure Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}





// // pages/about.js

// import Image from "next/image";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";

// import { TbTruckDelivery } from "react-icons/tb";
// import { BiSupport } from "react-icons/bi";
// import { PrimaryHeading, SecondaryHeading } from "./Heading";

// export default function About() {
//   return (
//     <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
//       <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden ml-10 mr-10">
//         <div className="flex-1 p-6 text-3xl">
//           <SecondaryHeading>About Us</SecondaryHeading>

//           <p className="text-gray-900 text-lg md:text-2xl mb-4 mt-10 font-poppins">
          
//             "Explore a world of culinary delight as we <br />
//             offer franchisee opportunities for our <br />
//             food shops across 51 primary locations. Join us <br />
//             in bringing exceptional flavors to every corner,
//             <br /> creating a savory experience for franchisees <br /> and
//             customers alike"
//           </p>
//           <button className="bg-primary text-white font-medium py-2 px-4 rounded-full text-sm mt-8">
//             Know more &rarr;
//           </button>
//         </div>
//         <div className="flex-1 relative">
//           <Image
//             src="/abothom.png "
//             alt="About Us"
//             // layout="fill"
//             objectFit="cover"
//             height={530}
//             width={800}
//           />
//         </div>
//       </div>

      {/* New Section with Glassmorphic Effect Boxes */}
      {/* <div className="flex flex-col md:flex-row 
  bg-primary bg-opacity-50 backdrop-blur-md rounded-xl overflow-hidden
    p-6 space-y-6 md:space-y-0 w-full max-w-6xl "> */}

      {/* <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col md:flex-row items-center
         bg-glasscolor bg-opacity-50 backdrop-blur-md
          rounded-xl p-6 shadow-md w-full   m-14  font-poppins ">
          <div className="bg-primary text-white rounded-full
           p-4 mb-4 md:mb-0 md:mr-4">
            <TbTruckDelivery size={34} />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-5">Free delivery</h2>
            <p className="textwhite">
              Explore our website and enjoy free delivery on all orders an
              effortless way to enhance
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-glasscolor bg-opacity-50 backdrop-blur-md rounded-xl p-6 shadow-md w-full m-14">
          <div className="bg-primary text-white rounded-full p-4 mb-4 md:mb-0 md:mr-4">
            <MdOutlineAccountBalanceWallet size={34} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-5">24/07 Support</h3>
            <p className="textwhite">
              Empowering Excellence Around the Clock: Your 24/7 Support Partner
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-glasscolor bg-opacity-50 backdrop-blur-md rounded-xl p-6 shadow-md w-full m-14">
          <div className="bg-primary text-white rounded-full p-4 mb-4 md:mb-0 md:mr-4">
            <BiSupport size={34} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-5">Secure Payment</h3>
            <p className="textwhite">
              Empowering Trust, Ensuring Security: Your Path to Seamless and
              Secure Payments
            </p>
          </div>
        </div>
        {/* </div> */}
      {/* </div> */}  

      {/* boxes are here */}
       {/* Features Section */}
//        <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-6xl  mt-20 mr-20 gap-24 ">
//         {/* Card 1 */}
//         <div className="flex flex-col bg-glasscolor bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 m-14 w-full ">
//           <div className="flex items-center mb-4">
//             <div className="bg-primary text-white rounded-full p-4">
//               <TbTruckDelivery size={34} />
//             </div>
//             <div className="ml-4">
//               <h2 className="text-lg md:text-xl font-bold mb-2">Free Delivery</h2>
//               <p className="textwhite text-sm md:text-base">
//                 Explore our website and enjoy free delivery on all orders an effortless way to enhance
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="flex flex-col bg-glasscolor bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 m-14 w-full ">
//           <div className="flex items-center mb-4">
//             <div className="bg-primary text-white rounded-full p-4">
//               <MdOutlineAccountBalanceWallet size={34} />
//             </div>
//             <div className="ml-4">
//               <h2 className="text-lg md:text-xl font-bold mb-2">24/7 Support</h2>
//               <p className="textwhite text-sm md:text-base">
//                 Empowering Excellence Around the Clock: Your 24/7 Support Partner
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="flex flex-col bg-glasscolor bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 m-14 w-full  ">
//           <div className="flex items-center mb-4">
//             <div className="bg-primary text-white rounded-full p-4">
//               <BiSupport size={34} />
//             </div>
//             <div className="ml-4">
//               <h2 className="text-lg md:text-xl font-bold mb-2">Secure Payment</h2>
//               <p className="textwhite text-sm md:text-base">
//                 Empowering Trust, Ensuring Security: Your Path to Seamless and Secure Payments
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

