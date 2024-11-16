export interface AgricultureRecord {
  Country: string;
  Year: string;
  'Crop Name': string;
  'Crop Production (UOM:t(Tonnes))': number;
  'Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))': number;
  'Area Under Cultivation (UOM:Ha(Hectares))': number;
}

export interface ProductionExtreme {
  year: string;
  maxCrop: string;
  maxProduction: number;
  minCrop: string;
  minProduction: number;
}

export interface CropAverage {
  crop: string;
  avgYield: number;
  avgArea: number;
}