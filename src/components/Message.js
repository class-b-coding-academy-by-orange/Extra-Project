import React from 'react';

const Message = (props) => {
    console.log(props.isFormValid)
    
    return (
        <div>
            <h3 className="text-center message">
                {
                    props.isFormValid ?
                    'Form is completed!'
                    :
                    'Form is incompleted!'
                }
            </h3>
        </div>
    )
}

export default Message;
