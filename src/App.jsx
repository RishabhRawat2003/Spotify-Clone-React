import { Outlet } from "react-router-dom"
import Main from "./components/"
import './browserAppearance.css'
import MusicPlayer from "./components/musicPlayer/MusicPlayer"

function App() {

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-[85vh] flex relative">
          <Main />
          <Outlet />
        </div>
        <div className="w-full h-[15vh] flex">
          <MusicPlayer />
        </div>
      </div>
    </>
  )
}

export default App
