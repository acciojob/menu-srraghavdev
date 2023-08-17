import React from 'react'
import data from '../data'

let Filters= ({set})=>{
    function changefilter(filter){
        if(filter=='all'){
            set(data)
            return
        }
        let x= data.filter(element=>{
            if(element.category==filter){
                return true
            }
            else return false 
        })
        set(x)
        }

    return (
        <div>
            <button onClick={()=>changefilter('all')}>All</button>
            <button onClick={()=>changefilter('breakfast')}>Breakfast</button>
            <button onClick={()=>changefilter('lunch')}>Lunch</button>
            <button onClick={()=>changefilter('shakes')}>Shakes</button>
        </div>
    )
}
export default Filters