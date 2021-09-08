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

  const id = record.id;
  const startDate = new Date(record["pair:startDate"]);
  const endDate = new Date(record["pair:endDate"]);
  const priceRange = record["cdlt:priceRange"];
  const label = record["pair:label"];
  const hasType = record["pair:hasType"];

  useEffect(() => {
    Promise.all(hasType.map((t) => axios.get(t).then((r) => r.data))).then(
      setTypes
    );
  }, [hasType]);

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={() => {
        setClicked(true);
        const query = qs.stringify({
          "dateArrivee[day]": lightFormat(startDate, "dd"),
          "dateArrivee[month]": lightFormat(startDate, "MM"),
          "dateArrivee[year]": lightFormat(startDate, "yyyy"),
          "dateDepart[day]": lightFormat(endDate, "dd"),
          "dateDepart[month]": lightFormat(endDate, "MM"),
          "dateDepart[year]": lightFormat(endDate, "yyyy"),
          typeVoyage: types.map((t) => t["pair:label"]).join(", "),
          label,
          LEPId: id,
          prix: priceRange.replace(/[^0-9]/g, ""),
        });

        navigator.clipboard.writeText(
          "https://form.jotform.com/212243252835046?" + query
        );
      }}
      disabled={clicked}
    >
      {clicked
        ? "Copié dans le presse-papier ✅"
        : "🔗 Lien vers formulaire Jotform"}
    </Button>
  );
};

export default JotformButton;
