import React from "react";
import au3 from "../Images/au_3.png";
import "./bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section class="header2">
        <nav>
          <Link to="/">
            <img src={au3} width="30%" alt="" />
          </Link>

          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/alumini">Alumni</Link>
              </li>
              <li>
                <Link to="/register">Join Community</Link>
              </li>
              <li>
                <Link to="/members">Members</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <h1>Contact us</h1>
      </section>

      <section className="location">
        <iframe //eslint-disable-line
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7071758406!2d72.43965454509865!3d23.02049777180659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1625587133703!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
      <section className="Cont">
        <div className="row">
          <div className="cont-col">
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>
                  Dhruvil Patel: +91 9978245218
                  <br />
                  Jainam Shah: +91 8469975929
                </h5>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h5>
                  dhruvil.p@ahduni.edu.in
                  <br />
                  jainam.s@ahduni.edu.in
                </h5>
              </span>
            </div>
          </div>
          <div className="cont-col">
            <div className="comment">
              <form className="comment-form" action="form.php" method="post">
                <input name="name" type="text" placeholder="Name" />
                <input name="email" type="text" placeholder="Email" />
                <textarea
                  rows="5"
                  name="comment"
                  placeholder="Comment"
                ></textarea>
                <button type="submit" className="dh-btn d-btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
  );
}

export default Contact;
