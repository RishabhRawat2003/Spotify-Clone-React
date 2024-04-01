import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/main/Home.jsx'
import Search from './components/main/Search.jsx'
import PlaylistTracks from './components/main/homeplaylisttracks/PlaylistTracks.jsx'
import ArtistsTracks from './components/main/homeartiststracks/ArtistsTracks.jsx'
import SidebarArtistTracks from './components/main/sidebarartists/SidebarArtistTracks.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='Search' element={<Search />}/>
      <Route path='playliststracks/:id' element={<PlaylistTracks />} />
      <Route path='artiststracks/:tracks' element={<ArtistsTracks />} />
      <Route path='sidebarartiststracks/:trackid' element={<SidebarArtistTracks />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
