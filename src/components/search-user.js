import React from "react";
import { Input } from 'antd';

const SearchUser = ({setSearchTitle}) => {
    return(
      <>
          <div className="input-box-wrapper">
             <Input placeholder="Search job title"  onChange={event => {setSearchTitle(event.target.value)}}/>    
         </div>
      </>
    );
};

export default SearchUser;