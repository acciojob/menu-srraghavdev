import React from 'react'

let Menu= ({data})=>{
return (
    <div className='itemcontainer'>
        {   data.map(element=>{
            let Image1 = require(`../images/image${element.id}.jpg`)
                return (
                    <div className='item' data-test-id={'menu-item-'+element.category}>
                        <div className='left'>
                            <img src={Image1.default} className='images'></img>
                        </div>
                        <div className='right'>
                            <div className='top'>
                                <div className='title'>{element.title}</div>
                                <div className='price'>{element.price}</div>
                            </div>
                            <div className='bottom'>{element.desc}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
)
}

export default Menu