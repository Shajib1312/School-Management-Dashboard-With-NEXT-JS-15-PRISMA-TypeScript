function Table({
  columns,
  renderRow,
  data,
}: {
  columns: Array<{ header: string; accessor: string; className?: string }>;
  renderRow: (item: any) => React.ReactNode;
  data: Array<any>;
}) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-sm text-left text-iconAccent">
          {columns.map((column) => (
            <th
              key={column.accessor}
              className={column.className}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
}

export default Table;
