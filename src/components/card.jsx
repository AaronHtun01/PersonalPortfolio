
const Card = ({ logo, title, context, subtitle, subcontext, tooltitle ,tools }) => {
  return (
         <div className="bg-white p-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl bg-gold p-4 rounded-full">{logo}</h1>
                    <h1 className="py-6 text-xl font-arvo font-semibold">{title}</h1>
                    <p className="text-lg font-hind text-center">{context}</p>
                </div>
            
                <div className="py-16 text-center">
                    <h1 className="text-lg text-primary py-3 font-hind">{subtitle}</h1>
                    <p className="font-hind text-lg">{subcontext}</p>
                </div>

                <div className="text-center">
                    <h1 className="text-lg text-primary py-3 font-hind">{tooltitle}</h1>
                    {tools && (
                        <ul className="pl-6 text-gray-700 mb-4 flex flex-col gap-2">
                            {tools.map((tool, index) => (
                                <li key={index} className="text-lg font-hind">{tool}</li>
                            ))}
                        </ul>
                    )}
                </div>
        </div>
  )
}

export default Card