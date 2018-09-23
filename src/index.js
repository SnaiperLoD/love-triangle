/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var n=preferences.length; 
  var count=0;
  for(var k=0; k<n; k++)
  {
    var first=k+1;
    var second=preferences[k];
    var third=preferences[second-1];
    if(preferences[third-1]==first)
    {
    count++;
    /*if ( (k-1)>(second-1) )
    {
    preferences.splice((second-1),1);
    preferences.splice((k-1),1);
    }*/
  }
  }
  return(count/3);
};
 