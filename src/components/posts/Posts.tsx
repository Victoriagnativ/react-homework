import React, {FC} from 'react';
import {IPost} from "../../modals/IPost";
import Post from "../post/Post";
type IPostProps ={
    posts:IPost[]
}
const Posts:FC<IPostProps> = ({posts}) => {

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Posts;