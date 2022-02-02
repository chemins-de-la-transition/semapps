import React, { useState, useEffect } from "react";
import qs from "query-string";
import { lightFormat } from "date-fns";
import { useShowContext } from "react-admin";
import Button from "../Button";

const JotformButton = ({ label: labelProp }) => {
  const [types, setTypes] = useState();

  const { record = {} } = useShowContext();

  console.log("record", record);

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

  console.log(priceRange);

  useEffect(() => {
    console.log("=>", hasType);

    if (!hasType) return;
    const promisesArray = Array.isArray(hasType) ? hasType : [hasType];
    Promise.all(
      promisesArray.map((t) => {
        return fetch(t).then((e) => e.json());
      })
    ).then(setTypes);
  }, [hasType]);

  if (record.hasType && !types) return null;

  console.log("types", types);

  const href =
    "https://form.jotform.com/212243252835046?" +
    qs.stringify(
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
        { LEPId: id },
        priceRange && { prix: priceRange.replace(/[^0-9]/g, "") }
      )
    );

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        typographyVariant="button1"
        href={href}
      >
        {labelProp}
      </Button>
    </>
  );
};

export default JotformButton;
