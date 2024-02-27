import { Container, Grid } from "@mui/material";
// import style from "./style.module.css";
import BasicModal from "../../Components/BasicModal"; 
import FormDrivers from "../../Components/FormDrivers"; 
import DynamicDataTable from "../../Components/DynamicDataTable";

import { useEffect, useState } from "react";

const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "firstName",
      headerName: "Nombre",
      width: 130,
    },
    {
      field: "lastName",
      headerName: "Apellido",
      width: 130,
    },
    {
      field: "Role",
      headerName: "Rol",
      width: 90,
      sortable: false,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 11, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 12, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 14, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 15, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 16, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DriversManager = () => {

    const [drivers, setDrivers] = useState([]); 

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
        
    //     Api.get('/drivers/get-all-drivers', {
    //         'Authorization': `Bearer ${token}`
    //       }).then(response => {
    //         setDrivers([...response.data.drivers])
    //         console.log(response.data.drivers); 
             
    //     }).catch(error => alert(error.message))
    //   }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={8} mb={2}>
           
          </Grid>
          <Grid  item xs={4} mb={2}>
             <BasicModal>
                <FormDrivers/> 
             </BasicModal>
          </Grid>
          <Grid item xs={12}>
            <DynamicDataTable rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DriversManager;