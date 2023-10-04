import fotolanding from './assets/fotolanding.png'
import star from './assets/star.svg'

function App() {

  return (
    <>
      <section>
        <div className='flex flex-wrap h-[100vh] bg-crema'>
          <nav className='flex justify-between items-center w-full h-[15vh] z-10'>
            <div className='ml-[10%]'>
              <h3 className='font-FiraSans text-3xl font-bold text-gray-800'>FC</h3>
            </div>
            <ul className='flex mr-[15%] gap-12'>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-sm relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>COACHING</li>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-sm relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>WORKSHOPS</li>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-sm relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>TEAM BUILDING</li>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-sm relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>LIDERAZGO</li>
              <li className='cursor-pointer font-FiraSans text-verdealt tracking-wider drop-shadow-sm text-sm relative py-2 px-4 border-2 border-transparent hover:border-verde transition-all duration-400'>SOBRE MI</li>
            </ul>
          </nav>
            <div className='h-[85vh] w-[60%] relative'>
              <img src={fotolanding} alt="" className='h-[120%] w-auto absolute bottom-0' />
            </div>
            <div className='flex flex-col ml-[-8%] z-10 w-[40%]'>
              <h3 className='text-6xl text-gray-800 mt-[25%] font-Lora font-semibold'>¿Tenés una misión?</h3>
              <h2 className='text-4xl text-gray-800 mt-[10%] font-Garamond font-thin italic'>Te acompañamos a cumplirla.</h2>
              <ul className='mt-[8%] flex flex-col gap-4'>
                <li className='text-2xl text-gray-800 font-Garamond flex items-center gap-4'><img src={star} alt="" className='w-6' /><span>Una cosa</span></li>
                <li className='text-2xl text-gray-800 font-Garamond flex items-center gap-4'><img src={star} alt="" className='w-6' /><span>Maravillosa</span></li>
                <li className='text-2xl text-gray-800 font-Garamond flex items-center gap-4'><img src={star} alt="" className='w-6' /><span>De que color</span></li>
              </ul>
            </div>
        </div>
      </section>

      <section></section>

      <section></section>

      <section></section>

      <section></section>
    </>
  )
}

export default App
