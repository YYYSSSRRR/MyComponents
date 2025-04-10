import React,{createContext,useState} from 'react';
import classNames from 'classnames';
import './../../styles/index.css'
type MenuMode='horizontal' | 'vertical';
type SelectCallback=(selectedIndex:number)=>void
export interface MenueProps{
    defaultIndex ?: number
    className?: string
    mode?: MenuMode
    style?:React.CSSProperties
    onSelect?:SelectCallback
    children?:React.ReactNode
}
interface IMenuContext{
    index:number;
    onSelect?:SelectCallback
}
export const MenuContext=createContext<IMenuContext>({index:0})

const Menu:React.FC<MenueProps>=(props)=>{
    const {className,mode,style,defaultIndex,children,onSelect}=props;
    const [active,setActive]=useState(defaultIndex);
    const classes=classNames('viking-menu',className,{
        'menu-vertical':mode == 'vertical'
    })
    const handleClick=(index:number)=>{
        setActive(index);
        if(onSelect){
            onSelect(index);
        }
    }
    const passedContext: IMenuContext={
        index:active?active:0,
        onSelect:handleClick
    }
    return(
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}
export default Menu;