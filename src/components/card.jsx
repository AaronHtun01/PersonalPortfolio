
const Card = ({ logo, title, context, subtitle, subcontext, tooltitle ,tools }) => {
  return (
         <div className="bg-white p-10 sm:p-16 lg:p-20 shadow-lg border-2 border-slate-200">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl bg-gold p-3 sm:p-4 rounded-full">{logo}</h1>
                    <h1 className="py-4 sm:py-6 text-lg sm:text-xl font-arvo font-semibold">{title}</h1>
                    <p className="text-md sm:text-lg font-hind text-center">{context}</p>
                </div>
            
                <div className="py-8 sm:py-16 text-center">
                    <h1 className="text-md sm:text-lg text-primary py-2 sm:py-3 font-hind">{subtitle}</h1>
                    <p className="font-hind text-md sm:text-lg">{subcontext}</p>
                </div>

                <div className="text-center">
                    <h1 className="text-md sm:text-lg text-primary py-2 sm:py-3 font-hind">{tooltitle}</h1>
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