import backend_icon from '../assets/backend.svg'
import code_icon from '../assets/code.svg'
import database_icon from '../assets/database.svg'
import frontend_icon from '../assets/frontend.svg'
import ia_icon from '../assets/ia.svg'
import net_icon from '../assets/net.svg'
import server_icon from '../assets/server.svg'
import { SkillSection } from '../components/SkillSection.jsx'

export function SkillsPage() {
   return (
      <div className='mx-10 my-3 flex flex-wrap justify-center gap-5'>
         <SkillSection
            imgSrc={code_icon}
            title='Programación'
            skills={[
               'C++',
               'Java',
               'Python',
               'Ruby',
               'JavaScript',
               'PHP',
               'Bash',
               'Programación Orientada a Objetos (POO)',
               'Programación Funcional',
               'Estructuras de datos',
               'Algoritmos',
               'Complejidad computacional',
               'Programación paralela y concurrente',
               'Git/Github',
               'Poetry',
               'Linters',
               'Pruebas unitarias',
               'Depuración de código',
            ]}
         />

         <div className='grid gap-3 md:grid-cols-3'>
            <SkillSection
               imgSrc={frontend_icon}
               title='Frontend'
               skills={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'Tailwind CSS',
                  'Bootstrap',
                  'Pencil',
                  'Penpot',
               ]}
            />

            <SkillSection
               imgSrc={backend_icon}
               title='Backend'
               skills={[
                  'Flask',
                  'Django',
                  'Node.js',
                  'JWT',
                  'API REST',
                  'Arquitectura MVC',
                  'Arquitectura de microservicios',
                  'Arquitectura monolítica modular',
               ]}
            />

            <SkillSection
               imgSrc={database_icon}
               title='Bases de datos'
               skills={[
                  'SQL',
                  'MySQL',
                  'Oracle SQL Developer',
                  'Modelo E/R',
                  'Normalización',
                  'NoSQL',
                  'MongoDB',
               ]}
            />
         </div>

         <SkillSection
            imgSrc={server_icon}
            title='Administración de servidores'
            skills={[
               'Linux',
               'Apache HTTP Server',
               'Nginx',
               'MySQL',
               'Docker',
               'Virtualización',
               'Firewall',
               'Ubuntu Server',
               'CentOS',
               'Master-slave replication',
               'Load Balancing',
               'Proxies',
               'Cron/crontab',
               'Ansible',
               'Zabbix',
            ]}
         />

         <SkillSection
            imgSrc={net_icon}
            title='Redes'
            skills={[
               'TCP/IP',
               'UDP',
               'DNS',
               'DHCP',
               'HTTP/HTTPS',
               'SFTP',
               'SSH',
               'SMTP',
               'Tramas Ethernet',
               'VLANs',
               'Subnetting',
               'Wireshark',
               'Nmap',
               'Enrutamiento estático y dinámico',
               'Interfaces de red',
            ]}
         />

         <SkillSection
            imgSrc={ia_icon}
            title='Inteligencia artificial'
            skills={[
               'Machine Learning',
               'Regresión lineal',
               'Computer Vision',
               'CNNs',
               'Extracción de características',
               'Validación de modelos',
               'Python',
               'Fastai',
               'Scikit-learn',
               'Keras',
               'NumPy',
               'Matplotlib',
               'YOLO',
            ]}
         />
      </div>
   )
}
