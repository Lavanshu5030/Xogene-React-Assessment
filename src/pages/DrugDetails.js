import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DrugDetails = () => {
  const { drugName } = useParams();
  const [drugDetails, setDrugDetails] = useState(null);
  const [ndcs, setNdcs] = useState([]);

  useEffect(() => {
    const fetchDrugDetails = async () => {
      try {
        const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=${drugName}`);
        const conceptGroups = response.data.drugGroup.conceptGroup || [];
        const results = conceptGroups.flatMap(group => group.conceptProperties || []);
        if (results.length > 0) {
          const drug = results[0];
          setDrugDetails(drug);
          const ndcsResponse = await axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/rxcui/${drug.rxcui}/ndcs.json`);
          setNdcs(ndcsResponse.data.ndcGroup.ndcList.ndc || []);
          
        } else {
          setDrugDetails(null);
        }
      } catch (error) {
        console.error('Error fetching drug details', error);
      }
    };

    fetchDrugDetails();
  }, [drugName]);

  if (!drugDetails) {
    return <div>Loading...</div>;
  }

  // if (drugDetails) {
  //   return  <div><pre>{JSON.stringify(drugDetails, null, 2) } {JSON.stringify(ndcs, null, 2) }</pre></div>;;
  // }

  // {
  //   "rxcui": "596928",
  //   "name": "duloxetine 20 MG Delayed Release Oral Capsule [Cymbalta]",
  //   "synonym": "Cymbalta 20 MG Delayed Release Oral Capsule",
  //   "tty": "SBD",
  //   "language": "ENG",
  //   "suppress": "N",
  //   "umlscui": ""
  // } [
  //   "00002323560",
  //   "50436997901"
  // ]

  return (
    <div>
      <h2>{drugDetails.name}</h2>
      <p><strong>rxcui:</strong> {drugDetails.rxcui}</p>
      <p><strong>Synonyms:</strong> {drugDetails.synonym ? drugDetails.synonym : 'None'}</p>
      <h3>NDCs:</h3>
      <ul>
        {ndcs?.map((ndc) => (
          <li key={ndc}>{ndc}</li>
        ))}
      </ul>
    </div>
  );
};

export default DrugDetails;
