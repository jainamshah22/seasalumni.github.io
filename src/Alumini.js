import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./bootstrap.css";
import kshitij from "../Images/kshitij.png";
import saumya from "../Images/saumya.jpg";
import au3 from "../Images/au_3.png";
import jainam from "../Images/jainam.png";
import Nikki from "../Images/Nikki.jpg";
import Rushil from "../Images/Rushil.jpg";
import Nisarg from "../Images/Nisarg.jpg";

function Alumini() {
  return (
    <div>
      <section className="sub-header">
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
        <h1>Year-Book</h1>
      </section>

      <section className="Alumni">
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
            <h3>Saumya Maniar</h3>
            <img src={saumya} width="66%" alt="" />
            <p>
              Data Analytics Engineer at Penske Truck Leasing
              <br />
              MS in Mathematics (Concentration in Applied Mathematics) from the
              University of North Carolina
              <br />
              Founder, Joint Secretary of Ahmedabad University Dance Club
            </p>
          </div>
          <div className="Alumni-col">
            <h3>Jainam Shah</h3>
            <img src={jainam} width="76%" height="50%" alt="" />
            <p>
              Data Analytics Engineer at Blue Origin
              <br />
              Meng in Industrial Engineering (Concentration in Supply Chain) from the
              University of Windsor
              <br />
              Co-founder & Chair, ASME Student Section of Ahmedabad University
            </p>
          </div>
        </div>
        <div className="row">
          <div className="Alumni-col">
            <h3>Nikki Thakrar</h3>
            <img src={Nikki} width="65%" height="50%" alt="" />
            <p>
              Startup founder: Shine Up, India
              <br />

              <br />
              BTech in Mechanical Engineering, Class of 2018
            </p>
          </div>
          <div className="Alumni-col">
            <h3>Nisarg Patel</h3>
            <img src={Nisarg} width="66%" alt="" />
            <p>
              Operations Manager at Apple Inc
              <br />
              MS in Industrial (Concentration in Operations) from the
              NCSU, USA
              <br />
            </p>
          </div>
          <div className="Alumni-col">
            <h3>Rushil Patel</h3>
            <img src={Rushil} width="66%" alt="" />
            <p>
              Data Analytics Engineer at Wall Street
              <br />
              MS in Industrialfrom the Rutgers University, USA
              <br />

            </p>
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

export default Alumini;
