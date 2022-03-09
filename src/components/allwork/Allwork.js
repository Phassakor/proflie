import './Allwork.css'
import {useHistory} from 'react-router-dom'
import pic from './cv19.jpg'
import pic2 from './iconp2.png'
import pic3 from './money.jpg'
import pic4 from './face.png'

function Allwork() {
    const history = useHistory();

    function home() {
        let path = `/`; 
        history.push(path);
    }

    function covid() {
        let path = `/covid`; 
        history.push(path);
    }

    function games() {
        let path = `/games`; 
        history.push(path);
    }

    function record() {
        let path = `/record`; 
        history.push(path);
    }

    function facebook() {
        let path = `/facebook`; 
        history.push(path);
    }


    
    return(
        <div className='bgAllwork'>
            <div className='navAllwork'>
                <div className='logoAllwork'> <h2>My Project</h2></div>
                <div className='bt-73'>
                    <button className='button-73' onClick={home}>Back</button>
                </div>
               
            </div>
            <div className='bodyAllwork'>
                <div className='conAllwork'>
                    <div className='boxwork'>
                        <div className='bgbox'>
                            <img src={pic} alt=''/>
                        </div>
                        <p>Covid19 in Thailand API</p>
                        <button className='button-54' onClick={covid}>Click</button>
                    </div>
                    <div className='boxwork'>
                        <div className='bgbox'>
                            <img src={pic2} alt=''/>
                        </div>
                        <p>Games</p>
                        <button className='button-54' onClick={games}>Click</button>
                    </div>
                    <div className='boxwork'>
                        <div className='bgbox'>
                            <img src={pic3} alt=''/>
                        </div>
                        <p>Income and Expenses</p>
                        <button className='button-54' onClick={record}>Click</button>
                    </div>
                    <div className='boxwork'>
                        <div className='bgbox'>
                            <img src={pic4} alt=''/>
                        </div>
                        <p>Facebook Clone</p>
                        <button className='button-54' onClick={facebook}>Click</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Allwork;