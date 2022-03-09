import Item from "./Item";
import './Transec.css'

const Transac = (props) =>{

    const {items} = props

    return (
     <div>
        <ul className="items-list">
        
            {items.map((el) =>{
                // return <Item title={el.title}  amount={el.amount}/>
                //map เป็นกา loop ซ้ำๆ จึงต้องมี id เป็นแต่ละตัว
                return <Item {...el} key={el.id}/> //ลดรูปได้เพราะชื่อเหมือนกัน
            })}
        </ul>
     </div>
    )
}

export default Transac;