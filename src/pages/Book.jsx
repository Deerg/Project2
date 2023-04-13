import Container from '../components/Container';
import {json, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
const Book = () => {
    
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {id} = useParams();

    const getData = async () => {
        const url = `https://api.matgargano.com/api/books/${id}`;
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
    useEffect(() => {
        getData();
    }, []);

    return (<Container >
        <Link className='hover:underline' to={`/books`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
Click Icon to Return
</Link>
        <table>
            <tr>
                <th>
                    <img src ={books.imageURL} ></img>
                    <div class="text-gray-600 text-lg ">Published By:
                        <div class="text-black-600 italic">{books.publisher}Ⓒ</div>
                        
                    </div>
                </th>
                <th>
                    <p class="font-sans-serif italic text-6xl">{books.title}</p>
                    <div class="text-gray-600 text-4xl">|| {books.author} ||</div>
                    <div class="text-black-600 text-2xl">Year: {books.year}</div>
                    <div class="font-mono font-family:ui-monospace text-black-600 text-1xl">Written In: {books.country}</div>
                    <div class="font-mono font-family:ui-monospace text-black-600 text-1xl">Pages: {books.pages}</div>
                </th>
                
            </tr>
            <tr>
                
            </tr>
        </table>
        
        
        
        
    </Container>)
}

export default Book;