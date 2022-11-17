'use strict';

module.exports.sum = async (event) => {
  if (event.body == null){
    return {
      statusCode:500,
      body: JSON.stringify('You sent an empty body')
    }
  }
  else{
    const reqBody = JSON.parse(event.body)
    var typeX =typeof(reqBody.x);
    var typeY =typeof(reqBody.y);
    if (reqBody.x == '' || reqBody.y == '' || reqBody.x == null || reqBody.y == null || typeX != 'number' || typeY != 'number')
      return {
        statusCode:401,
        body: JSON.stringify('please enter valid numbers')
      }
    else{
    const Result = reqBody.x+reqBody.y
    return {
      statusCode: 200,
      body: JSON.stringify('The result is ' + Result)
    }
}};
};
