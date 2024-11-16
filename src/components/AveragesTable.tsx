import { Table, Text } from '@mantine/core';
import { CropAverage } from '../types/agriculture';

interface AveragesTableProps {
  data: CropAverage[];
}

export function AveragesTable({ data }: AveragesTableProps) {
  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Text fw={700}>Crop</Text>
          </Table.Th>
          <Table.Th>
            <Text fw={700}>Average Yield (Kg/Ha)</Text>
          </Table.Th>
          <Table.Th>
            <Text fw={700}>Average Area (Ha)</Text>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row) => (
          <Table.Tr key={row.crop}>
            <Table.Td>{row.crop}</Table.Td>
            <Table.Td>{row.avgYield.toLocaleString()}</Table.Td>
            <Table.Td>{row.avgArea.toLocaleString()}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}