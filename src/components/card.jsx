
const Card = ({ logo, title, context, subtitle, subcontext, tooltitle ,tools }) => {
  return (
    <div className="bg-light">
        <div>
                <div className="">
                    <h1>{logo}</h1>
                    <h1>{title}</h1>
                    <p>{context}</p>
                </div>
            
                <div>
                    <h1>{subtitle}</h1>
                    <p>{subcontext}</p>
                </div>

                <div>
                    <h1>{tooltitle}</h1>
                    {tools && (
                        <ul>
                            {tools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    )}
                </div>
        </div>
    </div>
  )
}

export default Card