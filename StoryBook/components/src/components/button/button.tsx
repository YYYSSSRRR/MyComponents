import React from 'react';
import classNames from 'classnames';
import './../../styles/index.css'
//enum是枚举，只有特定值能取
export enum ButtonSize {
    Large='lg',
    Small='sm'
}
export enum ButtonType {
    Primary='primary',
    Default='default',
    Danger='danger',
    Link='link'
}
//interface是定义类型
interface ButtonProps {
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode;
    href?:string;
}
type NativeButtonProps=ButtonProps&React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonProps=ButtonProps&React.AnchorHTMLAttributes<HTMLButtonElement>
type AllButtonProps=Partial<NativeButtonProps&AnchorButtonProps>
const Button: React.FC<AllButtonProps>=(props)=>{
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    }=props
    //这里的bytType是作为布尔值显示，如果有值就显示btn-${btnType}
    const classes=classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType==ButtonType.Link) && disabled
    })
    if(btnType==ButtonType.Link && href){
        return(
            <a
                
                className={classes}
                href={href}
                {...(restProps as React.AnchorHTMLAttributes<HTMLElement>)}
            >
                {children}
            </a>
        )
    }
    else{
        return(
            <button
                {...restProps}
                className={classes}
            >
                {children}
            </button>
        )
    }
}
export default Button