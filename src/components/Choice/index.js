import React, { useState } from "react";
import rock from "../../images/rock.png";
import paper from "../../images/paper.png";
import scissors from "../../images/scissors.png";
import polygon from "../../images/polygon.svg";
import { rpsInterface } from "../../sdk";
import { rpsAddress } from "../../config";
import { ethers } from "ethers";
import { notify } from "../../helpers/alerts";
import { useGetBetAmounts } from "../../hooks";

const Choice = () => {
  const [select, setSelect] = useState(0);
  const betAmounts = useGetBetAmounts();
  const formattedBetAmounts = betAmounts
    ? betAmounts.toString().split(",")
    : [
        "1000000000000000",
        "2000000000000000",
        "3000000000000000",
        "4000000000000000",
        "5000000000000000",
      ];

  const queryParameters = new URLSearchParams(window.location.search);
  const refrrer = queryParameters.get("refrrer");

  const makeBet = async (amount) => {
    const betRefrrer = refrrer
      ? refrrer.toString()
      : ethers.constants.AddressZero.toString();

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const rpsContract = new ethers.Contract(rpsAddress, rpsInterface, signer);

      let tx = await rpsContract.makeBet(select, betRefrrer, {
        value: amount,
        gasLimit: 1000000,
      });

      await notify(
        "Waiting for Confirmation",
        "Waiting for transaction to confirm",
        "info"
      );
      await tx.wait();
      await notify(
        "Bet Successfull",
        "You have successfully entered",
        "success"
      );
    } catch (error) {
      console.log(error);
      // notify("Error !", "Failed Bet Please Try Again", "error");
      notify(error);
    }
  };

  return (
    <div>
      <div className="d-flex m-auto sel-buts-wr">
        <div class="sel-but-wr">
        {select == 0 ? (
              <button class="sel-but btn-success">
            ) : (
              <button
                onClick={() => setSelect(0)}
                class="sel-but"
              >                
            )}  
<svg width="248" height="248" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M123 0H45.5L9 44.5V247.5H123H134H206L248 213.5V11.5L238.5 0H134H123Z" class="sel-but-1" fill="#148062"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M114 0H36.5L0 44.5V247.5H114H125H207L239 220.5V0H125H114Z" class="sel-but-2" fill="#00CD94"/>
<mask id="path-3-inside-1_45_1750" fill="white">
<path d="M40.6674 6.9541H232.5V178H6V49.2198L40.6674 6.9541Z"/>
</mask>
<path d="M40.6674 6.9541H232.5V178H6V49.2198L40.6674 6.9541Z" class="sel-but-1" fill="#417B6B"/>
<path d="M40.6674 6.9541V5.9541H40.1942L39.8942 6.31992L40.6674 6.9541ZM232.5 6.9541H233.5V5.9541H232.5V6.9541ZM232.5 178V179H233.5V178H232.5ZM6 178H5V179H6V178ZM6 49.2198L5.22682 48.5856L5 48.8621V49.2198H6ZM231.5 6.9541V178H233.5V6.9541H231.5ZM232.5 177H6V179H232.5V177ZM7 178V49.2198H5V178H7ZM6.77318 49.854L41.4405 7.58829L39.8942 6.31992L5.22682 48.5856L6.77318 49.854ZM40.6674 7.9541H232.5V5.9541H40.6674V7.9541Z" fill="black" mask="url(#path-3-inside-1_45_1750)"/>
<mask id="path-5-inside-2_45_1750" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.709 186H6V199.741V239H114.709H123.291H207L232 216.851V186H123.291H114.709Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.709 186H6V199.741V239H114.709H123.291H207L232 216.851V186H123.291H114.709Z" fill="white"/>
<path d="M6 186V185H5V186H6ZM6 239H5V240H6V239ZM207 239V240H207.379L207.663 239.748L207 239ZM232 216.851L232.663 217.599L233 217.301V216.851H232ZM232 186H233V185H232V186ZM6 187H114.709V185H6V187ZM7 199.741V186H5V199.741H7ZM7 239V199.741H5V239H7ZM114.709 238H6V240H114.709V238ZM123.291 238H114.709V240H123.291V238ZM207 238H123.291V240H207V238ZM231.337 216.102L206.337 238.252L207.663 239.748L232.663 217.599L231.337 216.102ZM231 186V216.851H233V186H231ZM123.291 187H232V185H123.291V187ZM114.709 187H123.291V185H114.709V187Z" fill="#2B5A4D" mask="url(#path-5-inside-2_45_1750)"/>
</svg>
<img src="ims/rock_sel.png" alt="Rock" />
<div class="sel-tt">Rock</div>
</button>
        </div>

<div class="sel-but-wr">
{select == 1 ? (
      <button class="sel-but btn-success">
    ) : (
      <button
        onClick={() => setSelect(1)}
        class="sel-but"
      >                
    )}  
<svg width="248" height="248" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M123 0H45.5L9 44.5V247.5H123H134H206L248 213.5V11.5L238.5 0H134H123Z" class="sel-but-1" fill="#148062"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M114 0H36.5L0 44.5V247.5H114H125H207L239 220.5V0H125H114Z" class="sel-but-2" fill="#00CD94"/>
<mask id="path-3-inside-1_45_1750" fill="white">
<path d="M40.6674 6.9541H232.5V178H6V49.2198L40.6674 6.9541Z"/>
</mask>
<path d="M40.6674 6.9541H232.5V178H6V49.2198L40.6674 6.9541Z" class="sel-but-1" fill="#417B6B"/>
<path d="M40.6674 6.9541V5.9541H40.1942L39.8942 6.31992L40.6674 6.9541ZM232.5 6.9541H233.5V5.9541H232.5V6.9541ZM232.5 178V179H233.5V178H232.5ZM6 178H5V179H6V178ZM6 49.2198L5.22682 48.5856L5 48.8621V49.2198H6ZM231.5 6.9541V178H233.5V6.9541H231.5ZM232.5 177H6V179H232.5V177ZM7 178V49.2198H5V178H7ZM6.77318 49.854L41.4405 7.58829L39.8942 6.31992L5.22682 48.5856L6.77318 49.854ZM40.6674 7.9541H232.5V5.9541H40.6674V7.9541Z" fill="black" mask="url(#path-3-inside-1_45_1750)"/>
<mask id="path-5-inside-2_45_1750" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.709 186H6V199.741V239H114.709H123.291H207L232 216.851V186H123.291H114.709Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.709 186H6V199.741V239H114.709H123.291H207L232 216.851V186H123.291H114.709Z" fill="white"/>
<path d="M6 186V185H5V186H6ZM6 239H5V240H6V239ZM207 239V240H207.379L207.663 239.748L207 239ZM232 216.851L232.663 217.599L233 217.301V216.851H232ZM232 186H233V185H232V186ZM6 187H114.709V185H6V187ZM7 199.741V186H5V199.741H7ZM7 239V199.741H5V239H7ZM114.709 238H6V240H114.709V238ZM123.291 238H114.709V240H123.291V238ZM207 238H123.291V240H207V238ZM231.337 216.102L206.337 238.252L207.663 239.748L232.663 217.599L231.337 216.102ZM231 186V216.851H233V186H231ZM123.291 187H232V185H123.291V187ZM114.709 187H123.291V185H114.709V187Z" fill="#2B5A4D" mask="url(#path-5-inside-2_45_1750)"/>
</svg>
<img src="ims/paper_sel.png" alt="Rock" />
<div class="sel-tt">Paper</div>
</button>
</div>

<div class="sel-but-wr">
{select == 2 ? (
      <button class="sel-but btn-success">
    ) : (
      <button
        onClick={() => setSelect(2)}
        class="sel-but"
      >                
    )}  
<svg width="248" height="248" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M123 0H45.5L9 44.5V247.5H123H134H206L248 213.5V11.5L238.5 0H134H123Z" class="sel-but-1" fill="#148062"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M114 0H36.5L0 44.5V247.5H114H125H207L239 220.5V0H125H114Z" class="sel-but-2" fill="#00CD94"/>
<mask id="path-3-inside-1_45_1750" fill="white">
<path d="M40.6674 6.9541H232.5V178H6V49.2198L40.6674 6.9541Z"/>
</mask>
<path d="M40.6674 6.9541H232.5V178H6V49.2198L40.6674 6.9541Z" class="sel-but-1" fill="#417B6B"/>
<path d="M40.6674 6.9541V5.9541H40.1942L39.8942 6.31992L40.6674 6.9541ZM232.5 6.9541H233.5V5.9541H232.5V6.9541ZM232.5 178V179H233.5V178H232.5ZM6 178H5V179H6V178ZM6 49.2198L5.22682 48.5856L5 48.8621V49.2198H6ZM231.5 6.9541V178H233.5V6.9541H231.5ZM232.5 177H6V179H232.5V177ZM7 178V49.2198H5V178H7ZM6.77318 49.854L41.4405 7.58829L39.8942 6.31992L5.22682 48.5856L6.77318 49.854ZM40.6674 7.9541H232.5V5.9541H40.6674V7.9541Z" fill="black" mask="url(#path-3-inside-1_45_1750)"/>
<mask id="path-5-inside-2_45_1750" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.709 186H6V199.741V239H114.709H123.291H207L232 216.851V186H123.291H114.709Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.709 186H6V199.741V239H114.709H123.291H207L232 216.851V186H123.291H114.709Z" fill="white"/>
<path d="M6 186V185H5V186H6ZM6 239H5V240H6V239ZM207 239V240H207.379L207.663 239.748L207 239ZM232 216.851L232.663 217.599L233 217.301V216.851H232ZM232 186H233V185H232V186ZM6 187H114.709V185H6V187ZM7 199.741V186H5V199.741H7ZM7 239V199.741H5V239H7ZM114.709 238H6V240H114.709V238ZM123.291 238H114.709V240H123.291V238ZM207 238H123.291V240H207V238ZM231.337 216.102L206.337 238.252L207.663 239.748L232.663 217.599L231.337 216.102ZM231 186V216.851H233V186H231ZM123.291 187H232V185H123.291V187ZM114.709 187H123.291V185H114.709V187Z" fill="#2B5A4D" mask="url(#path-5-inside-2_45_1750)"/>
</svg>
<img src="ims/sciss_sel.png" alt="Rock" />
<div class="sel-tt">Scissors</div>
</button>
</div>

      </div>
      <div className="d-flex my-4 justify-content-center bet-but-wr">
        {formattedBetAmounts.map((price) => (
          <button
            onClick={() => makeBet(price)}
            className="d-flex  justify-content-between  align-items-center bet-but"
          >
            <span class="bet-val">
            {ethers.utils.formatEther(price)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Choice;
