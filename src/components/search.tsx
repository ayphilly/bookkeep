import * as React from "react"
import { Platformbutton } from "./buttons"
import "./styles.scss"


const Search = (props:{handleChange?:any, input?:string, select?:string, handleInput:any, handleBookfetch:any})=> {
   

    return (
        <div className="search">
            <div className="search__box">
            <select name="search" onChange={(e)=> props.handleChange(e)}>
                    <option value="publusher">Publisher</option>
                    <option value="name">Name</option>
                    <option value="authors">Author</option>
                    <option value="characters name">Characters Name</option>
                    <option value="character culture">Character Culture</option>
                </select>
            
                <input className="search__input" placeholder={`Enter ${props.select}`} type="text" name={'input'} value={props.input} onChange={props.handleInput} />
            </div>
            <div className="search__btn">
                <Platformbutton name="Search"  type="normal" bkg="dark"  click={()=> props.handleBookfetch()} />
            </div>
        </div>
    )
}

export default Search;