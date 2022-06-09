import React, { useState } from "react";
import Button from "../Button";
import classes from "./style.module.scss";
import axios from "axios";

const Invoice = ({
  suspect = false,
  id,
  supplier,
  amount,
  reference,
  data_error,
  due_date,
  date,
  refresh,
  header = false
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [refuteLoading, setRefuteLoading] = useState(false);

  const onConfimSubmit = () => {
    setConfirmLoading(true);
    /**
     * @todo error handling
     */
    axios
      .patch(`http://13.41.55.97/invoice/${id}/`, { error_state: 2 })
      .then((res) => {
        refresh();
      });
  };

  const onRefuteSubmit = () => {
    setRefuteLoading(true);
    axios
      .patch(`http://13.41.55.97/invoice/${id}/`, { error_state: 3 })
      .then((res) => {
        refresh();
      });
  };


  
  return (
    <div
      className={`${classes.invoice} ${
        suspect && classes["invoice--suspect"]
      }`}>
      <div>{supplier}</div>
      <div>{amount}</div>
      <div>{reference}</div>
      <div>{data_error}</div>
      <div>{due_date}</div>
      <div>{date}</div>
      {suspect && !header && (
        <>
          <Button loading={confirmLoading} onClick={onConfimSubmit} color>
            Confirm
          </Button>
          <Button loading={refuteLoading} onClick={onRefuteSubmit}>
            Refute
          </Button>
        </>
      )}
      {header && (
        <>
          <div style={{ width: "9rem" }}></div>
          <div style={{ width: "8rem" }}></div>
        </>
      )}
    </div>
  );
};

export default Invoice;
