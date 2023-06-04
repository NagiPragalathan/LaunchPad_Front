import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import '../Style/contract.css'
function Contract() {

  const [token, setToken] = useState("");

  return (
    <div style={{ padding: "0 2%" }}>
      <h2 style={{ fontWeight: "700", color: "#12D576", paddingLeft: "7%" }}>Manage your tokens</h2>
      <div className="tokenBody" style={{ padding: "2%", justifyContent: "center" }}>
        <div className="tokenCreate" style={{ width: "45%" }}>
          <div style={{ paddingTop: "1%", padding: "2%", display: "flex", flexDirection: "row" }}>        <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
            <label htmlFor="html" style={{ color: "#949494", padding: "3px 2%" }}>Create liquidity tool</label>
          </div>
          <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}>        <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
            <label htmlFor="css" style={{ color: "#949494", padding: "3px 2%" }}>Mint additional tokens, burn tokens</label><br />
          </div>
          <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}>        <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
            <label htmlFor="javascript" style={{ color: "#949494", padding: "3px 2%" }}>Change token owner or renounce ownership</label>
          </div>
          <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}>        <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
            <label htmlFor="scss" style={{ color: "#949494", padding: "3px 2%" }}>Pause and unpause, manage whitelist and blacklist</label>
          </div>
          <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}>        <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
            <label htmlFor="sass" style={{ color: "#949494", padding: "3px 2%" }}>Works with all your tokens, even if created without Token Tool</label>
          </div>
        </div>
        <div className="tokenSettings" style={{ width: "45%", backgroundColor: "transparent", border: "0", borderLeft: "1px solid" }}>
          <h3 style={{ color: "white" }}>Token Address</h3>
          
          <input type="text" value={token}
            onChange={(e) => setToken(e.target.value)} style={{ margin: "10px", marginLeft: "0", marginBottom: "10px", height: "48px", backgroundColor: "transparent", border: "1px solid #464646", borderRadius: "7px", width: "100%", color: "white" }} />
          
          <Link to={`/managetoken/${token}`} >
            <Button style={{ padding: "2% 7%", backgroundColor: "#12D576", borderRadius: "30px", marginTop: "1%", fontSize: "20px", fontWeight: "400" }}>Continue</Button>
          </Link>
          <Link to={`/token`} >
            <h5 style={{ padding: "3% 0", color: "white" }}>Don't have your token yet ? <span style={{ color: "#12D576", fontWeight: "700" }}>Create Token</span></h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contract
