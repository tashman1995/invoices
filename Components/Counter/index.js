import React from "react";
import SingleLineGrid from "../SingleLineGrid";
import Typography from "../Typography";

const Counter = ({ suspect, correct, error }) => {
  return (
    <SingleLineGrid>
      <div>
        <Typography variant="text">
          Suspect Invoices: <b>{suspect ? suspect.length : ""}</b>
        </Typography>
        <Typography>
          Correct Invoices: <b>{correct ? correct.length : ""}</b>
        </Typography>
        <Typography>
          Error Invoices: <b>{error ? error.length : ""}</b>
        </Typography>
      </div>
    </SingleLineGrid>
  );
};

export default Counter;
