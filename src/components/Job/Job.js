import React from "react";
import {Link} from 'react-router-dom';

  const Job = ({...job}) => (
      <div>
      <Link to = {`/edit/${job.id}`}>
         <h3>{/*job.id + */job.name}</h3>
         </Link>
       
        </div>
      );
  
  export default (Job); 