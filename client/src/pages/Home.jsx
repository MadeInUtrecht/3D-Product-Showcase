import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { CustomButton } from '../components'

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'



const Home = () => {
    const snap = useSnapshot(state)
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home ' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')} className='flex space-x-6'>
                    <img src='./threejs.png' alt='threejs' className='w-8 h-8 object-contain'/>
                    <a href='http://www.vadimboot.com' target='_blank' className=' h-8 object-contain font-[Inter] text-xl font-bold cursor-pointer hover:underline'>Vadim Boot</a>
                </motion.header>
             
                <motion.div className='home-content' {...headContainerAnimation}>
                <motion.div className='home-content' {...headTextAnimation}>
                    <h1 className='head-text'>
                        Let's <br className='xl: block hidden'></br> do it
                    </h1>
                </motion.div>
                <motion.div className='flex flex-col gap-5'>
                    <p className='max-w-md font-normal text-gray-600 text-base'>Customize your unique and exclusive shirt with this 3D creativity tool.&nbsp;
                        <strong>Unleash your imagination</strong>{" "} and design your own piece of clothing.
                    </p>
                    <CustomButton type='filled' title='Customize It' handleClick={() => state.intro = false} customStyles="w-fit px-4 py-2.5 font-bold text-sm" />

                </motion.div>
            </motion.div>


            </motion.section>
        )}
    </AnimatePresence>
)}

export default Home