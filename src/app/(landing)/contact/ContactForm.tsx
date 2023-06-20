'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const hanldeSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <form>
      <fieldset>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea value={message}></textarea>
      </fieldset>

      <input type='submit' className='hidden' />

      <button onClick={hanldeSubmit} type='submit'>
        send message
      </button>
    </form>
  );
}
