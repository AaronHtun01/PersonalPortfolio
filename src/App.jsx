import Navbar from "./components/navbar"
import Body from "./pages/Body"
import Header from "./pages/header"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
export default function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <Body />
        <Project />
        <Contact />
    </div> 
  )
}
