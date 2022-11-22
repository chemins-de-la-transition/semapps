import React, { useState, useEffect, useMemo, useCallback } from "react";
import qs from "query-string";
import { lightFormat } from "date-fns";
import { useGetIdentity, useShowContext, useGetMany } from "react-admin";
import { useHistory } from 'react-router';
import { AuthDialog } from "@semapps/auth-provider";
import { defaultToArray } from "../../utils";
import Button from "../Button";

const RegistrationButton = ({ label: labelProp, mainButton }) => {
  const { identity } = useGetIdentity();
  const { record = {} } = useShowContext();
  const history = useHistory();
  const [openAuth, setOpenAuth] = useState(false);
  const { data: types, loading } = useGetMany('Type', defaultToArray(record['pair:hasType']));

  const registrationLink = useMemo(() => {
    if (!loading && record && identity && identity.id !== '') {
      if (![0,1].includes(record['cdlt:registrationOption'])) {
        return record['cdlt:registrationLink'];
      } else {
        const startDate = record['pair:startDate'] ? new Date(record['pair:startDate']) : null;
        const endDate = record['pair:endDate'] ? new Date(record['pair:endDate']) : null;
        return record['cdlt:jotformLink'] +
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
                typeVoyage: types.filter(t => t).map((t) => t['pair:label']).join(", "),
              },
              record['cdlt:priceRange'] && { prix: record['cdlt:priceRange'].replace(/[^0-9]/g, "") },
              {
                label: record['pair:label'],
                lepid: record.id,
                webid: identity.id,
                "nomComplet[first]": identity.webIdData['pair:firstName'],
                "nomComplet[last]": identity.webIdData['pair:lastName'],
              }
            )
          );
      }
    }
  }, [record, types, loading, identity])

  useEffect(() => {
    if (mainButton && registrationLink) {
      const query = new URLSearchParams(history.location.search);
      if (query.has('register') && identity) {
        if (identity.id !== '') {
          history.replace(history.location.pathname);
          setOpenAuth(false);
          window.location.href = registrationLink;
        } else {
          setOpenAuth(true);
        }
      }
    }
  }, [mainButton, history, identity, registrationLink]);

  const register = useCallback(async () => {
    try {
      await fetch(process.env.REACT_APP_MIDDLEWARE_URL + '_stats/click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userUri: identity.id,
          resourceUri: record.id
        })
      });
    } catch(e) {
      // Ignore if there is an error
      console.error(e);
    }
    window.location.href = registrationLink;
  }, [registrationLink, record, identity]);

  if (record['pair:hasType'] && loading) return null;

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        typographyVariant="button1"
        onClick={identity && identity.id === '' ? () => setOpenAuth(true) : register}
      >
        {labelProp}
      </Button>
      <AuthDialog
        open={openAuth}
        onClose={() => setOpenAuth(false)}
        redirect={history.location.pathname + '?register'}
        message="Vous devez vous connecter pour pouvoir vous inscrire"
      />
    </>
  );
};

export default RegistrationButton;
