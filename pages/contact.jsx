import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';
import Aos from 'aos';
import Script from 'next/script';
import { useEffect } from 'react';
import Image from 'next/image'

export default function contact() {
  const subjectOptions = ["Suggestion", "Feature Request", "Bug / Error", "Help", "FeedBack"]

  const [formData, setFormData] = useState({
    email: "",
    subject: subjectOptions[0],
    message: "",
  });

  const [error, seterror] = useState("")
  const [success, setsuccess] = useState("")


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    seterror("")
    setsuccess("")
    if (formData.email.trim() == "") return seterror("Email Address is required !")
    if (formData.message.trim().length <= 20) return seterror("Message needs 20+ chars!")

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: formData.email, subject: formData.subject, message: formData.message })
    }

    fetch("/api/sendmail", options).then(data => data.json()).then(data => {
      if (data.error) {
        seterror(data.error.message)
      }
      else {
        seterror("")
        setsuccess(data.success.message)
        setFormData({ ...formData, email: "", message: "" })
      }
    })

    // Add logic to send form data to server or external service
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 0,
      once: true
    })
  }, [])
    ;


  return (
    <>
      <Head>
        <title>Contact Us - NerdyQAi</title>
        <meta name="description" content="contact us to give us suggestion, report bug/error, Feedback" />

      </Head>
      <Navbar apiKey={"asd"} />
      <div className="container">
        <div style={{background:"white"}} className="about">
          <div className="content-box">
            <div className="content">
              <h1 data-aos="fade-up">Contact Us</h1>
              <form data-aos="fade-up" onSubmit={handleSubmit}>
                {error != "" &&
                  <h5 className='error'>{error}</h5>
                }
                {success != "" &&
                  <h5 className='success'>{success}</h5>
                }
                <div className="input-wrapper">
                  {/* Email */}
                  <input placeholder='Enter Your Email' className='input' type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="input-wrapper">
                  {/* Subject */}
                  <select defaultValue={subjectOptions[0]} selected hidden className='input' name="subject" id="" onChange={handleChange}>
                    {subjectOptions.map((option, i) => {
                      return (
                        <option key={i} value={`${option}`}>{option}</option>

                      )
                    })}
                  </select>
                  {/* <input className='input' type="text" name="name" value={formData.name} onChange={handleChange}/> */}
                </div>

                <div className="input-wrapper">
                  {/* Message */}
                  <textarea placeholder='Type your message here' className='input' name="message" value={formData.message} onChange={handleChange} />
                </div>

                <div className="input-wrapper">
                  <button className='input' type="submit">Send</button>
                </div>
              </form>
            </div>
            <div className="image"><Image src={"/writing-email.png"} width={500} height={500}  alt='picture is not available'></Image></div>
          </div>


        </div>





        <Footer />
      </div>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />

    </>

  );
}

