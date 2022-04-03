exports.handler=async(event)=>{
    console.log(event);
    const customerId=event.pathParameters.customerId;
    const customer={'customerId':customerId,'customerName':'customer'+customerId};
    const response={
        statusCode:200,
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':true
        },
        body:JSON.stringify(customer)
    }
    return response;
}