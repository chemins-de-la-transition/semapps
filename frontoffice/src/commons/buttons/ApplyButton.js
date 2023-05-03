import React from "react";
import { useShowContext, Link, linkToRecord } from "react-admin";
import Button from "../Button";
import ContactButton from "./ContactButton";

const ApplyButton = ({ mainButton }) => {
  const { record } = useShowContext();
  if (!record) return null;
  return record.type === "pair:Event" && record["pair:partOf"] && !record["cdlt:registrationOutsideCourse"] ? (
    <Link
      to={linkToRecord(
        "/Course",
        Array.isArray(record["pair:partOf"])
          ? record["pair:partOf"][0]
          : record["pair:partOf"],
        "show"
      )}
    >
      <Button variant="contained" color="primary" typographyVariant="button1">
        Contacter les organisateurs·ices
      </Button>
    </Link>
  ) : (
    <ContactButton label="Contacter les organisateurs·ices" mainButton={mainButton} />
  );
};

export default ApplyButton;
