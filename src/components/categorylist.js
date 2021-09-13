import React from "react";

const CategoryList = ({filterItem, usersList}) => {
    return(
        <>
        
             <div className="select-box">
                <select>
                 {
                    usersList.map((curElem) =>{
                       return(
                          
                           <option key={curElem} value={curElem} onClick={() => filterItem(curElem)}>{curElem}</option>
                         
                       );
                     })
                   }
             </select>
             </div>
        
       </>
    );
};

export default CategoryList;