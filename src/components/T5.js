import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


function T5(){
    const [birthDate,setBirthDate] = useState("");
    const [age, setAge] = useState(null);
    const handleChange = (event) =>{
        setBirthDate(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        calculateAge(birthDate);
    }
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateobj = new Date(birthDate);

        const ageMs = today - birthDateobj;
        const ageY = ageMs/(1000*60*60*24*365.25);

        const roundedAge = Math.floor(ageY);
        setAge(roundedAge);
        
    }
    return(
        <form onSubmit={handleSubmit} style={{flexDirection:"column"}} className="d-flex justify-content-center align-items-center">
            <h1 style={{fontSize:"40px",fontWeight:"bold",fontFamily:"Arial"}}>Age Calculator</h1>
            <p className="mt-2" style={{fontWeight:"bold",fontFamily:"Arial"}}>Enter your date of birth</p>
            <input className="form-control ps-2 " type="date" value={birthDate} onChange={handleChange} style={{width:"320px",borderRadius:"5px"}}/>
            <button type="submit" className="text-white btn btn-primary px-3 mt-2" style={{fontFamily:"Arial"}}>Calculate Age</button>
            {age!==null && (
                <p className="mt-3" style={{fontFamily:"Arial",fontWeight:"bold",fontSize:"25px"}}>Your are {age} years old</p>
            )}
        </form>
        
    )
}
export default T5;