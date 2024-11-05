

import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import collection from './pages/collection'
import contact from './pages/contact'
import Product from './pages/Product'
import cart from './pages/cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import order from './pages/order'
import Navbar from './components/navbar'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
    <Navbar/>
    <Routes>
     <Route path ='/' element={<Home/>}/>
     <Route path='/collection' element={collection}/>
     <Route path ='/about' element={<About/>}/>
     <Route path ='/contact' element={contact}/>
     <Route path ='/product/:productId' element={<Product/>}/>
     <Route path ='/cart' element={cart}/>
     <Route path ='/Login' element={<Login/>}/>
     <Route path ='/placeorder' element={<Placeorder/>}/>
     <Route path ='/order' element={order}/>

     
    </Routes>
    <Footer/>
      
    </div>
  )
}

export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
