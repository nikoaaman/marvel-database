import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage'
import HeroPage from './Pages/HeroPage'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/HeroPage' element={<HeroPage/>}/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
