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

      <section>
        <div className='h-[60vh] bg-marronalt flex justify-center'>
          <div className='w-[45%] flex flex-col justify-center items-center gap-2'>
            <img src="/src/assets/fcsinfondo.png" alt="" className='h-[40vh] ml-40' />
            <h3 className='font-FiraSans text-3xl text-zinc-200 ml-40'>FC | TALENT</h3>
          </div>
          <div className='w-[50%] ml-10 flex flex-col justify-center gap-8'>
            <p className='w-[40vw] text-white text-xl font-Poppins flex flex-col justify-center items-center leading-relaxed tracking-wide'>
              A TRAVÉS DE HERRAMIENTAS DE COACHING,
              PSICOLOGÍA, NEUROCIENCIAS, DINÁMICAS
              LÚDICAS Y PRÁCTICAS, ACOMPAÑAMOS EL
              DESARROLLO DE COMPETENCIAS HUMANAS E
              INTELIGENCIA EMOCIONAL PARA LOGRAR
              MEJORES PERSONAS, MEJORES LÍDERES Y
              MEJORES EQUIPOS.</p>
              <span className='w-[40%] px-6 py-4 bg-verdealt font-Poppins font-light text-white text-center text-xl tracking-wider cursor-pointer hover:bg-opacity-70'>CONOCE MÁS</span>
          </div>
        </div>
      </section>

      <section></section>

      <section></section>

      <section></section>
    </>
  )
}

export default App
