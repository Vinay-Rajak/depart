import React from "react";
import "./Department.css";
import Footer from "../../component/Footer/Footer.js";

function Department() {
  return (
    <>
      <div className="main-department">
        <div className="cource ">
          <h1>COURSE OFFERED</h1>
          <table>
            <thead>
              <th>Cource</th>
              <th>Branch</th>
            </thead>
            <tbody>
              <tr>
                <td>B.Tech</td>
                <td>Computer Science & Engineering</td>
              </tr>
              <tr>
                <td>M.E.</td>
                <td>Computer Science & Engineering</td>
              </tr>
              <tr>
                <td>B.C.A</td>
                <td>Computer Science & Engineering</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="facilities">
          <h1>DEPARTMENTAL FACILITY</h1>
          <div className="in-facilities">
            <h3>Well Equipped Computer Lab</h3>
            <p>
              All labs are furnished with Computers of latest configuration
              connected with LAN and high speed internet facilities. PCs are
              having C++ compiler, Java compiler and other simulation packages.
            </p>
            <hr />
            <h3>Departmental Library</h3>
            <p>
              Department maintains its own library holding large collection of
              reference book on various topics of computer science &
              engineering. It aims to equip teaching staff and students with
              latest editions of books and journals.
            </p>
            <hr />
          </div>
        </div>

        <div className="Research cource">
          <h1>DEPARTMENTAL RESEARCH</h1>

          <div className="in-research">
            <div>
              <h3>
                Lab : Analysis and Design of Distributed Intrusion Detection
                System using Soft Computing Mobile Agents
              </h3>
              <ul>
                <li>
                  Research Faculties: Dr. Sanjay Silakari & Prof. Shikha Agarwal{" "}
                </li>
                <li>Research Status: On going</li>
                <li>Research Cost: 2 lakh 85 Thousand</li>
                <li>
                  Research Agency: Madhya Pradesh Council of Science &
                  Technology, Bhopal
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <h3>
                Lab : Delay Tolerant Networks Application in Underdeveloped
                Region
              </h3>
              <ul>
                <li>
                  Research Faculties: Dr Sanjay Silakari & Dr. Piyush K Shukla{" "}
                </li>
                <li>Research Status: Submitted</li>
                <li>Research Cost: 18 lakh 0 Thousand</li>
                <li>Research Agency: AICTE</li>
              </ul>
            </div>
            <hr />
            <div>
              <h3>Lab : Swarm Intelligence in Bioinformatics</h3>
              <ul>
                <li>
                  Research Faculties: Dr. Sanjay Silakari & Prof. Shikha Agarwal{" "}
                </li>
                <li>Research Status: Submitted</li>
                <li>Research Cost: 17 lakh 0 Thousand</li>
                <li>Research Agency: AICTE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Department;
