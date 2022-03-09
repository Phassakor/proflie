import { useEffect, useState } from 'react';
import './FormComponent.css'
import {v4 as uuid4} from 'uuid';

const FormComponent = (props) =>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event) =>{
        setTitle(event.target.value);
    }
    const inputAmount = (event) =>{
        setAmount(event.target.value);
    }
    const saveItem = (event) =>{
        event.preventDefault()//ข้อมูลจะค้าให้ดู ไม่ถูกเคลีย
        const itemData={
            id:uuid4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        let checkData = title.trim().length>0 && amount !==0
        setFormValid(checkData)
        
    },[title,amount]) // หมายความว่า ถ้าค่าใน title,amount มีการเปลี่ยนแปลง useEffect จะทำงาน

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className='form-control'>
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className='form-control'>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, -รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className='btnForm' type="submit" disabled={!formValid}>เพิ่มชื่อข้อมูล</button>
                </div>
            </form>

        </div>
    )
}

export default FormComponent;

//react hook
/*
1 useState => const [name,setName] = useState('value default')
2 useEffect => จะ render ใหม่ทุกครั้งที่ ค่า props stage มีการเปลี่ยน
datacontext useontext
3 useReducer => เป็นการจัดการ state ในรูปแบบของ Redux โดยทั่วไป state สามรถอ่านค่าได้อย่างเดียว ถ้าอยากจะเปลี่ยนค่า state จะใช้ useReducer
โดยการกำหนดรูปแบบการกระทำที่เกิดขึ้นกับ state ผ่านส่วนที่เรียกว่า action (พูดถึง stage array)
*/ 