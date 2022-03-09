import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    
    return(
        <div className='headerFace'>
            <div className='headerFace_left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' alt=''/>
                <div className='headerFace_input'>
                    <SearchIcon/>
                    <input placeholder='Search Facebook' type='text' />
                </div>
            </div>


            <div  className='headerFace_center'>
                <div className='headerFace_option option-active'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='headerFace_option'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='headerFace_option'>
                    <SubscriptionsIcon fontSize='large'/>
                </div>
                <div className='headerFace_option'>
                    <StorefrontIcon fontSize='large'/>
                </div>
                <div className='headerFace_option'>
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div>
            </div>

            <div  className='headerFace_right'>
                <div className='headerFace_into'>
                    {/* <Avatar/> */}
                    <img src='https://u01.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/>
                    <h4>John</h4>
                </div>

                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>

        </div>
    )
}

export default Header;