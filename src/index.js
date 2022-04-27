import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);






//ASI SE HACE PARA REACT 18

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//     <App tab="home" />
// );
