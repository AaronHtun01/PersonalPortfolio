
const Header = () => {
  return (
    <div className="flex flex-col items-center pt-14 sm:pt-14 px-4 sm:px-8">
        <div className="pb-10 sm:pb-20 text-center max-w-2xl">
            <h1 className="font-arvo text-3xl sm:text-5xl font-semibold">Designer, Frontend Developer & Mentor</h1>
            <p className="text-lg sm:text-2xl mt-4 sm:mt-6">I design and code beautifully simple things, and I love what I do.</p>
        </div>
        <div>
            <img className="w-40 h-40 sm:w-72 sm:h-72 rounded-full object-cover" src="./src/images/me.png" alt="personal" />
        </div>
        <div className="pt-10 sm:pt-20">
            <img className="w-full max-w-md sm:max-w-3xl object-contain" src="./src/images/main.png" alt="main" />
        </div>
    </div>
  )
}

export default Header