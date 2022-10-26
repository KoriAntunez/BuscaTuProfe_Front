import {render , screen } from '@testing-library/react'
import InputText from './InputText'
import '@testing-library/jest-dom'

describe('InputText', () => {
    it('should render a label', () => {
        render(<InputText/>)
        expect(screen.getByTestId('input-text')).toBeInTheDocument()
    });

    it('should render a label', () => {
        const attrs = {
            id: 'test',
            value: "0",
            type: 'text',
            onChange: () => {},
            errorMsg: 'test'
        }
        render(<InputText {...attrs}/>)
        const InputTxt = screen.getByTestId('input-text')
        expect(InputTxt).toHaveAttribute('type', attrs.type)
        expect(InputTxt).toHaveAttribute('name', attrs.id)
    })
    it('should render a label', () => {
        render(<InputText errorMsg={'error'}/>)
        expect(screen.queryByText('error')).toBeInTheDocument()
    })

});