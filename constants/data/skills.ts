import { BiLogoGoLang, BiLogoJavascript, BiLogoPostgresql, BiLogoSpringBoot, BiLogoTypescript } from 'react-icons/bi';
import React from 'react';
import { FaJava, FaReact } from 'react-icons/fa';
import { TbBrandReactNative, TbBrandRedux } from 'react-icons/tb';
import { SiApachekafka, SiExpress, SiMongodb, SiMysql, SiNestjs, SiRabbitmq, SiReactquery, SiTailwindcss } from 'react-icons/si';

export const skills = [
  {
    name: 'Golang',
    icon: React.createElement(BiLogoGoLang),
  },
  {
    name: 'JavaScript',
    icon: React.createElement(BiLogoJavascript),
  },
  {
    name: 'Express.js',
    icon: React.createElement(SiExpress),
  },
  {
    name: 'TypeScript',
    icon: React.createElement(BiLogoTypescript),
  },
  {
    name: 'NestJS',
    icon: React.createElement(SiNestjs),
  },
  {
    name: 'React.js',
    icon: React.createElement(FaReact),
  },
  {
    name: 'React Native',
    icon: React.createElement(TbBrandReactNative),
  },
  {
    name: 'Java',
    icon: React.createElement(FaJava),
  },
  {
    name: 'Spring Boot',
    icon: React.createElement(BiLogoSpringBoot),
  },
  {
    name: 'PostgreSQL',
    icon: React.createElement(BiLogoPostgresql),
  },
  {
    name: 'MySQL',
    icon: React.createElement(SiMysql),
  },
  {
    name: 'MongoDB',
    icon: React.createElement(SiMongodb),
  },
  {
    name: 'Redux',
    icon: React.createElement(TbBrandRedux),
  },
  {
    name: 'RabbitMQ',
    icon: React.createElement(SiRabbitmq),
  },
  {
    name: 'Kafka',
    icon: React.createElement(SiApachekafka),
  },
  {
    name: 'Tailwind',
    icon: React.createElement(SiTailwindcss),
  },
  {
    name: 'React Query',
    icon: React.createElement(SiReactquery),
  },
] as const;
