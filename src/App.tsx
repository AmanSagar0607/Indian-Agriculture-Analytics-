import { Container, Title, Paper, Stack, Group } from '@mantine/core';
import { ProductionTable } from './components/ProductionTable';
import { AveragesTable } from './components/AveragesTable';
import { calculateProductionExtremes, calculateCropAverages } from './utils/calculations';
import { agricultureData } from './data/agricultureData';

export default function App() {
  const productionExtremes = calculateProductionExtremes(agricultureData);
  const cropAverages = calculateCropAverages(agricultureData);

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Group justify="center">
          <Title order={1}>Indian Agriculture Analytics (1950-2020)</Title>
        </Group>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} size="h3" mb="md">Crop Production Analysis by Year</Title>
          <ProductionTable data={productionExtremes} />
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} size="h3" mb="md">Crop-wise Average Statistics</Title>
          <AveragesTable data={cropAverages} />
        </Paper>
      </Stack>
    </Container>
  );
}