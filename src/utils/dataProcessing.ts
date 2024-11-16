import { AgricultureData, MaxMinProduction, CropAverages } from '../types/agriculture';

export const calculateMaxMinProduction = (data: AgricultureData[]): MaxMinProduction[] => {
  const yearGroups = data.reduce((acc, curr) => {
    if (!acc[curr.year]) {
      acc[curr.year] = [];
    }
    acc[curr.year].push(curr);
    return acc;
  }, {} as Record<number, AgricultureData[]>);

  return Object.entries(yearGroups).map(([year, crops]) => {
    const sortedCrops = [...crops].sort((a, b) => b.production - a.production);
    return {
      year: parseInt(year),
      maxCrop: sortedCrops[0].crop,
      minCrop: sortedCrops[sortedCrops.length - 1].crop,
    };
  });
};

export const calculateCropAverages = (data: AgricultureData[]): CropAverages[] => {
  const cropGroups = data.reduce((acc, curr) => {
    if (!acc[curr.crop]) {
      acc[curr.crop] = { yields: [], areas: [] };
    }
    acc[curr.crop].yields.push(curr.yield || 0);
    acc[curr.crop].areas.push(curr.cultivationArea || 0);
    return acc;
  }, {} as Record<string, { yields: number[]; areas: number[] }>);

  return Object.entries(cropGroups).map(([crop, values]) => ({
    crop,
    avgYield: Number((values.yields.reduce((a, b) => a + b, 0) / values.yields.length).toFixed(3)),
    avgCultivationArea: Number((values.areas.reduce((a, b) => a + b, 0) / values.areas.length).toFixed(3)),
  }));
};