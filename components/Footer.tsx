import React from 'react';

const Footer = () => {
  return (
    <footer className={'mb-5 px-4 text-center text-gray-500'}>
      <small className={'mb-2 text-xs'}>&copy; 2023 Ilham. All rights reverved</small>
      <p className={'text-xs'}>
        <span className={'font-semibold'}>About this website:</span> built with React & Next.js (App Router & Server Action), Typescript, Tailwindcss,
        Framer mation, Nodemail, and hosting
      </p>
    </footer>
  );
};

export default Footer;
