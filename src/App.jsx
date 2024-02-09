
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  //create state to store data
  const [interest,setInterest]=useState(0)
  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)

  const [principleAmountValid,setPrincipleAmountValid]=useState(true)
  const [rateAmountValid,setRateAmountValid]=useState(true)
  const [yearAmountValid,setYearAmountValid]=useState(true)


  const handleReset =()=>{
    console.log("inside handleReset function");
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)
  }
  const handleValidation=(tag)=>{
    console.log("inside handleValidation");
    const {value,name}=tag
    console.log(value,name);
    console.log(!!!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*\.?\d+$/)){
      //valid
      if(name=="principle"){
        setPrinciple(value)
        setPrincipleAmountValid(true)
      }else if(name=="rate"){
        setRate(value)
        setRateAmountValid(true)
      }else{
        setYear(value)
        setYearAmountValid(true)
      }
    }
    //invalid
    else{
      if(name=="principle"){
        setPrinciple(value)
        setPrincipleAmountValid(false)
      }else if(name=="rate"){
        setRate(value)
        setRateAmountValid(false)
      }else{
        setYear(value)
        setYearAmountValid(false)
      }
    }
  }

  const handleCalculate =()=>{
    if(principle && rate && year){
      setInterest(principle*year*rate/100)
    }else{
      alert("please fill the form completely")
    }
  }
  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width:'600px'}} className='bg-light p-5 rounded shadow'>
    <h3>Simple Interest Calculator</h3> 
    <p>calculate your simple Interest easily</p>
    <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
      <h1>₹ {interest}</h1>
      <p className='fw-bolder'>Total Simple Interest</p>
    </div>
    <form className="mt-5">
      <div className="mb-3">
      <TextField className='w-100' id="outlined-basic-principle" label="₹principle amount" variant="outlined" value={principle ||""} name='principle' onChange={e=>handleValidation(e.target)}/>
      </div >
     {!principleAmountValid && <div className='text-danger mb-3'>*Invalid principle input</div>} 
      <div className="mb-3">
      <TextField className='w-100' id="outlined-basic-rate" label="Rate of interest(p.a)%" variant="outlined" value={rate ||""} name='rate' onChange={e=>handleValidation(e.target)} />
      </div>
      {!rateAmountValid && <div className='text-danger mb-3'>*Invalid Rate input</div>} 

      <div className="mb-3">
      <TextField className='w-100' id="outlined-basic-time" label="Time period(yr)" variant="outlined" value={year ||""} name='year' onChange={e=>handleValidation(e.target)}/>
      </div>
      {!yearAmountValid && <div className='text-danger mb-3'>*Invalid year input</div>} 

      <Stack direction="row" spacing={2}>
<Button disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained" onClick={handleCalculate}>Calculate</Button>
<Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
</Stack>
    </form>
    </div>
    </div>
  )
}

export default App
