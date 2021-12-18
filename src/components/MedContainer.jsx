import React from 'react'
import "./MedContainer.css"
import { ReactComponent as Eth } from   "../images/icon-ethereum.svg";
import { ReactComponent as Clock} from   "../images/icon-clock.svg";

const MedContainer = () => {
    return (
        <div >
            <div className='med_Container' >
            <h1 className="med_header">Equilibrium #3429</h1>
<br></br>
<h3 className='med_middle'>Our Equilibrium collection promotes balance and calm.</h3>
</div>

<div className='med_footer'>
    
        <div className='etherium'>
            <Eth />
   <h4 className='ETH'> 0.041 ETH </h4>
   </div>
   <div className='clock'>
       <Clock />
   <h4 className='days'>3 days left</h4>
   </div>
    
</div>
<hr></hr>
        </div>
    )
}

export default MedContainer
