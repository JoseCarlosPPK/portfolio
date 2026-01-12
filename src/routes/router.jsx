import { createHashRouter } from 'react-router-dom'
import { Layout } from '../layout.jsx'
import { HomePage } from '../pages/Home.jsx'
import { ROUTES } from './routes.js'

export const router = createHashRouter([
   {
      path: ROUTES.ABOUT_ME,
      Component: Layout,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         { path: ROUTES.PROJECTS, element: <div>Proyectos</div> },
         { path: ROUTES.TECHS, element: <div>Tecnologías</div> },
         { path: ROUTES.EXPERIENCE, element: <div>Experiencia</div> },
         {
            path: '*', // <-- esta ruta "comodín" captura TODO lo que no matchee
            element: <div>Oops! Página no encontrada</div>,
         },
      ],
   },
])
