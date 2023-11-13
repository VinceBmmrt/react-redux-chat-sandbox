type MessageProps = {
  author: string;
  content: string;
};

function Message({ author, content }: MessageProps) {
  return (
    <div className="message">
      <div className="message__author">{author}</div>
      <div className="message_content"> {content}</div>
    </div>
  );
}

export default Message;
