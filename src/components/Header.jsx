import { NavLink } from 'react-router-dom'
import { MenuIcon } from '../assets/menu.jsx'
import { ROUTES } from '../routes/routes.js'

export function Header() {
   function onClickMenu() {
      const nav = document.getElementById('nav')
      nav.classList.toggle('showMenu')
   }

   return (
      <header class='header-pc'>
         <h2 className='text-2xl font-extrabold'>José Carlos</h2>

         <button className='navIcon' onClick={onClickMenu}>
            <MenuIcon />
         </button>

         <nav className='nav-pc' id='nav'>
            <MiNavLink to={ROUTES.ABOUT_ME} onClick={onClickMenu}>
               Sobre mí
            </MiNavLink>
            <MiNavLink to={ROUTES.SKILLS} onClick={onClickMenu}>
               Habilidades
            </MiNavLink>
            <MiNavLink to={ROUTES.PROJECTS} onClick={onClickMenu}>
               Proyectos
            </MiNavLink>
            <MiNavLink to={ROUTES.EXPERIENCE} onClick={onClickMenu}>
               Experiencia
            </MiNavLink>
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
