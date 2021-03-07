import React from 'react'
import { format } from 'date-fns'

var CurrentDate = () => {
    var showdate=format(new Date(), "dd.MM.yyyy");
    console.log(showdate);
    return (
        <div>
             <p>{showdate}</p>     
        </div>
    )
}

export default CurrentDate;
