import { test, describe, expect } from 'vitest';
import Edit from './Edit';
import { render, screen, fireEvent, waitfor } from '@testing-library/react';
import axios from 'axios';

describe('Edit', () => {
	test('Rendering items', () => {
		render(<Edit />);
		const title = screen.getByLabelTest('Title');
		const content = screen.getByLabelTest('Content');
		const submitbutton = screen.getByRole('button');

		expect(title).toBeDefined();
		expect(content).toBeDefined();
		expect(submitbutton).toBeDefined();
	});
});
