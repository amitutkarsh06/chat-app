import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      
      { noChatSelected ? <NoChatSelected /> : 
      
        
          
      <>
        <div className="bg-[#232528] px-4 py-2 mb-2">
          <span className="label-text text-slate-400">To:</span>{" "}
          <span className="text-gray-300 font-bold">Jon doe</span>
        </div>
        <Messages />
        <MessageInput />
      </>
      
      
      }

    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return (

  <div className='flex items-center justify-center w-full h-full'>
    <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-light flex flex-col items-center gap-2'>
      <p>Welcome Jon doe</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className="text-3xl md:text-6xl text-center" />
     </div>
   </div>
  );
}
