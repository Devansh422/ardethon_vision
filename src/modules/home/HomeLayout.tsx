import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion, useAnimation } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <nav className="sticky top-0 z-20 h-20 w-full flex py-2.5 px-4 xl:px-60 items-center bg-bgbase">
        <Link href="/">
        </Link>
        <div className="flex-auto flex justify-between items-center ml-5">
          <NavBarActions>
            <Link href="/builder" className='flex items-center' passHref={true}>
              <Link href="/">
                <Image src={'/icons/resume-icon.svg'} alt="logo" height="36" width="36" />
              </Link>
              <p className='text-2xl ml-4 font-bold'>HireReady</p>
            </Link>
          </NavBarActions>
          <NavBarActions>
            <Link href="#about-us" passHref={true}>
              <p className='text-2xl '>About</p> 
            </Link>
          </NavBarActions>
        </div>
      </nav>
      <div>
        <div className="h-fit w-full bg-bgbase pb-6 flex flex-col">
          <div className='h-fit flex items-center justify-between px-52 w-full'>
            <div className='h-48 flex items-center justify-center'>
              <Image src={'/icons/svg1.svg'} alt="logo" height="100" width="300" />
            </div>
            <p className='text-9xl font-bold'>build</p>
            <div className='h-48 flex items-center justify-center'>
              <Image src={'/icons/svg2.svg'} className='scale-[1.3]' alt="logo" height="100" width="300" />
            </div>
          </div>
          <div className='h-fit flex items-center justify-evenly px-52 w-full'>
            <p className='text-9xl font-bold'>beautiful</p>
            <div className='h-48 flex items-center justify-center'>
              <Image src={'/icons/svg3.svg'} className='scale-[1.3]' alt="logo" height="100" width="300" />
            </div>
          </div>
          <div className='h-fit flex items-center justify-between px-52 -mt-1 w-full'>
            <div className='h-48 w-96 p-4 text-2xl font-bold'>
              <p className=''>A great resume does not just tell the story of what you have done but what you are capable of achieving
              </p>
              <Link href="/builder">
                <p className='px-4 py-2 bg-color1 rounded-full mt-4 flex justify-center'>Get started</p>
              </Link>
            </div>
            <div className='-mt-2'>
              <p className='text-9xl font-bold'>resumes</p>
              <p className='text-9xl font-bold underline'>faster</p>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default HomeLayout;
