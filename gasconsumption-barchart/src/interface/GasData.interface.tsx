import Region from "./Region.interface";
interface GasData {
    organizationId: string;
    organizationName: string;
    aggregationsStartDate: Date;
    ggregationsEndDate: Date;
    utilityType: string;
    utilityMeasurementUnit: string;
    utilityCostCurrency: string;
    regions:Region[];
    
  }
  
  export default GasData;