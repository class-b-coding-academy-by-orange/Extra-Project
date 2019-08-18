import React from 'react';


const Message = (props) => {

    const showMessage = () => {
        if(props.isValid) 
            return <div>message 1</div>
        else 
        return <div> message 2</div>
    }

    showMessage();
   

    return (
        <div>
            {
                props.isValid ?
            <h3 className="text-center message">true</h3>
        :
        <h2>{this.showMessage}</h2>
            }
        </div>
    )
}

export default Message;
