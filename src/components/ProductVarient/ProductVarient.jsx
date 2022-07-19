import React from "react";
import Navebar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductVarient.css";

const ProductVarient = () => {
  return (
    <div>
      <Navebar />
      <div className="container-fluid">
        <div className="main1">
          <div className="col-sm-2">
            <Sidebar />
          </div>
          <div className="col-sm-10">
            {/* <div
              className="row"
              style={{ marginTop: "-30%", backgroundColor: "white" }}
            >
              <table class="table">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="selectall" />
                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        class="singlechkbox"
                        name="username"
                        value="1"
                      />
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        class="singlechkbox"
                        name="username"
                        value="2"
                      />
                    </td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        class="singlechkbox"
                        name="username"
                        value="3"
                      />
                    </td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVarient;
