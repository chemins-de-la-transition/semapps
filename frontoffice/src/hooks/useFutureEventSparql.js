import { useMemo } from "react";

const useFutureEventSparql = () => {
  return useMemo(() => {
    const now = new Date();
    return [
      {
        type: "bgp",
        triples: [
          {
            "subject": { termType: "Variable", value:"s1" },
            "predicate": { termType:"NameNode", value: "http://virtual-assembly.org/ontologies/pair#startDate" },
            "object": { termType:"Variable", value: "startDate" }
          }
        ]
      },{
        type: "filter",
        expression:{
          type: "operation",
          operator: ">",
          args:[
            {
              termType: "Variable",
              value: "startDate"
            },
            {
              termType: "Literal",
              datatype: {
                termType:"NamedNode",
                value:"http://www.w3.org/2001/XMLSchema#dateTime"
              },
              language: "",
              // value: "2022-11-17T10:20:13+05:30"
              value: now.toISOString()
            }
          ]
        }
      }
    ]
  }, []);
};

export default useFutureEventSparql;
