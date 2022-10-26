import {render , screen } from '@testing-library/react'
import InputNumber from './InputNumber'
import '@testing-library/jest-dom'

describe('InputNumber', () => {
    it('should render a label', () => {
        render(<InputNumber/>)
        expect(screen.getByTestId('input-number')).toBeInTheDocument()
    });

    it('should render a label', () => {
        const attrs = {
            id: 'test',
            label: 'test',
            value: "0",
            step: "1",
            onChange: () => {},
            errorMsg: 'test'
        }
        render(<InputNumber {...attrs}/>)
        const InputText = screen.getByTestId('input-number')
        expect(InputText).toHaveAttribute('type', 'number')
        expect(InputText).toHaveAttribute('name', attrs.id)
        expect(InputText).toHaveAttribute('value', attrs.value)
        expect(InputText).toHaveAttribute('step', attrs.step)
    })
    it('should render a label', () => {
        render(<InputNumber errorMsg={'error'}/>)
        expect(screen.queryByText('error')).toBeInTheDocument()
    })

});