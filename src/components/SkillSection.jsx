import PropTypes from 'prop-types'

export function SkillSection({ imgSrc, title, skills }) {
   return (
      <div className='divide-y divide-gray-400 rounded border-2 border-blue-300 bg-gray-50 p-2'>
         <header className='ml-2 flex items-center gap-3 pb-2'>
            <img src={imgSrc} alt='Skills Icon' className='size-12' />
            <h2 className='h2'>{title}</h2>
         </header>
         <section className='mt-3 flex flex-wrap items-center justify-center'>
            {skills.map((skill) => (
               <span key={skill} className='m-1 rounded bg-blue-100 p-2'>
                  {skill}
               </span>
            ))}
         </section>
      </div>
   )
}

SkillSection.propTypes = {
   imgSrc: PropTypes.string || PropTypes.element,
   title: PropTypes.string.isRequired,
   skills: PropTypes.arrayOf(PropTypes.string).isRequired,
}
