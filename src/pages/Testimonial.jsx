const Testimonial = () => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="font-arvo text-3xl font-semibold">Testimonials</h1>
        <p className="text-xl font-hind py-12">People I've worked with have said some nice things...</p>

        <img className="h-32 w-32 object-cover rounded-full" src="./src/images/testimonial.jpg" alt="" />

        <p className="leading-relaxed tracking-wide text-center w-[700px] py-8 text-xl">“Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.”</p>

        <h1 className="font-arvo text-xl pb-2">Pascal Tremblay</h1>
        <h2 className="font-hind text-md">Creative Lead, Good Kind</h2>
    </div>
  )
}

export default Testimonial