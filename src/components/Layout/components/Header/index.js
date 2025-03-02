import images from '~/assets/images';
import styles from './Header.moudule.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)
function Header() {
    return ( 
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo.default} alt='Tiktok'></img>
            </div>
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
            <div className={cx('actions')}></div>
        </div>
    </header> );
}

export default Header;