import React from "react";
import { useShowContext, Link, linkToRecord } from "react-admin";
import Button from "../Button";
import ContactButton from "./ContactButton";

const ApplyButton = () => {
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
        Je candidate au voyage
      </Button>
    </Link>
  ) : (
    <ContactButton label="Je candidate" />
  );
};

export default ApplyButton;
