



const new_coment=(userName,groupComent,comentContent)=>{

    const fetch_opitions =(userName,groupComent,comentContent)=> {
        return{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            group:groupComent,
            user:userName,
            coment:comentContent,
            post_date:Date()
        })}
    }


    fetch(DB_URL(`?sheet=coments`),fetch_opitions(userName,groupComent,comentContent)).then(res=>{console.log(res.json())})

}