import Container from '../components/Container';
import {json, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Book = () => {
    
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {id} = useParams();
    const [content, setContent]  = useState('');
    const [title, setTitle] = useState('');

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
        reload
    }
    useEffect(() => {
        getData();
    }, []);

    return (<Container >
        <Link className='hover:underline' to={`/books`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
Click Icon to Return
</Link>
<p class="font-sans-serif italic text-6xl">{books.title}</p>
<p class="font-sans-serif italic text-6xl">{books.content}</p>

<p>EDIT POST</p>
        <p><input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}></input></p>
        <p><input type="text" value={content} onChange={({target: {value}}) => setContent(value)}></input></p>
        <button onClick={submit}>Submit</button>
    </Container>)
}

export default Book;