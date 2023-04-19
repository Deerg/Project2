import { test, describe, expect, mount } from 'vitest';
import Home from './Home';
import { render, screen, fireEvent, waitfor } from '@testing-library/react';
import axios from 'axios';

describe('Create', () => {
	function submit(title, content) {
		return axios.post('http://localhost:3001/v1/api/posts', { title, content });
	}
	test('send title and content', async () => {
		render(<Home />);
		const title = 'Title';
		const content = 'content';
		const data = { title, content };

		await submit(title, content);
		expect(axios.post).toHaveBeenCalledWith(
			'http://localhost:3001/v1/api/posts',
			data
		);
	});
});

describe('Reading', () => {
	test('Label are render', async () => {
		render(<Home />);

		expect(screen.getByLabelText('Generate Blog Post')).toBeInTheDocument();
	});
});
