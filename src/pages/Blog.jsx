import Container from '../components/Container';
import { json, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Blog = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { id } = useParams();
	const [content, setContent] = useState('');
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
		} catch (e) {
			setError('Error: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	const deletePost = async () => {
		await axios.delete(`http://localhost:3001/v1/api/posts/${id}`);
		navigate('/');
	};
	return (
		<Container>
			<Link className="hover:underline" to={`/`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={3}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
					/>
				</svg>
				Click Icon to Return
			</Link>
			<div></div>
			<label class="font-sans-serif text-3xl"> Title:</label>
			<p class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				{books.title}
			</p>
			<label class="font-sans-serif text-3xl"> Blog Content:</label>
			<p class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				{books.content}
			</p>
			<div>Last Edited : {Date(books.last_updated)}</div>
			<div class="text-3xl">
				<Link className="hover:underline" to={`/blogs/${id}/edit`}>
					EDIT
				</Link>
			</div>
			<button
				class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				onClick={deletePost}
			>
				Delete
			</button>
		</Container>
	);
};

export default Blog;
