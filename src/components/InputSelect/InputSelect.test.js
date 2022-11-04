import {cleanup, render , screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputSelect from './InputSelect'

describe('InputSelect', () => {
    beforeEach(() => {
        cleanup();
    })
    it('Testing Input Select component',( ) => {
        const attrs = {
            id: 'test',
            label: 'test',
            valueSelect: "0",
            options: [{title: 'test'}],
            onChange: () => {},
            style_extra: 'test'
        }
        render(<InputSelect {...attrs}/>)
        expect(screen.getByTestId('test-select')).toBeInTheDocument()
    })
    it('Testing Input Select component 2',( ) => {
        const attrs = {
            id: 'test',
            label: 'test',
            valueSelect: "0",
            options: [{title: 'test'}],
            onChange: () => {},
            style_extra: 'test'
        }
        render(<InputSelect {...attrs}/>)
        const InputSel = screen.getByTestId('test-select')
        
        expect(InputSel).toHaveAttribute('id', attrs.id)
        expect(InputSel).toHaveAttribute('name', attrs.id)
        expect(screen.getByRole('option')).toHaveTextContent('test')
    })
})