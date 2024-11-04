import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-between p-14 items-center">
        <div>
            <img className="w-16 h-16 cursor-pointer" src="./src/images/logo.png" alt="logo" />
        </div>

        <div className="lg:hidden" onClick={toggle}>
            {isOpen ? <AiOutlineClose className="text-3xl"/> : <AiOutlineMenu className="text-3xl"/>}
        </div>

        <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-20 ${isOpen ? "flex" : "hidden"} lg:flex transition-all duration-300 ease-in-out mt-4 lg:mt-0`}>

            <h2 className="font-hind text-lg cursor-pointer hover:text-primary duration-200">Mentorship</h2>

            <h2 className="font-hind text-lg border-2 border-primary py-2 px-4 rounded-3xl cursor-pointer hover:bg-primary hover:text-light duration-500">Say Hello</h2>
        </div>
    </div>
  )
}

export default Navbar