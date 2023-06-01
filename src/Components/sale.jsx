import React, { useState, useEffect } from "react";
import "../Style/sale.css"
import {Link} from 'react-router-dom'

function Sale() {

  const [sale, setsale] = useState("");


  
  return (
    <div style={{padding:"0 2%"}}>
    <h2 style={{fontWeight:"700",color:"#12D576",paddingLeft:"5%"}}>Create STO/ICO Token Sale </h2>
    <div className="tokenBody" style={{padding:"2%"}}>
    <div className="tokenCreate" style={{width:'45%'}}>
      <div style={{paddingTop:"1%",padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}}focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
      <label htmlFor="html" style={{color:"#949494",padding:"3px 2%"}}>Create your token presale in minutes</label>
      </div>
      <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
      <label htmlFor="css" style={{color:"#949494",padding:"3px 2%"}}>Proven solidity crowdsale contract</label><br/>
      </div>
      <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
      <label htmlFor="javascript" style={{color:"#949494",padding:"3px 2%"}}>Run an initial coin offer(ICO)</label>
      </div>
      <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
      <label htmlFor="scss" style={{color:"#949494",padding:"3px 2%"}}>Run a security token offering(STO)</label>
      </div>
      <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}}focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
      <label htmlFor="sass" style={{color:"#949494",padding:"3px 2%"}}>Create an IDO token presale</label>
      </div>

    </div>
    <div className="tokenSettings" style={{width:"45%",backgroundColor:"transparent",border:"0",borderLeft:"1px solid"}}>
    <h3 style={{color:"white"}}>Token Contract Address*</h3>
     <input type="text" value={sale} onChange={(e) => setsale(e.target.value)}
     style={{margin:"10px",marginLeft:"0",marginBottom:"10px",height:"50px",backgroundColor:"transparent",border:"1px solid #464646",borderRadius:"7px",width:"100%",color:"white"}}/>
     
     <Link to={`/saletoken/${sale}`} >
     <button style={{padding:"2% 7%",backgroundColor:"#12D576",borderRadius:"30px",marginTop:"1%",fontSize:"20px",fontWeight:"400"}}>Continue</button>
     </Link> 
    </div>
  </div>
  </div>
  )
}

export default Sale
