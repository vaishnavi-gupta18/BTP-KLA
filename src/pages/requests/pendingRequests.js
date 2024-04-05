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
    "status": "requested",
    "requestedBy": "Shreya Bhagat",
    "date": "14/02/2024",
    "description": "I need to renew my worker’s password since he has been removed from the current team. I need to renew my worker’s password since he has been removed from the current team. "
  },
  {
    "id": "2",
    "title": "Form Updates",
    "status": "requested",
    "requestedBy": "Nikita",
    "date": "14/02/2024",
    "description": "New fields created for the additional automation at the input weighing panel"
  },
  {
    "id": "3",
    "title": "Password Change",
    "status": "requested",
    "requestedBy": "Shreya Bhagat",
    "date": "14/02/2024",
    "description": "I need to renew my worker’s password since he has been removed from the current team"
  },
  {
    "id": "4",
    "title": "Form Updates",
    "status": "requested",
    "requestedBy": "Nikita",
    "date": "14/02/2024",
    "description": "New fields created for the additional automation at the input weighing panel"
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
      url = "admin/employee/fetch-all-pending-requests"
    }
    else {
      url = "worker/fetch-pending-requests"
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
          {requests && requests.length > 0 ? requests.map((request, key) =>
            <FormCard>
              <RequestTile
                id={request.request_id}
                title={request.title}
                status="requested"
                requestedBy={request.request_from}
                date={request.request_date}
                description={request.request_description}
                fetchRequests={fetchRequests}
              />
            </FormCard>
          ) : (
            <FormCard>
              No pending requests
            </FormCard>
          )}
        </div>
      </div >
    </>
  );
};

export default Dashboard;
