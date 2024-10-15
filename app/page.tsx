'use client';
import Button from '@/components/Button';
import { images } from '@/constants/static';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section>
      <div className="min-h-screen flex md:flex-row items-center space-y-0 md:space-x-10 container max-w-screen-lg mx-auto flex-col-reverse">
        <div className="w-full flex flex-col space-y-2 gap-5">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h1 className="text-3xl font-extrabold">Hi, Ilham Ramadhan</h1>
            <h2 className="text-xl font-bold">
              I&apos;m{' '}
              <TypeAnimation
                sequence={['Junior Web Developer', 5000, 'Mobile Developer', 5000, 'Fullstack Developer', 5000]}
                wrapper="span"
                speed={40}
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', display: 'inline-block' }}
                className="text-orange-400"
              />
            </h2>
            <p className="text-base text-slate-800 text-center md:text-left dark:text-slate-50 dark:text-opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo praesentium quidem accusantium quis maiores possimus ipsa veritatis?
              Illo nihil dignissimos aut amet excepturi inventore odit repellendus voluptates sint beatae?
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button title="Resume 📑" onClick={() => window.open('/resume.pdf', '_blank')} />
          </div>
        </div>
        <div className="flex w-1/2 mb-10 md:w-1/3 md:h-full md:mb-0">
          <Image src={images.profile} className="rounded-full" alt={'hero'} />
        </div>
      </div>
    </section>
  );
};

export default Home;
