import React, { useEffect, useState } from "react";
import Container from "./Components/Container";
import InvoiceList from "./Components/InvoiceList";
import Typography from "./Components/Typography";
import "./styles/index.scss";
import Counter from "./Components/Counter";
import useFetch from "./app/hooks/useFetch";

function App() {

  const { data: suspectInvoices = [], loading: suspectLoading } = useFetch({
    method: "GET",
    url: "/?error_state=1",
  });
  
  const { data: errorInvoices = [], loading: errorLoading } = useFetch({
    method: "GET",
    url: "/?error_state=2",
  });
  const { data: correctInvoices = [], loading: correctLoading } = useFetch({
    method: "GET",
    url: "/?error_state=3",
  });

  return (
    <div className="App">
      <Container
        style={{
          marginBottom: "2rem",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography variant="heading-primary" component="h1">
          Invoice Overview
        </Typography>
        <Counter
          suspect={suspectInvoices}
          error={errorInvoices}
          correct={correctInvoices}
        />
      </Container>
      <InvoiceList
        title="Suspect Invoices"
        invoices={suspectInvoices}
        loading={suspectLoading}
        suspect={true}
      />
      <InvoiceList
        title="Confirmed Error Invoices"
        invoices={errorInvoices}
        loading={errorLoading}
      />
      <InvoiceList
        title="Confirmed Correct Invoices"
        invoices={correctInvoices}
        loading={correctLoading}
      />
    </div>
  );
}

export default App;
