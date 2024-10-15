'use client';
import TextInput from '@/components/TextInput';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState<{ email: string; message: string }>({
    email: '',
    message: '',
  });

  const handleSubmit = () => {
    console.log('handle submit');

    console.log(form);
  };
  return (
    <section>
      <div className="container max-w-screen-xl mx-auto h-screen pt-16 px-8">
        <h1 className="text-3xl font-bold text-center mb-10">Contact</h1>
        <p className="text-center">
          Please contact me directly at{' '}
          <a href="mailto:ilhamrdh.ir@gmail.com" className="text-blue-500 dark:text-blue-400 underline">
            ilhamrdh.ir@gmail.com
          </a>{' '}
          or through this form.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="max-w-md mx-auto space-y-5 mt-10">
            <TextInput
              name="email"
              type="email"
              label="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
            />
            <TextInput
              name="message"
              label="Messange"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your Messange"
              isTextArea
            />
            <button
              type="submit"
              className={
                'group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 '
              }
            >
              Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
