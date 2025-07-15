
import { useState } from 'react';
import { motion } from 'framer-motion';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';

import { db } from '@/app/lib/Firebase';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleSubmit = async () => {
  const valid = validateEmail(email);
  setIsValid(valid);

  if (!valid) return;

  const emailKey = email.trim().toLowerCase();
  const docRef = doc(db, 'earlyAccessEmails', emailKey);

  try {
    const existing = await getDoc(docRef);
    if (existing.exists()) {
      setIsSubmitted(true);
      console.log('Already signed up');
      return;
    }

    await setDoc(docRef, {
      email: emailKey,
      createdAt: serverTimestamp()
    });

    setIsSubmitted(true);
    console.log('Email submitted:', email);
  } catch (error) {
    console.error('Error submitting email:', error);
  }
};
  if (isSubmitted) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center text-green-400 pt-2 space-y-4"
    >
      <div className="flex items-center space-x-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium">Thanks! We'll be in touch.</span>
      </div>

      <a
        href="https://testflight.apple.com/join/51RX2Nj9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
      >
        Join the Public Beta on TestFlight
      </a>
    </motion.div>
  );
}


  return (
    <div className="w-full max-w-md ">
      <label htmlFor="email" className="sr-only">Email address</label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValid(true);
          }}
          placeholder="Enter your email"
          className={`flex-1 px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-200 ${
            isValid
              ? 'border-slate-600 focus:border-blue-400 focus:ring-blue-400/20'
              : 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
          }`}
        />
        <motion.button
          onClick={handleSubmit}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200 whitespace-nowrap"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Join Waitlist
        </motion.button>
      </div>
      {!isValid && <p className="mt-1 text-sm text-red-400">Please enter a valid email address</p>}
    </div>
  );
};

export default EmailCapture;