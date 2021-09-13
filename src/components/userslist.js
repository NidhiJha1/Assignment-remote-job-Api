import React from "react";
import { Card, Col, Row } from 'antd';

const UserList = ({filteredTitle}) => {
    return(
       
          
            // <div className="site-card-border-less-wrapper" key={data.id}>
            //    <Card title="Card title" bordered={false} style={{ width: 300 }} >
            //    <p>{data.company_name}t</p>
            //    <p>{data.title}</p>
            //    <p>{data.category}</p>
            //    <p>{data.publication_date}</p>
            //    <p>{data.job_type}</p>
            //    </Card>
            //    </div>   

            <div className="site-card-wrapper">
            <Row gutter={16}>
             {

filteredTitle.map((data) =>{
              return(
              <Col span={8} key={data.id} >
                <Card title={`Job title: ${data.title}` } bordered={false} className="card-wrapper">
                <p>Company Name:{data.company_name}</p>
                <p>Title:{data.title}</p>
                <p>Category:{data.category}</p>
                <p>Published Date:{data.publication_date}</p>
                <p>Job type:{data.job_type}</p>
                <p>Required Location:{data.candidate_required_location}</p>
                </Card>
              </Col>
              );
            } ) 
        }
            </Row>
          </div>

      
    );
};

export default UserList;