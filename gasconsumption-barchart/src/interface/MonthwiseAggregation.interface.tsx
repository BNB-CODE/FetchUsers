interface MonthwiseAggregation {
    actualConsumption: number;
    actualCost: number;
    baselineConsumption: number;
    baselineCost:number;
    monthStartDate:Date;
    monthEndDate:Date;
    isCompleted: boolean;
    consumptionProcessedDays:number 
  }
  
  export default MonthwiseAggregation;