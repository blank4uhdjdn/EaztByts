
import { Routes,Route } from 'react-router-dom'
import './App.css'
import CreatePost from './blog/CreatePost'



import HomeMain from './components/pages/HomeMain'
import Login from './components/pages/Login'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeMain />} />
      <Route path="/createpost" element={<CreatePost/>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    
    
  
    
    </>
  )
}

export default App
