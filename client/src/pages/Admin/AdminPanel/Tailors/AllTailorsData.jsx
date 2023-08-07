import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTailorApi } from "../../../../Utils/APIs/tailorApi";
import { toast } from "react-toastify";
import { AdminGetAllTailorsAPI } from "../../../../Utils/APIs/adminAPI";

const AllTailorsData = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    GetAllUsers();
  }, []);

  const GetAllUsers = async () => {
    setIsLoading(true);
    let result = await AdminGetAllTailorsAPI();
    if (result?.data?.status === 200) {
      setUserData(result?.data?.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error(result?.data?.message || result);
    }
  };

  async function DeleteUser(userId) {
    let res = await deleteTailorApi(userId);
    if (res?.data?.status === 200) {
      toast.success(res?.data?.message);
      GetAllUsers();
    } else {
      toast.error(res?.data?.message || res);
    }
  }

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <h1>All Tailors</h1>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>Profile</TableCell>
              <TableCell
                align="right"
                style={{ color: "white", textAlign: "center" }}
              >
                Name
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "white", textAlign: "center" }}
              >
                Phone#
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "white", textAlign: "center" }}
              >
                email
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "white", textAlign: "center" }}
              >
                shop name
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "white", textAlign: "center" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.length !== 0 ? (
              userData.map((row) => (
                <TableRow
                  key={row?._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={row?.image}
                      alt="profile"
                      style={{
                        width: "45px",
                        height: "45px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.name}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.contactNumber}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.email}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.shopName}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => DeleteUser(row?._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableCell colSpan="5" style={{ textAlign: "center" }}>
                <b>No User Found</b>
              </TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllTailorsData;
