import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessForm from './SuccessForm';
import ErrorForm from './ErrorForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"
const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ status: false, message: '' });
  const [formData, setFormData] = useState({
    name: '',
    phone : '',
    email: '',
    message: '',
  });

  const clearForm = () => {
    setFormData({
      name: '',
      phone : '',
      email: '',
      message: '',
    });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z][A-Za-z\s]{0,38}[A-Za-z]$/;
    const messageRegex = /^[A-Za-z]{0,398}$/;
    const phoneRegex=    /^[1-100][A-Za-z\s]{0,398}[A-Za-z]$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name === '' || formData.email === ''|| formData.phone === '' || formData.message === '') {
      setError({ status: true, message: 'Please fill in all the required fields.' });
      return false;
    }

    if (!nameRegex.test(formData.name)) {
      setError({
        status: true,
        message: 'Name must be between 1 and 40 letters and contain only letters (A-Z, a-z).',
      });
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setError({ status: true, message: 'Please enter a valid email address.' });
      return false;
    }

    if (!messageRegex.test(formData.message)) {
      setError({
        status: true,
        message: 'Message must be between 1 and 400 letters and contain only letters (A-Z, a-z).',
      });
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    setLoading(true);

    if (validateForm()) {
      const data = new FormData(form.current);
for (let pair of data.entries()) {
  console.log(pair[0], pair[1]);
}
      emailjs
        .sendForm('service_of5m7vd', 'template_d0cmuns', form.current, 'SPBB_Io8cebfk11Ab')
        .then(
          (result) => {
            if (result.text === 'OK') {
                // ✅ حفظ الرسالة في Firebase
    addDoc(collection(db, "messages"), {
      user_name: data.get("user_name") || "",
      user_email: data.get("user_email") || "",
      user_phone: data.get("user_phone") || "",
      message: data.get("message") || "",
      status: "new",
      createdAt: serverTimestamp(),
    });
              clearForm();
              setSuccess(true);
              setError({ status: false, message: '' });
            }
            
          },
          (error) => {
            setError({ status: true, message: error.text });
          }
        )
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className='contact-form lg:pb-0 pb-4 lg:w-[40%]'>
      {success ? <SuccessForm setSuccess={setSuccess} /> : null}
      {error.status ? <ErrorForm message={error.message} /> : null}

      <div
        className={` ${success ? 'hidden' : null} block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-1`}
        style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}
      >
        <h2 className='text-3xl font-bold mb-12'>Contact us</h2>
        <form ref={form} onSubmit={(e) => sendEmail(e)}>
          <div className='form-group mb-6'>
            <input
              required
              type='text'
              name='user_name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none'
              id='exampleInput7'
              placeholder='Name'
            />
          </div>
              <div className='form-group mb-6'>
             <input
             required
             type='tel'
              name='user_phone'
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border'
              id='exampleInputPhone'
              placeholder='Phone'
            />
        </div>
          <div className='form-group mb-6'>
            <input
              required
              type='email'
              name='user_email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none'
              id='exampleInput8'
              placeholder='Email address'
            />
          </div>
          <div className='form-group mb-6'>
            <textarea
              required
              name='message'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none'
              id='exampleFormControlTextarea13'
              rows={3}
              placeholder='Message'
            />
          </div>
         
            
        
            <button
              type='submit'
              value='Send'
              className='w-full px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
            >
               {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Send"}
            </button>
          
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
