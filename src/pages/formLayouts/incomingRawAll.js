import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';

import styles from './incomingRawAll.module.css'
import FormCard from '../../components/formCard';
import ReportCard from "../../components/reportCard";

const data = [
  {
    "sample_no": "Green Peas",
    "time": "18:00",
    "blanching_result": "Positive",
    "action_taken": "Batch Accepted",
    "recorded_by": "John Doe"
  },
  {
    "sample_no": "Green Peas",
    "time": "18:00",
    "blanching_result": "Positive",
    "action_taken": "Batch Accepted",
    "recorded_by": "John Doe"
  },
  {
    "sample_no": "Green Peas",
    "time": "18:00",
    "blanching_result": "Positive",
    "action_taken": "Batch Accepted",
    "recorded_by": "John Doe"
  },
  {
    "sample_no": "Green Peas",
    "time": "18:00",
    "blanching_result": "Positive",
    "action_taken": "Batch Accepted",
    "recorded_by": "John Doe"
  },
]
const header = ["SNo.", "Raw Material Name", "View Report", "Batch Code", "Date of Arrival", "Supplier", "Rate"]

const IncomingRaw = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null)

  const fetchRecords = async (e) => {
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/fetch/incoming-raw-material/all", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })

      const res = await response.json();
      if (response.status == 200) {
        console.log(res)
        setData(res.data)
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRecords()
  }, []);

  return (
    <>
      <Header
        heading="Incoming Raw Material Inspection Record"
        subheading="Data entry for product parameters after final inspection"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          <FormCard>
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {header && header.map((head) => (
                      <TableCell>{head}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody stripedRows>
                  {data && data.map((row, index) => (
                    <TableRow
                      key={index}
                    >
                      <TableCell component="th" scope="row">{index}</TableCell>
                      <TableCell className={styles.colored}>{row.name}</TableCell>
                      <TableCell><VisibilityIcon sx={{ color: "grey" }} onClick={() => navigate("/incoming-raw/8/" + row.batch_code)} /></TableCell>
                      <TableCell className={styles.colored}>{row.batch_code}</TableCell>
                      <TableCell className={styles.colored} sx={{ cursor: "pointer" }}>{row.date_of_arrival.slice(0, 10)}</TableCell>
                      <TableCell>{row.supplier}</TableCell>
                      <TableCell>{row.rate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </FormCard>

        </div>
      </div >
    </>
  );
};

export default IncomingRaw;
