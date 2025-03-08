import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import styles from './Menu.moudule.scss'
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from "./MenuItem";
import Header from "./Header";


function Menu({children, items = []}) {
    const cx = classNames.bind(styles)

    const renderItems = ()=>{
        return items.map((item,index) =>(
            <MenuItem key={index} data={item}/>
        ))

    }
    return ( 
        <Tippy
        visible
            interactive={true}
            delay={[0,500]}
            placement='bottom-end'
                    render={(attrs) =>(
                        <div className={cx('menu-list')}
                        tabIndex="-1" {...attrs} >
                        <PopperWrapper className={cx('menu-popper')}> 
                            <Header title='Language'/>
                       {renderItems()}
                        </PopperWrapper>
                        </div>
                    
                )}>
                  {children} 
                
                </Tippy>
     );
}

export default Menu;