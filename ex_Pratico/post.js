const fetchButton = document.getElementById('fetchButton');
const postList = document.getElementById('postList');
const errorMessage= document.getElementById('errorMessage');

async function fetchPosts() {
    fetchButton.disabled = true;
    errorMessage.textContent ="";
    postList.innerHTML ="";

    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!resp.ok){
            throw new Error(`HTTP error: ${resp.status}`)
        }
        const posts = await resp.json();
        posts.forEach(post=> {
            const listItem = document.createElement('li');
            listItem.textContent =`${post.id}: ${post.title}`
        });  
        }catch(error){
            errorMessage.textContent ="Failed to retrieve data"
    } finally{
        fetchButton.disabled = false;
    }
}
fetchButton.addEventListener('click', fetchPosts)

