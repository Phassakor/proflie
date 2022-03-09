import './Graph.css';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Popup from '../popup/Popup';
import Swal from "sweetalert2"
import {useHistory} from 'react-router-dom'


function Graph() {
  const [data, setData] = useState([])
  const [showData, setshowData] = useState([])
  var dataCovid7D = []
  var dataCovidAll =[]
  var dataCovid1D = []
  

async function getDataAPI1D() {
  document.getElementById("demo").style.background = "red";
  document.getElementById("demo2").style.background = "aqua";
  document.getElementById("demo3").style.background = "aqua";
  setTimeout(() => {
    const superAgent = require('superagent');
    superAgent.get('http://localhost:3001/covid1D').end((err , res) => {
        if (!res) {
            console.log('Error :' + err);
        } else {
          setData(res.body.data);
          for (let i = 0; i < res.body.data.length; i++) {
            var lastElement = res.body.data;
            var daTa = {
              date: lastElement[i].txn_date,
              newCase: lastElement[i].new_case_excludeabroad,
              newDeath: lastElement[i].new_death,
              totalDeath:lastElement[i].total_death,
              new_recovered: lastElement[i].new_recovered
            }
            dataCovid1D.push(daTa)
          }
        }
        setshowData(dataCovid1D)
    })
  }, 2000);
}

async function getDataAPI7D() {
  document.getElementById("demo").style.background = "aqua";
  document.getElementById("demo2").style.background = "red";
  document.getElementById("demo3").style.background = "aqua";
  setTimeout(() => {
    const superAgent = require('superagent');
    superAgent.get('http://localhost:3001/covid7D').end((err , res) => {
        if (!res) {
            console.log('Error :' + err);
        } else {
          setData(res.body.data);
          for (let i = 0; i < res.body.data.length; i++) {
            var lastElement = res.body.data;
            var daTa = {
              date: lastElement[i].txn_date,
              newCase: lastElement[i].new_case_excludeabroad,
              newDeath: lastElement[i].new_death,
              totalDeath:lastElement[i].total_death,
              new_recovered: lastElement[i].new_recovered
            }
            dataCovid7D.push(daTa)
          }
        }
        setshowData(dataCovid7D)
    })
  }, 2000);
}

async function getDataAPIALL() {
  document.getElementById("demo").style.background = "aqua";
  document.getElementById("demo2").style.background = "aqua";
  document.getElementById("demo3").style.background = "red";
  setTimeout(() => {
    const superAgent = require('superagent');
    superAgent.get('http://localhost:3001/covidALL').end((err , res) => {
        if (!res) {
            console.log('Error :' + err);
        } else {
          setData(res.body.data);
          for (let i = 0; i < res.body.data.length; i++) {
            var lastElement = res.body.data;
            var daTa = {
              date: lastElement[i].txn_date,
              newCase: lastElement[i].new_case_excludeabroad,
              newDeath: lastElement[i].new_death,
              totalDeath:lastElement[i].total_death,
              new_recovered: lastElement[i].new_recovered
            }
            dataCovidAll.push(daTa)
          }
        }
        setshowData(dataCovidAll)
    })
  }, 2000);
}

async function postUpdate() {
  setTimeout(() => {
    const superAgent = require('superagent');
    superAgent.post('http://localhost:3001/pushData').send({
      url:"https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
  
    }).then((res)=>{
        if (!res) {
            console.log("err");
        } else {
            console.log("Send API Done" , res.body.message);
        }
    })
  }, 2000);
 
}


async function runToGetApi1D() {
  popup()
  await postUpdate()
  await getDataAPI1D()
}

async function runToGetApi7D() {
  popup()
  await postUpdate()
  await getDataAPI7D()
}

async function runToGetApiALL() {
  popup()
  await postUpdate()
  await getDataAPIALL()
}


function popup() {
  let timerInterval
  Swal.fire({
    title: 'Loading',
    // html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      // console.log('I was closed by the timer')
      popup2()
    }
  })
}

function popup2() {
  let timerInterval
  Swal.fire({
    title: 'The data could not be loaded because the data is in the localhost',
    // html: 'I will close in <b></b> milliseconds.',
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      // console.log('I was closed by the timer')
    }
  })
}

const history = useHistory();
function Page() {
  let path = `/covid`; 
  history.push(path);
}

useEffect(() => {
  runToGetApi1D()

}, []);

  const renderLineChart = (
    <LineChart
      width={700}
      height={600}
      data={showData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="4 4" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="newCase" stroke="#2E64FE" />
      <Line type="monotone" dataKey="newDeath" stroke="#dd5250" />
      <Line type="monotone" dataKey="totalDeath" stroke="#FF0000" />
      <Line type="monotone" dataKey="new_recovered" stroke="#00FF40" />
    </LineChart>
  );
  
  return (
    <div className='appGraph'>
        <h1><Popup /> Graph covid19 in Thailand<Popup /></h1>
        
      <div className='graph'>
        {!data ? null : renderLineChart}
        <button className='btGraphDay' id='demo' onClick={runToGetApi1D}>1D</button>
        <button className='btGraphDay' id='demo2' onClick={runToGetApi7D}>7D</button>
        <button className='btGraphDay' id='demo3' onClick={runToGetApiALL}>All</button>
        <div className='for-bt-graph'>
          <button className='button-78' onClick={Page}>Back</button>
        </div>
      </div>
    </div>
    
  );
}


export default Graph;