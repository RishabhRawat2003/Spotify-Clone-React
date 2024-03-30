import { Outlet } from "react-router-dom"
import Main from "./components/"

function App() {

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-[85vh] flex relative">
          <Main />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
