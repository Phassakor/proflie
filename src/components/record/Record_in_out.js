import { useEffect, useState } from 'react';
import FormComponent from './FormComponent';
import './Record.css'
import Transac from './Transac'
import {useHistory} from 'react-router-dom'
import DataContext  from './DataContext'
import ReportComponent from './ReportComponent'

function Record_in_out() {
    const history = useHistory();

    const [reportIncome,setReportIncome] = useState(0)
    const [reportExpens,setReportExpense] = useState(0)

    function back() {
        let path = `/allwork`; 
        history.push(path);
    }


    const [items,setItems] = useState([])
    const onAddNewItem = (newItem) =>{
        setItems((pervItem) =>{
            return[newItem, ...pervItem]
        })
    }

    useEffect(()=>{
        const amounts = items.map(items=>items.amount)
        const income = amounts.filter(el=>el>0).reduce((total,el)=>total+=el,0)
        const expense = (amounts.filter(el=>el<0).reduce((total,el)=>total+=el,0))*-1
       setReportIncome(income.toFixed(2));
       setReportExpense(expense.toFixed(2));
    },[items,reportIncome,reportExpens])

    return(
        <DataContext.Provider value={{income:reportIncome,expense:reportExpens}}>
            <div className='navAllwork'>
                <div className='logoAllwork'> <h2>Income-Expense account app</h2></div>
                <div className='bt-73'>
                    <button className='button-73' onClick={back}>Back</button>
                </div>
            </div>
            <div className='bodyRecord'>
                <div className='containerRecord'>
                    <h1 style={{color:"red",textAlign:"center"}}>แอปบัญชีรายรับ-รายจ่าย</h1>
                    <ReportComponent/>
                    <FormComponent onAddItem={onAddNewItem}/>
                    <Transac items={items}/>
                </div>
            
            </div>
        </DataContext.Provider>
       
    )
}

export default Record_in_out;