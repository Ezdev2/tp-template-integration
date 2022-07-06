import "./style.css";
import axios from "axios";
import { useState } from "react";
import ReactModal from "react-modal";

export function EmployeeList() {
  const [lists, setList] = useState([]);

  const promise = axios.get("https://jsonplaceholder.typicode.com/users");
        promise
          .then((response) => {
            setList(response.data);
          })
          .catch((error) => {
            console.error(error);
          });

  const [mymodal, setMymodal] = useState(true);
  const toggleChecked = () => setMymodal(mymodal => !mymodal);
  
  return (
    // <div>
    //     <button onClick={() => {
    //       const promise = axios.get("https://jsonplaceholder.typicode.com/users");
    //       promise
    //         .then((response) => {
    //           setList(response.data);
    //           console.log(lists);
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //         });
    //     }}>
    //         hello
    //     </button>
    // </div>

    
    <div >
            {mymodal &&
              <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                <div className="dataTable-top">
                    <div className="dataTable-dropdown">
                      <label>
                        <select className="dataTable-selector">
                          <option value="5">5</option>
                          <option value="10" selected="">
                            10
                          </option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                          <option value="25">25</option>
                        </select>{" "}
                        entries per page
                      </label>
                    </div>
                    <div className="dataTable-search">
                        <button className="dataTable-input" type="button" onClick={toggleChecked}>
                            Ajouter
                        </button> 
                    </div>
                    <div className="dataTable-container">
                        <table className="table-bordered">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Position</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Web site</th>
                              <th>id</th>
                            </tr>
                          </thead>
                          {lists.map((list) => {
                              return <ListContent item={list} />;
                              })} 
                          <tfoot>
                            <tr>
                              <th>Name</th>
                              <th>Position</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Web site</th>
                              <th>id</th>
                            </tr>
                          </tfoot>
                          
                        </table>
                      </div>
                      <div className="dataTable-bottom">
                        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
                        <nav className="dataTable-pagination">
                          <ul className="dataTable-pagination-list">
                            <li className="active">
                              <a href="#" data-page="1">
                                1
                              </a>
                            </li>
                            <li className="">
                              <a href="#" data-page="2">
                                2
                              </a>
                            </li>
                            <li className="">
                              <a href="#" data-page="3">
                                3
                              </a>
                            </li>
                            <li className="">
                              <a href="#" data-page="4">
                                4
                              </a>
                            </li>
                            <li className="">
                              <a href="#" data-page="5">
                                5
                              </a>
                            </li>
                            <li className="">
                              <a href="#" data-page="6">
                                6
                              </a>
                            </li>
                            <li className="pager">
                              <a href="#" data-page="2">
                                ›
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                  </div>
              </div>
            }
            {!mymodal &&
                <div className="dataTable-modal">
                    <button className="dataTable-input" onClick={
                        toggleChecked
                    }>
                        Fermer
                    </button>
                    <p>fermer moi</p>
                </div>
            }
    </div>
  );
}

const ListContent = (props) => {
  const { name, username, email, phone, website, id } = props.item;
  
    return (
      <tbody>
          <tr key={name}>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{website}</td>
              <td>{id}</td>
          </tr>
      </tbody>
    )
}