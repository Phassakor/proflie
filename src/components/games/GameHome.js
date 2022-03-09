import './GameHome.css'
import {useHistory} from 'react-router-dom'
import pic from './iconp.png'
import pic1 from './iconp1.png'
import pic2 from './iconp2.png'
import pic3 from './iconp3.png'

function GameHome() {
    const history = useHistory();

    function home() {
        let path = `/allwork`; 
        history.push(path);
    }

    function SpinnerBasic() {
        let path = `/spinnerbasic`; 
        history.push(path);
    }

    function FallBall() {
        let path = `/fallball`; 
        history.push(path);
    }

    function BallBreakOut() {
        let path = `/ballbreakout`; 
        history.push(path);
    }

    
    return(
        <div className='bodyGames'>
            <div className='Nav2'>
                <div className='logoGames'>
                    <img src={pic} alt='' />
                    <h2>Casino Games</h2>
                </div>
               
                <div className='bt-73-2'>
                    <button className='button-73' onClick={home}>Back</button>
                </div>
            </div>

            <div className='concept'>
               
                <div className='item'>
                    <img src={pic1} alt=''/>
                    <span className="replies"></span>
                    <span className="comment"><p>Spinner Basic</p><button className='button-62' onClick={SpinnerBasic}>Play Now</button></span>
                </div>

                <div className='item'>
                    <img src={pic2} alt=''/>
                    <span className="replies"></span>
                    <span className="comment"><p>Fall Ball</p><button className='button-62' onClick={FallBall}>Play Now</button></span>
                </div>

                <div className='item'>
                    <img src={pic3} alt=''/>
                    <span className="replies"></span>
                    <span className="comment"><p>Ball Break Out</p><button className='button-62' onClick={BallBreakOut}>Play Now</button></span>
                </div>

            </div>


        </div>
    )
}


export default GameHome;
