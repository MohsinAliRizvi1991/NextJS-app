async function loadData(){
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data.users;
}
export default async function Load(){
    let users= await loadData();
    console.log(users);
    return(
        <div>
            <h1>User load Data</h1>
            {
                users.map((item,)=>(
                    <div>
                        <h3>users Name :{item.firstName},{item.lastName},{item.maidenName},{item.email}</h3>
                        </div>
                ))
            }
        </div>
    )
}