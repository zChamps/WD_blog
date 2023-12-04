import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//mapeia se a autenticação do usuario foi feita com sucesso
import { onAuthStateChanged } from 'firebase/auth';

//Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './Hooks/useAuthentication';

//Rotas
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';



//Context
import { AuthProvider } from './Context/AuthContext';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search/>}/>
              <Route path='/posts/:id' element={<Post/>}/>
              <Route path='/login' element={!user ? <Login /> : <Navigate to={"/"}/>} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to={"/"}/>} />
              <Route path='/posts/edit/:id' element={user ? <EditPost /> : <Navigate to={"/"}/>}/>
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to={"/login"}/>} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to={"/login"}/>} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
