import { AgricultureRecord, ProductionExtreme, CropAverage } from '../types/agriculture';

export function calculateProductionExtremes(data: AgricultureRecord[]): ProductionExtreme[] {
  const yearGroups = data.reduce((acc, curr) => {
    if (!acc[curr.Year]) {
      acc[curr.Year] = [];
    }
    acc[curr.Year].push(curr);
    return acc;
  }, {} as Record<string, AgricultureRecord[]>);

  return Object.entries(yearGroups)
    .map(([year, records]) => {
      const sortedByProduction = [...records].sort(
        (a, b) => b['Crop Production (UOM:t(Tonnes))'] - a['Crop Production (UOM:t(Tonnes))']
      );
      return {
        year,
        maxCrop: sortedByProduction[0]['Crop Name'],
        maxProduction: sortedByProduction[0]['Crop Production (UOM:t(Tonnes))'],
        minCrop: sortedByProduction[sortedByProduction.length - 1]['Crop Name'],
        minProduction: sortedByProduction[sortedByProduction.length - 1]['Crop Production (UOM:t(Tonnes))']
      };
    })
    .sort((a, b) => a.year.localeCompare(b.year));
}

export function calculateCropAverages(data: AgricultureRecord[]): CropAverage[] {
  const cropGroups = data.reduce((acc, curr) => {
    const cropName = curr['Crop Name'];
    if (!acc[cropName]) {
      acc[cropName] = {
        yields: [],
        areas: []
      };
    }
    acc[cropName].yields.push(curr['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))'] || 0);
    acc[cropName].areas.push(curr['Area Under Cultivation (UOM:Ha(Hectares))'] || 0);
    return acc;
  }, {} as Record<string, { yields: number[]; areas: number[] }>);

  return Object.entries(cropGroups)
    .map(([crop, stats]) => ({
      crop,
      avgYield: Number((stats.yields.reduce((a, b) => a + b, 0) / stats.yields.length).toFixed(3)),
      avgArea: Number((stats.areas.reduce((a, b) => a + b, 0) / stats.areas.length).toFixed(3))
    }))
    .sort((a, b) => b.avgYield - a.avgYield);
}