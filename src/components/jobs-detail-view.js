import React from "react";
import { Card } from 'antd';
import { useParams } from "react-router";


const JobsListView = ({users}) => {
 let {id} = useParams();
 let jobid = parseInt(id,10);
 
 const updateditems = users.filter((element) =>{
  return element.id === jobid;
});
//  const find = filteredTitle.find(data => data.id === id);


     return(
       <>
       
         {
           updateditems.map(data => (
              <div key={data.id}>
                  <div className="site-card-border-less-wrapper">
                     <Card title={`${data.title}`} bordered={false} style={{ width: 700 }}>
                         <p>company Name : {data.company_name}</p>
                         <p>Job Category : {data.category}</p>
                         <p>Published Date : {data.publication_date}</p>
                         <p>Job type : {data.job_type}</p>
                         <p>Required Location : {data.candidate_required_location}</p>
                         <p>Jobs URL : {data.url}</p>
                    </Card>
  </div>
              </div>
           ))
         }
       </>
     );
};

export default JobsListView;