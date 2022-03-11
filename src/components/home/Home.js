import './Home.css'
import {Link} from 'react-router-dom'
import profile from './profile.jpg'
import pf from './pfl.jpg'

function Home() {
    
    return(
        <div className='bodyHome'>
            <div className='NavHome'>
                <img src={pf} alt='' />
                <ul className='ulhome'>
                    <li><Link to="/allwork"><p>click Mywork</p></Link></li>
                   
                </ul>
            </div>
            <div className='headHome'>
                <div className='conheadHome'>
                    <img src={profile}  alt=''/>
                    <span></span>
                    <div className='conHeadText'>
                        <p>Front End Developer</p>
                        <h1>Phasskorn Suwannato</h1>
                    </div>
                </div>

            </div>
            <div className='contenBodytHome'>
                <div className='contentHome'>
                    <div className='contentHome-a'>
                        <div className='boxconten'></div>
                        <div className='boxconten forEDUCATION'>
                            <h2>EDUCATION</h2>
                            <h3>2010-2016</h3>
                            <p>Suwannaphumpittayapaisarn​ School</p>
                            <ul>
                                <li>Science-Mathematics Line</li>
                            </ul>
                            <br/>
                            <h3>2016-2020</h3>
                            <p>Bangkok University,Rangsit</p>
                            <ul>
                                <li>Computer Engineering  GPA: 3.21</li>
                            </ul>
                        </div>
                        <div className='boxconten forSkill'>
                            <h2>SUMMARY OF SKILL</h2>
                            <ul>
                                <li>React JS</li>
                                <li>HTML,CSS,JAVASCRIPT</li>
                            </ul>
                        </div>
                        <div className='boxconten'>
                            <h2>OTHER SKILLS</h2>
                            <ul>
                                <li>Node js express</li>
                                <li>Rest API</li>
                                <li>MySQL</li>
                                <li>Make a bot (discord,twitter)</li>
                            </ul>
                          </div>
                    </div>
                    <div className='contentHome-b'>
                        <span></span>
                        <div className='boxconten'>
                            <h2>Get in Contact</h2>
                            <div className='forconttact'>
                                <div className='boxinbox'>
                                    <p> Gmail: best20865@gmail.com<br/>Mobile: 0961479734</p>
                                </div>
                                <div className='boxinbox'>
                                    <p>Facebook: Phassakorn Suwannato<br/>Line ID: best20999</p>
                                </div>
                            </div>
                           <p>21/33 Vibhavadi Road, Soi 60, Talat Bang Khen SubdistrictLaksi District Bangkok  10210</p>
                        </div>
                        <div className='boxconten forPersonal'>
                            <h2>PERSONAL PROFILE</h2>
                            <p>
                                I had an internship at a company for 2 months of training that made me love to make websites. 
                                Addition  I have a responsibility to work well and work with others.  
                                Moreover I have performance for my work. 
                                Finally I hope my preferences will benefit your company.
                            </p>
                        </div>
                        <div className='boxconten forlang'>
                            <h2>LANGUAGES</h2>
                            <h3>THAI</h3>
                            <div className='bar'><p>90%</p></div>
                            <h3>ENGLISH</h3>
                            <div className='bar2'><p>60%</p></div>
                        </div>
                        <div className='boxconten foractivity'>
                            <h2>ACTIVITIES</h2>
                            <p>
                                Become a staff assistant teaching AI education for students to teachers. 
                                Nationwide at Bangkok University in 2019
                            </p>
                        </div>
                        <div className='boxconten'>
                            <h2>MY HOBBY</h2>
                            <ul>
                                <li>Watch youtube</li>
                                <li>Watch programming</li>
                                <li>Play games</li>
                            </ul>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;