
function myReplace(str, before, after) {
  if(before[0]==before[0].toUpperCase()){
                 
      return str.replace(before, after.replace(after[0], after[0].toUpperCase()));
      
     }
  if(before[0]!=before[0].toUpperCase()){
    
    return str.replace(before,after);
    
  }
  
}

myReplace("His name is Tom", "Tom", "john");
