async function getPosts()
{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/asd')
    console.log(response)
    console.log(response.ok)
    const posts=await response.json();
    console.log(posts)
    if(!response.ok)
    {
        throw new Error("Lee Tway lout ny tr lh?")
    }
}

getPosts().then(function(){
    console.log("success")
}).catch(function(error){
    console.log(error)
});