import Navbar from "./components/navbar"
import Body from "./pages/Body"
import Header from "./pages/header"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import Testimonial from "./pages/Testimonial"
import Footer from "./pages/Footer"
export default function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <Body />
        <Project />
        <Contact />
        <Testimonial />
        <Footer />
    </div> 
  )
}
