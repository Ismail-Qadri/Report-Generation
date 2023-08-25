import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
// import LoadingOverlay from "react-loading-overlay";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loader";

export default function homePage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleFileUpload = (event) => {
    setLoading(true);
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setLoading(false);
  };

  const handleFileSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      
      fetch("http://localhost:8080/pru/save", {
        method: "POST",
        body: formData,
      }).then((response) => {
        // 
        console.log(response.status);
      });
      alert("Your file is uploaded!");
      navigate("/SecondPage");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Wrapper>
        <div className="content">
          <br></br>
          <br></br>
          <>
            <div className="secone">
              <h3>Upload File here</h3>
              <br></br>
              <div >
                <input
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileUpload}
                />
                {loading? (
                  <Loader />
                ) : null} 
              </div>
            </div>
          </>
          <br></br>
          <button
            onClick={handleFileSubmit}
            nav
            disabled={!file}
            className="btn"
          >
            <b>Upload</b>
          </button>
        </div>
      </Wrapper>
    </div>
  );
}



 const Wrapper = styled.section`
     padding: 4.1rem 0;
     background-color: rgb(232,232,232);
    .content {
      width: 50%;
      margin-left:300px;
      position: absolute;
      top: 30%;
      text-align: center;
      text-align: center;
      border: 2px solid #528bc8;
      padding: 2px;
      display: flex;
      flex-direction: column; 
      justify-content: center; 
      /* border: 2px solid #4CAF50; Add a 2px solid border with a green color */
      border-radius: 5px; /* Add rounded corners to the border */
      box-shadow: 0px 0px 10px #3d4d80; 
      
      // background-color: rgb(211,211,211);
    }
    .secone {
      // background-color: #fff;
    }
    .btn{
      width:100px;
      margin-left:245px;
    }`;

