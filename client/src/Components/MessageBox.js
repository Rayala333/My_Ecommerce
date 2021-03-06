import React from 'react'

const MessageBox = (props) => {
    return (
        <React.Fragment>
            <div className={`alert alert-${props.variant} || 'info'`}>
                {props.children}
            </div>
  
            
        </React.Fragment>
    )
}

export default MessageBox
