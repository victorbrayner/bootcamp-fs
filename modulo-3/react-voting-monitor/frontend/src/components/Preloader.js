import React from 'react'
import css from './preloader.module.css'

export default function Preloader({description}) {
    return (
        <div className={css.flexRow}>
            <div className="preloader-wrapper small active">
                <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
        <div style={{fontSize: '1.5rem', marginLeft:'20px'}}>
          {description}
        </div>
      </div>
      
    )
}
