import React from 'react';
import '../Empty/empty.css';
import '../Empty/EmptyMedia.css'

import {Link} from "react-router-dom";

export default () => {
    return (
        <div className="contanerbasket">
            <div className="basketmain">
                <h1>You have not added anything yet to Basket</h1>
                <Link className="btn btn-primary" to={"/"}>Back to Product</Link>
            </div>
        </div>
    )
}


