// COMPOSING COMPONENTS IN ONE COMPONENT
import React from 'react';
import ReactDOM from 'react-dom';
 
// Navbar Component
const Navbar=()=>{
    return (
    <h1>This is Navbar</h1>
    )
}
 
// Sidebar Component
const Sidebar=()=> {
    return <h1>This is Sidebar.</h1>
}
 
// Article list Component
const ArticleList=()=>
{
    return <h1>This is Articles List.</h1>
}
 
// App Component
const All=()=>
{
    return(
            <div>
                <Navbar />
                <Sidebar />
                <ArticleList />
            </div>
        );
}
export default All;