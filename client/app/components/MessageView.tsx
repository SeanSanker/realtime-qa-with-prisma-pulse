export interface Message {
  id: string;
  createdAt: string;
  seen: boolean;
  senderSocketId: string;
  text: string;
  upvotes: number;
}

export interface MessageViewProps {
  message: Message;
  onDelete: () => void;
  sendVote: (vote: number) => void;
}

export function MessageView({ message, onDelete, sendVote }: MessageViewProps) {
  return (
    <div className="mb-4 p-4 border-b border-gray-200 min-h-32">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold text-gray-700">
          {message.senderSocketId}
        </span>
        <span className="text-xs text-gray-500">
          {new Date(message.createdAt).toLocaleString()}
        </span>
      </div>
      <div className="float-right flex gap-4">
        {/* <div className="flex gap-2 items-center">
          <button className="text-2xl" onClick={() => sendVote(-1)}>👎</button>
          <div className="text-black">
          {message.upvotes}
          </div>
          <button className="text-2xl" onClick={() => sendVote(1)}>👍</button>
        </div> */}
        <button className="text-5xl" onClick={onDelete}>✅</button>
      </div>
      <p className="text-gray-800">{message.text}</p>
    </div>
  );
}
