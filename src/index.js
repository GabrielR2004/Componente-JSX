import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ComponenteBasico from './components/basicos/Componente1';
import ComponenteJSX from './components/basicos/ComponenteJSX';

ReactDOM.render (
  <div>
    <ComponenteBasico></ComponenteBasico> 
    <ComponenteJSX></ComponenteJSX>
  </div>, document.getElementById('root')
)