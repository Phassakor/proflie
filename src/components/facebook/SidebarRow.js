import { Avatar } from '@material-ui/core';
import './SidebarRow.css'


function SidebarRow(props) {
    let {src, Icon, title} = props
    return(
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}
export default SidebarRow;