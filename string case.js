function toCase(string){
let lower_case,upper_case,string_cases;
    
    lower_case = string.toLowerCase() ;
    upper_case = string.toUpperCase();
    string_cases = lower_case + "-" + upper_case;
  
  return string_cases;
}