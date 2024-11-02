const Projectcard = ({ title, link }) => {
  return (
    <div className="bg-white w-96 p-20 text-center cursor-pointer rounded-xl border-2 border-gray-200 hover:bg-primary hover:text-light duration-300">
        <h1 className="font-arvo pb-4 font-medium text-2xl">{title}</h1>
        <a href={link}>{link}</a>
    </div>
  )
}

export default Projectcard