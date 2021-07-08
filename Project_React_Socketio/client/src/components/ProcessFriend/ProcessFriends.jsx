import React, { useState,useEffect,useContext } from 'react';
import "./processFriends.css";
import { AuthContext } from "./../../context/AuthContext";
import axios from "axios";
export default function ProcessFriends(){
    const [friends,setFriends] = useState([]);
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(()=>{
        const getData = async () =>{
            try {
                const res = await axios.get("/conversations/getall/"+user._id);
                setFriends(res.data);
              
            } catch (error) {
                console.log('error ProcessFriend',error);
            }
        }
        
        getData();

       
    })
return (
<div>
     <div className="inputSearch">
    <label htmlFor="text">Tìm kiếm</label>
     </div>
     <div className="listFriend">

         {      
                friends.map( (fr,index) => (
                <div key={index}>
                  
          <img
           className="friendImg"
            src={
              fr.profilePicture !== ""
                ? PF + fr.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
    
                  <label htmlFor="text" className="friendText">{fr.username}</label>
                  <button className="btn btn-primary"><i class="fas fa-user-plus"></i> Add Friend</button>
                </div>
                ))
         
         }
    
     </div>
     </div>)
}