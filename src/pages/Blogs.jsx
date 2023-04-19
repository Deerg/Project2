import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Blogs = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = async () => {
        const url = 'http://localhost:3001/v1/api/posts/';
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


    return <>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
        {!error && !loading && 
            <>
            {books.map(book => {
                return <div key={book.id}>
                    <Link className='hover:underline' to={`/Blogs/${book.id}`}>{book.title}</Link>
                </div>
            })}
            </>
        }
    </>
}

export default Blogs;