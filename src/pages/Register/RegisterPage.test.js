/*Importamos las librerias principales*/
import React from 'react';
import RegisterPage from './RegisterPage';

/*import NavBar from '../../layouts/NavBar';*/

/*Renderizado de la vista Registro*/
describe("<RegisterPage></RegisterPage>", () => {
  it('render "RegisterPage"', () => {
    const wrapper = shallow(<RegisterPage/>);
    expect(wrapper).toMatchSnapshot()
  });

/*
  it('should have the `NavBar` in "Register"', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.containsMatchingElement(<NavBar></NavBar>)).toBe(true);
  });*/

  it('handleClose test', () => {
    const wrapper = shallow(<RegisterPage />);
    const button = wrapper.find({ role: "close" });
    button.simulate("click");
    expect(wrapper.state().open).toBe(false)
  })
});