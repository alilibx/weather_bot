
//Import Dep.
import { useState , useRef, useEffect} from "react";
import { userMessage, sendMessage } from "../../actions/watson";
import { connect } from "react-redux";

const Chat = ({chat, userMessage, sendMessage}) => {
    //Handle user messages
    const [message, setMessage] = useState("");
    const endOfMessages = useRef(null);


  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [chat]);

    //Handle message submission
    const handleClick = async (e) =>{
        const code = e.keyCode || e.which;

        if(code===13 && e.target.value !== "")
        {
            console.log(message);
            userMessage(message);
            sendMessage(message,localStorage.session);
            setMessage("");
        }
    }


    return (
        <div className="chat">
            <h1> The Weather Bot</h1>
            {/* Handle Message */}
            <div className="historContainer">
            {chat.length === 0? "": chat.map((msg,i) =><div key={i} className={msg.type}>{msg.message}</div>)}
            <div ref={endOfMessages}></div>
            </div>
            {/* Input Message */}
            <input id="chatbox" onChange={(e)=>setMessage(e.target.value)} onKeyPress={handleClick} value={message}></input>
        </div>
    )
}

const mapStateToProps = state =>({
    chat:state.watson.messages
});

export default connect(mapStateToProps,{userMessage, sendMessage})(Chat);