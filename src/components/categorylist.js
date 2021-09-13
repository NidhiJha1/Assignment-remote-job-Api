import React from "react";
import { Select } from 'antd';


const { Option } = Select;
const CategoryList = ({filteredTitle}) => {
    return(
        <>
        
             {/* <div className="select-box">
                <select>
                 {
                    filteredTitle.map((curElem) =>{
                       return(
                           <option key={curElem.id} value={curElem.category}>{curElem.category}</option>
                       );
                     })
                   }
             </select>
             </div> */}
<div className="select-box">
<Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {
                    filteredTitle.map((curElem) =>{
                       return(
                           <Option key={curElem.id} value={curElem.category}>{curElem.category}</Option>
                       );
                     })
                   }
 
  </Select>
  </div>

        
       </>
    );
};

export default CategoryList;