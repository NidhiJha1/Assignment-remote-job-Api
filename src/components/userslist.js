import React from "react";
import { Card, Col, Row } from 'antd';
import { Link } from "react-router-dom";

const UserList = ({filteredTitle}) => {
  
 
    return(
           <>
            <div className="site-card-wrapper">
           
            <Row gutter={16}>
             {

              filteredTitle.map((data) =>{
              return(
               
              <Col span={8} key={data.id} >
                <Link to={`/detail/${data.id}`}> 
                <Card title={`Job title: ${data.title}`} bordered={false} className="card-wrapper">
                <p>Company Name:{data.company_name}</p>
                <p>Title:{data.title}</p>
                <p>Category:{data.category}</p>
                <p>Published Date:{data.publication_date}</p>
                <p>Job type:{data.job_type}</p>
                <p>Required Location:{data.candidate_required_location}</p>
                </Card>
                </Link> 
              </Col>
              
              );
            } ) 
        }
            </Row>
          </div>

      </>
    );
};

export default UserList;