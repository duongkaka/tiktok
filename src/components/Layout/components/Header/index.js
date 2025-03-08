import images from '~/assets/images';
import styles from './Header.moudule.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSearch, faSign, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon:<FontAwesomeIcon icon={faEarthAsia} />,
        title:'English'
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion} />,
        title:'Feedback and help',
        to:'/feedback'
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard} />,
        title:'Keyboard short cut'
    },
]
function Header() {
    const [searchResult,setSearchResult] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([1,2,3])
        },0)
    },[])
    return ( 
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo.default} alt='Tiktok'></img>
            </div>
            <Tippy
            interactive={true}
            visible={searchResult.length > 0}
                render={attrs =>(
                   
                        <div className={cx('search-result')}
                        tabIndex="-1" {...attrs}
                        >
                        <PopperWrapper> 
                            <h4 >
                          <span className={cx('search-title')}> Acount</span>     
                            
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>

                            <AccountItem/>

                            <AccountItem/>

                            </h4>
                            </PopperWrapper></div>
                    
                )}>
            <div className={cx('search')}>
                <input spellCheck={false} placeholder='Search'></input>
                <button >
                    {/* Clear */}
                    <FontAwesomeIcon className={cx('loading')} icon={faCircleXmark}/>
                </button>
                {/* Loading */}
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                
                <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faSearch} />
                </button>
               
            </div>
            </Tippy>
            <div className={cx('actions')}>
              
              <Button text >Upload</Button>
              <Button 
            //   rightIcon={ <FontAwesomeIcon icon={faSignIn
            //   } />}
              primary>
                Login</Button>
               
                <Menu items = {MENU_ITEMS}>


                <Button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
               
                </Button>
      
                   </Menu>
            </div>
        </div>
    </header> );
}

export default Header;