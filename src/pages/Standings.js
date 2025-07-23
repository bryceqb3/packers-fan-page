import React from 'react';
import '../styles/Standings.css';

function Standings() {
  return (
    <div className="standings-container">
      <h2>2024–2025 NFL Conference Standings</h2>
      {/* NFC EAST */}
      <div className="standings-table">
        <h3>NFC EAST</h3>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>WIN%</th>
              <th>HOME</th>
              <th>ROAD</th>
              <th>CONF</th>
              <th>PF</th>
              <th>PA</th>
              <th>PT DIFF</th>
              <th>STREAK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/logos/eagles.png" alt="Eagles" /> Philadelphia Eagles</td>
              <td>14</td><td>3</td><td>0</td><td>.824</td><td>8-1</td><td>6-2</td><td>9-3</td><td>463</td><td>303</td><td>160</td><td className="streak win">W2</td>
            </tr>
            <tr>
              <td><img src="/logos/commanders.png" alt="Commanders" /> Washington Commanders</td>
              <td>12</td><td>5</td><td>0</td><td>.706</td><td>7-2</td><td>5-3</td><td>9-3</td><td>485</td><td>391</td><td>94</td><td className="streak win">W5</td>
            </tr>
            <tr>
              <td><img src="/logos/cowboys.png" alt="Cowboys" /> Dallas Cowboys</td>
              <td>7</td><td>10</td><td>0</td><td>.412</td><td>2-7</td><td>5-3</td><td>5-7</td><td>350</td><td>468</td><td>-118</td><td className="streak loss">L2</td>
            </tr>
            <tr>
              <td><img src="/logos/giants.png" alt="Giants" /> New York Giants</td>
              <td>3</td><td>14</td><td>0</td><td>.176</td><td>1-8</td><td>2-6</td><td>1-11</td><td>273</td><td>415</td><td>-142</td><td className="streak loss">L1</td>
            </tr>    
          </tbody>
        </table>
      </div>

      {/* NFC SOUTH */}
      <div className="standings-table">
        <h3>NFC SOUTH</h3>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>WIN%</th>
              <th>HOME</th>
              <th>ROAD</th>
              <th>CONF</th>
              <th>PF</th>
              <th>PA</th>
              <th>PT DIFF</th>
              <th>STREAK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/logos/buccaneers.png" alt="Buccaneers" /> Tampa Bay Buccaneers</td>
              <td>10</td><td>7</td><td>0</td><td>.588</td><td>5-4</td><td>5-3</td><td>8-4</td><td>502</td><td>385</td><td>117</td><td className="streak win">W2</td>
            </tr>
            <tr>
              <td><img src="/logos/falcons.png" alt="Falcons" /> Atlanta Falcons</td>
              <td>8</td><td>9</td><td>0</td><td>.471</td><td>4-5</td><td>4-4</td><td>7-5</td><td>389</td><td>423</td><td>-34</td><td className="streak loss">L2</td>
            </tr>
            <tr>
              <td><img src="/logos/panthers.png" alt="Panthers" /> Carolina Panthers</td>
              <td>5</td><td>12</td><td>0</td><td>.294</td><td>3-6</td><td>2-6</td><td>4-8</td><td>341</td><td>534</td><td>-193</td><td className="streak win">W1</td>
            </tr>
            <tr>
              <td><img src="/logos/saints.png" alt="Saints" /> New Orleans Saints</td>
              <td>5</td><td>12</td><td>0</td><td>.294</td><td>3-6</td><td>2-6</td><td>4-8</td><td>398</td><td>398</td><td>0</td><td className="streak loss">L4</td>
            </tr>    
          </tbody>
        </table>
      </div>

      {/* NFC WEST */}
      <div className="standings-table">
        <h3>NFC WEST</h3>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>WIN%</th>
              <th>HOME</th>
              <th>ROAD</th>
              <th>CONF</th>
              <th>PF</th>
              <th>PA</th>
              <th>PT DIFF</th>
              <th>STREAK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/logos/rams.png" alt="Rams" /> Los Angeles Rams</td>
              <td>10</td><td>7</td><td>0</td><td>.588</td><td>5-4</td><td>5-3</td><td>6-6</td><td>367</td><td>386</td><td>-19</td><td className="streak loss">L1</td>
            </tr>
            <tr>
              <td><img src="/logos/seahawks.png" alt="Seahawks" /> Seattle Seahawks</td>
              <td>10</td><td>7</td><td>0</td><td>.588</td><td>3-6</td><td>7-1</td><td>6-6</td><td>375</td><td>368</td><td>7</td><td className="streak win">W2</td>
            </tr>
            <tr>
              <td><img src="/logos/cardinals.png" alt="Cardinals" /> Arizona Cardinals</td>
              <td>8</td><td>9</td><td>0</td><td>.471</td><td>6-3</td><td>2-6</td><td>4-8</td><td>400</td><td>379</td><td>21</td><td className="streak win">W1</td>
            </tr>
            <tr>
              <td><img src="/logos/49ers.png" alt="49ers" /> San Francisco 49ers</td>
              <td>6</td><td>11</td><td>0</td><td>.353</td><td>4-5</td><td>2-6</td><td>4-8</td><td>389</td><td>436</td><td>-47</td><td className="streak loss">L4</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* NFC NORTH */}
      <div className="standings-table">
        <h3>NFC NORTH</h3>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>WIN%</th>
              <th>HOME</th>
              <th>ROAD</th>
              <th>CONF</th>
              <th>PF</th>
              <th>PA</th>
              <th>PT DIFF</th>
              <th>STREAK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/logos/lions.png" alt="Lions" /> Detroit Lions</td>
              <td>15</td><td>2</td><td>0</td><td>.882</td><td>7-2</td><td>8-0</td><td>11-1</td><td>564</td><td>342</td><td>222</td><td className="streak win">W3</td>
            </tr>
            <tr>
              <td><img src="/logos/vikings.png" alt="Vikings" /> Minnesota Vikings</td>
              <td>14</td><td>3</td><td>0</td><td>.824</td><td>8-1</td><td>6-2</td><td>9-3</td><td>432</td><td>332</td><td>100</td><td className="streak loss">L1</td>
            </tr>
            <tr>
              <td><img src="/logos/packers.png" alt="Packers" /> Green Bay Packers</td>
              <td>11</td><td>6</td><td>0</td><td>.647</td><td>6-3</td><td>5-3</td><td>6-6</td><td>460</td><td>338</td><td>122</td><td className="streak loss">L2</td>
            </tr>
            <tr>
              <td><img src="/logos/bears.png" alt="Bears" /> Chicago Bears</td>
              <td>5</td><td>12</td><td>0</td><td>.294</td><td>4-5</td><td>1-7</td><td>3-9</td><td>310</td><td>370</td><td>-60</td><td className="streak win">W1</td>
            </tr>
          </tbody>
        </table>
      </div>
        {/* AFC WEST */}
<div className="standings-table">
  <h3>AFC WEST</h3>
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
        <th>T</th>
        <th>WIN%</th>
        <th>HOME</th>
        <th>ROAD</th>
        <th>CONF</th>
        <th>PF</th>
        <th>PA</th>
        <th>PT DIFF</th>
        <th>STREAK</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src="/logos/chiefs.png" alt="Chiefs" /> Kansas City Chiefs</td>
        <td>15</td><td>2</td><td>0</td><td>.882</td><td>8-0</td><td>7-2</td><td>10-2</td><td>385</td><td>326</td><td>59</td><td className="streak loss">L1</td>
      </tr>
      <tr>
        <td><img src="/logos/chargers.png" alt="Chargers" /> Los Angeles Chargers</td>
        <td>11</td><td>6</td><td>0</td><td>.647</td><td>5-3</td><td>6-3</td><td>8-4</td><td>402</td><td>301</td><td>101</td><td className="streak win">W3</td>
      </tr>
      <tr>
        <td><img src="/logos/broncos.png" alt="Broncos" /> Denver Broncos</td>
        <td>10</td><td>7</td><td>0</td><td>.588</td><td>6-2</td><td>4-5</td><td>6-6</td><td>425</td><td>311</td><td>114</td><td className="streak win">W1</td>
      </tr>
      <tr>
        <td><img src="/logos/raiders.png" alt="Raiders" /> Las Vegas Raiders</td>
        <td>4</td><td>13</td><td>0</td><td>.235</td><td>2-6</td><td>2-7</td><td>3-9</td><td>309</td><td>434</td><td>-125</td><td className="streak loss">L1</td>
      </tr>
    </tbody>
  </table>
</div>

      {/* AFC EAST */}
<div className="standings-table">
  <h3>AFC EAST</h3>
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
        <th>T</th>
        <th>WIN%</th>
        <th>HOME</th>
        <th>ROAD</th>
        <th>CONF</th>
        <th>PF</th>
        <th>PA</th>
        <th>PT DIFF</th>
        <th>STREAK</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src="/logos/bills.png" alt="Bills" /> Buffalo Bills</td>
        <td>13</td><td>4</td><td>0</td><td>.765</td><td>8-0</td><td>5-4</td><td>9-3</td><td>525</td><td>368</td><td>157</td><td className="streak loss">L1</td>
      </tr>
      <tr>
        <td><img src="/logos/dolphins.png" alt="Dolphins" /> Miami Dolphins</td>
        <td>8</td><td>9</td><td>0</td><td>.471</td><td>5-3</td><td>3-6</td><td>6-6</td><td>345</td><td>364</td><td>-19</td><td className="streak loss">L1</td>
      </tr>
      <tr>
        <td><img src="/logos/jets.png" alt="Jets" /> New York Jets</td>
        <td>5</td><td>12</td><td>0</td><td>.294</td><td>3-5</td><td>2-7</td><td>5-7</td><td>338</td><td>404</td><td>-66</td><td className="streak win">W1</td>
      </tr>
      <tr>
        <td><img src="/logos/patriots.png" alt="Patriots" /> New England Patriots</td>
        <td>4</td><td>13</td><td>0</td><td>.235</td><td>2-6</td><td>2-7</td><td>3-9</td><td>289</td><td>417</td><td>-128</td><td className="streak win">W1</td>
      </tr>
    </tbody>
  </table>
</div>

      {/* AFC SOUTH */}
<div className="standings-table">
  <h3>AFC SOUTH</h3>
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
        <th>T</th>
        <th>WIN%</th>
        <th>HOME</th>
        <th>ROAD</th>
        <th>CONF</th>
        <th>PF</th>
        <th>PA</th>
        <th>PT DIFF</th>
        <th>STREAK</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src="/logos/texans.png" alt="Texans" /> Houston Texans</td>
        <td>10</td><td>7</td><td>0</td><td>.588</td><td>5-3</td><td>5-4</td><td>8-4</td><td>372</td><td>372</td><td>0</td><td className="streak win">W1</td>
      </tr>
      <tr>
        <td><img src="/logos/colts.png" alt="Colts" /> Indianapolis Colts</td>
        <td>8</td><td>9</td><td>0</td><td>.471</td><td>5-3</td><td>3-6</td><td>7-5</td><td>377</td><td>427</td><td>-50</td><td className="streak win">W1</td>
      </tr>
      <tr>
        <td><img src="/logos/jaguars.png" alt="Jaguars" /> Jacksonville Jaguars</td>
        <td>4</td><td>13</td><td>0</td><td>.235</td><td>3-5</td><td>1-8</td><td>4-8</td><td>320</td><td>435</td><td>-115</td><td className="streak loss">L1</td>
      </tr>
      <tr>
        <td><img src="/logos/titans.png" alt="Titans" /> Tennessee Titans</td>
        <td>3</td><td>14</td><td>0</td><td>.176</td><td>1-7</td><td>2-7</td><td>3-9</td><td>311</td><td>460</td><td>-149</td><td className="streak loss">L6</td>
      </tr>
    </tbody>
  </table>
</div>

      {/* AFC NORTH */}
<div className="standings-table">
  <h3>AFC NORTH</h3>
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
        <th>T</th>
        <th>WIN%</th>
        <th>HOME</th>
        <th>ROAD</th>
        <th>CONF</th>
        <th>PF</th>
        <th>PA</th>
        <th>PT DIFF</th>
        <th>STREAK</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src="/logos/ravens.png" alt="Ravens" /> Baltimore Ravens</td>
        <td>12</td><td>5</td><td>0</td><td>.706</td><td>6-2</td><td>6-3</td><td>8-4</td><td>518</td><td>361</td><td>157</td><td className="streak win">W4</td>
      </tr>
      <tr>
        <td><img src="/logos/steelers.png" alt="Steelers" /> Pittsburgh Steelers</td>
        <td>10</td><td>7</td><td>0</td><td>.588</td><td>5-3</td><td>5-4</td><td>7-5</td><td>380</td><td>347</td><td>33</td><td className="streak loss">L4</td>
      </tr>
      <tr>
        <td><img src="/logos/bengals.png" alt="Bengals" /> Cincinnati Bengals</td>
        <td>9</td><td>8</td><td>0</td><td>.529</td><td>3-5</td><td>6-3</td><td>6-6</td><td>472</td><td>434</td><td>38</td><td className="streak win">W5</td>
      </tr>
      <tr>
        <td><img src="/logos/browns.png" alt="Browns" /> Cleveland Browns</td>
        <td>3</td><td>14</td><td>0</td><td>.176</td><td>2-6</td><td>1-8</td><td>3-9</td><td>258</td><td>435</td><td>-177</td><td className="streak loss">L6</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
}

export default Standings;