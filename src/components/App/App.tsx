import Form from '../Form/Form';

import MessageList from '../MessageList/MessageList';
import Settings from '../Settings/Settings';

import './App.scss';

function App() {
  return (
    <>
      <Settings />
      <div className="App">
        <MessageList />
        <Form />
      </div>
    </>
  );
}

export default App;
