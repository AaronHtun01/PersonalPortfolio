import Card from "../components/card"
import { TbTemplate } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="bg-primary w-full h-[600px] flex justify-center">
        <div className="pt-28 sm:pt-36 w-11/12 max-w-[700px] flex flex-col items-center text-center">
          <h1 className="text-light font-arvo text-xl sm:text-3xl font-semibold">Hi, I'm Aaron. Nice to meet you.</h1>
          <p className="leading-relaxed tracking-wide text-light font-hind pt-6 sm:pt-10 text-md msm:text-lg">I'm a BSc (Hons) graduate in Business Computing and Information Systems, with experience collaborating on digital products designed for both business and consumer applications. I bring a quiet confidence and natural curiosity to my work, always focused on enhancing my skills and staying current in the tech landscape. My approach combines a strong technical foundation with a drive for continuous learning and improvement.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-11/12 sm:max-w-[1200px] -mt-28 sm:-mt-28">
        <Card logo={<TbTemplate />}
              title="Designer"
              context="I value simple content structure, clean design patterns, and thoughtful interactions."
              subtitle="Things I enjoy designing:"
              subcontext="UX, UI, Web Design, Apps, Logos"
              tooltitle="Design Tools"
              tools={["Figma", "Canva", "Pen & Paper", "Sketch"]}
              />

        <Card logo={<FaLaptopCode />}
              title="Fronted Developer"
              context="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
              subtitle="Languages I speak:"
              subcontext="HTML, CSS, SASS, Git"
              tooltitle="Design Tools"
              tools={["JavaScript", "TypeScript", "React", "Next.js", "GitHub", "Tailwind CSS", "Bootstrap", "VS Code", "Nelify"]}
              className="border-l-2"
        />
        
        <Card logo={<LuBookMarked />}
              title="Mentor"
              context="I genuinely care about people, and enjoy helping them work on their craft."
              subtitle="Experiences I draw from:"
              subcontext="UX/UI, Product Design"
              tooltitle="Mentor Stats"
              tools={["1 year experience", "4 mentees"]}
        />
      </div>
    </div>
  )
}

export default Body