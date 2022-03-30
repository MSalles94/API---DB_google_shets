//get,post,patch,delete  => testando CRUD

// procurar formas de bloqueio do banco de dados



const create_user=(newUser)=>{

    var newID = 0

    var check_user = fetch(DB_URL(`/search?user=${newUser}&casesensitive=true`))
        .then(response=>response.json())
            .then(response=> {
                x=response.length;
                if(x==0){
                    return ['allow to use this username',true]
                }else{
                    return ['this username already exist',false]
                }
            })

    var create_newID = fetch(DB_URL(''))
        .then(response=>response.json())
            .then(response=>{                
                x=response.length
                for(i=0;i<x;i++){
                    if(response[i].ID>newID){
                        newID=response[i].ID
                    }
                }
                newID=newID*1+1
                return newID
            })
    
    const create_user_promise=[check_user,create_newID]

    first_check = Promise.all(create_user_promise)
        .then(response=>{
            fetch(DB_URL(''),fetch_opitions(response))
        })
     
    //create a new ID and test username
        
    var fetch_opitions =(first_check)=>{

        return {
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            user:newUser,
            id_user: first_check[1],
            user_date: Date()
        })}
    }

   
        
}


const delete_user=(userName)=>{

    var fetch_opitions={
        method:"DELETE"
    }



    fetch(DB_URL(`/user/${userName}`),fetch_opitions)

}


