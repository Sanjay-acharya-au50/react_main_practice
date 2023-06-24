import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
    const users = [
    {id: 1, name: 'san', bike:"RS"},
    {id: 2, name: 'man' , bike: "KTM"},
    {id: 3, name: 'ban', bike : "RX"},
  ]
  const { userId } = useParams();
  const [data, myData] = useState({});
  useEffect(()=>{
    function fun (){

    const res = users[userId]
    myData(res) ;
}
fun();
  })
  //   const userId = params.userId; (destructuring userId)
  return <div>
  User id: {data.id}<br/>
  User bike: {data.bike} <br/>
  User name: {data.name} <br/>

    
  </div>;
};
export default UserDetails;