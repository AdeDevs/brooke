import { NavLink } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="home-page">
            <header className="hero">
                <div className="intro">
                    <div className="brooke">
                        <h2>Brooke Eagleeye <br /> <span>WGC Champoins 2025</span></h2>
                    </div>
                    <div className="brooke golf">
                        <h2>Brooke Eagleeye <br /> <span>WGC Champoins 2025</span></h2>
                    </div>
                    <h1>golf <br /> journey</h1>
                </div>
                <div className="hero-extra">
                    <p>
                        Embark on a journey through the fairways <br /> and the greens with Brooke Eagleeye, a <br /> dedicated and accomplished <br /> professional golfer
                    </p>
                    <ul className="hero-socials">
                        <li><ion-icon name="logo-instagram"></ion-icon></li>
                        <li><ion-icon name="logo-youtube"></ion-icon></li>
                        <li><ion-icon name="logo-twitter"></ion-icon></li>
                        <li><ion-icon name="logo-tiktok"></ion-icon></li>
                    </ul>
                </div>
                <div className="sign"></div>
            </header>
            <main className="home-main">
                <section className="about">
                    <div className="about-txt">
                        <h1><span>About Me</span> Who is <br /> Brooke</h1>
                        <p>
                            Discover the story behind the swing. <br /> Brooke Eagleeye is more than just a golfer, <br /> they are a strategist, a competitor, and a <br /> relentless pursuer of perfection.
                        </p>
                        <button>learn more <span><ion-icon name="arrow-forward"></ion-icon></span></button>
                    </div>
                    <div className="about-img">
                        <div className="aboutbg bg1"></div>
                        <div className="aboutbg bg2"></div>
                    </div>
                </section>
                <section className="career">
                    <div className="career-head">
                        <h1><span>My Career</span> Career <br /> Highlights</h1>
                    </div>
                    <div className="career-intro">
                        <p>
                            Explore the trophy-laden journey of Brooke <br /> Eagleeye. From triumphant victories on <br /> prestigious courses to the resilience shown in <br /> the face of challenges, delve into a career <br /> adorned with achievements, accolades and <br /> moments that have been etched in history
                        </p>
                        <button>Discover More <span><ion-icon name="arrow-forward"></ion-icon></span></button>
                    </div>
                    <div className="moments">
                        <div className="moment mbox1"></div>
                        <div className="moment mbox2"></div>
                        <div className="moment mbox3"></div>
                        <div className="moment mbox4"></div>
                        <div className="moment mbox5"></div>
                        <div className="moment mbox6"></div>
                        <div className="moment mbox7">
                            <p>2024 <span><ion-icon name="arrow-forward"></ion-icon></span></p>
                            <h2>WGC</h2>
                        </div>
                        <div className="moment mbox8"></div>
                    </div>
                </section>
                <section className="events">
                    <h1>Partnerships <br /> & Events <span>My Partnerships</span></h1>
                    <div className="event-txt">
                        <button>Contact Me <span><ion-icon name="arrow-forward"></ion-icon></span></button>
                        <p>
                            Explore opportunities for collaboration <br /> with Brooke Eagleeyes. From corporate <br /> partnerships to golf events, discover how <br /> you can align your brand with a symbol of <br /> excellence in the world of professional golf.
                        </p>
                    </div>
                    <div className="partners">
                        <div className="partner partner1">
                            <div className="partner-logo ping-logo"></div>
                        </div>
                        <div className="partner partner2">
                            <div className="partner-logo nike-logo"></div>
                        </div>
                        <div className="partner partner3">
                            <div className="partner-logo wilson-logo"></div>
                        </div>
                    </div>
                    <ul className="indicators">
                        <li className="white"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>
                <section className="trademark">
                    <div className="trademark-intro">
                        <h1>Trademark <br /> Technique <span>My Technique</span></h1>
                        <button>Learn More <span><ion-icon name="arrow-forward"></ion-icon></span></button>
                    </div>
                    <div className="trademark-content">
                        <div className="trademark-txt">
                            <p>
                                For aspiring golf enthusiasts, gain insights <br /> into Brooke Eagleeye's swing mechanics <br /> and training routines. Discover the artistry <br /> behind a powerful drive and the finesse <br /> required for a precison putt
                            </p>
                            <p>
                                Elevate your own game with tips <br /> and techniques shared by a true <br /> master of the sport
                            </p>
                        </div>
                        <div className="trademark-img">
                            <div className="trdmk-bg bg1"></div>
                            <div className="trdmk-bg bg2"></div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <section className="footer-main">
                    <h1>contact <br /> me</h1>
                    <div className="foot-nav">
                        <NavLink to="/"><h2 className="logo">be</h2></NavLink>
                        <ul className="desk-nav">
                            <li><NavLink to="/">about <br /> me</NavLink></li>
                            <li><a href="#about">highlight <br /> career</a></li>
                            <li><a href="#services">Partner & <br /> events</a></li>
                            <li><a href="#contact">contact <br /> me</a></li>
                        </ul>
                        <ul className="desk-nav extras">
                            <li className="nike"></li>
                        </ul>
                    </div>
                </section>
                <section className="last">
                    <h1>Brooke Eagleeye</h1>
                </section>
            </footer>
        </div>
    )
}