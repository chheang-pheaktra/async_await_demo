async function getStarWarData(){
    try{
        const Response = await fetch ('https://swapi.dev/api/people');
        const data = await Response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getStarWarData();