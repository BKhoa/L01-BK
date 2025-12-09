// HomeScreen.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen basic tests', () => {

  // 1. Không crash khi render
  test('should render without crashing', () => {
    const screen = render(<HomeScreen />);
    expect(screen).toBeTruthy();
  });

  // 2. Render UI cơ bản
  test('should display the title and add button', () => {
    const { getByText, getByPlaceholderText } = render(<HomeScreen />);

    expect(getByText('My Tasks')).toBeTruthy();
    expect(getByPlaceholderText('Add new task')).toBeTruthy();
    expect(getByText('+')).toBeTruthy();
  });

  // 3. Nhấn nút add task
  test('should add a new task when pressing the add button', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<HomeScreen />);

    const input = getByPlaceholderText('Add new task');
    const addButton = getByText('+');

    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);

    expect(queryByText('New Task')).toBeTruthy();  // task xuất hiện trong list
  });
});
