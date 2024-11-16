import { Table, Text } from '@mantine/core';
import { ProductionExtreme } from '../types/agriculture';

interface ProductionTableProps {
  data: ProductionExtreme[];
}

export function ProductionTable({ data }: ProductionTableProps) {
  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Text fw={700}>Year</Text>
          </Table.Th>
          <Table.Th>
            <Text fw={700}>Maximum Production Crop</Text>
          </Table.Th>
          <Table.Th>
            <Text fw={700}>Production (Tonnes)</Text>
          </Table.Th>
          <Table.Th>
            <Text fw={700}>Minimum Production Crop</Text>
          </Table.Th>
          <Table.Th>
            <Text fw={700}>Production (Tonnes)</Text>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row) => (
          <Table.Tr key={row.year}>
            <Table.Td>{row.year.replace('Financial Year (Apr - Mar), ', '')}</Table.Td>
            <Table.Td>{row.maxCrop}</Table.Td>
            <Table.Td>{row.maxProduction.toLocaleString()}</Table.Td>
            <Table.Td>{row.minCrop}</Table.Td>
            <Table.Td>{row.minProduction.toLocaleString()}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}