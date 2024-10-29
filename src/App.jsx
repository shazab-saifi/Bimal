import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="w-screen min-h-screen custom-gradient flex flex-col items-center dm-sans">
      <Header />
      <Hero />
      <Footer/>
    </div>
  )
}

export default App
