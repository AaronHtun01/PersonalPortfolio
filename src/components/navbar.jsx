
const Navbar = () => {
  return (
    <div className="flex justify-between p-14 items-center">
        <div>
            <img className="w-16 h-16 cursor-pointer" src="./src/images/logo.png" alt="logo" />
        </div>

        <div className="flex gap-20 items-center">
            <h2 className="font-hind text-lg cursor-pointer hover:text-primary duration-200">Mentorship</h2>
            <h2 className="font-hind text-lg border-2 border-primary py-2 px-4 rounded-3xl cursor-pointer hover:bg-primary hover:text-light duration-500">Say Hello</h2>
        </div>
    </div>
  )
}

export default Navbar