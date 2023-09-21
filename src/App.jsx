import { useTable, useSortBy } from "react-table";

const data = [
  { id: 1, gender: "Male", salary: 40000 },
  { id: 2, gender: "FeMale", salary: 4000 },
  { id: 6, gender: "Male", salary: 20000 },
  { id: 3, gender: "Male", salary: 30000 },
  { id: 4, gender: "Male", salary: 35000 },
  { id: 5, gender: "FeMale", salary: 220000 },
];
const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];
const App = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg, index) => (
            <tr key={index} {...hg.getHeaderGroupProps()}>
              {hg.headers.map((col) => (
                <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                  {col.render("Header")}
                  {col.isSorted && (
                    <span>{col.isSortedDesc ? "🔽" : "🔼"}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
          {/* <tr>
            <th>Id</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr> */}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
          {/* {data?.map(({ id, gender, salary }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{gender}</td>
              <td>{salary}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default App;
