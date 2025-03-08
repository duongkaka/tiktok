import images from '~/assets/images';
import styles from './Header.moudule.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSearch, faSign, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';


const cx = classNames.bind(styles)
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
            </div>
        </div>
    </header> );
}

export default Header;