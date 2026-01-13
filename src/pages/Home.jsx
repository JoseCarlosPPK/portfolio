import avatar from '../assets/avatar.jpeg'

export function HomePage() {
   return (
      <main className='flex grow flex-wrap items-center justify-center rounded-xl shadow-[0_0_20px_rgba(147,197,253,0.7)]'>
         <img
            className='justify-self-center bg-amber-400'
            src={avatar}
            alt='imagen de perfil'
         />
         <section className='p-3.5 text-center leading-8 tracking-wide md:max-w-6/12'>
            <h1 className='h1'>José Carlos López Aguilar</h1>
            <h2 className='h2 mt-3 pl-1.5'>Ingeniero Informático</h2>

            <p className='line mt-6'>
               ¡Hola! Soy José Carlos López Aguilar, un apasionado Ingeniero
               Informático con experiencia en desarrollo web y móvil. Me encanta
               crear soluciones innovadoras y eficientes que mejoren la vida de
               las personas. Siempre estoy buscando nuevos desafíos y
               oportunidades para aprender y crecer en el campo de la
               tecnología.
            </p>
         </section>
      </main>
   )
}
