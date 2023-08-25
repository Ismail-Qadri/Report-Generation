import styled from "styled-components";
import { useState } from 'react'
import React from 'react';
import "./secondpage.css";


const Contact = () => {
  const [file, setFile] = useState(null);
  const [dailyCasesPdfUrl, setDailyCasesPdfUrl] = useState("");
  const [alertOneDayPdfUrl, setAlertOneDayPdfUrl] = useState("");
  const [alertTwoDaysPdfUrl, setAlertTwoDaysPdfUrl] = useState("");
  const [bench, setBench] = useState("");
  // const header = new Headers({ "Access-Control-Allow-Origin": "*" });

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8082/Details/excel", {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Daily Unassigned Cases.xlsx";
      document.body.appendChild(link);
      link.click();
      setDailyCasesPdfUrl(url);
      setAlertOneDayPdfUrl("");
      setAlertTwoDaysPdfUrl("");
    } catch (error) {
      console.log("Error fetching PDF: ", error);
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8082/Details/new", {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "One day before assignation ended.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setAlertOneDayPdfUrl("");
      setDailyCasesPdfUrl(url);
      setAlertTwoDaysPdfUrl("");
      
    } catch (error) {
      console.log("Error fetching PDF: ", error);
    }
    
  };
  const handleChange = async () => {
    try {
      const response = await fetch("http://localhost:8082/Details/new2", {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "After two day of assignation ended.xlsx";
      document.body.appendChild(link);
      link.click();
      setAlertOneDayPdfUrl("");
      setDailyCasesPdfUrl("");
      setAlertTwoDaysPdfUrl(url);
      setUrl("");
    } catch (error) {
      console.log("Error fetching PDF: ", error);
    }
  };


  const handleBench = async () => {
    try {
      const response = await fetch("http://15.207.105.91:8082/Details/new3", {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Bench.xlsx";
      document.body.appendChild(link);
      link.click();
      setAlertOneDayPdfUrl("");
      setDailyCasesPdfUrl("");
      setAlertTwoDaysPdfUrl("");
      setBench(url);
      setUrl("");
    } catch (error) {
      console.log("Error fetching PDF: ", error);
    }
  };
  
  return (
 
      <div className="full">
        <div className="one">
          <h3>Daily Unassigned Cases </h3>
        <button onClick={handleClick}>  <b>Report</b></button>
        {dailyCasesPdfUrl && (
            <embed
              type="application/pdf"
              src={dailyCasesPdfUrl}
              width="100%"
              height="0px"
            />
          )}
         </div>

         <div className="two">
          <h3 >Unassignation one day before assignation ended</h3>
        
        <button onClick={handleSubmit}>  <b>Report</b></button>
        {alertOneDayPdfUrl && (
            <embed
              type="application/pdf"
              src={alertOneDayPdfUrl}
              width="100%"
              height="0px"
            />
          )}
        </div>

        <div className="three">
          <h3>Unassignation after two day of assignation ended</h3>
          <button onClick={handleChange}> <b>Report</b></button>
          {alertTwoDaysPdfUrl && (
            <embed
              type="application/pdf"
              src={alertTwoDaysPdfUrl}
              width="100%"
              height="0px"
            />
          )}
        </div>

        <div className="four">
          <h3>Daily Bench Cases </h3>
        <button onClick={handleBench}>  <b>Report</b></button>
        {bench && (
            <embed
              type="application/pdf"
              src={bench}
              width="100%"
              height="0px"
            />
          )}
         </div>
      </div>
      

  );
};
export default Contact;
