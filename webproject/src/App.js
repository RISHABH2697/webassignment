import React from "react";
import WestIcon from '@mui/icons-material/West';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
// import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

const App = () => {
  return(
<>
<div className="main_div">
<div className="center_div">
<h1/>
<br/>

<h2><WestIcon/>View patient</h2>
<br/>
<div className="line"/> 
<br/>
  <h4>Rishabh,M/26</h4> 
  <h4>patient:872020727153457<div className="AccountCircleRoundedIcon"><AccountCircleRoundedIcon/></div></h4>
  <br/>
  <div className="popup">
   <h1 className="gol">Goal reached</h1> <div className="box1"><p>EMG</p><div className="ShowChartRoundedIcon"><ShowChartRoundedIcon/></div></div> <div className="box2"><p2>ROM</p2><div className="ShowChartRoundedIcon1"><ShowChartRoundedIcon/></div></div>
    <div className="semi-circle"/>   
    <div className="text"><h1>37%</h1></div>
   
    <div className="rectangle"/>
    
  </div>
  <br/>
  <div className="th">
  <table>
   <tr>
   <pre>
    <th>
    Phone no.                               <PhoneIcon/>9245924567
    </th>
    </pre>
   </tr>
   <br/>

   <tr>
   <pre>
    <th>
    Mail ID                                    <MailOutlineIcon/>Rishabh2906@gmail.com
    </th>
    </pre>
   </tr>
      <br/>
   <tr>
    <pre>
    <th>
    Affected side                          <PersonOutlineIcon/>Billateral
    </th>
    </pre>

   </tr>
    <br/>
   <tr>
    <pre>
    <th>
    Comdition                               <RadioButtonUncheckedIcon/>Ortho 
    </th>
    </pre>
    
   </tr>
    <br/>
   <tr>
    <pre>
    <th>
    Speciality                               <MedicalServicesIcon/>Osteorthritis
    </th>
    </pre>
    </tr>
    </table>
    </div>
   
 <div className="line2"/>
 <pre>
 <h3>
  <DescriptionOutlinedIcon/>Medical history     Hypertension,DM,Hypothyrodism
  </h3>
  </pre>
  <br/>
  <div className="line3"/>
  <br/>
  <div className="downline">
   <pre>
    <th>
    <ArrowBackIosNewSharpIcon/>                                                         <PanoramaFishEyeIcon/>                                                        <MenuIcon/>
    </th>
    </pre>
    
  </div>

  
  

</div>
</div>

</>
  )
}

export default App;

