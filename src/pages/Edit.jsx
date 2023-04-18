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
        navigate(`/books`);
    }
    useEffect(() => {
        getData();
    }, []);
    return (<Container >
<p class="font-sans-serif italic text-6xl">EDIT POST</p>

<p></p>
        <p><input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}></input></p>
        <p><input type="text" value={content} onChange={({target: {value}}) => setContent(value)}></input></p>
        <button onClick={submit}>Submit</button>
    </Container>)
}

export default Edit