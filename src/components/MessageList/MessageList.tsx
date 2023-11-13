import { v4 as uuidv4 } from 'uuid';
import Message from '../Message/Message';
import './MessageList.scss';

function MessageList() {
  return (
    <div className="message-list">
      {Array.from({ length: 50 }).map(() => (
        <Message key={uuidv4()} />
      ))}
    </div>
  );
}

export default MessageList;
