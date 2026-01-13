import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes/routes.js'

export function Header() {
   return (
      <header class='sticky top-0 m-1 flex items-center justify-between bg-gray-200 p-3'>
         <h2 className='text-2xl font-extrabold'>José Carlos</h2>

         <nav className='flex gap-2'>
            <MiNavLink to={ROUTES.ABOUT_ME}>Sobre mí</MiNavLink>
            <MiNavLink to={ROUTES.SKILLS}>Habilidades</MiNavLink>
            <MiNavLink to={ROUTES.PROJECTS}>Proyectos</MiNavLink>
            <MiNavLink to={ROUTES.EXPERIENCE}>Experiencia</MiNavLink>
         </nav>
      </header>
   )
}

function MiNavLink({ ...props }) {
   return (
      <NavLink
         {...props}
         className={({ isActive }) =>
            `${isActive ? 'bg-blue-600! text-white!' : 'hover:text-inherit!'} ! rounded-xl p-2 duration-100 hover:bg-blue-300`
         }
      />
   )
}
