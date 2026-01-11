import { createHashRouter } from 'react-router-dom'
import { Layout } from './layout.jsx'
import { HomePage } from './pages/Home.jsx'

export const router = createHashRouter([
   {
      path: '/',
      Component: Layout,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         { path: 'projects', element: <div>Proyectos</div> },
         { path: 'techs', element: <div>Tecnologías</div> },
         { path: 'experience', element: <div>Experiencia</div> },
         {
            path: '*', // <-- esta ruta "comodín" captura TODO lo que no matchee
            element: <div>Oops! Página no encontrada</div>,
         },
      ],
   },
])
