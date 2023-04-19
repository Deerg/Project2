import { test, describe, expect } from 'vitest';
import Blog from './Blog';
import { render, screen, fireEvent, waitfor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

jest.mock('axios');

describe('Deleting', () => {
	test('Call the delete and navigate to previous page', async () => {
		const nav = jest.fn();
		const { getByRole } = render(<Blog navigate={nav} />);
		const deletebutton = getByRole('button');
		fireEvent.click(deletebutton);
		expect(nav).toHaveBeenCalledWith('/');
	});
});
