import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useRecordContext } from "ra-core";
import axios from "axios";
import qs from "query-string";
import { lightFormat } from "date-fns";

const JotformButton = (props) => {
  const [clicked, setClicked] = useState(false);
  const [types, setTypes] = useState();

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 3000);
    }
  }, [clicked]);

  const record = useRecordContext(props);
  const link = record[props.source];

  const id = record.id;
  const startDate = record["pair:startDate"]
    ? new Date(record["pair:startDate"])
    : null;
  const endDate = record["pair:endDate"]
    ? new Date(record["pair:endDate"])
    : null;
  const priceRange = record["cdlt:priceRange"];
  const label = record["pair:label"];
  const hasType = record["pair:hasType"];

  useEffect(() => {
    if (!hasType) return;
    Promise.all(hasType.map((t) => axios.get(t).then((r) => r.data))).then(
      setTypes
    );
  }, [hasType]);

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          setClicked(true);
          const query = qs.stringify(
            Object.assign(
              {},
              startDate && {
                "dateArrivee[day]": lightFormat(startDate, "dd"),
                "dateArrivee[month]": lightFormat(startDate, "MM"),
                "dateArrivee[year]": lightFormat(startDate, "yyyy"),
              },
              endDate && {
                "dateDepart[day]": lightFormat(endDate, "dd"),
                "dateDepart[month]": lightFormat(endDate, "MM"),
                "dateDepart[year]": lightFormat(endDate, "yyyy"),
              },
              types && {
                typeVoyage: types.map((t) => t["pair:label"]).join(", "),
              },
              { label },
              { lepid: id },
              priceRange && { prix: priceRange.replace(/[^0-9]/g, "") }
            )
          );

          navigator.clipboard.writeText(
            link + query
          );
        }}
        disabled={clicked}
      >
        {clicked
          ? "Copié dans le presse-papier ✅"
          : "🔗 Lien vers formulaire Jotform"}
      </Button>
    </>
  );
};

export default JotformButton;
