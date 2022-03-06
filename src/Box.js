import React from 'react';


const Box = ({height , width , backgroundColor , deleteBox , id}) => {
        const newHeight = height + 'px';
        const newWidth = width + 'px'

        const handleClick = (e) => {
            // e.target.parentElement.isvisible = false;
            deleteBox(id)
        }
   return (
       <div>
       <div  style = { {height : newHeight , width : newWidth , backgroundColor : backgroundColor , display : 'inline-block'}}>
       </div>
        {height !== 0 && width !== 0 ? <button onClick = {handleClick}>X</button> : ""}
       </div>
   )
}

export default Box;

