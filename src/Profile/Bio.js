import React from 'react'

const Bio = ({bio}) => {
    return (
        <div style={{width:"600px",

            marginTop: "100px",
            marginLeft:"470px"
        }}>
            <h4> {bio.Bio} </h4>
        </div>
    )
}

export default Bio