const api = async ()=>{
    console.log("getting the data");
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    console.log(response);
    let data=await response.json();
    console.log(data[0].text);
    document.getElementById("btn").innerHTML="data[0].text";
}

