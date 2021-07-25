import React from "react";
import { Link } from "react-router-dom";
import kshitij from "../Images/kshitij.png";
import Amish from "../Images/Amish.jpg";
import au3 from "../Images/au_3.png";
import motiv1 from "../Images/motiv1.jpg";
import "./style.css";
import "./bootstrap.css";

function Index() {
  return (
    <div>
      <section class="header">
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
        <div className="text-box">
          <h1>School of Engineering and Applied Sciences Alumni Platform</h1>
          <h6>Because experience makes you a good learner.</h6>
        </div>
      </section>

      <section className="Alumni">
        <h1>Our Bright Alumni</h1>
        <p>They are inspiration.</p>
        <p>
          Alumni have the most recent and best experience of the university as
          well as the particular field. Because they have gone through the same
          situation. They are aware of what you are going to face difficulties
          as a fresher. University does provide orientation. However, many still
          stuggle in the first semester. Thus, Alumni can guide you not only in
          your throughout the university life but also with your future career.
        </p>

        <div className="row">
          <div className="Alumni-col">
            <h3>Kshitij Kumbar</h3>
            <img src={kshitij} width="50%" alt="" />
            <p>
              Motion Prediction / Behavior Planning Engineer, Lucid Motors, CA,
              USA
              <br />
              MS in Mechanical Engineering, Stanford University
              <br />
              BTech in Mechanical Engineering, Class of 2018
            </p>
          </div>
          <div className="Alumni-col">
            <h3>Amish Chovatiya</h3>
            <img src={Amish} width="66%" alt="" />
            <p>
              Simulations Intern at Intermolecular, California, USA
              <br />
              MS in Chemical Science from the
              Carnegie Mellon University
              <br />
              Pursuing PhD at University of Notre Dame
              <br />
              BTech in Chemical Engineering, Class of 2018
            </p>
          </div>
        </div>
      </section>

      <section className="motivation">
        <div className="row">
          <div className="motiv-col">
            <h1>Motivation behind making the platform</h1>
            <p>
              Alumni are the brand-ambassadors of the institution they graduated
              from. There are many institutions declaring the list of their
              notable alumni as a way of connecting their successes with what
              the college has provided them. However, in this era of social
              networking, the connect with their past students doesn't stop with
              this. Institutions have realised how a strong and a positive
              relationship with their alumni can benefit them socially,
              academically and professionally. Likewise even the alumni
              community have realised that it's not just a mere nostalgia that
              they associate their alma-mater with, but it's much beyond that.
            </p>
          </div>
          <div className="motiv-col">
            <img src={motiv1} alt="" />
          </div>
        </div>
      </section>

      <section className="contact">
        <h1>We are here to help you to connect with the Alumni.</h1>
        <Link to="/contact" className="dh-btn">
          CONTACT US
        </Link>
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

export default Index;
