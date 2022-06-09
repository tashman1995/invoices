import React from "react";
import classes from "./style.module.scss";
import Container from "../Container";
import Typography from "../Typography";
import Invoice from "../Invoice";
import Loading from "../Loading";

const InvoiceList = ({ title, invoices = [], loading, suspect, refresh }) => {


  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Loading loading={loading}>
        <div className={classes.list}>
          <Typography
            style={{ marginBottom: "1rem" }}
            variant="heading-secondary"
            component="h2">
            {title}
          </Typography>
          <Invoice
            supplier="Supplier"
            amount="Amount"
            reference="reference"
            data_error="Data Error"
            due_date="Due Date"
            date="Date"
            suspect={suspect}
            header={true}></Invoice>
          {invoices &&
            invoices.map((invoice) => (
              <Invoice
                key={invoice.id}
                refresh={refresh}
                suspect={suspect}
                {...invoice}
              />
            ))}
        </div>
      </Loading>
    </Container>
  );
};

export default InvoiceList;
