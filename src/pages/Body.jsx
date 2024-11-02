import Card from "../components/card"
import { TbTemplate } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";

const Body = () => {
  return (
    <div>
      <div className="bg-primary h-[800px]">
        <div className="pt-44 w-[600px] flex flex-col ml-[400px]">
          <h1 className="text-light font-arvo text-3xl font-semibold ml-28">Hi, I'm Aaron. Nice to meet you.</h1>
          <p className="leading-relaxed tracking-wide text-light font-hind pt-10 w-[700px] text-lg text-center">I'm a BSc (Hons) graduate in Business Computing and Information Systems, with experience collaborating on digital products designed for both business and consumer applications. I bring a quiet confidence and natural curiosity to my work, always focused on enhancing my skills and staying current in the tech landscape. My approach combines a strong technical foundation with a drive for continuous learning and improvement.</p>
        </div>
      </div>

      <div className="flex w-11/12 ml-14 h-[950px] shadow-xl relative bottom-60">
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