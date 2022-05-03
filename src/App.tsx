import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Sidebar } from "./Components/Sidebar/Index"
import { MoviesContextProvider } from "./Contexts/MovieContexts"
import { Comedy } from "./Pages/Comedy"
import { Home } from "./Pages/Home"

function App() {

  return (
    <div className="App">
      <MoviesContextProvider>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comedy" element={<Comedy />} />
          </Routes>
        </BrowserRouter>
      </MoviesContextProvider>
    </div>
  )
}

export default App
