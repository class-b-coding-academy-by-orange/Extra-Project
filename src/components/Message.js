import React from 'react';


const Message = (props) => {
    return (
        <div>
            <h3 className="text-center message">
                {
                    props.showMessage ? 'Complete form' : 'incomplete form'
                }
            </h3>
        </div>
    )
}

export default Message;
