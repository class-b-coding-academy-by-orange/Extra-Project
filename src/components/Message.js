import React, { Invalid_defaultProps } from 'react';

const Message = (props) => {
    return (
        <div>
            <h3 className="text-center message">  {props.type} </h3>
        </div>
    )
}

export default Message;
