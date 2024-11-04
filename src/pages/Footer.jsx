import { PiHandshakeLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {

  return (
    <div>
        <div className="flex flex-col sm:flex-row justify-around items-center w-11/12 bg-gold mx-auto p-8 sm:p-12 rounded-xl relative top-20">
            <h1 className="font-arvo text-2xl sm:text-3xl font-semibold text-primary pb-9 sm:pb-0">Start a project</h1>
            <p className="w-80 text-center text-primary pb-9 sm:pb-0">Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
            <div className="flex gap-4 items-center border-2 border-primary py-4 px-8 rounded-3xl hover:bg-primary hover:text-light duration-500 cursor-pointer">
                <PiHandshakeLight className="text-3xl"/>
                <button>Let's do this</button>
            </div>
        </div>

        <div className="pt-36 flex flex-col items-center h-[600px] bg-primary cursor-pointer">
            <img className="w-14 h-14" src="./src/images/logo2.png" alt="" />

            <p className="pt-20 text-light text-2xl font-hind font-extralight w-80 text-center">Living, learning, & leveling up one day at a time.</p>

            <div className="flex gap-10 py-16 text-light cursor-pointer">
                <FaTwitter className="text-3xl"/>
                <FaDribbble className="text-3xl"/>
                <FaGithub className="text-3xl"/>
                <FaLinkedin className="text-3xl"/>
                <FaFacebook className="text-3xl"/>
                <CiMail className="text-3xl"/>
            </div>

            <h1 className="text-light text-xl">Handcrafted by me AaronHtun</h1>
        </div>
    </div>
  )
}

export default Footer