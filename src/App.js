import React,{useEffect, useState} from "react";
import 'antd/dist/antd.css'; 
import {Route} from 'react-router-dom';
import './App.css';
import UserList from './components/userslist';
import SearchUser from "./components/search-user";
import JobsListView from "./components/jobs-detail-view";
import CategoryList from "./components/categorylist";


function App() {

  const [jobs,setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');
  const [categoryfilter, setCategoryFilter] = useState('');
  const [dateFilter, setFilteredDate] = useState('');
  const [filteredTitle, setFilteredTitle] = useState([]);

  useEffect (() => {
    const  fetchData = async() => {
        setIsLoading(true);
         try{
           const response = await fetch('https://remotive.io/api/remote-jobs');
           if(!response.ok){
            throw new Error('Something went Wrong');
          }
           const result = await response.json();
           setJobs(result.jobs);
           setIsLoading(false);
           console.log(result);
  
         }catch(error){
           console.log(error);
         }
    };
    fetchData();
  },[]);

// search by title code
  useEffect(() => {
    setFilteredTitle(
      jobs.filter(item => {
        return item.title.toLowerCase().includes(searchTitle.toLowerCase())
      })
    )
  }, [searchTitle,jobs]);
//search by category
  useEffect(() => {
    setFilteredTitle(
      jobs.filter(item => {
        return item.category.toLowerCase().includes(categoryfilter.toLowerCase()) 
      })
    )
  }, [categoryfilter,jobs]);

  useEffect(() => {
    setFilteredTitle(
      jobs.filter(item => {
        return item.publication_date.toLowerCase().includes(dateFilter.toLowerCase()) 
      })
    )
  }, [dateFilter,jobs]);


  if(isLoading){
    return (
      <div className="loading-wrapper"><p>Loading...</p></div>
    );
  }

  return (
    <>
    <div>
         <Route path='/' exact>
             <SearchUser setSearchTitle={setSearchTitle}/> 
             <CategoryList jobs={jobs} setCategoryFilter={setCategoryFilter} setFilteredDate={setFilteredDate}/>
             <UserList filteredTitle={filteredTitle}/>         
          </Route>
          
        <Route path='/detail/:id'>
          <JobsListView jobs={jobs}/>
        </Route>
      
    </div>
    </>
  );
}

export default App;
