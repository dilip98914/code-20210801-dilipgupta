import { BMIRange } from "./Types/bmiRange";
export const bmiRanges: BMIRange[]=[
  {
    from:'0',//low point
    to:'18.4',
    category:'Underweight',
    risk:'Malnutrition risk'
  },
  {
    from:'18.5',
    to:'24.9',
    category:'Normal weight',
    risk:'Low risk'

  },
  {
    from:'25',
    to:'29.9',
    category:'Overweight',
    risk:'Enhanced risk'
  },
  {
    from:'30',
    to:'34.9',
    category:'Moderately obese',
    risk:'Medium  risk'

  },
  {
    from:'35',
    to:'39.9',
    category:'Severely obese',
    risk:'High  risk'
  },
  {
    from:'40',
    to:'100',//high point
    category:'Very  severely obese',
    risk:'Very High risk'
  },
];
