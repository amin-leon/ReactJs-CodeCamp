import React from 'react';


const WithoutJsx=() =>{
    return React.createElement(
        'div',
        {id: 'myWorld', className: 'myStyle'},
        React.createElement('h1', null, 'Hello devs')
    )

}
export default WithoutJsx