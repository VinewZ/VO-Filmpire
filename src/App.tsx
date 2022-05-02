import { Sidebar } from "./Components/Sidebar/Index"
import { MoviesContextProvider } from "./Contexts/MovieContexts"
import { Home } from "./Pages/Home"

function App() {

  return (
    <div className="App">
      <MoviesContextProvider>
        <Sidebar />
        <Home />
      </MoviesContextProvider>
    </div>
  )
}

export default App
