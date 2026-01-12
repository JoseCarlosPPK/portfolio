import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'

export function Layout() {
   // const location = useLocation()
   return (
      // Hacemos que el contenedor principal ocupe toda la pantalla
      <div className='flex min-h-screen flex-col'>
         <Header />
         {/* Damos toda la altura restante al Outlet */}
         <div className='m-3 flex flex-1 flex-col'>
            <Outlet />
         </div>

         {/* <aside className='m-4 flex justify-center gap-10'>
            {Object.values(ROUTES).map((r) => {
               const path = location.pathname.slice()

               if (r != path)
                  return (
                     <Link
                        key={r}
                        to={r}
                        className='rounded-md bg-blue-400/90 p-3 hover:text-white!'
                     >
                        Go to {r}
                     </Link>
                  )
            })}
         </aside> */}
         <Footer />
      </div>
   )
}
