import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <a className="close-btn" href="/">×</a>
        <div className="form-content-left">
          {/**/}<img className="" src="..\Images\au_1.jpg" alt="" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      <div>
      <section className="about">
        <h5>About us</h5>
        <p>
          We are recent graduates from class of 2021 at Ahmedabad University, majored in Mechanical Engineering.

        </p>
        <div className="icons">
        <a href='https://github.com/jainamshah22'>
              <img
                src='https://unpkg.com/simple-icons@latest/icons/github.svg'
                className='h-4 w-4 inline mx-3'
                width="16" height="16"
                alt='github'
              />
            </a>

            <a href='https://github.com/jainamshah22'>
                  <img
                    src='https://unpkg.com/simple-icons@latest/icons/twitter.svg'
                    className='h-4 w-4 inline mx-3'
                    width="16" height="16"
                    alt='twitter'
                  />
                </a>
              <a href='https://github.com/jainamshah22'>
                      <img
                        src='https://unpkg.com/simple-icons@latest/icons/instagram.svg'
                        className='h-4 w-4 inline mx-3'
                        width="16" height="16"
                        alt='instagram'
                      />
                    </a>
                <a href='https://github.com/jainamshah22'>
                            <img
                              src='https://unpkg.com/simple-icons@latest/icons/linkedin.svg'
                              className='h-4 w-4 inline mx-3'
                              width="16" height="16"
                              alt='linkedin'
                            />
                          </a>
        </div>
        <p>
          Made with <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg> by Dhruvil & Jainam
        </p>
      </section>
    </div>
    </>
  );
};



export default Register;
