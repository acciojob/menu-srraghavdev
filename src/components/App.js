import React,{useState} from 'react'
import data from '../data'
import Filters from './Filters'
import Menu from './Menu'
import "../styles/App.css"
let App = ()=>{
    let [items,setitems]=useState(data)
    return (
        <div id='main'>
            <h1>Our Menu</h1>
            <Filters set={setitems} />
            <Menu data={items} />
        </div>
    )
}
export default App