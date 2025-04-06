import React,{useContext,FunctionComponent} from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export interface submenuProps{
    index?:number;
    title:string;
    className?:string;
    children?:React.ReactNode
}
const Submenu:React.FC<submenuProps>=(props)=>{
    const {index,title,className,children}=props;
    const context=useContext(MenuContext);
    const classes=classNames('menu-items submenu-item',className,{
        'is-active':context.index==index
    })
    const  renderChildren=()=>{
        return(
            React.Children.map(children,(child,index)=>{
                return(
                    <li key={index}>
                        {child}
                    </li>
                )
            })
        )
        
    }
    return(
        <li>
            <li className="menu-items">
                {title}
            </li>
            {renderChildren()}
        </li>
    )
}
export default Submenu