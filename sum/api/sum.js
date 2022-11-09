'use strict';

module.exports.sum = async (event) => {
  if (event.body == null){
    return {
      statusCode:500,
      body: JSON.stringify('you sent an empty body')
    }
  }
  else{
  const reqBody = JSON.parse(event.body)
  if (reqBody.x == '' && reqBody.y == '' || reqBody.x == null && reqBody.y == null)
    return {
      statusCode:401,
      body: JSON.stringify('please enter valid numbers')
    }
    else if(reqBody.x == '' || reqBody.x == null)
    return {
      statusCode:401,
      body: JSON.stringify('please enter valid value for x number')
    }
  else if(reqBody.y == '' || reqBody.y == null)
    return {
      statusCode:401,
      body: JSON.stringify('please enter valid value for y number')
    }
  else{
  const Result = reqBody.x+reqBody.y
  return {
    statusCode: 200,
    body: JSON.stringify('The result is ' + Result)
  }
}};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
