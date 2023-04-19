import Container from "../components/Container";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
const Home = () => {
    const [posts,setPost] = useState([]);
    const [content, setContent]  = useState('');
    const [title, setTitle] = useState('');
    const submit = async () => {
        await axios.post('http://localhost:3001/v1/api/posts', {
          title, content
        });
    }

    return (<Container>
        <p>Generate Blog Post</p>
        <p><label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">Title</label>
            <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}
        
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input></p>
        <div class="mb-6"><label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">Blog Content: </label>
            <input type="text" value={content} onChange={({target: {value}}) => setContent(value)}
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
        <button class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={submit}>Submit</button>
        {posts.map(post => {
                return <div key={post.id}>
                    <Link className='hover:underline' to={`/blogs/${post.id}`}>{post.title}</Link>
                </div>
            })}
    </Container>)
}
export default Home;
