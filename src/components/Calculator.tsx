import React from 'react';

interface CalculatorProps {
    calculator_title: string;
    result: {
        title: string;
        value: string;
    };
    submit_title: string;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    number_form: {
        name: string;
        placeholder: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }[];
}

function Calculator(props: CalculatorProps): JSX.Element {

  return (
      <div className="App-calculator">
        <h2>{props.calculator_title}</h2>
        <form onSubmit={props.handleSubmit} className='App-form'>
            {props.number_form.map((e, i) => (
                <input
                key={i}
                className='input'
                type="number"
                name={e.name}
                placeholder={e.placeholder}
                value={e.value}
                onChange={e.onChange}
              />
            ))}
          <button type="submit" className="submit">{props.submit_title}</button>
          <p>{props.result.title}: {props.result.value}</p>
        </form>
      </div>
  );
}

export default React.memo(Calculator);
