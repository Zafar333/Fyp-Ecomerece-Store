import React, { useEffect, useState } from "react";
import { singleViewOrdersGetApi } from "../../../Utils/APIs/tailorApi";
import { toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import arrowRight from "../../../assets/arrowRight.png";
import arrowLeft from "../../../assets/arrowLeft.png";
import "./viewOrderDetail.css";

const ViewOrderDetails = () => {
  const [singleviewOrder, setSingleViewOrder] = useState();
  const [countImg, setCountImg] = useState(0);

  useEffect(() => {
    let id = localStorage.getItem("userViewOrderDetailId");
    console.log("idddd", id);
    ViewOrderDetails(id);
  }, []);
  useEffect(() => {
    console.log("ViewOrders", singleviewOrder);
  }, [singleviewOrder]);

  async function ViewOrderDetails(id) {
    const res = await singleViewOrdersGetApi(id);
    try {
      if (res.data.status == 200) {
        toast.success(res.data.message);
        setSingleViewOrder([res.data.orders]);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  // Image Next crousel function code is start here
  function ImgNext() {
    if (countImg < singleviewOrder[0]?.orderDesignImgs?.length - 1) {
      let increment = countImg + 1;
      setCountImg(increment);
    } else {
      setCountImg(singleviewOrder[0]?.orderDesignImgs?.length - 1);
    }
  }
  // Image Next crousel function code is end here

  // Image previous crousel function code is start here
  function ImgPrevious() {
    if (countImg > 1) {
      let decrement = countImg - 1;
      setCountImg(decrement);
    } else {
      setCountImg(0);
    }
  }

  return (
    <div>
      <h1>User Measurements</h1>
      <div className="viewOrderContainer">
        <TableContainer
          sx={{ maxWidth: 2300 }}
          component={Paper}
          style={{ margin: "auto" }}
        >
          <Table
            // style={{ margin: "auto" }}
            aria-label="simple table"
          >
            <TableHead style={{ backgroundColor: "black" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>Profile</TableCell>
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
                  Shirt Length
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Trouser length
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Chest
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Daman
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  ArmHole
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Bicep
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Hip
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Shoulders
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Sleeves
                </TableCell>
                {/* <TableCell
                  align="right"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Actions
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {singleviewOrder?.length !== 0 ? (
                singleviewOrder?.map((row) => (
                  <TableRow
                    key={row?._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        // src={row?.image}
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
                      {row?.shirtLength}
                    </TableCell>
                    <TableCell align="right" style={{ textAlign: "center" }}>
                      {row?.trouserLength}
                    </TableCell>
                    <TableCell align="right" style={{ textAlign: "center" }}>
                      {row?.chest}
                    </TableCell>
                    <TableCell align="right" style={{ textAlign: "center" }}>
                      {row?.daman}
                    </TableCell>
                    <TableCell align="right" style={{ textAlign: "center" }}>
                      {row?.armHole}
                    </TableCell>
                    <TableCell align="right" style={{ textAlign: "center" }}>
                      {row?.bicep}
                    </TableCell>
                    <TableCell align="right" style={{ textAlign: "center" }}>
                      {row?.hip}
                    </TableCell>
                    <TableCell align="right" style={{ textAlign: "center" }}>
                      {row?.shoulder}
                    </TableCell>
                    <TableCell align="right" style={{ textAlign: "center" }}>
                      {row?.sleeves}
                    </TableCell>
                    {/* <TableCell align="right" style={{ textAlign: "center" }}>
                      <Button
                        variant="outlined"
                        //   onClick={() => OrderDetail(row?._id)}
                      >
                        View Details
                      </Button>
                    </TableCell> */}
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

        {/* {singleviewOrder?.length > 0 ? (
        <div className="singleViewOrderImgCard">
          <div className="singleTailorShopCard">
            <div className="singleTailorCrouselButtonBlock">
              <div className="singleTailorCrouselButtons">
                <div style={{ backgroundColor: "white" }}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                    }}
                    src={arrowLeft}
                    onClick={() => ImgPrevious()}
                  />
                </div>
                <div style={{ backgroundColor: "white" }}>
                  <img
                    src={arrowRight}
                    onClick={() => ImgNext()}
                    style={{
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
            <img
              className="singleTailorCardImgCrousel"
              src={singleviewOrder[0]?.orderDesignImgs[countImg]}
              alt=""
            />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )} */}

        {singleviewOrder?.length > 0 ? (
          <div className="orderImgViewCard">
            <div className="singleViewOrderImgCard">
              <div className="crouselButtonBlock">
                <div className="crouselButtons">
                  <div style={{ backgroundColor: "white" }}>
                    <img
                      style={{
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                      }}
                      src={arrowLeft}
                      onClick={ImgPrevious}
                    />
                  </div>
                  <div style={{ backgroundColor: "white" }}>
                    <img
                      src={arrowRight}
                      onClick={ImgNext}
                      style={{
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
              <img
                className="CardImgCrousel"
                src={singleviewOrder[0]?.orderDesignImgs[countImg]}
                alt=""
              />
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default ViewOrderDetails;
