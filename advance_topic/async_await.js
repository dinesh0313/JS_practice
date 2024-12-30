async function hello()
{
    console.log("hello this is async function");
}

async function API()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("weather data");
        resolve(200);
        },6000);
    });
}

async function getWeatherdata()
{
    await API();// await is used for waiting the function API() for calling the  
}

getWeatherdata();