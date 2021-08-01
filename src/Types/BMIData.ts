
export interface BMIRequestData{
  Gender:string;
  HeightCm:string;
  WeightKg:string;
}

export interface BMIResponseData{
  Gender:string;
  HeightCm:string;
  WeightKg:string;
  BMI:string;
  category:string;
  risk:string;
}
