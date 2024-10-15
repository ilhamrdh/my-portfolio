'use client';
import { skills } from '@/constants/data/skills';
import { images } from '@/constants/static';
import Image from 'next/image';

const About = () => {
  return (
    <section className="container md:max-w-screen lg:max-w-screen-xl mx-auto min-h-screen pt-16">
      <div className="container md:max-w-screen lg:max-w-screen-xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-center mb-10">About Me.</h1>
        <div className="mx-auto mb-12 mt-8 flex flex-col items-center justify-center md:gap-10 lg:flex-row">
          <div className="relative aspect-auto h-60 w-60 items-baseline justify-center rounded-3xl border-4 border-black-primary bg-yellow-primary object-cover shadow-image-card shadow-black-primary md:h-96 md:w-1/2 xl:w-96">
            <Image
              src={images.profile}
              alt="Picture of the author"
              width={1000}
              height={1000}
              className="aspect-auto h-full w-full rounded-lg object-cover px-8"
            />
          </div>
          <p className="mt-5 text-justify text-base text-secondary-text md:mt-0 lg:w-1/2 xl:text-lg">
            I am an undergraduate student majoring in <b>Informatics Engineering</b> at STMIK Widya Cipta Dharma. I possess a strong understanding of
            programming languages and web development, along with hands-on experience in <b>software development</b> projects. My current focus is on
            deepening my knowledge in the field of <b>web & android development</b>.
            <br />
            <br />I have hands-on experience with <b>ReactJS</b> and <b>NextJS</b> for the frontend. and using <b>ExpressJS</b>, <b>AdonisJS</b> for
            backend development. im also currently learning about <b>Kotlin</b> for android development
          </p>
        </div>
      </div>
      <div className="container md:max-w-screen lg:max-w-screen-xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-center mb-5">My Experience.</h1>
        <div className="prose">
          <p>Comming soon</p>
        </div>
      </div>
      <div className="container md:max-w-screen lg:max-w-screen-xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-center mb-5">Tech Stack.</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 p-4">
          {skills.map((skill, index: number) => (
            <div key={index} className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg`}>
              <span className="w-20 h-20 text-[5rem]">{skill.icon}</span>
              <p className="font-semibold text-slate-600 text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
