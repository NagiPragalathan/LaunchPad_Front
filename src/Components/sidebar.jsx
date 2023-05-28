import { ConnectButton } from "@rainbow-me/rainbowkit";
import React,{useEffect} from 'react'
import '../Style/sidebar.css'
import {Link} from  'react-router-dom'
import Wallet from './Wallet.jsx'
import Contact from './contact.jsx'
import Price from './price.jsx'
import Token from './token.jsx'
import Contract from './contract.jsx'
import Send from './send.jsx'
import Sale from './sale.jsx'
import {Dropdown} from'react-bootstrap'
import Logo from '../assets/logo.png'
import Lock from './lock.jsx'
import Home from './home.jsx'
import Manage from './manage.jsx'
function Sidebar(props) {
    const {page}=props
    function Main(){
        if(page=="home")return <Home/>
        if(page=="contact")return <Contact/>
        if(page=="pricing")return <Price/>
        if(page=="wallet")return <Wallet/>
        if(page=="token")return <Token/>
        if(page=="contract")return <Contract/>
        if(page=="send")return <Send/>
        if(page=="sale")return <Sale/>
        if(page=="lock")return <Lock/>
        if(page=='manage')return <Manage/>
    }
    function NavIcons(){
            let ai=document.getElementsByClassName('riht')[0]
    
            if(window.innerWidth>648)return (<><Link to="/pricing" className="rihtLink"><div style={{fontWeight:"400",padding:"10px",fontSize:"20px",color:"white",}}>Pricing</div></Link> 
            <Link to="/contact" className="rihtLink"><div style={{fontWeight:"400",padding:"10px",color:"white",fontSize:"20px",paddingRight:"25px"}}>Contact</div></Link> 
            <ConnectButton showBalance={false} /> </>)
            if(window.innerWidth<=648)return (<Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Menu
                </Dropdown.Toggle>
                <Dropdown.Menu id="dropdown-basic" style={{backgroundColor:"#0d0d3a"}}>
                  <Dropdown.Item href="" style={{fontWeight:"700",color:"white"}}><Link to="/pricing"><div style={{padding:"10px",color:"white"}}>Pricing</div></Link></Dropdown.Item>
                  <Dropdown.Item href="" style={{fontWeight:"700",color:"white"}}><Link to="/contact"><div style={{padding:"10px",color:"white"}}>Contact</div></Link> </Dropdown.Item>
                  <Dropdown.Item href=""><ConnectButton showBalance={false} /></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>)
        }
        function showSide(event){
            let beta=document.getElementsByClassName('sideNavButton')
            let alp2=document.getElementsByTagName('svg')
            for(let i=0;i<beta.length;++i){
                beta[i].style.border="0"
                alp2[i].style.fill="#464646"
            }
             let alp1=event.target
             if(alp1.tagName=="path")alp1=alp1.parentNode
             let alp=alp1.parentNode
             alp1.style.fill="#12D576"
             alp.style.borderLeft="5px solid #12D576"
        }
  return (
    <div className="mainpage">
        <div className="sidebar">
            <Link to='/'><img  style={{paddingLeft:"20px"}} src={Logo} alt="not found" /> </Link>
          <Link to="/wallet"> <div className="sideNavButton" ><svg onClick={showSide} width="45" height="35"  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenMultiIcon"><path d="m 10,5.1992188 c -4.8506317,0 -8.8007813,3.9501495 -8.8007812,8.8007812 0,4.85065 3.950152,8.800781 8.8007812,8.800781 4.850647,0 8.800781,-3.950134 8.800781,-8.800781 C 18.800781,9.1493708 14.85065,5.1992188 10,5.1992188 Z m 0,1.6015624 c 3.98595,0 7.199219,3.2132878 7.199219,7.1992188 0,3.985953 -3.213266,7.199219 -7.199219,7.199219 C 6.0140692,21.199219 2.8007812,17.98595 2.8007812,14 2.8007812,10.014072 6.0140717,6.8007812 10,6.8007812 Z"></path><path d="M7.82211 6.30021C9.08062 4.20339 11.3764 2.8002 14 2.8002C17.9764 2.8002 21.2 6.02375 21.2 10.0002C21.2 12.6237 19.7968 14.9195 17.6999 16.178C17.4769 16.9683 17.1354 17.7089 16.6959 18.3795C20.2372 17.2411 22.8 13.9199 22.8 10.0002C22.8 5.14009 18.8601 1.2002 14 1.2002C10.0802 1.2002 6.75909 3.76291 5.62061 7.30424C6.29121 6.86475 7.03183 6.52329 7.82211 6.30021Z"></path> </svg></div></Link> 
           <Link to="/token"> <div className="sideNavButton" ><svg  onClick={showSide} width="45" height="35" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg></div></Link> 
            <Link to="/contract"><div className="sideNavButton" ><svg onClick={showSide} width="45" height="35"  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="settingsIcon"><path d="m 11.435547,2.1992188 c -1.114595,0 -2.0351564,0.9206221 -2.0351564,2.0351562 v 0.1289062 c 0,0.2042373 -0.094007,0.2945645 -0.2363281,0.3535157 -0.1423207,0.058951 -0.2715949,0.060436 -0.4160156,-0.083984 -0.7674292,-0.7674292 -2.0372583,-0.7674292 -2.8046875,0 L 5.1992188,5.3789062 C 4.3611,6.217025 4.3611,7.5993812 5.1992188,8.4375 5.4006484,8.6389296 5.4053568,8.8474185 5.3203125,9.0527344 5.2352682,9.2580503 5.0856487,9.4003906 4.8007812,9.4003906 H 4.4921875 c -1.2559734,0 -2.2929688,1.0351174 -2.2929687,2.2910154 v 0.617188 c 0,1.255872 1.0351354,2.291015 2.2910156,2.291015 h 0.3105468 c 0.2848348,0 0.4344951,0.142357 0.5195313,0.347657 0.085036,0.205299 0.078368,0.411861 -0.1230469,0.613281 h 0.00195 c -0.8381699,0.83806 -0.8381699,2.222487 0,3.060547 l 0.7441406,0.746094 c 0.7674398,0.767539 2.0372543,0.767549 2.8046875,0 0.14444,-0.144431 0.2736698,-0.142947 0.4160156,-0.08398 0.1423458,0.05896 0.2363281,0.149216 0.2363281,0.353516 v 0.126953 c 0,1.114641 0.9205144,2.037109 2.0351564,2.037109 h 0.873047 c 1.255913,0 2.291015,-1.035102 2.291015,-2.291015 0,-0.341896 0.177887,-0.535183 0.427735,-0.638672 0.249847,-0.10349 0.510237,-0.09328 0.751953,0.148437 l 0.0918,0.0918 c 0.908782,0.908782 2.405671,0.908782 3.314453,0 l 0.490234,-0.490234 c 0.838087,-0.838087 0.838087,-2.22246 0,-3.060547 l -0.21875,-0.216797 c -0.161139,-0.161139 -0.160325,-0.313876 -0.09375,-0.474609 0.06658,-0.160734 0.174493,-0.269532 0.402344,-0.269532 1.114563,0 2.035156,-0.920592 2.035156,-2.035156 v -1.128906 c 0,-1.114642 -0.922468,-2.0351564 -2.037109,-2.0351564 -0.227815,0 -0.333784,-0.1087287 -0.400391,-0.2695312 -0.06661,-0.1608025 -0.06737,-0.3134835 0.09375,-0.4746094 l 0.21875,-0.21875 c 0.838124,-0.8381081 0.838124,-2.2204857 0,-3.0585938 L 19.185547,4.8886719 c -0.908803,-0.9086819 -2.405726,-0.9087579 -3.314453,0 l -0.0918,0.091797 C 15.537632,5.2221516 15.277156,5.232382 15.027344,5.1289062 14.777531,5.0254305 14.599609,4.8320459 14.599609,4.4902344 c 0,-1.2558802 -1.035143,-2.2910156 -2.291015,-2.2910156 z m 0,1.6015624 h 0.873047 C 12.699721,3.8007812 13,4.0990545 13,4.4902344 c 0,0.9866484 0.62595,1.7907407 1.414062,2.1171875 0.787615,0.3262403 1.798504,0.200429 2.496094,-0.4960938 l 0.0918,-0.089844 c 0.297272,-0.2972821 0.755337,-0.2973582 1.052735,0 l 0.488281,0.4882812 c 0.226676,0.2266719 0.226676,0.5702031 0,0.796875 l -0.216797,0.21875 c -0.61708,0.6171041 -0.730975,1.51967 -0.441406,2.21875 C 18.174334,10.443221 18.890987,11 19.763672,11 c 0.249958,0 0.435547,0.185588 0.435547,0.435547 v 1.128906 C 20.199219,12.81449 20.015662,13 19.765625,13 c -0.872649,0 -1.591309,0.556793 -1.880859,1.255859 -0.28955,0.699067 -0.175655,1.60169 0.441406,2.21875 l 0.21875,0.21875 c 0.226713,0.226713 0.226713,0.570162 0,0.796875 l -0.490234,0.488282 c -0.297418,0.297418 -0.755317,0.297418 -1.052735,0 l -0.08984,-0.08984 C 16.214425,17.190988 15.202215,17.066117 14.414062,17.392578 13.62591,17.719039 13,18.523061 13,19.509766 c 0,0.391286 -0.30012,0.689453 -0.691406,0.689453 H 11.435547 C 11.185588,20.199219 11,20.01363 11,19.763672 v -0.126953 c 0,-0.8491 -0.543963,-1.550094 -1.2246094,-1.832031 -0.6806467,-0.281938 -1.5597463,-0.170683 -2.1601562,0.429687 -0.1560268,0.15605 -0.3830224,0.15606 -0.5390625,0 L 6.3300781,17.490234 c -0.2265701,-0.22654 -0.2265701,-0.570334 0,-0.796875 0.6573647,-0.65738 0.7767538,-1.613821 0.46875,-2.357421 C 6.4908243,13.592337 5.7304465,13 4.8007812,13 H 4.4902344 C 4.0990545,13 3.8007812,12.699721 3.8007812,12.308594 V 11.691406 C 3.8007812,11.300305 4.1009809,11 4.4921875,11 H 4.8007812 C 5.7304738,11 6.4908124,10.407682 6.7988281,9.6640625 7.1068439,8.9204434 6.9874685,7.964031 6.3300781,7.3066406 c -0.2266812,-0.2266812 -0.2266812,-0.5701937 0,-0.796875 L 7.0761719,5.765625 c 0.1559908,-0.1559908 0.3830717,-0.1559908 0.5390625,0 C 8.2156137,6.3660043 9.0947663,6.4772363 9.7753906,6.1953125 10.456015,5.9133887 11,5.212344 11,4.3632812 V 4.234375 c 0,-0.2499059 0.185542,-0.4335938 0.435547,-0.4335938 z"></path><path d="m 12,8.1992188 c -2.0892063,0 -3.8007812,1.7115749 -3.8007812,3.8007812 0,2.089206 1.7115749,3.800781 3.8007812,3.800781 2.089206,0 3.800781,-1.711575 3.800781,-3.800781 0,-2.0892063 -1.711575,-3.8007812 -3.800781,-3.8007812 z m 0,1.6015624 c 1.224502,0 2.199219,0.9747168 2.199219,2.1992188 0,1.224502 -0.974717,2.199219 -2.199219,2.199219 -1.224502,0 -2.1992188,-0.974717 -2.1992188,-2.199219 0,-1.224502 0.9747168,-2.1992188 2.1992188,-2.1992188 z"></path></svg></div></Link>
            <Link to="/send"><div className="sideNavButton" > <svg onClick={showSide} width="35" height="27" viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2075 0.455312C21.0913 0.35497 20.9499 0.288235 20.7986 0.262299C20.6473 0.236362 20.4917 0.252207 20.3487 0.308125L1.34937 7.74344C1.0801 7.84814 0.85214 8.03748 0.699797 8.28296C0.547454 8.52843 0.478977 8.81675 0.504676 9.10451C0.530374 9.39227 0.648857 9.6639 0.842287 9.87849C1.03572 10.0931 1.29362 10.239 1.57718 10.2944L6.49999 11.2609V16.75C6.49902 17.049 6.58787 17.3414 6.75503 17.5893C6.92219 17.8372 7.15995 18.0291 7.43749 18.1403C7.71461 18.2535 8.01936 18.2806 8.31213 18.2183C8.60489 18.1559 8.87211 18.0069 9.07906 17.7906L11.4528 15.3287L15.2187 18.625C15.4904 18.866 15.8409 18.9994 16.2041 19C16.3632 18.9999 16.5214 18.9749 16.6728 18.9259C16.9203 18.8474 17.1428 18.7054 17.3183 18.5141C17.4938 18.3228 17.6162 18.0889 17.6731 17.8356L21.4784 1.28125C21.5125 1.13195 21.5052 0.976206 21.4575 0.830706C21.4098 0.685206 21.3234 0.555438 21.2075 0.455312ZM15.4756 3.83031L7.07656 9.84531L2.42656 8.93312L15.4756 3.83031ZM7.99999 16.75V12.2987L10.3241 14.3369L7.99999 16.75ZM16.2059 17.5L8.45468 10.7031L19.6109 2.70719L16.2059 17.5Z" />
</svg>
</div></Link>
            <Link to="/sale"><div className="sideNavButton" ><svg onClick={showSide} width="45" height="35"  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="createTokenSaleIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="M12.6 6C12.6 5.66863 12.3314 5.4 12 5.4C11.6686 5.4 11.4 5.66863 11.4 6H12.6ZM11.4 17C11.4 17.3314 11.6686 17.6 12 17.6C12.3314 17.6 12.6 17.3314 12.6 17H11.4ZM14.5 8.60002C14.8314 8.60002 15.1 8.33139 15.1 8.00002C15.1 7.66864 14.8314 7.40002 14.5 7.40002V8.60002ZM9 9.75002H8.4H9ZM10.75 11.5V12.1V11.5ZM13.25 11.5V10.9V11.5ZM13.25 15V15.6V15ZM9 14.4C8.66863 14.4 8.4 14.6686 8.4 15C8.4 15.3314 8.66863 15.6 9 15.6V14.4ZM11.4 6V17H12.6V6H11.4ZM14.5 7.40002H10.75V8.60002H14.5V7.40002ZM10.75 7.40002C10.1267 7.40002 9.52901 7.6476 9.0883 8.08831L9.93683 8.93684C10.1525 8.72118 10.445 8.60002 10.75 8.60002V7.40002ZM9.0883 8.08831C8.64759 8.52902 8.4 9.12676 8.4 9.75002H9.6C9.6 9.44502 9.72116 9.15251 9.93683 8.93684L9.0883 8.08831ZM8.4 9.75002C8.4 10.3733 8.64759 10.971 9.0883 11.4117L9.93683 10.5632C9.72116 10.3475 9.6 10.055 9.6 9.75002H8.4ZM9.0883 11.4117C9.52901 11.8524 10.1267 12.1 10.75 12.1V10.9C10.445 10.9 10.1525 10.7789 9.93683 10.5632L9.0883 11.4117ZM10.75 12.1H13.25V10.9H10.75V12.1ZM13.25 12.1C13.555 12.1 13.8475 12.2212 14.0632 12.4368L14.9117 11.5883C14.471 11.1476 13.8733 10.9 13.25 10.9V12.1ZM14.0632 12.4368C14.2788 12.6525 14.4 12.945 14.4 13.25H15.6C15.6 12.6268 15.3524 12.029 14.9117 11.5883L14.0632 12.4368ZM14.4 13.25C14.4 13.555 14.2788 13.8475 14.0632 14.0632L14.9117 14.9117C15.3524 14.471 15.6 13.8733 15.6 13.25H14.4ZM14.0632 14.0632C13.8475 14.2789 13.555 14.4 13.25 14.4V15.6C13.8733 15.6 14.471 15.3524 14.9117 14.9117L14.0632 14.0632ZM13.25 14.4H9V15.6H13.25V14.4Z"></path></svg>
</div></Link>
            <Link to="/manage"><div className="sideNavButton" ><svg onClick={showSide} width="45" height="35" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="settingsSaleIcon"><path d="m 11.435547,2.1992188 c -1.114595,0 -2.0351564,0.9206221 -2.0351564,2.0351562 v 0.1289062 c 0,0.2042373 -0.094007,0.2945645 -0.2363281,0.3535157 -0.1423207,0.058951 -0.2715949,0.060436 -0.4160156,-0.083984 -0.7674292,-0.7674292 -2.0372583,-0.7674292 -2.8046875,0 L 5.1992188,5.3789062 C 4.3611,6.217025 4.3611,7.5993812 5.1992188,8.4375 5.4006484,8.6389296 5.4053568,8.8474185 5.3203125,9.0527344 5.2352682,9.2580503 5.0856487,9.4003906 4.8007812,9.4003906 H 4.4921875 c -1.2559734,0 -2.2929688,1.0351174 -2.2929687,2.2910154 v 0.617188 c 0,1.255872 1.0351354,2.291015 2.2910156,2.291015 h 0.3105468 c 0.2848348,0 0.4344951,0.142357 0.5195313,0.347657 0.085036,0.205299 0.078368,0.411861 -0.1230469,0.613281 h 0.00195 c -0.8381699,0.83806 -0.8381699,2.222487 0,3.060547 l 0.7441406,0.746094 c 0.7674398,0.767539 2.0372543,0.767549 2.8046875,0 0.14444,-0.144431 0.2736698,-0.142947 0.4160156,-0.08398 0.1423458,0.05896 0.2363281,0.149216 0.2363281,0.353516 v 0.126953 c 0,1.114641 0.9205144,2.037109 2.0351564,2.037109 h 0.873047 c 1.255913,0 2.291015,-1.035102 2.291015,-2.291015 0,-0.341896 0.177887,-0.535183 0.427735,-0.638672 0.249847,-0.10349 0.510237,-0.09328 0.751953,0.148437 l 0.0918,0.0918 c 0.908782,0.908782 2.405671,0.908782 3.314453,0 l 0.490234,-0.490234 c 0.838087,-0.838087 0.838087,-2.22246 0,-3.060547 l -0.21875,-0.216797 c -0.161139,-0.161139 -0.160325,-0.313876 -0.09375,-0.474609 0.06658,-0.160734 0.174493,-0.269532 0.402344,-0.269532 1.114563,0 2.035156,-0.920592 2.035156,-2.035156 v -1.128906 c 0,-1.114642 -0.922468,-2.0351564 -2.037109,-2.0351564 -0.227815,0 -0.333784,-0.1087287 -0.400391,-0.2695312 -0.06661,-0.1608025 -0.06737,-0.3134835 0.09375,-0.4746094 l 0.21875,-0.21875 c 0.838124,-0.8381081 0.838124,-2.2204857 0,-3.0585938 L 19.185547,4.8886719 c -0.908803,-0.9086819 -2.405726,-0.9087579 -3.314453,0 l -0.0918,0.091797 C 15.537632,5.2221516 15.277156,5.232382 15.027344,5.1289062 14.777531,5.0254305 14.599609,4.8320459 14.599609,4.4902344 c 0,-1.2558802 -1.035143,-2.2910156 -2.291015,-2.2910156 z m 0,1.6015624 h 0.873047 C 12.699721,3.8007812 13,4.0990545 13,4.4902344 c 0,0.9866484 0.62595,1.7907407 1.414062,2.1171875 0.787615,0.3262403 1.798504,0.200429 2.496094,-0.4960938 l 0.0918,-0.089844 c 0.297272,-0.2972821 0.755337,-0.2973582 1.052735,0 l 0.488281,0.4882812 c 0.226676,0.2266719 0.226676,0.5702031 0,0.796875 l -0.216797,0.21875 c -0.61708,0.6171041 -0.730975,1.51967 -0.441406,2.21875 C 18.174334,10.443221 18.890987,11 19.763672,11 c 0.249958,0 0.435547,0.185588 0.435547,0.435547 v 1.128906 C 20.199219,12.81449 20.015662,13 19.765625,13 c -0.872649,0 -1.591309,0.556793 -1.880859,1.255859 -0.28955,0.699067 -0.175655,1.60169 0.441406,2.21875 l 0.21875,0.21875 c 0.226713,0.226713 0.226713,0.570162 0,0.796875 l -0.490234,0.488282 c -0.297418,0.297418 -0.755317,0.297418 -1.052735,0 l -0.08984,-0.08984 C 16.214425,17.190988 15.202215,17.066117 14.414062,17.392578 13.62591,17.719039 13,18.523061 13,19.509766 c 0,0.391286 -0.30012,0.689453 -0.691406,0.689453 H 11.435547 C 11.185588,20.199219 11,20.01363 11,19.763672 v -0.126953 c 0,-0.8491 -0.543963,-1.550094 -1.2246094,-1.832031 -0.6806467,-0.281938 -1.5597463,-0.170683 -2.1601562,0.429687 -0.1560268,0.15605 -0.3830224,0.15606 -0.5390625,0 L 6.3300781,17.490234 c -0.2265701,-0.22654 -0.2265701,-0.570334 0,-0.796875 0.6573647,-0.65738 0.7767538,-1.613821 0.46875,-2.357421 C 6.4908243,13.592337 5.7304465,13 4.8007812,13 H 4.4902344 C 4.0990545,13 3.8007812,12.699721 3.8007812,12.308594 V 11.691406 C 3.8007812,11.300305 4.1009809,11 4.4921875,11 H 4.8007812 C 5.7304738,11 6.4908124,10.407682 6.7988281,9.6640625 7.1068439,8.9204434 6.9874685,7.964031 6.3300781,7.3066406 c -0.2266812,-0.2266812 -0.2266812,-0.5701937 0,-0.796875 L 7.0761719,5.765625 c 0.1559908,-0.1559908 0.3830717,-0.1559908 0.5390625,0 C 8.2156137,6.3660043 9.0947663,6.4772363 9.7753906,6.1953125 10.456015,5.9133887 11,5.212344 11,4.3632812 V 4.234375 c 0,-0.2499059 0.185542,-0.4335938 0.435547,-0.4335938 z"></path><path d="M12.5 8C12.5 7.72386 12.2761 7.5 12 7.5C11.7239 7.5 11.5 7.72386 11.5 8H12.5ZM11.5 16C11.5 16.2761 11.7239 16.5 12 16.5C12.2761 16.5 12.5 16.2761 12.5 16H11.5ZM13.6667 9.95456C13.9428 9.95456 14.1667 9.7307 14.1667 9.45456C14.1667 9.17841 13.9428 8.95456 13.6667 8.95456V9.95456ZM10 10.7273H9.5H10ZM11.1667 12V12.5V12ZM12.8333 12V11.5V12ZM12.8333 14.5455V15.0455V14.5455ZM10 14.0455C9.72386 14.0455 9.5 14.2693 9.5 14.5455C9.5 14.8216 9.72386 15.0455 10 15.0455V14.0455ZM11.5 8V16H12.5V8H11.5ZM13.6667 8.95456H11.1667V9.95456H13.6667V8.95456ZM11.1667 8.95456C10.7099 8.95456 10.2817 9.15289 9.97313 9.48947L10.7103 10.1652C10.8393 10.0244 11.0046 9.95456 11.1667 9.95456V8.95456ZM9.97313 9.48947C9.66594 9.82459 9.5 10.2705 9.5 10.7273H10.5C10.5 10.509 10.5799 10.3074 10.7103 10.1652L9.97313 9.48947ZM9.5 10.7273C9.5 11.1841 9.66594 11.63 9.97313 11.9651L10.7103 11.2894C10.5799 11.1471 10.5 10.9456 10.5 10.7273H9.5ZM9.97313 11.9651C10.2817 12.3017 10.7099 12.5 11.1667 12.5V11.5C11.0046 11.5 10.8393 11.4302 10.7103 11.2894L9.97313 11.9651ZM11.1667 12.5H12.8333V11.5H11.1667V12.5ZM12.8333 12.5C12.9954 12.5 13.1607 12.5699 13.2897 12.7106L14.0269 12.0349C13.7183 11.6983 13.2901 11.5 12.8333 11.5V12.5ZM13.2897 12.7106C13.4201 12.8529 13.5 13.0544 13.5 13.2727H14.5C14.5 12.8159 14.3341 12.37 14.0269 12.0349L13.2897 12.7106ZM13.5 13.2727C13.5 13.491 13.4201 13.6926 13.2897 13.8348L14.0269 14.5106C14.3341 14.1754 14.5 13.7295 14.5 13.2727H13.5ZM13.2897 13.8348C13.1607 13.9756 12.9954 14.0455 12.8333 14.0455V15.0455C13.2901 15.0455 13.7183 14.8471 14.0269 14.5106L13.2897 13.8348ZM12.8333 14.0455H10V15.0455H12.8333V14.0455Z"></path></svg></div></Link>
           <Link to="/lock"> <div className="sideNavButton"  ><svg onClick={showSide} width="45" height="35" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="lockIcon"><path d="m 5.7773438,9.1992188 c -1.4682194,0 -2.578125,1.3118782 -2.578125,2.8007812 v 7 c 0,1.488903 1.1099056,2.800781 2.578125,2.800781 H 18.222656 c 1.46825,0 2.578125,-1.311897 2.578125,-2.800781 v -7 c 0,-1.488884 -1.109875,-2.8007812 -2.578125,-2.8007812 z m 0,1.6015622 H 18.222656 c 0.495551,0 0.976563,0.478903 0.976563,1.199219 v 7 c 0,0.720316 -0.481012,1.199219 -0.976563,1.199219 H 5.7773438 C 5.2818831,20.199219 4.8007812,19.720297 4.8007812,19 v -7 c 0,-0.720297 0.4811019,-1.199219 0.9765626,-1.199219 z"></path><path d="m 12,2.1992188 c -1.266874,0 -2.4847321,0.490259 -3.3867188,1.3671874 C 7.7112987,4.4433425 7.1992187,5.6393519 7.1992188,6.8886719 V 10 a 0.8007812,0.8007812 0 1 0 1.6015624,0 V 6.8886719 c 0,-0.81348 0.329437,-1.5940975 0.9277344,-2.1757813 C 10.326829,4.1311991 11.145074,3.8007812 12,3.8007812 c 0.854926,0 1.673239,0.330445 2.271484,0.9121094 0.598336,0.5816744 0.927735,1.3622857 0.927735,2.1757813 V 10 a 0.800781,0.800781 0 1 0 1.601562,0 V 6.8886719 c 0,-1.2487599 -0.512731,-2.4454233 -1.414062,-3.3222657 C 14.484764,2.6894507 13.266874,2.1992187 12,2.1992188 Z"></path></svg></div></Link>
        </div>
        <div className="dashboard" style={{overflow:"auto"}} >
    <div className="navbar" style={{color:"whitesmoke",fontWeight:"700"}}>
    <div  className="navBrand" style={{position:"absolute",left:"2%"}}><div><span  style={{color:"#12D576",fontSize:"20px",fontWeight:"700"}}>Token Launchpad</span><span style={{fontSize:"20px",fontWeight:"400"}}> by SecureDApp</span></div></div>   
      <div className="riht" style={{position:"absolute",right:"3%"}}>
        <NavIcons/>
        </div>
    </div>
    <Main/>
    </div>
    </div>
  )
}

export default Sidebar
