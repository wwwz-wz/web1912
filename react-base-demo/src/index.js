import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/myComponent'
import ComponentListCycle from './components/componentListCycle'
import FormComponent from './components/formComponent' 
import FormComponentRef from './components/FormComponentRef'
import Parents from './components/elements/parents'

function App(){
  return (
    <div>
      {
        /* <MyComponent /> */
        /* <ComponentListCycle /> */
        // <FormComponent />
        // <FormComponentRef />
        <Parents />
      }
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
