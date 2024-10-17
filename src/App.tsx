import React, {FC, useState,} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IPost} from "./modals/IPost";
import Posts from "./components/posts/Posts";
import {getPosts} from "./services/api.service";
import {IResponsePostModal} from "./modals/IResponsePostModal";



const App:FC  = ()=> {
    const [posts, setPosts] = useState<IPost[]>([]);

    const lift =(id: number)=>{
      // fetch('https://dummyjson.com/posts/user/' + id)
      //     .then(value =>value.json())
        getPosts(id)
            .then((response:IResponsePostModal) => {
                console.log(response)
              setPosts(response.posts);
          })
  }
    return (
        <div>

            <Posts posts={posts}/>


            <Users lift={lift}/>



        </div>
    );

}

export default App;