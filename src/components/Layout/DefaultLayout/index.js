
import Sidebar from "./Sidebar"
import stypes from "./DefaultLayout.module.scss"
import classNames from "classnames/bind"
import Header from "../components/Header"


const cx = classNames.bind(stypes)

function DefaultLayout({children }){
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>

                <Sidebar/>
                <div className={cx('content')}>
                    {children }
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout