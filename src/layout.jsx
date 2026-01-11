import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
export function Layout() {
   return (
      // Hacemos que el contenedor principal ocupe toda la pantalla
      <div className='flex min-h-screen flex-col'>
         <Header />
         {/* Damos toda la altura restante al Outlet */}
         <div className='m-3 flex flex-1 flex-col'>
            <Outlet />
         </div>
         <Footer />
      </div>
   )
}
