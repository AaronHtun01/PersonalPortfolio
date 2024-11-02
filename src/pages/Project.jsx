import Projectcard from "../components/projectcard"
const Project = () => {

  return (
    <div>
        <div className="bg-primary h-[800px]">
            <div className="pt-[400px] flex flex-col items-center">
                <h1 className="text-light font-arvo text-3xl font-semibold">My Startup Projects</h1>
                <p className="leading-relaxed tracking-wide text-light font-hind text-lg pt-10 w-[700px] text-center">Here are my startup projects, built with a focus on innovation and real-world impact. Each project reflects my dedication to crafting meaningful digital solutions through hands-on problem-solving and collaboration.</p>
            </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-10 relative bottom-36 w-11/12 ml-20">
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