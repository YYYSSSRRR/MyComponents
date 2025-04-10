import React,{useContext} from 'react'
import classNames from 'classnames'
import Menu from './menu';
import { MenuContext } from './menu';
import './../../styles/index.css'
export interface MenuItemProps {
    index:number;
    disabled?:boolean;
    className?:string;
    style?:React.CSSProperties;
    children?:React.ReactNode;
}

const MenuItems:React.FC<MenuItemProps>=(props)=>{
    const {index,disabled,className,style,children}=props;
    const context=useContext(MenuContext);
    const classes=classNames('menu-items',className,{
        'is-disable':disabled,
        'is-active':context.index==index
    })
    const handleClick=()=>{
        if(context.onSelect && !disabled){
            context.onSelect(index)
        }
    }
    return(
        <li
            className={classes}
            style={style}
            onClick={handleClick}
        >
            {children}
        </li>
    )
}
export default MenuItems