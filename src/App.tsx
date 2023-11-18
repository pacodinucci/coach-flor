import fotolanding from './assets/fotolanding.png'
import star from './assets/star.svg'

function App() {

  return (
    <>
      <section>
        <div className='flex flex-wrap h-[95vh] bg-[url("/src/assets/fondolanding4.png")]'>
          <nav className='flex justify-between items-center w-full h-[15vh] z-10'>
            <div className='ml-[10%]'>
              <h3 className='font-FiraSans text-5xl font-semibold text-gray-700'>FC | TALENT</h3>
            </div>
            <ul className='flex mr-[15%] gap-6'>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-lg relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>COACHING</li>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-lg relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>WORKSHOPS</li>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-lg relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>TEAM BUILDING</li>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-lg relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>LIDERAZGO</li>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-lg relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>SOBRE MI</li>
            </ul>
          </nav>
          <div className='h-[80vh] w-[60%] relative'>
            <img src={fotolanding} alt="" className='h-[120%] w-auto absolute bottom-0' />
          </div>
          <div className='flex flex-col ml-[-12%] z-10 w-[40%]'>
            <h3 className='text-7xl text-gray-800 mt-[25%] font-Lora font-semibold'>¿Tenés una misión?</h3>
            <h2 className='text-5xl text-gray-800 mt-[10%] font-Garamond font-thin italic'>Te acompañamos a cumplirla.</h2>
            <ul className='mt-[8%] flex flex-col gap-4'>
              <li className='text-3xl text-gray-800 font-Garamond flex items-center gap-4'><img src={star} alt="" className='w-6' /><span>Habilidades humanas</span></li>
              <li className='text-3xl text-gray-800 font-Garamond flex items-center gap-4'><img src={star} alt="" className='w-6' /><span>Liderazgo</span></li>
              <li className='text-3xl text-gray-800 font-Garamond flex items-center gap-4'><img src={star} alt="" className='w-6' /><span>Dinámicas de equipos</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className='relative'>
        <div className='h-[70vh] bg-marronalt flex justify-center'>
          <div className='w-[45%] flex items-center ml-20'>
            <div className='flex flex-col justify-center items-center gap-2 ml-40 border-2 border-zinc-200 p-10 px-20 rounded-full'>
              <img src="/src/assets/fcsinfondo.png" alt="" className='h-[40vh]' />
              <h3 className='font-FiraSans text-3xl text-zinc-200'>FC | TALENT</h3>
            </div>
          </div>
          <div className='w-[50%] ml-10 flex flex-col justify-center gap-8'>
            <p className='w-[40vw] text-white text-xl font-Poppins flex flex-col justify-center items-center leading-relaxed tracking-wide'>
              A través de herramientas de Coaching,
              Psicología, Neurociencias, Dinámicas
              Lúdicas y Prácticas, acompañamos el
              desarrollo de competencias humanas e
              inteligencia emocional para lograr
              mejores personas, mejores líderes y
              mejores equipos.</p>
            <span className='w-[40%] px-6 py-4 bg-verdealt font-Poppins font-light text-white text-center text-xl tracking-wider cursor-pointer hover:bg-opacity-70'>CONOCE MÁS</span>
          </div>
        </div>
        <div className='h-[90vh] flex'>
          <div className='h-full w-[50vw] flex-col'>
            <img src="/src/assets/talleres2.png" alt="" className='h-full' />
          </div>
          <div className='w-[50vw] flex justify-center items-center bg-zinc-100 '>
            <div className='flex flex-col justify-center gap-12 w-[70%]'>
              <h1 className='text-6xl font-Cuprum w-[70%] text-gray-900'>¿BUSCÁS POTENCIAR TU EQUIPO?</h1>
              <h3 className='text-4xl font-Poppins text-gray-900'>Implementamos diferentes ejercicios y
                dinámicas para incentivar a las personas a
                desafiarse a sí mismas y salir de su zona de
                confort.</h3>
              <p className='text-2xl text-gray-900'>El Liderazgo no es un
                rango o una posición a
                alcanzar, el Liderazgo es
                inspirar y ponerse al
                servicio. Nos enfocamos
                en facilitar el contexto
                para que las metas se
                cumplan y TU equipo sea
                quien lo ejecute y
                resuelva.</p>
              <span className='w-[40%] px-6 py-4 bg-sky-700 font-Poppins font-light text-white text-center text-xl tracking-wider cursor-pointer hover:bg-opacity-70'>MÁS INFORMACIÓN</span>
            </div>
          </div>
        </div>
        {/* <div className='absolute right-16 top-[30%] h-[30vh] w-[15vw] rounded-lg border-2 bg-white'>
          <form>
            <input type="text" />
            <label>Nombre</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Empresa</label>
            <button>Enviar</button>
          </form>
        </div> */}
      </section>

      <section>
        <div className='h-[90vh] flex justify-center items-center'>
          <div className='h-full w-[80%] flex justify-center items-center gap-20'>
            <div className='border-2 rounded-sm h-3/5 w-1/4 flex flex-col gap-6 items-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-700'>
              <img src="/src/assets/workshop.png" alt="" className='mt-6' />
              <h3 className='text-3xl font-Poppins'>WORKSHOPS</h3>
              <ul className='w-4/5 flex flex-col gap-4 font-semibold'>
                <li className='flex gap-4'><img src="/src/assets/pen.svg" alt="" className='w-6' />Habilidades humanas</li>
                <li className='flex gap-4'><img src="/src/assets/pen.svg" alt="" className='w-6' />Comunicación Asertiva</li>
                <li className='flex gap-4'><img src="/src/assets/pen.svg" alt="" className='w-6' />Habilidades comerciales y visión del negocio</li>
              </ul>
              <span className='bg-sky-900 px-6 py-2 text-white hover:bg-opacity-70 cursor-pointer rounded-sm'>LEER MÁS</span>
            </div>
            <div className='border-2 rounded-sm h-3/5 w-1/4 flex flex-col gap-6 items-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-700'>
              <img src="/src/assets/coaching.png" alt="" className='mt-6' />
              <h3 className='text-3xl font-Poppins'>COACHING</h3>
              <ul className='w-4/5 flex flex-col gap-4 font-semibold'>
                <li className='flex gap-4'><img src="/src/assets/rainbow.svg" alt="" className='w-6' />Proceso de cambio, descubrimiento y redifinición</li>
                <li className='flex gap-4'><img src="/src/assets/rainbow.svg" alt="" className='w-6' />Sesiones individuales y grupales</li>
                <li className='flex gap-4'><img src="/src/assets/rainbow.svg" alt="" className='w-6' />Coaching de Liderazgo</li>
              </ul>
              <span className='bg-sky-900 px-6 py-2 text-white hover:bg-opacity-70 cursor-pointer rounded-sm'>LEER MÁS</span>
            </div>
            <div className='border-2 rounded-sm h-3/5 w-1/4 flex flex-col gap-6 items-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-700'>
              <img src="/src/assets/teambuilding.png" alt="" className='mt-6' />
              <h3 className='text-3xl font-Poppins'>TEAM BUILDING</h3>
              <ul className='w-4/5 flex flex-col gap-4 font-semibold'>
                <li className='flex gap-4'><img src="/src/assets/ball.svg" alt="" className='w-6' />Confianza y pertenencia</li>
                <li className='flex gap-4'><img src="/src/assets/ball.svg" alt="" className='w-6' />Dinamismo y alto rendimiento</li>
                <li className='flex gap-4'><img src="/src/assets/ball.svg" alt="" className='w-6' />Orientación a objetivos</li>
              </ul>
              <span className='bg-sky-900 px-6 py-2 text-white hover:bg-opacity-70 cursor-pointer rounded-sm'>LEER MÁS</span>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='h-[90vh] w-[95vw] px-12 bg-zinc-100 flex gap-32'>
          <div className='h-full flex items-center'>
            <img src="/src/assets/florconmate.png" alt="" className='w-[31vw]' />
          </div>
          <div className='w-[40vw] flex flex-col py-20 gap-12'>
            <h2 className='font-Cuprum font-bold text-6xl'>Soy Flor Carra</h2>
            <p className='text-xl font-Poppins'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi veritatis illum quo placeat fuga magni ea tempora fugit quis vel vero suscipit ipsum numquam at corporis porro aspernatur, consequatur cum?</p>
            <p className='text-xl font-Poppins'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi veritatis illum quo placeat fuga magni ea tempora fugit quis vel vero suscipit ipsum numquam at corporis porro aspernatur, consequatur cum?</p>
            <p className='text-xl font-Poppins'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem commodi eius nam laborum ad molestias molestiae autem. Voluptate, incidunt eius.</p>
          </div>
        </div>
      </section>

      <footer className='mt-24 h-[40vh] bg-slate-950 flex justify-center items-center gap-20'>
        <div>
          <h3 className='font-FiraSans text-3xl text-zinc-200'>FC | TALENT</h3>
        </div>
        <div className='flex gap-8'>
          <img src="/src/assets/linkedin.svg" alt="" className='w-12' />
          <img src="/src/assets/instagram.svg" alt="" className='w-12' />
        </div>
      </footer>
    </>
  )
}

export default App
