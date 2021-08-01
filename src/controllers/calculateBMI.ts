
import {bmiRanges} from "../contants";
import { BMIRange } from "../Types/bmiRange";
import { BMIRequestData,BMIResponseData } from "../Types/BMIData";

const calucalteBMI=(weightKg:number,heightCm:number):number=>{
  const heightSqauredM=(heightCm*heightCm)/10000;
  return weightKg/heightSqauredM;
}

const getCategoryAndRisk=(bmi:number):BMIRange=>{
  const filteredRange=bmiRanges.filter((elt)=>{
    if(bmi>=(elt.from as any as number) && bmi<=(elt.to as any as number)){
      return elt;
    }
  })
  return filteredRange[0];
}

export const calculateBMI=(rawData:BMIRequestData[]):BMIResponseData[]=>{
  let result:BMIResponseData[]=[];

  for(let i=0;i<rawData.length;i++){
    const bmi=calucalteBMI((rawData[i].WeightKg as any as number),(rawData[i].HeightCm as any as number));
    const {category,risk}=getCategoryAndRisk(bmi);
    result.push({
      ...rawData[i],
      BMI:String(bmi),
      category,
      risk
    })
  }
  return result;
}