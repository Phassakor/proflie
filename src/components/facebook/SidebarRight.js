import './SidebarRight.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function SidebarRight() {
    const Icon_location = <FontAwesomeIcon icon={faLocationDot} />
  return (
    <div className='right-sidebar'>
        <div className='sidebar-title'>
            <h4>Events</h4>
            <a href='#'>See All</a>
        </div>

        <div className='event'>
            <div className='left-event'>
                <h3>18</h3>
                <span>March</span>
            </div>
            <div className='right-event'>
                <h4>Social Media</h4>
                <p>{Icon_location} Siam Paragon</p>
                <a href='#'>More Info</a>
            </div>
        </div>

        <div className='event'>
            <div className='left-event'>
                <h3>22</h3>
                <span>June</span>
            </div>
            <div className='right-event'>
                <h4>Mobile Marketing</h4>
                <p>{Icon_location} Siam Paragon</p>
                <a href='#'>More Info</a>
            </div>
        </div>

        <div className='sidebar-title'>
            <h4>Advertisement</h4>
            <a href='#'>Close</a>
        </div>
        <img src='https://media.istockphoto.com/photos/digital-marketing-picture-id1222811180?k=20&m=1222811180&s=612x612&w=0&h=pbx0i1gHDYn1vgQlCaFcOHP2GW3GpB-LCSAhx7JUZwo='
         className='sidebar-ads' alt=''/>

        <div className='sidebar-title'>
            <h4>Conversation</h4>
            <a href='#'>Hide Chat</a>
        </div>

        <div className='online-list'>
            <div className='online'>
                <img src='https://i.pinimg.com/736x/36/7d/ab/367daba5bf9b814f0d955bb1c95f4fe4.jpg' alt=''/>
            </div>
            <p>Alison Mina</p>
        </div>
        <div className='online-list'>
            <div className='online'>
                <img src='https://i.pinimg.com/474x/f6/e4/df/f6e4dfc2834fafdc38caec39ed628748.jpg' alt=''/>
            </div>
            <p>Mykenzi Adams</p>
        </div>
        <div className='online-list'>
            <div className='online'>
                <img src='https://m.media-amazon.com/images/I/71hMEM1a9EL._SL1500_.jpg' alt=''/>
            </div>
            <p>Jacob Abraham</p>
        </div>
        <div className='online-list'>
            <div className='online'>
                <img src='https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png' alt=''/>
            </div>
            <p>Jessica Adcock</p>
        </div>
        <div className='online-list'>
            <div className='online'>
                <img src='https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-cartoon-cute-hamster-png-transparent-bottom-image_1305367.jpg' alt=''/>
            </div>
            <p>Brian Aguilar</p>
        </div>
        <div className='online-list'>
            <div className='online'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnewbTm7DqD6u3SNYYZ_YNdg1SYCuiWdiFAQ&usqp=CAU' alt=''/>
            </div>
            <p>Julia Aitken</p>
        </div>
        <div className='online-list'>
            <div className='online'>
                <img src='https://img.freepik.com/free-vector/astronaut-listening-music-with-headphone-peace-hand-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3375.jpg?size=338&ext=jpg' alt=''/>
            </div>
            <p>Parsa Alaeddini</p>
        </div>
        <div className='online-list'>
            <div className='online'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrTKKgYQPK5htt32RO_VLBFrw2kWBdV28vQ&usqp=CAU' alt=''/>
            </div>
            <p>Alexa Alcon</p>
        </div>
        <div className='online-list'>
            <div className='online'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOzVPXXgWY5eB3426Tk1BqBgdBjD-NSf46A&usqp=CAU' alt=''/>
            </div>
            <p>Tristan Aldridge</p>
        </div>

    </div>
  )
}

export default SidebarRight
