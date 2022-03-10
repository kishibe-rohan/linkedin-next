import {useState,useEffect} from 'react'

function Feed({posts}){
   const [realTimePosts,setRealTimePosts] = useState([]);

   useEffect(() => {
         const fetchPosts = async() => {
             const response = await fetch('/api/posts',{
                 method:"GET",
                 headers:{"Content-Type":"application/json"}
             });

             const responseData = await response.json();
             setRealTimePosts(responseData);
         }

         fetchPosts();
   },[])

   return(
       <div className="space-y-6 pb-24 max-w-lg">
           <Input/>
           {
               realTimePosts.map((post) => <Post key={post._id} post={post}/>)
           }
       </div>
   )
}

export default Feed;