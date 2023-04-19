import Container from '../components/Container';
import {json, useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Edit = () => {
    
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {id} = useParams();
    const [content, setContent]  = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const getData = async () => {
        const url = `http://localhost:3001/v1/api/posts/${id}`;
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBooks(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }
    const submit = async () => {
        await axios.patch(`http://localhost:3001/v1/api/posts/${id}`, {
          title, content
        });
        navigate(`/`);
    }
    useEffect(() => {
        getData();
    }, []);
    return (<Container >
<p class="font-sans-serif italic text-2xl text-align: center">EDIT POST</p>

<p></p>
        <p><input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}
        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input></p>
        <p><input type="text" value={content} onChange={({target: {value}}) => setContent(value)}
        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input></p>
        <button class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={submit}>Submit</button>
    </Container>)
}

export default Edit