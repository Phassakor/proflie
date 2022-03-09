import './Detail.css'
import {useHistory} from 'react-router-dom'
import pic from './box.PNG';
import { useEffect,useState } from 'react';
import Swal from "sweetalert2"
//https://covid19.workpointnews.com/

function Detail() {
    const history = useHistory();
    const [data, setData] = useState([])
    var newCase 
    var totalCase 
    var totalCaseExcludeabroad 
    var newCaseExcludeabroad 
    var totalRecovered 
    var newRecovered 
    var totalDeath
    var newDeath

    var timeData = []

    function covid() {
        let path = `/covid`; 
        history.push(path);
    }

    async function getDataAPIALL() {
        const response = await fetch(`https://covid19.ddc.moph.go.th/api/Cases/today-cases-all`);
        const json = await response.json();
        setData({ data: json });
        // console.log(json[0]);
        timeData = json[0]
    
    }

    function numberWithCommas(x) {
        if (x !== undefined) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
    }

    async function pushValue() {
     
        newCase = numberWithCommas(data.new_case)
        totalCase = numberWithCommas(data.total_case)
    
        totalCaseExcludeabroad = numberWithCommas(data.total_case_excludeabroad)
        newCaseExcludeabroad = numberWithCommas(data.new_case_excludeabroad)
    
        totalRecovered = numberWithCommas(data.total_recovered)
        newRecovered = numberWithCommas(data.new_recovered)
    
        totalDeath = numberWithCommas(data.total_death)
        newDeath = numberWithCommas(data.new_death)

    }

   
    async function popup() {
        let timerInterval
        Swal.fire({
          title: 'Loading',
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            setData(timeData)
            // console.log('I was closed by the timer')
          }
        })
        
    }


    pushValue()
   
    useEffect(() => {
        getDataAPIALL()
        popup()
    }, []);

    return(
        <div className='bodyDetail'>
          
          <div className='table'>
                <div className='boxTable'>
                    <div className='box-left'>
                        <img src={pic} al='' />
                    </div>
                    <div className='box-right'>
                        <div className='box-right-1'>
                             <div className='box-right-1-1'>
                                 <div className='box-right-1-1-text1'>ผู้ติดเชื้อสะสม</div>
                                 <div className='box-right-1-1-text2'>
                                     <div className='box-right-1-1-text2-1'>เพิ่มขึ้น</div>
                                     <div className='box-right-1-1-text2-2'>{newCase}</div>
                                 </div>
                             </div>
                             <div className='box-right-1-2'>
                                 <div className='box-right-1-2-text'>{totalCase}</div>
                             </div>
                        </div>
                        <div className='box-right-2'>
                            <div className='box-right-2-1'>เฉพาะในไทย</div>
                            <div className='box-right-2-2'>{totalCaseExcludeabroad}</div>
                            <div className='box-right-2-3'>
                                <div className='box-right-2-3-1'>เพิ่มขึ้น</div>
                                <div className='box-right-2-3-2'>{newCaseExcludeabroad}</div>
                            </div>
                        </div>
                        <div className='box-right-3'>
                            <div className='box-right-3-1'>หายแล้ว</div>
                            <div className='box-right-3-2'>{totalRecovered}</div>
                            <div className='box-right-3-3'>
                                <div className='box-right-3-3-1'>เพิ่มขึ้น</div>
                                <div className='box-right-3-3-2'>{newRecovered}</div>
                            </div>
                        </div>
                        <div className='box-right-4'>
                            <div className='box-right-4-1'>เสียชีวิต</div>
                            <div className='box-right-4-2'>{totalDeath}</div>
                            <div className='box-right-4-3'>
                                <div className='box-right-4-3-1'>เพิ่มขึ้น</div>
                                <div className='box-right-4-3-2'>{newDeath}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className='cen'>
                <button className='button-78' onClick={covid}>Back</button>
            </div>
            
        </div>
    )
}


export default Detail;