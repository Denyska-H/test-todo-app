import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';

import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
