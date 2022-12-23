import FullName from './FullName';
import Profession from './Profession';
import Bio from './Bio';
import Image from './Image';
import "./Profile.css"
import Count from './Count';


const Profile = () => {
  const AdelImam = {
   FullName: "Tyson Ngo (Tenz)",
   Bio: "Tyson (TenZ) Ngo (born May 5, 2001) is a Canadian player of Vietnamese descent who currently plays for Sentinels.He is a former Counter-Strike: Global Offensive player known for being on Cloud9.",
   Profession: "Pro gamer / Fps Player / Youtuber",
 };
 return (
   <div className="App">
    <Count/>
     <FullName name={AdelImam} />
     <Profession profession={AdelImam} />
     
     <Image>
       <img 
         src="https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/tenz.png?dpr=1|height=675|q=85|sharpen=2|width=1200"
         alt="tenz" />
         <img style={{ marginLeft:'650px',height:'400px', marginTop:'100px'}} src="https://cdn.thespike.gg/Player%2520Images%25204%2FSEN-TenZ_1659514116916.png" alt="tenz" />
     </Image>
     <Image/>

     <Bio bio={AdelImam}/>
     

   </div>
 );
}

export default Profile