import React from 'react';

const Badge = ({ name }: { name: string }) => {
  return (
    <div className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10">
      <p className="font-semibold text-slate-600 text-sm ">{name}</p>
    </div>
  );
};

export default Badge;
