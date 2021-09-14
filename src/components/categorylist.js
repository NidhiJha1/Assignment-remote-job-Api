import React from "react";
import { Select } from 'antd';


const { Option } = Select;
const CategoryList = ({filteredTitle,fiteredItem}) => {

return(
    <>
        
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
                <Option key={curElem.id} value={curElem.category}  onClick={() => fiteredItem(curElem.category)} >{curElem.category}</Option>
               );
           })
          }
  
        </Select>
        </div>

        
       </>
    );
};

export default CategoryList;