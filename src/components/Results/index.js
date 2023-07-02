import React, { useEffect, useState } from "react";
import { graphEndpoint } from "../../config";
import axios from "axios";
import { shortenAddress } from "@usedapp/core";
import { ethers } from "ethers";
import moment from "moment";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResults();
  }, [results]);

  const getResults = async () => {
    const res = await axios.post(graphEndpoint, {
      query: `
      {
        resultsDeclareds(orderBy:_winAmount,orderDirection: desc){
          id,
          _betId,
          _choice,
          _outcome,
          _amount,
          _winAmount,
          _player,
          _result,
          _time
        }
      }
      `,
    });

    setResults(res.data.data.resultsDeclareds);
  };

//  console.log(results);

  return (
    <div className="d-flex justify-content-center align-items-center mw-80">
      <table class="table table-warning mw-80 tb-main">
        <thead>
          <tr>
            <th scope="col" class="th-1">Poisition</th>
            <th scope="col" class="th-2">Address</th>
            <th scope="col" class="th-3">Bet</th>
            <th scope="col" class="th-31">Result</th>
            <th scope="col" class="th-4">Date</th>
            <th scope="col" class="th-5">Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, i) => {
            return (
              <tr key={i}>
                <th scope="row"><span>{i < 9 ? "0" : null}{i + 1}</span></th>
                <td>{shortenAddress(result._player)}</td>
                <td>{ethers.utils.formatEther(result._amount)}</td>
                <td scope="row">
                  {result._result == 0 ? "<span class='rz-0'>Win</span>" : null}
                  {result._result == 1 ? '<span class="rz-1">Loose</span>' : null}
                  {result._result == 2 ? '<span class="rz-2">Tie</span>' : null}
                </td>

                <td>
                  {moment.unix(result._time).format("DD/MM/YYYY")}
                </td>
                <td>
                  {moment.unix(result._time).format("HH:mm:ss")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
