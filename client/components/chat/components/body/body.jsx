import "./body.css"
import { useNavigate } from "react-router-dom"
import '../../index.css'
function Body ({messages, status}) {
    const currentDate = new Date();
    const currentHour = String(currentDate.getHours()).padStart(2, '0');
  // Получаем текущие минуты
  const currentMinutes = String(currentDate.getMinutes()).padStart(2, '0');

  // Собираем время в формате "часы:минуты"
  const currentTime = `${currentHour}:${currentMinutes}`;
    const navigate = useNavigate();
    const handleLeave = () => {
        localStorage.removeItem('user');
        navigate('/')
    }
    return ( 
      <>
      <section className="Chat">
      <div className="ChatHead"> 
        <div>
            <button onClick={handleLeave}>left to chat</button>
        </div>
          <li className="group">
              <div className="avatar"><img src="imgs/Asset 1.svg" alt=""/></div>
              <p className="GroupName">David Johnson</p>

          </li>
          <div className="callGroup">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-video"></i>

          </div>
      </div>
      <div className="MessageContainer">
        
          {/* <div className="messageSeperator">Yesterday</div> */}
        {
            messages.map((element) => 
                element.name === localStorage.getItem('user') ? ( 
                     <div className="message you" key={element.id}>
                        <p>you</p>
                <p className="messageContent">{element.text}</p>
                <div className="messageDetails">
                    <div className="messageTime">{currentTime}</div>
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>) : (<div className="message me" key={element.id}>
                <p>{element.name}</p>
                <p className="messageContent">{element.text}</p>
                <div className="messageDetails">
                    <div className="messageTime">3:21 PM</div>
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>)
            )
        }
         <div className="type">
            <p>{status}...</p>
         </div>
        
        
      </div>
     
  </section>
      </>
     );
}

export default Body ;