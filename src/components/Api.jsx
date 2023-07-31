import axios from "axios";
import { useState } from "react";


export function QrCodeGenerator() {
  const [ userName, setUserName] = useState('')
  const [ userData, setUserData] = useState(null)


  function handleInputChange (event) {
    setUserName(event.target.value);
  }


  const fetchGithubData = async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        const data = response.data;
        
        setUserData(data);
        console.log(data);

      } catch (error) {
        console.log(error);
      }
  }
  

  return (

    
    <div>
      <div>
          <input type="text" label="user" value={userName} onChange={handleInputChange}/>
          <button  onClick={fetchGithubData}>Enviar</button>
        </div>

        {userData && (
          <div>
            <h2>{userData.name}</h2>
            <h3>{userData.location}</h3>
            <img src={userData.avatar_url} alt="" />
            <p>{userData.bio}</p>
          </div>
        )}
    </div>

  )
  
}
