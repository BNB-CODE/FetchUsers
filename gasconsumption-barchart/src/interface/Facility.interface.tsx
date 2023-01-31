import UtilityMeter from "./UtilityMeter.interface";
import MonthwiseAggregation from "./MonthwiseAggregation.interface";
import TotalAggregation from "./TotalAggregation.interface";
interface Facility{
    facilityId: string;
    facilityName: string;
    totalAggregations:TotalAggregation;
    monthwiseAggregations:MonthwiseAggregation[];
    utilityMeters: UtilityMeter[];
  }
  
  export default Facility;