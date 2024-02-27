import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Api from "../Api";

export default function FormDrivers({ drivers, setDrivers }) {
  const handlerSudmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token");

    const data = new FormData(event.currentTarget);

    const driver = {
      name: data.get("name"),
      lastName: data.get("lastname"),
      address: data.get("address"),
      city: data.get("lastname"),
      zip: data.get("zip"),
      phone: data.get("phone"),
      ssn: data.get("ssn"),
      dob: data.get("dob"),
    };

    // Api.post('/drivers/add-drivers', driver, {
    //     'Authorization': `Bearer ${token}`
    //   }).then(response => {
    //     setDrivers([response.data.driver, ...drivers])
    //     alert("Driver Save");

    // }).catch(error => alert(error.message))

    console.log(driver);
  };

  return (
    <Box
      component="form"
      onSubmit={handlerSudmit}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField name="name" label="Name" variant="standard" />
      <TextField name="lastname" label="Last Name" variant="standard" />
      <TextField name="address" label="Address" variant="standard" />
      <TextField name="city" label="City" variant="standard" />
      <TextField name="zip" label="Zip" variant="standard" />
      <TextField name="phone" label="Phone" variant="standard" />
      <TextField name="ssn" label="Ssn" variant="standard" />
      <TextField
        id="date"
        label="Birthday"
        type="date"
        name="dob"
        defaultValue="2017-05-24"
        variant="standard"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" type="submit">
        Save
      </Button>
    </Box>
  );
}
