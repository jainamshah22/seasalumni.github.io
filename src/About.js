import React from "react";
import "./style.css";
import "./bootstrap.css";
import { Link } from "react-router-dom";
import au3 from "../Images/au_3.png";
import au5 from "../Images/au_5.jpg";
import conference from "../Images/conference.jpg";
import students from "../Images/students.png";

function About() {
  return (
    <div>
      <section className="header3">
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
        <h1>About Us</h1>
      </section>
      <section className="info">
        <div className="row">
          <div className="info-col">
            <h2>What is the purpose behind making this platform</h2>
            <p>
              SEAS Alumni Platform will be a self-governed and interactive
              organization that serves School of Engineering and Applied
              Sciences, Ahmedabad University and its many alumni, students, and
              friends. Through programs and the proposed platform, the Alumni
              body will promote a spirit of fellowship among the alumni,
              provides a continuous flow of information on the progress and
              needs of the Engineering school, and encourages united alumni
              support for its advancement. And this association’s platform will
              be the connection to SEAS, fellow alumni, and current students.
              Platform will explore all the activities, events, and resources
              available for to deepen the experience for an alum in future.
            </p>
          </div>
          <div className="info-col">
            <img src={au5} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="info-col">
            <h2>What students/freshers can expect from the platform</h2>
            <p>
            The Association of Alumnae, established in 2021, is one of the
            constituent organizations of School of Engineering, Ahmedabad
            University Alumni. Every student becomes a member of the Association
            upon receiving a degree from the University.
            The purpose of the Association of Alumnae is to strengthen the
            relationship between the Ahmedabad University and its alumnae
            and to promote the interests and welfare of the University in areas
            of concern to Engeineering sphere. The Association welcomes all SEAS alumnae to
            become involved in its many endeavors on behalf of the University.
            An active and diverse group of faculty, an alumna-Board of Directors,
            and various school and club representatives
            meet regularly to plan special events, to serve as a forum for the
            discussion of alumni policies and activities, and to support the School &
            University in many different areas.
            </p>
          </div>
          <div className="info-col">
            <img src={students} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="info-col">
            <h2>News, Events, Fellowships</h2>
            <p>
            <span className="text-bold"> October 1-3, 2021 </span> <br/>
            SEAS-Momentum 2021: It is a virtual conference
            celebrating the success of Alumni in the diverse regions they are working in.
            Join us online as alumni and Ahmedabad community members of all backgrounds and generations come
            together to learn, connect, and share how we are making an impact
            locally and globally. <br/>
            <span className="text-bold">Learn: </span> Provide participants with inspiring content to advance their personal and professional goals <br/>
            <span className="text-bold">Connect:</span> Create meaningful opportunities to engage with and
            learn from each other and form relationships that will persist. <br/>
            <span className="text-bold">Impact: </span> Prepare participants with tools and resources to make a difference in the world. <br/>
            <p>
            SEAS Momentum 2021 is an inclusive and trans-affirming conference.
            We embrace the identities and inspiration of all who attend. <br/>
            </p>
            <p>
            Conference fee: INR-1000 <br/>
            </p>
            Register or Questions? Email us at seasseniors@ahduni.edu.in <br/>

          </p>
          </div>
          <div className="info-col">
            <img src={conference} alt="" />
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

export default About;
