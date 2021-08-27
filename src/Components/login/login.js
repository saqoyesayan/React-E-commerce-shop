import React from 'react'

export default(props) =>{
    return (
        <div>
            {props.z ? null: 
            <>
                <input onChange={props.LoginOneBtn.bind(props)} value={props.val1} style={{margin:"5px"}} type="text" placeholder="Enter Your Login"/>
                <input onChange={props.LoginTwoBtn.bind(props)} value={props.val2} type="password" placeholder="Enter Your Password"/>
            </>
            }
            <button onClick={props.Click} className={props.z? " btn btn-danger" : "btn btn-success"} style={{marginLeft:"5px"}}>{props.z? "Log Out" : "Log In"}</button>
        </div>
    )
}





