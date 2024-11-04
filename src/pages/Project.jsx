import Projectcard from "../components/projectcard"
const Project = () => {

  return (
    <div>
        <div className="bg-primary h-[600px] sm:h-[600px]">
            <div className="pt-[150px] sm:pt-[150px] flex flex-col items-center px-4 sm:px-0">
                <h1 className="text-light font-arvo text-2xl sm:text-3xl font-semibold">My Startup Projects</h1>
                <p className="leading-relaxed tracking-wide text-light font-hind text-md sm:text-lg pt-10 max-w-lg sm:max-w-2xl text-center">Here are my startup projects, built with a focus on innovation and real-world impact. Each project reflects my dedication to crafting meaningful digital solutions through hands-on problem-solving and collaboration.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative bottom-36 w-11/12 ml-16">
            <Projectcard title="Project 1" link="https://www.google.com" />
            <Projectcard title="Project 2" link="https://www.google.com" />
            <Projectcard title="Project 3" link="https://www.google.com" />
            <Projectcard title="Project 4" link="https://www.google.com" />
            <Projectcard title="Project 5" link="https://www.google.com" />
            <Projectcard title="Project 6" link="https://www.google.com" />
        </div>
    </div>
  )
}

export default Project