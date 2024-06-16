
import Image from "next/image";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { PrimaryHeading, SecondaryHeading } from "./Heading";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-white">
      <div className="flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden mx-4 md:mx-10">
        <div className="flex-1 p-6 text-3xl">
          <SecondaryHeading>About Us</SecondaryHeading>
          <p className="text-lg md:text-2xl mb-4 mt-10 font-poppins">
          &quot;Explore a world of culinary delight as we <br />  
            offer franchisee opportunities for our <br />  
            food shops across 51 primary locations. Join us <br />  
            in bringing exceptional flavors to every corner, <br />  
            creating a savory experience for franchisees <br /> and  
            customers alike&quot; 
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
        <div className="flex flex-col bg-secondary bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 w-full md:w-80">
          <div className="flex items-center mb-4">
            <div className="bg-primary text-white rounded-full p-4">
              <TbTruckDelivery size={34} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg md:text-xl font-bold mb-2">Free Delivery</h2>
              <p className="text-white text-sm md:text-base">
                Explore our website and enjoy free delivery on all orders an effortless way to enhance
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col  bg-secondary bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 w-full md:w-80">
          <div className="flex items-center mb-4">
            <div className="bg-primary text-white rounded-full p-4">
              <MdOutlineAccountBalanceWallet size={34} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg md:text-xl font-bold mb-2">24/7 Support</h2>
              <p className="text-white text-sm md:text-base">
                Empowering Excellence Around the Clock: Your 24/7 Support Partner
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col  bg-secondary bg-opacity-50 backdrop-blur-md rounded-xl shadow-md p-6 w-full md:w-80">
          <div className="flex items-center mb-4">
            <div className="bg-primary text-white rounded-full p-4">
              <BiSupport size={34} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg md:text-xl font-bold mb-2">Secure Payment</h2>
              <p className="text-white text-sm md:text-base">
                Empowering Trust, Ensuring Security: Your Path to Seamless and Secure Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
