import React, { useEffect, useState } from "react";
import { tailorShopData } from "../../../Utils/APIs/tailorApi";
import { allOrdersGetApi } from "../../../Utils/APIs/tailorApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { orderDeleteApi } from "../../../Utils/APIs/tailorApi";

const TailorOrders = () => {
  let tailordId;
  const navigate = useNavigate();
  const [tailorOrders, setTailorOrders] = useState();
  useEffect(() => {
    tailordId = localStorage.getItem("id");
    TailorOrdersData(tailordId);
  }, []);

  async function TailorOrdersData(tailordId) {
    const res = await allOrdersGetApi(tailordId);
    try {
      if (res.data.status == 200) {
        // toast.success(res.data.message);
        setTailorOrders(res.data.orders);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  function OrderDetail(id) {
    navigate("/tailor/dashboard/viewOrderDetails");
    localStorage.setItem("userViewOrderDetailId", id);
  }

  async function orderDelete(id) {
    const res = await orderDeleteApi(id);
    try {
      if (res.data.status == 200) {
        toast.success(res.data.message);
        TailorOrdersData(localStorage.getItem("id"));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <h1>Tailors Orders</h1>

      <TableContainer
        sx={{ maxWidth: 1950 }}
        component={Paper}
        style={{ margin: "auto" }}
      >
        <Table
          // style={{ margin: "auto" }}
          aria-label="simple table"
        >
          <TableHead style={{ backgroundColor: "black" }}>
            <TableRow>
              {/* <TableCell style={{ color: "white" }}>Profile</TableCell> */}
              <TableCell
                align="right"
                style={{ color: "white", textAlign: "center" }}
              >
                User Name
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
                User email
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "white", textAlign: "center" }}
              >
                User Address
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "white", textAlign: "center" }}
              >
                Tailor name
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
            {tailorOrders?.length !== 0 ? (
              tailorOrders?.map((row) => (
                <TableRow
                  key={row?._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    <img
                      src={row?._doc?.userProfile}
                      alt="profile"
                      style={{
                        width: "45px",
                        height: "45px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </TableCell> */}
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.name}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.phnNo}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.email}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.address}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    {row?.tailorName}
                  </TableCell>
                  <TableCell align="right" style={{ textAlign: "center" }}>
                    <Button
                      variant="outlined"
                      onClick={() => OrderDetail(row?._id)}
                    >
                      View Details
                    </Button>
                    <Button
                      style={{ marginLeft: "15px" }}
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => orderDelete(row?._id)}
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
    </div>
  );
};

export default TailorOrders;
