import { NavLink } from 'react-router-dom'

export function Header() {
   return (
      <header class='sticky m-1 flex items-center justify-between bg-gray-300/60 p-3'>
         <h2 className='text-2xl font-extrabold'>José Carlos</h2>

         <nav className='flex gap-2'>
            <MiNavLink to='/'>Sobre mí</MiNavLink>
            <MiNavLink to='/techs'>Tecnologías</MiNavLink>
            <MiNavLink to='/projects'>Proyectos</MiNavLink>
            <MiNavLink to='/experience'>Experiencia</MiNavLink>
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
