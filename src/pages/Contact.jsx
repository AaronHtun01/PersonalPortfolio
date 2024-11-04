import { BiConversation } from "react-icons/bi";
const Contact = () => {
  return (
    <div className="flex flex-col items-center pb-48 px-4 sm:px-0">
        <h1 className="font-arvo text-xl sm:text-3xl font-semibold">Interested in collaborating? Let's chat!</h1>
        <p className="font-hind text-md sm:text-lg py-6 sm:py-7 text-center">I’m always open to discussing product design work or partnership opportunities.
        </p>

        <div className="border-2 border-primary py-4 px-8 rounded-3xl hover:bg-primary hover:text-light duration-500 flex items-center gap-4">
            <BiConversation className="text-3xl"/>
            <button>Start a conversation</button>
        </div>
    </div>
  )
}

export default Contact