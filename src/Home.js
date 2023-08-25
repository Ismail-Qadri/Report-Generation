import React from 'react';
import Mainpage from './components/Mainpage';

const Home = () => {
  const data ={
    name: "Tech Store",
  }
  return (
    <>
    <Mainpage myData={data} />
    
    </>
  )
  
};

export default Home