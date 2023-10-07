import React, { useState } from 'react';
import Calculator from '../components/Calculator';

function CalculatorContainer(): JSX.Element {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [total, setTotal] = useState('');

  const handleFirstChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFirstNum(value);
  }

  const handleSecondChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSecondNum(value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const temp = Number(firstNum) + Number(secondNum);
    setTotal(temp.toString());
  }

  return (
    <Calculator calculator_title='Adding Two Numbers' handleSubmit={handleSubmit} submit_title='Add Two Number' number_form={[
        {
            name: 'firstnumber',
            placeholder: 'First Number',
            value: firstNum,
            onChange: handleFirstChange
        },
        {
            name: 'secondnumber',
            placeholder: 'Second Number',
            value: secondNum,
            onChange: handleSecondChange
        }
      ]} result={{
        title: 'Total',
        value: total
      }} />
  );
}

export default CalculatorContainer;
