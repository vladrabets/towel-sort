
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix==undefined || matrix==[])
  return [];
  else{
  let arr=[];
  for (let i=0; i<matrix.length; i++)
    if((i+1)%2 == 1)
    {
      arr=arr.concat(matrix[i]);
      console.log(arr);
    }
    else
    {
      arr=arr.concat(matrix[i].reverse());
      console.log(arr);
    }
    return arr;
  }
}
