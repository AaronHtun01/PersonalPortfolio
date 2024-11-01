
const Header = () => {
  return (
    <div className="flex flex-col items-center pt-14">
        <div className="pb-20">
            <h1 className="font-arvo text-5xl font-semibold">Designer, Frontend Developer & Mentor</h1>
            <p className="text-2xl mt-6 ml-36">I design and code beautifully simple things, and I love what I do.</p>
        </div>
        <div>
            <img className="w-72 h-72" src="./src/images/me.png" alt="personal" />
        </div>
        <div className="pt-20">
            <img className="w-[1000px]" src="./src/images/main.png" alt="main" />
        </div>
    </div>
  )
}

export default Header