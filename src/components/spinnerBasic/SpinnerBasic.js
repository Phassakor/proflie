import './SpinnerBasic.css'
//https://www.youtube.com/watch?v=BwaonzIVsJU
import {useHistory} from 'react-router-dom'


function SpinnerBasic() {
    const history = useHistory();

    function home() {
        let path = `/games`; 
        history.push(path);
    }

    function Rotate() {
        var x = 1024
        var b = 9999
        var dgre = Math.floor(Math.random()*(x-b))+b
        console.log(dgre);
        document.getElementById('sa').style.transform="rotate("+dgre+"deg)"
    }



    return(
        <div className='bodySpin'>
            <div className='bbody'>
                <div className='wheel'>
                    <div className='sa' id='sa'>
                        <div className='sa1-notUse'>
                            <span className='spa Span'><strong>10</strong></span>
                            <span className='spb Span'><strong>20</strong></span>
                            <span className='spc Span'><strong>30</strong></span>
                            <span className='spd Span'><strong>40</strong></span>
                        </div>
                        <div className='sa2'>
                            <span className='spa Span'><strong>50</strong></span>
                            <span className='spb Span'><strong>60</strong></span>
                            <span className='spc Span'><strong>70</strong></span>
                            <span className='spd Span'><strong>80</strong></span>
                        </div>
                    </div>
                </div>
            </div>
            <button className='rotate' onClick={Rotate}>Rotate</button>
           <div className='for-bt-spin'>
                <button className='button-29' onClick={home}>Back</button>
           </div>
        </div>
    )
}

export default SpinnerBasic;








