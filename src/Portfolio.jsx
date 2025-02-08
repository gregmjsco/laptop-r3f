import React from "react";
// import "./styles/modern-normalize.css";
import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/featured.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

const Portfolio = () => {
  return (
    <div>
      {/* Header */}
      <header className="header container">
        <nav>
          <ul className="header__menu">
            <li>
              <a className="header__link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header__link" href="#featured">
                Work
              </a>
            </li>
            <li>
              <a className="header__link" href="#contact">
                Contact
              </a>
            </li>
            <li className="header__line"></li>
            <li>
              <button id="theme-toggle" className="header__sun">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li>
              <a
                className="header__resume btn"
                href="mailto:gregmj.sco@gmail.com"
                target="_blank"
              >
                Email me
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <nav>
          <ul className="mobile-nav__menu">
            <li>
              <a href="#about" className="mobile-nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#featured" className="mobile-nav__link">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="mobile-nav__link">
                Contact
              </a>
            </li>
            <li id="theme-toggle" className="mobile-nav__link-line"></li>
            <li>
              <button id="theme-toggle" className="mobile-nav__sun">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li>
              <a className="mobile-nav__btn btn" href="#">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero container">
          <img className="hero__img" src="/hero.jpg" alt="" />
          <h2 className="hero__subtitle">Hello, I'm Greg</h2>
          <h1 className="hero__title">WEB DEVELOPER</h1>
          <p className="hero__description">
            A passionate <strong>Web Developer</strong> based out of{" "}
            <strong>Tokyo</strong> specializing in <strong>React</strong> and{" "}
            <strong>Laravel</strong>
          </p>
          <a
            className="hero__btn btn"
            href="mailto:gregmj.sco@gmail.com"
            target="_blank"
          >
            Reach out
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="about container section">
          <div className="about__content">
            <h2 className="about__title">About</h2>
            <p className="about__description">
              I'm <strong>Greg</strong>, a <strong>web developer</strong> living
              in <strong>Tokyo, Japan</strong>.
            </p>
            <p className="about__description">
              I'm interested in all things related to{" "}
              <strong>web development</strong>. From the <strong>design</strong>{" "}
              to the <strong>front-end</strong> and into the{" "}
              <strong>back-end</strong>.
            </p>
            <p className="about__description">
              私は<strong>グレッグ</strong>
              、東京に住んでいるウェブ開発者です。ウェブ開発に関するすべてに興味があります。
              <strong>デザイン</strong>から<strong>フロントエンド</strong>
              、そして<strong>バックエンド</strong>
              まで。新しいことを学んだり、何かを作り出すことが大好きです。
            </p>
            <hr className="about__hr" />
            <h3 className="about__subtitle">Technologies</h3>
            <div className="about__ul-container">
              <ul className="about__ul">
                <li className="about__list">JavaScript</li>
                <li className="about__list">HTML</li>
                <li className="about__list">CSS</li>
              </ul>
              <ul className="about__ul">
                <li className="about__list">ReactJS</li>
                <li className="about__list">Styled Components</li>
                <li className="about__list">Tailwind CSS</li>
              </ul>
              <ul className="about__ul">
                <li className="about__list">PHP</li>
                <li className="about__list">Laravel</li>
                <li className="about__list">GIT</li>
              </ul>
            </div>
          </div>
          <div className="about__img-wrapper">
            <img className="about__img" src="/public/hero.jpg" alt="" />
          </div>
        </section>

        {/* Featured Projects */}

        <section class="featured container section">
          <div class="featured__wrapper">
            <a
              href="https://gregmjsco.github.io/ball-plain/"
              target="_blank"
              class="featured__title ballagain_link"
            >
              Mockup Apparel Page - <strong>Ball Again React Project</strong>
            </a>
            <a
              href="https://github.com/gregmjsco/ball-plain"
              class="featured__link"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          </div>
          <p>
            First mockup of a sports brand website using React ande Styled
            Components
          </p>
          <div id="featured" class="featured__info-container">
            <div>
              <h3 class="featured__label">Tools used</h3>
              <ul class="featured__teck-stack">
                <li class="featured__info">React</li>
                <li class="featured__info">Styled Components</li>
                <li class="featured__info">Motion library</li>
              </ul>
            </div>
            <div>
              <h3 class="featured__label">Project type</h3>
              <p class="featured__info">Front-end project</p>
            </div>
            <div>
              <h3 class="featured__label">Functionality</h3>
              <p class="featured__info">
                Responsive design styled with Styled Components using React
                components and the motion library for animations
              </p>
            </div>
          </div>
          <div class="featured__img-container">
            <div class="featured__img-wrapper">
              <img
                loading="lazy"
                src="public/ballagain-desktop-fullpage.png"
                alt=""
              />
            </div>
            <div class="featured__img-wrapper">
              <img
                loading="lazy"
                src="public/ballagain-mobile-fullpage.png"
                alt=""
              />
            </div>
            <div class="featured__img-wrapper">
              <img
                loading="lazy"
                src="public/ballagain-mobile-menu.png"
                alt=""
              />
            </div>
            <div class="featured__img-wrapper">
              <img
                loading="lazy"
                src="public/ballagain-mobile-cart.png"
                alt=""
              />
            </div>
          </div>
        </section>

        <section class="featured container section">
          <h3 class="featured__subtitle">Recent Projects</h3>
          <div class="featured__wrapper">
            <h2 class="featured__title">Jobs in Japan - Laravel Project</h2>
            <a
              href="https://github.com/gregmjsco/laravel-job"
              class="featured__link"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          </div>
          <p>
            First project as part of study using many technologies for the first
            time. Learned a lot about Laravel, Tailwind and PHP.
          </p>
          <div id="featured" class="featured__info-container">
            <div>
              <h3 class="featured__label">Tools used</h3>
              <ul class="featured__teck-stack">
                <li class="featured__info">Laravel</li>
                <li class="featured__info">Tailwind CSS</li>
                <li class="featured__info">PHP with Blade Templates</li>
              </ul>
            </div>
            <div>
              <h3 class="featured__label">Project type</h3>
              <p class="featured__info">Back-end project</p>
            </div>
            <div>
              <h3 class="featured__label">Functionality</h3>
              <p class="featured__info">
                Responsive design styled with Tailwind using Blade template
                components
              </p>
            </div>
          </div>
          <div class="featured__img-container">
            <div class="featured__img-wrapper">
              <img loading="lazy" src="public/homepage.png" alt="" />
            </div>
            <div class="featured__img-wrapper">
              <img loading="lazy" src="public/profilepage.png" alt="" />
            </div>
            <div class="featured__img-wrapper">
              <img loading="lazy" src="public/alljobs.png" alt="" />
            </div>
            <div class="featured__img-wrapper">
              <img loading="lazy" src="public/applyform.png" alt="" />
            </div>
            <div class="featured__img-wrapper">
              <img loading="lazy" src="public/jobpage.png" alt="" />
            </div>
            <div class="featured__img-wrapper">
              <img loading="lazy" src="public/searchfunctionality.png" alt="" />
            </div>
            <div class="featured__img-wrapper">
              <img loading="lazy" src="public/bookmarkedjobs.png" alt="" />
            </div>
            <div class="featured__img-wrapper">
              <img
                loading="lazy"
                src="public/logincredentialcheck.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer container section">
        <h3 className="footer__title">~ Greg Johnston ~</h3>
      </footer>
    </div>
  );
};

export default Portfolio;
