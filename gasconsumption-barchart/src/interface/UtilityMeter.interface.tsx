import Aggregation from "./Aggregation.interface";
interface UtilityMeter {
  meterId: string;
  meterNumber: string;
  meterType: string;
  aggregations:Aggregation;
    
  }
  
  export default UtilityMeter;