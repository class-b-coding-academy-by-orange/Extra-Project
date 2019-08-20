import React from 'react';

const Message = (prop) => {
    return (
        <div>
            <h3 className="text-center message">{prop.isValed}</h3>

        </div>
    )
}

export default Message;
