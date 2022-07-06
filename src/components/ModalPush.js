import { useState } from "react";
import axios from "axios";

export function ModalPush() {
  let [result, setResult] = useState([]);
  return (
    <div>
      <button
        onClick={() => {
          const promise = axios.get("https://jsonplaceholder.typicode.com/users");
          promise
            .then((response) => {
              console.log(response);
              setResult(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        Get employees
      </button>
      <button>Add</button>
      <button>Update</button>
      {result.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr key={`${item.id}-${item.name}`}>
                <td>{item.name}</td>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}