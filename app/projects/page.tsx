'use client';

import Badge from '@/components/Badge';
import { projects } from '@/constants/data/project';
import Image from 'next/image';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section>
      <div className="container md:max-w-screen lg:max-w-screen-xl mx-auto h-screen pt-16">
        <h1 className="text-3xl font-bold text-center mb-10">My Projects.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
          {projects.map((project, index: number) => (
            <div
              key={index}
              className="relative min-w-full mx-auto bg-white border border-gray-200 rounded-lg shadow lg:overflow-hidden group hover:bg-gray-100"
            >
              <Image className="rounded-t-lg object-cover object-center lg:w-full lg:h-full" src={project.image} alt={project.title} />
              <div className="p-3 lg:absolute lg:backdrop-blur-3xl lg:bottom-0 lg:left-0 lg:right-0  lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 ease-in-out">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">{project.title}</h5>
                <p className="mb-3 font-normal text-sm text-gray-700">{project.description}</p>
                <div className="flex justify-between">
                  <Badge name={project.label} />
                  <FaGithub
                    className="text-2xl cursor-pointer hover:text-slate-600 transition-colors duration-300 ease-in-out dark:hover:text-slate-300 dark:text-slate-500"
                    onClick={() => window.open(project.link, '_blank')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
