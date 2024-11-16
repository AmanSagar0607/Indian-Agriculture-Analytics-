import { Table } from '@mantine/core';
import { MaxMinProduction } from '../types/agriculture';

interface MaxMinTableProps {
  data: MaxMinProduction[];
}

export function MaxMinTable({ data }: MaxMinTableProps) {
  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Maximum Production Crop</Table.Th>
          <Table.Th>Minimum Production Crop</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row) => (
          <Table.Tr key={row.year}>
            <Table.Td>{row.year}</Table.Td>
            <Table.Td>{row.maxCrop}</Table.Td>
            <Table.Td>{row.minCrop}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}