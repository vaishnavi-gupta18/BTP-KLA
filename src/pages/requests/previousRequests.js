import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header';
import { CircularProgress } from '@mui/material';

import styles from './requests.module.css'
import FormCard from '../../components/formCard';
import RequestTile from '../../components/requestTile';

const requests = [
  {
    "id": "1",
    "title": "Password Change",
    "status": "dismissed",
    "requestedBy": "Shreya Bhagat",
    "date": "14/02/2024",
    "description": "I need to renew my worker’s password since he has been removed from the current team. I need to renew my worker’s password since he has been removed from the current team. "
  },
  {
    "id": "2",
    "title": "Form Updates",
    "status": "dismissed",
    "requestedBy": "Nikita",
    "date": "14/02/2024",
    "description": "New fields created for the additional automation at the input weighing panel"
  },
  {
    "id": "4",
    "title": "Form Updates",
    "status": "replied",
    "requestedBy": "Nikita",
    "date": "14/02/2024",
    "description": "New fields created for the additional automation at the input weighing panel",
    "replies": [
      {
        "repliedBy": "Shreya Bhagat",
        "date": "14/02/2024",
        "description": "Sent the new password. Please check and reset it "
      }
    ]
  },
]

const Dashboard = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async (e) => {
    const token = localStorage.getItem("token")
    let url = ""
    if (localStorage.getItem("role") == "ADMIN") {
      url = "admin/employee/fetch-all-resolved-requests"
    }
    else {
      url = "worker/fetch-resolved-requests"
    }
    try {
      const response = await fetch("http://localhost:8080/api/" + url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      setLoading(false)
      const res = await response.json();
      if (response.status == 200) {
        console.log(res)
        setRequests(res.data)
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, []);

  return (
    <>
      <Header
        heading="Requests"
        subheading="Send and manage requests for easier workflow"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {loading && <CircularProgress />}
          {requests ? requests.map((request, key) =>
            <FormCard>
              <RequestTile
                id={request.request_id}
                title={request.title}
                status={request.accepted ? "Accepted" : "Dismissed"}
                requestedBy="Vaishnavi Gupta"
                date={request.request_date}
                description={request.request_description}
                resolvedBy="Kritika"
                resolvedDate={request.resolve_date}
                adminComment={request.admin_comment}
              />
            </FormCard>
          ) : (
            <FormCard>
              No previous requests
            </FormCard>
          )}
        </div>
      </div >
    </>
  );
};

export default Dashboard;
