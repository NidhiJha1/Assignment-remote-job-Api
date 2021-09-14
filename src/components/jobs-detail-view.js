import React from "react";
import { Card } from 'antd';
import { useParams } from "react-router";


const JobsListView = ({jobs}) => {
 let {id} = useParams();
 let jobid = parseInt(id,10);
 
 const updateditems = jobs.filter((element) =>{
  return element.id === jobid;
});

     return(
       <>     
         {
           updateditems.map(data => {
           
             return(
              <div key={data.id}>
                  <div className="site-card-border-less-wrapper">
                     <Card title={`${data.title}`} bordered={false}>
                         <p>company Name : {data.company_name}</p>
                         <p>Job Category : {data.category}</p>
                         <p>Published Date : {data.publication_date}</p>
                         <p>Job type : {data.job_type}</p>
                         <p>Required Location : {data.candidate_required_location}</p>
                         <p>Jobs URL : <a href={data.url} target="_blank">{data.url}</a></p>
                         <p>Salary : {data.salary} </p>
                    </Card>
                 </div>        
              </div>
             );
             })
         }
       </>
     );
};

export default JobsListView;