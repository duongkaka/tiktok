import classNames from "classnames/bind";
import styles from "./Button.module.scss"
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button( {to , href, onClick, children, 
    primary = false, outline = false, text = false,
    small=false,medium = false, large=false ,
    rounded = false,leftIcon,rightIcon,
    disabled , ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    // if(disabled){
    //     delete props.onClick;
    // }

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = "a"
    }
    const classes = cx("wrapper",{
        primary,
        outline,
        small,
        medium,
        large,
        text,
        disabled,
        rounded,
        leftIcon
    });
    return (  
    
        <Comp className={classes} {...props}>
{leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;