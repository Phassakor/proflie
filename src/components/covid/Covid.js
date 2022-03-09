import './Covid.css'
import {useHistory} from 'react-router-dom'
import pic from './cv.jpg'
import pic2 from './cv19.jpg'

function Covid() {
    const history = useHistory();

    function graph() {
        let path = `/graph`; 
        history.push(path);
    }

    function detail() {
        let path = `/detail`; 
        history.push(path);
    }

    function back() {
        let path = `/allwork`; 
        history.push(path);
    }

    return(
        <div className='bodycovid'>
            <div className="navbar">
                <div className="logo">
                    <h1>Covid19</h1>
                    <img src={pic}alt=""/>
                </div>
                <ul className='ulcovid'>
                    <div className='bt-73-2'>
                        <button className='button-73' onClick={back}>Back</button>
                    </div>
                </ul>
            </div>
            <div className='content'>
                <img src={pic2} alt=""/>
                <h1>ระบบรายงานสถานการณ์ COVID-19 in Thailand</h1>
                <button className='button-77' onClick={graph}>Graph</button>
                <button className='button-77' onClick={detail}>Detail</button>
            </div>

            <div className='footer'>
                <div className='boxfooter1'>
                    <p>ไทย</p>
                </div>
                <div className='boxfooter2'>
                    <div className='boxfooter2-1'>
                        <a href='#'><p>เกี่ยวกับ</p></a>
                        <a href='#'><p>โฆษณา</p></a>
                        <a href='#'><p>ธุรกิจ</p></a>
                        <a href='#'><p>วิธีการทำงานของ Search</p></a>
                    </div>
                    <div className='boxfooter2-2'>
                        <a href='#'><p>ความเป็นส่วนตัว</p></a>
                        <a href='#'><p>ข้อกำหนด</p></a>
                        <a href='#'><p>การตั้งค่า</p></a>
                    </div>
                </div>
            </div>


        </div>
    )
    
}

export default Covid;