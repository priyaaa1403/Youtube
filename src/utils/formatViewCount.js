export function formatViewCount(viewCount){

  const num = parseInt(viewCount,10);
  if(num >= 1000000){
     return (num/1000000).toFixed(1)+"M";
  }
  if(num >= 1000){
    return (num/1000).toFixed(1) +"K";
  }
  return num.toString();

}