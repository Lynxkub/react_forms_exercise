import React , {useState} from 'react'
import NewBoxForm from './NewBoxForm';
import Box from './Box'
import uuid from 'react-uuid';

const BoxList = () => {
    const INITIAL_STATE = [{
        height: 0,
        width : 0,
        backgroundColor: '',
        id : ""
    }]
    const [boxes , setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes , {...newBox , id : uuid() }])
        
    }


    const deleteBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div>
            <NewBoxForm addBox = {addBox}/>
            <h3>Created Boxes</h3>
            <div>
                {boxes.map(box => <Box deleteBox ={deleteBox} height = {box.height} width = {box.width} backgroundColor = {box.backgroundColor} key = {box.id} id = {box.id}/>)}
            </div>
        </div>
    )
}


export default BoxList;