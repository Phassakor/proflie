import './Facebook.css'
import {useHistory} from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import SidebarRight from './SidebarRight';
import MainContent from './MainContent';


function Facebook() {
    const history = useHistory();
    function back() {
        let path = `/allwork`; 
        history.push(path);
    }

    
    return(
        <div className='bodyFacebook'>
            <div className='navAllwork'>
                <div className='logoAllwork'> <h2>Facebook clone</h2></div>
                <div className='bt-73'>
                    <button className='button-73' onClick={back}>Back</button>
                </div>
            </div>
            <Header/>
            <div className='app_body'>
                <Sidebar/>
                <MainContent/>
                <SidebarRight/>
            </div>
          


        </div>
    )
}

export default Facebook;