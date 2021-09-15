import React from "react";
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';

const { Option } = Select;
const CategoryList = ({setCategoryFilter,jobs,setFilteredDate}) => {

const key = "category";

const uniqueRecords = jobs && Array.isArray(jobs) && jobs.length > 0 ? [
 ...new Map(jobs.map((item) => [item[key], item])).values(),]:[];
  

return(
    <>
        
        <div className="filter-wrapper">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            filterOption={(input, option) =>
           option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onChange={event => {setCategoryFilter(event.target.value)}}
        >
         { 
          uniqueRecords.map((curElem) =>{
              return(
                <Option key={curElem.id} value={curElem.category} >{curElem.category}</Option>
               );
           })
          }
  
        </Select>

        <Space direction="vertical" >
                   <DatePicker onChange={event => {setFilteredDate(event.target.value)}}/>
         </Space>
        </div>

        
       </>
    );
};

export default CategoryList;