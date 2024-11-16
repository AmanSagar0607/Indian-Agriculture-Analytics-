import { Table, Text } from '@mantine/core';

interface DataTableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    label: string;
    format?: (value: any) => string | number;
  }[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          {columns.map((column) => (
            <Table.Th key={String(column.key)}>
              <Text fw={700}>{column.label}</Text>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row, index) => (
          <Table.Tr key={index}>
            {columns.map((column) => (
              <Table.Td key={String(column.key)}>
                {column.format
                  ? column.format(row[column.key])
                  : String(row[column.key])}
              </Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}