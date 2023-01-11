
export const publicationStatusInitialize = (record) => {
  if (typeof record['cdlt:hasPublicationStatus'] != "boolean") {
    if (record['cdlt:hasPublicationStatus'] === process.env.REACT_APP_MIDDLEWARE_URL+"publication-status/valide") {
      record['cdlt:hasPublicationStatus'] = true;
    } else {
      record['cdlt:hasPublicationStatus'] = false;
    }
  }
  return record;
}

export const publicationStatusTransform = (data) => {
  if (data["cdlt:hasPublicationStatus"]) {
    data["cdlt:hasPublicationStatus"] = process.env.REACT_APP_MIDDLEWARE_URL+"publication-status/valide";
  } else {
    data["cdlt:hasPublicationStatus"] = process.env.REACT_APP_MIDDLEWARE_URL+"publication-status/en-cours";
  }
  return data;
}
