import { DetailsContext } from "./DetailsContextProvider";
import { useContext } from "react";

export function AdoptionTable() {
  const { details } = useContext(DetailsContext);

  const detailData = details.map(ele => {
    return (
      <tr>
        <td>{ele.petName}</td>
        <td>{ele.petType}</td>
        <td>{ele.breed}</td>
        <td>{ele.name}</td>
        <td>{ele.email}</td>
        <td>{ele.phone}</td>
      </tr>
    );
  })

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {detailData}
        </tbody>
      </table>
    </>
  )
}