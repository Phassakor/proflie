import './MainContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function MainContent() {
    const Icon_Sort= <FontAwesomeIcon icon={faSortDown} />
    const Icon_Share= <FontAwesomeIcon icon={faShare} />
    const Icon_EllipsisV= <FontAwesomeIcon icon={faEllipsisV} />
  return (
    <div className='mainContent'>
        <div className='story-gallery'>
            <div className='story story1'> 
                <img src='https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-No-Background.png' alt=''/>
                <p>Post Story</p>
            </div>   
            <div className='story story2'> 
                <img src='https://i.pinimg.com/736x/36/7d/ab/367daba5bf9b814f0d955bb1c95f4fe4.jpg' alt=''/>
                <p>Post Story</p>
            </div>   
            <div className='story story3'> 
                <img src='https://i.pinimg.com/474x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg' alt=''/>
                <p>Post Story</p>
            </div>    
            <div className='story story4'> 
                <img src='https://media.istockphoto.com/vectors/cute-cartoon-girl-with-balloon-vector-id1205961326?k=20&m=1205961326&s=612x612&w=0&h=mZQnx85RUje_jfSU_F2nxvBiYWv0hjOASFEgnKq1Awo=' alt=''/>
                <p>Post Story</p>
            </div> 
            <div className='story story5'> 
                <img src='https://i.pinimg.com/474x/f6/e4/df/f6e4dfc2834fafdc38caec39ed628748.jpg' alt=''/>
                <p>Post Story</p>
            </div> 
        </div>


        <div className='write-post-container'>
            <div className='user-profile'>
                <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>
                <div>
                    <p>John Wick</p>
                    <small>Public {Icon_Sort}</small>
                </div>
            </div>

            <div className='post-input-container'>
                <textarea rows='3' placeholder="What's on your mind, Jonh?"></textarea>
                <div className='add-post-links'>
                    <a href='#'> <VideocamIcon style={{color:"red"}}/><p> </p>Live Video</a>
                    <a href='#'><PhotoLibraryIcon style={{color:"green"}}/><p> </p> Photo/Video</a>
                    <a href='#'> <InsertEmoticonIcon style={{color:"orange"}}/> <p> </p>Feling/Activity</a>
            
                </div>
            </div>
           
        </div>

        <div className='post-container'>
            <div className='post-row-for'>
                <div className='user-profile'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>
                    <div>
                        <p>John Wick</p>
                        <span>Jan 9 2022, 08:40 am</span>
                    </div>
                </div>
                <a href='#'>{Icon_EllipsisV}</a>
            </div>
            
            <p className='post-text'> <span>Goto </span>
                Ko Proet    
            <a href='#'>#phassakorn</a> </p>
            <img src='https://www.chillpainai.com/src/wewakeup/scoop/images/7d14e60701567f42eb6109216beae69c4f45fa2e.jpg' className='post-img' alt=''/>

            <div className='post-row'>
                <div className='activity-icons'>
                    <div><ThumbUpAltIcon style={{color:"#1876f2"}}/> 120</div>
                    <div><ChatBubbleOutlineIcon/> 5</div>
                    <div>{Icon_Share} 20</div>
                </div>
                <div className='post-profile-icon'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>{Icon_Sort}
                </div>
            </div>
        </div>

        <div className='post-container'>
            <div className='post-row-for'>
                <div className='user-profile'>
                    <img src='https://i.pinimg.com/474x/f6/e4/df/f6e4dfc2834fafdc38caec39ed628748.jpg' alt=''/>
                    <div>
                        <p>Mykenzi Adams</p>
                        <span>Jan 9 2022, 09:29 am</span>
                    </div>
                </div>
                <a href='#'>{Icon_EllipsisV}</a>
            </div>
            
            <p className='post-text'> <span>Be the darkest of the night, deepest of the ocean, and the brightest of the stars. </span> </p>

            <div className='post-row'>
                <div className='activity-icons'>
                    <div><ThumbUpAltIcon style={{color:"#1876f2"}}/> 100</div>
                    <div><ChatBubbleOutlineIcon/> 2</div>
                    <div>{Icon_Share} 10</div>
                </div>
                <div className='post-profile-icon'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>{Icon_Sort}
                </div>
            </div>
        </div>

        <div className='post-container'>
            <div className='post-row-for'>
                <div className='user-profile'>
                    <img src='https://m.media-amazon.com/images/I/71hMEM1a9EL._SL1500_.jpg' alt=''/>
                    <div>
                        <p>Jacob Abraham</p>
                        <span>Jan 9 2022, 10:10 am</span>
                    </div>
                </div>
                <a href='#'>{Icon_EllipsisV}</a>
            </div>
            
            <p className='post-text'> <span>A little funny joke for you. </span></p>
            <img src='https://pbs.twimg.com/media/FNMAKIGWYAgfM48?format=jpg&name=small' className='post-img' alt=''/>

            <div className='post-row'>
                <div className='activity-icons'>
                    <div><ThumbUpAltIcon style={{color:"#1876f2"}}/> 150</div>
                    <div><ChatBubbleOutlineIcon/> 6</div>
                    <div>{Icon_Share} 10</div>
                </div>
                <div className='post-profile-icon'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>{Icon_Sort}
                </div>
            </div>
        </div>

        <div className='post-container'>
            <div className='post-row-for'>
                <div className='user-profile'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOzVPXXgWY5eB3426Tk1BqBgdBjD-NSf46A&usqp=CAU' alt=''/>
                    <div>
                        <p>Tristan Aldridge</p>
                        <span>Jan 9 2022, 13:00 pm</span>
                    </div>
                </div>
                <a href='#'>{Icon_EllipsisV}</a>
            </div>
            
            <p className='post-text'> <span>Don’t be afraid of your fears. They’re not there to scare you. They’re there to let you know that something is worth it.</span></p>
            

            <div className='post-row'>
                <div className='activity-icons'>
                    <div><ThumbUpAltIcon style={{color:"#1876f2"}}/> 200</div>
                    <div><ChatBubbleOutlineIcon/> 20</div>
                    <div>{Icon_Share} 20</div>
                </div>
                <div className='post-profile-icon'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>{Icon_Sort}
                </div>
            </div>
        </div>

        <div className='post-container'>
            <div className='post-row-for'>
                <div className='user-profile'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrTKKgYQPK5htt32RO_VLBFrw2kWBdV28vQ&usqp=CAU' alt=''/>
                    <div>
                        <p>Alexa Alcon</p>
                        <span>Jan 9 2022, 13:40 pm</span>
                    </div>
                </div>
                <a href='#'>{Icon_EllipsisV}</a>
            </div>
            
            <p className='post-text'> <span>Today’s moment to smile. </span> </p>
            <img src='https://pbs.twimg.com/media/FM_d5oTXsAYyKC5?format=jpg&name=medium' className='post-img' alt=''/>

            <div className='post-row'>
                <div className='activity-icons'>
                    <div><ThumbUpAltIcon style={{color:"#1876f2"}}/> 119</div>
                    <div><ChatBubbleOutlineIcon/> 1</div>
                    <div>{Icon_Share} 1</div>
                </div>
                <div className='post-profile-icon'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>{Icon_Sort}
                </div>
            </div>
        </div>


        <div className='post-container'>
            <div className='post-row-for'>
                <div className='user-profile'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnewbTm7DqD6u3SNYYZ_YNdg1SYCuiWdiFAQ&usqp=CAU' alt=''/>
                    <div>
                        <p>Julia Aitken</p>
                        <span>Jan 9 2022, 13:40 pm</span>
                    </div>
                </div>
                <a href='#'>{Icon_EllipsisV}</a>
            </div>
            
            <p className='post-text'> <span>Some days I eat salads and go to the gym. Some days I eat cupcakes and refuse to put on pants. It’s called balance.</span></p>

            <div className='post-row'>
                <div className='activity-icons'>
                    <div><ThumbUpAltIcon style={{color:"#1876f2"}}/> 150</div>
                    <div><ChatBubbleOutlineIcon/> 9</div>
                    <div>{Icon_Share} 13</div>
                </div>
                <div className='post-profile-icon'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>{Icon_Sort}
                </div>
            </div>
        </div>


        <div className='post-container'>
            <div className='post-row-for'>
                <div className='user-profile'>
                    <img src='https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png' alt=''/>
                    <div>
                        <p>Jessica Adcock</p>
                        <span>Jan 9 2022, 13:40 pm</span>
                    </div>
                </div>
                <a href='#'>{Icon_EllipsisV}</a>
            </div>
            
            <p className='post-text'> <span>The best part of life is the opportunity to learn something new every day. Just when you think you know it all, you realize you didn’t know a thing. </span> </p>

            <div className='post-row'>
                <div className='activity-icons'>
                    <div><ThumbUpAltIcon style={{color:"#1876f2"}}/> 140</div>
                    <div><ChatBubbleOutlineIcon/> 1</div>
                    <div>{Icon_Share} 10</div>
                </div>
                <div className='post-profile-icon'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>{Icon_Sort}
                </div>
            </div>
        </div>


        <div className='post-container'>
            <div className='post-row-for'>
                <div className='user-profile'>
                    <img src='https://img.freepik.com/free-vector/astronaut-listening-music-with-headphone-peace-hand-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3375.jpg?size=338&ext=jpg' alt=''/>
                    <div>
                        <p>Parsa Alaeddini</p>
                        <span>Jan 9 2022, 13:40 pm</span>
                    </div>
                </div>
                <a href='#'>{Icon_EllipsisV}</a>
            </div>
            
            <p className='post-text'> <span>Do pets have a positive effect on your brain health?<br/>
                Study shows long-term pet ownership linked to slower decline in cognition over time </span>
             </p>
            <img src='https://pbs.twimg.com/media/FMbYIQ_aMAEDC5J?format=jpg&name=360x360' className='post-img' alt=''/>

            <div className='post-row'>
                <div className='activity-icons'>
                    <div><ThumbUpAltIcon style={{color:"#1876f2"}}/> 200</div>
                    <div><ChatBubbleOutlineIcon/> 20</div>
                    <div>{Icon_Share} 50</div>
                </div>
                <div className='post-profile-icon'>
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>{Icon_Sort}
                </div>
            </div>
        </div>

        <button type='button' className='load-more-bt'>Load More</button>
        
        <div className='footerFace'>
            <p>Copyright 2022 - Phassakorn Suwannato</p>
        </div>

    </div>
  )
}

export default MainContent
