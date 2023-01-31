import Facility from "./Facility.interface";
interface Region {
    regionId: string;
    regionName: string; 
    facilities:Facility[];
  }
  
  export default Region;