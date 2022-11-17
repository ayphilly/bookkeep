import * as React from "react"
import "./styles.scss"


export const Platformbutton = (props: {name:string, type:string, children?:any, icon?:string, size?:any, disabled?:boolean, bkg?:string, click?:any})=> {

   
    var _renderbtn = () =>{
        switch (props.type){
            case 'normal':
                return <button type="button" className={`platform platform_mainbtn ${props.size&&'platform_mainbtn__size-small'} ${props.bkg&&'platform_mainbtn__bkg-'+props.bkg}`}   onClick={props.click} disabled={props.disabled}>
                    {props.children && props.children}
                    {props.name}</button>;
            case 'normalicon':
                return <button type="button" className={`platform platform_mainbtnicon ${props.size&&'platform_mainbtnicon__size-small'} ${props.bkg&&'platform_mainbtnicon__bkg-'+props.bkg}`}   onClick={props.click} disabled={props.disabled}>
                    {props.name}
                    <i className={props.icon} />
                </button>;
            default:
                return <>Error No Button Type</>
        }
    }

    return (
        _renderbtn()
    )
    
}