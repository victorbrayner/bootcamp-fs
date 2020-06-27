import React from 'react'

export default function Header({children}) {
    return (
        <div>
           <h2 style={{textAlign: 'center'}}>{children}</h2> 
        </div>
    )
}
