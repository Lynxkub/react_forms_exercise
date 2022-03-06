import React , {useState} from 'react';



const NewBoxForm = ({addBox}) => {

    const INITIAL_STATE = {
        width : "",
        height : "",
        backgroundColor : ""
    }

    const [formData , setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name , value } = e.target;

        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor ='height'>Height</label>
                <input 
                data-testid='height'
                id='height'
                type = 'number'
                placeholder='height'
                name = 'height'
                value = {formData.height}
                onChange = {handleChange}
                />
                <label htmlFor = 'width'>Width</label>
                <input 
                data-testid='width'
                id = 'width'
                type = 'number'
                placeholder='width'
                name = 'width'
                value = {formData.width}
                onChange = {handleChange}
                />
                <label htmlFor ='backgroundColor'>Background Color</label>
                <input 
                data-testid='backgroundColor'
                id = 'backgroundColor'
                type = 'text'
                placeholder='background color'
                name = 'backgroundColor'
                value = {formData.backgroundColor}
                onChange = {handleChange}
                />
                <button>Add Box</button>
            </form>
        </div>
    )
}


export default NewBoxForm;