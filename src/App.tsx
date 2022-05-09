import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Sidebar } from "./Components/Sidebar/Index"
import { MoviesContextProvider } from "./Contexts/MovieContexts"
import { Action } from "./Pages/Action"
import { Adventure } from "./Pages/Adventure"
import { Animation } from "./Pages/Animation"
import { Comedy } from "./Pages/Comedy"
import { Documentary } from "./Pages/Documentary"
import { Home } from "./Pages/Home"

function App() {

  return (
    <div className="App">
      <MoviesContextProvider>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/action" element={<Action />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/comedy" element={<Comedy />} />
            <Route path="/documentary" element={<Documentary />} />
          </Routes>
        </BrowserRouter>
      </MoviesContextProvider>
    </div>
  )
}

export default App
