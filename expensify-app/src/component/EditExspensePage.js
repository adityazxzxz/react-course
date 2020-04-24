import React from 'react';


const EditExspensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is from edit component get id {props.match.params.id}
        </div>
    )
}

export default EditExspensePage;