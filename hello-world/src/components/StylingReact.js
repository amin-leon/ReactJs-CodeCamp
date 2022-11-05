import React from 'react'
import './StylingReactCss.css'
import styles from './StyleReacting.module.css'
//inline styling
//==========================
// function StylingReact() {
//     const heading= {
//         color: 'red',
//         background: 'blue',
    
//     }
//       return (
//         <div>
//           <h1 style={heading}>Welcome to Andela Devs</h1>
//         </div>
//       )
//     }

//css stylesheet
//============================

//css module


function StylingReact() {


  return (
    <div>
      <h1 className='primary'>Welcome to Andela Devs</h1>
      <h1 className={styles.success}>Iam Leon ... Will be there for sure!</h1>
    </div>
  )
}

export default StylingReact
