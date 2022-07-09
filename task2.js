//fetch api with async
const fetchres = async()=>{
    const response = await(fetch('https://jsonplaceholder.typicode.com/todos/1'))
    const respjson = await(response.json())	
   console.log("Response",respjson)
    
  }
  
  fetchres(); 
  
  //fetch api with promises
          const fetchresp = new Promise((resolve,reject)=>{
          const response= fetch('https://jsonplaceholder.typicode.com/todos/1');
     resolve(response);
  });
  
  const resp=() =>{
              fetchresp
           .then((done)=>{
             res(done).then((r)=>{
           console.log("Response",r);
           })
               
       
       });
  
  }
  
  const res=(response)=>{
  return	new Promise((resolve,reject)=>{
       const respjso= response.json();
     resolve(respjso);
     })
  };
  
 resp();
  