import React from 'react'
function send() {
  function showSpeed(event){
    let beta=document.getElementsByClassName('tokenButton')
    for(let i=0;i<beta.length;i++){
      beta[i].style.border="1px solid #464646"
      beta[i].style.color="#464646"
    }
    beta=document.getElementsByClassName("tokenSvg")
    for(let i=0;i<beta.length;++i){
      beta[i].style.fill="#464646"
    }
    let alp=event.target
   if(alp.className=="tokenButton"){ alp.style.border="1px solid #12D576"
    alp.style.color="#12D576"
    alp.firstChild.style.fill="#12D576"}
  }
  return (
    <div style={{padding:"0 2%"}}>
      <h2 style={{fontWeight:"700",color:"#12D576",paddingLeft:"5%"}}>Multisend ETH and other tokens to many recipients</h2>
      <div className="tokenBody" style={{padding:"2%"}}>
      <div className="tokenCreate" style={{width:'45%'}}>
        <div style={{paddingTop:"1%",padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}}focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg> 
        <label htmlFor="html" style={{color:"#949494",padding:"3px 2%"}}>Token multisender dapp for all your tokens</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
        <label htmlFor="css" style={{color:"#949494",padding:"3px 2%"}}>Send your tokens to multiple recipients efficiently</label><br/>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
        <label htmlFor="javascript" style={{color:"#949494",padding:"3px 2%"}}>Send stable coins or cryptocurrency for dividend or coupon payments</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
        <label htmlFor="scss" style={{color:"#949494",padding:"3px 2%"}}>Input list of addresses and amounts manually</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>        <svg width="25" height="30" style={{fill:"#12D576"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
        <label htmlFor="sass" style={{color:"#949494",padding:"3px 2%"}}>Distribute automatically via CSV upload (download a holder snapshot like here)</label>
        </div>
        <div className="tokenCoin">
          <div className="tokenFirstRow" style={{paddingTop:"2%",paddingRight:"3%"}}>
          <button onClick={showSpeed} className="tokenButton"><svg  className="tokenSvg" disable width="15" height="25" viewBox="0 0 15 25"  xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0.96875L0.46875 12.7812L7.5 17L14.5312 12.7812L7.5 0.96875ZM0.46875 14.1875L7.5 24.0312L14.5312 14.1875L7.5 18.4062L0.46875 14.1875Z" />
</svg> Ethereum</button>
          <button onClick={showSpeed} className="tokenButton"><svg className="tokenSvg"  width="22" height="19" viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6379 6.699C14.7696 6.47097 14.8389 6.21231 14.8389 5.949C14.8389 5.6857 14.7696 5.42703 14.6379 5.199L12.4139 1.347C12.2823 1.11899 12.0929 0.929652 11.8649 0.798012C11.6369 0.666372 11.3782 0.597069 11.1149 0.597069C10.8516 0.597069 10.593 0.666372 10.365 0.798012C10.1369 0.929652 9.94758 1.11899 9.81592 1.347L1.18192 16.3C1.05027 16.528 0.980959 16.7867 0.980957 17.05C0.980955 17.3133 1.05026 17.572 1.18191 17.8C1.31356 18.028 1.50291 18.2174 1.73093 18.349C1.95896 18.4807 2.21762 18.55 2.48092 18.55H6.92892C7.19239 18.5502 7.45125 18.4809 7.67946 18.3493C7.90768 18.2176 8.09719 18.0282 8.22892 17.8L14.6379 6.699ZM19.7479 18.551C20.0113 18.5512 20.2701 18.482 20.4983 18.3504C20.7264 18.2188 20.9159 18.0295 21.0477 17.8014C21.1794 17.5734 21.2488 17.3146 21.2489 17.0512C21.2489 16.7879 21.1796 16.5291 21.0479 16.301L17.9139 10.873C17.7823 10.645 17.5929 10.4557 17.3649 10.324C17.1369 10.1924 16.8782 10.1231 16.6149 10.1231C16.3516 10.1231 16.093 10.1924 15.865 10.324C15.6369 10.4557 15.4476 10.645 15.3159 10.873L12.1819 16.301C12.0503 16.529 11.981 16.7877 11.981 17.051C11.981 17.3143 12.0503 17.573 12.1819 17.801C12.3136 18.029 12.5029 18.2184 12.7309 18.35C12.959 18.4817 13.2176 18.551 13.4809 18.551H19.7489H19.7479Z" />
</svg>
Avalanche</button>
       
          <button onClick={showSpeed}className="tokenButton"><svg className="tokenSvg" width="24" height="20" viewBox="0 0 24 20"  xmlns="http://www.w3.org/2000/svg">
<path d="M17.8166 6.07991C17.5951 5.96187 17.348 5.90013 17.097 5.90013C16.846 5.90013 16.5989 5.96187 16.3774 6.07991L13.1331 7.99852L10.8668 9.25811L7.62244 11.1778C7.40095 11.2958 7.15383 11.3576 6.90286 11.3576C6.65189 11.3576 6.40477 11.2958 6.18328 11.1778L3.60486 9.67727C3.39264 9.55489 3.21514 9.38041 3.08913 9.17032C2.96313 8.96024 2.89279 8.72149 2.88475 8.47664V5.48146C2.88018 5.23398 2.94524 4.99021 3.07251 4.77792C3.19979 4.56564 3.38416 4.3934 3.6046 4.28083L6.18328 2.84194C6.40461 2.72341 6.65179 2.66138 6.90286 2.66138C7.15393 2.66138 7.40111 2.72341 7.62244 2.84194L10.2009 4.2811C10.413 4.40351 10.5905 4.578 10.7164 4.78809C10.8424 4.99817 10.9127 5.2369 10.9207 5.48172V7.399L13.1331 6.08018V4.22186C13.1391 3.97561 13.076 3.73261 12.9509 3.5204C12.8258 3.30819 12.6438 3.13527 12.4255 3.02124L7.68141 0.263519C7.46008 0.144985 7.2129 0.082962 6.96183 0.082962C6.71076 0.082962 6.46358 0.144985 6.24225 0.263519L1.4456 3.02124C1.20613 3.11426 1.002 3.28027 0.862125 3.49575C0.722252 3.71124 0.653725 3.96527 0.666251 4.22186V9.7976C0.662746 10.0441 0.728349 10.2866 0.855624 10.4976C0.9829 10.7087 1.16676 10.8799 1.38636 10.9918L6.18328 13.7562C6.40477 13.8742 6.65189 13.936 6.90286 13.936C7.15383 13.936 7.40095 13.8742 7.62244 13.7562L10.8668 11.8968L13.0853 10.578L16.3185 8.72474C16.54 8.6067 16.7871 8.54496 17.038 8.54496C17.289 8.54496 17.5361 8.6067 17.7576 8.72474L20.3361 10.1639C20.5481 10.2863 20.7255 10.4608 20.8513 10.6709C20.9771 10.881 21.0473 11.1198 21.0551 11.3645V14.3029C21.0597 14.5501 20.9947 14.7937 20.8676 15.0058C20.7405 15.2179 20.5563 15.39 20.3361 15.5024L17.7576 17.0006C17.5363 17.1191 17.2891 17.1811 17.038 17.1811C16.787 17.1811 16.5398 17.1191 16.3185 17.0006L13.74 15.5614C13.5279 15.4393 13.3504 15.265 13.2244 15.0552C13.0984 14.8453 13.028 14.6068 13.0199 14.3621V12.4363L10.8668 13.6948V15.6124C10.862 15.8598 10.9269 16.1036 11.0541 16.3158C11.1812 16.5281 11.3655 16.7004 11.5858 16.813L16.3828 19.5705C16.6043 19.689 16.8516 19.751 17.1029 19.751C17.3541 19.751 17.6015 19.689 17.823 19.5705L22.6196 16.8125C22.8304 16.6896 23.0065 16.5152 23.1314 16.3056C23.2563 16.096 23.3259 15.8581 23.3336 15.6143V10.0361C23.3382 9.78876 23.2731 9.54508 23.1458 9.33296C23.0185 9.12083 22.834 8.94882 22.6135 8.83657L17.8166 6.07991Z" />
</svg>Polygon
</button>
          <button onClick={showSpeed}className="tokenButton"><svg className="tokenSvg" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="24.000000pt" height="19.000000pt" viewBox="0 0 24.000000 24.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M82 197 c-25 -26 -29 -36 -20 -45 9 -9 17 -7 35 10 l23 21 23 -21
c18 -17 26 -19 35 -10 9 9 5 19 -20 45 -18 18 -35 33 -38 33 -3 0 -20 -15 -38
-33z"/>
<path d="M14 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
<path d="M104 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
<path d="M194 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
<path d="M62 87 c-9 -11 -4 -21 23 -47 l35 -34 35 34 c27 26 32 36 23 47 -9
11 -15 10 -35 -8 l-23 -22 -23 22 c-20 18 -26 19 -35 8z"/>
</g>
</svg>
BSC</button>
        </div>
        <div className="tokenSecondRow" style={{paddingTop:"2%",paddingLeft:"3%"}}>
          <button onClick={showSpeed}className="tokenButton"><svg onClick= {()=>{}} svg className="tokenSvg" width="20" height="24" viewBox="0 0 20 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M8.96001 0.230006C9.54401 -0.0769942 10.431 -0.0769942 11.015 0.230006L16.967 3.35801C17.318 3.54201 17.511 3.81801 17.546 4.10201H17.551V19.824C17.544 20.134 17.349 20.441 16.967 20.642L11.015 23.77C10.431 24.077 9.54401 24.077 8.96001 23.77L3.00801 20.642C2.62801 20.442 2.44501 20.132 2.43601 19.824C2.43512 19.7983 2.43512 19.7727 2.43601 19.747V4.20301C2.43546 4.18601 2.43546 4.169 2.43601 4.15201V4.10201H2.43901C2.46501 3.81401 2.64901 3.54601 3.00901 3.35801L8.96001 0.230006ZM16.614 12.873L11.014 15.816C10.431 16.122 9.54401 16.122 8.96001 15.816L3.37301 12.88V19.793L8.96001 22.713C9.27601 22.881 9.60301 23.045 9.92401 23.066L9.98801 23.068C10.321 23.068 10.645 22.9 10.974 22.741L16.614 19.768V12.873ZM1.46801 19.483C1.46801 20.084 1.53801 20.48 1.67801 20.759C1.79401 20.991 1.96801 21.167 2.28501 21.382L2.30301 21.395C2.38198 21.4476 2.462 21.4986 2.54301 21.548L2.65301 21.615L2.99101 21.818L2.50601 22.615L2.12801 22.388L2.06401 22.349C1.9678 22.2903 1.87278 22.2296 1.77901 22.167C0.875006 21.561 0.538006 20.9 0.531006 19.524V19.482L1.46801 19.483ZM9.51801 8.65901C9.47677 8.67293 9.43665 8.68998 9.39801 8.71001L3.44601 11.838C3.43996 11.8413 3.43396 11.8446 3.42801 11.848L3.42301 11.851L3.43301 11.856L3.44601 11.863L9.39801 14.991C9.43694 15.0114 9.4774 15.0288 9.51901 15.043L9.51801 8.65901ZM10.456 8.65901V15.043C10.4976 15.0288 10.5381 15.0114 10.577 14.991L16.529 11.863C16.535 11.8597 16.541 11.8564 16.547 11.853L16.552 11.851L16.542 11.846L16.529 11.838L10.577 8.71001C10.538 8.68992 10.4976 8.67287 10.456 8.65901ZM16.614 5.21701L11.274 8.02301L16.614 10.829V5.21701ZM3.37301 5.22301V10.823L8.70001 8.02301L3.37301 5.22301ZM10.577 1.05401C10.267 0.891006 9.70701 0.891006 9.39801 1.05401L3.44601 4.18201C3.43995 4.18524 3.43395 4.18858 3.42801 4.19201L3.42301 4.19501L3.43301 4.20001L3.44601 4.20701L9.39801 7.33501C9.70801 7.49801 10.268 7.49801 10.577 7.33501L16.529 4.20701C16.5351 4.20377 16.5411 4.20044 16.547 4.19701L16.552 4.19501L16.542 4.18901L16.529 4.18201L10.577 1.05401ZM17.494 1.39701L17.872 1.62401L17.936 1.66401C18.046 1.73101 18.136 1.78801 18.221 1.84501C19.125 2.45201 19.462 3.11301 19.469 4.48801V4.53001H18.532C18.532 3.92801 18.462 3.53201 18.322 3.25301C18.206 3.02201 18.032 2.84501 17.715 2.63001L17.697 2.61801C17.618 2.56545 17.538 2.51444 17.457 2.46501L17.347 2.39801L17.009 2.19501L17.494 1.39701Z" />
</svg>Fantom
</button>
          <button onClick={showSpeed}className="tokenButton"><svg className="tokenSvg" width="32" height="24" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="arbitrumIcon"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM6.099 8.6L11.968 5.218L17.837 8.6V13.909L14.866 9.351L13.69 11.239L16.613 16.064L16.166 16.321L13.335 11.979L11.984 14.133L14.096 17.514L11.968 18.74L9.467 17.299L14.52 8.674L12.253 8.706L7.288 16.863L7.085 17.195H7.086L7.084 17.198L8.908 18.254L8.912 18.247L11.807 19.915C11.906 19.972 12.029 19.972 12.129 19.915L18.774 16.086C18.874 16.029 18.936 15.922 18.936 15.806V8.151C18.936 8.036 18.874 7.929 18.774 7.871L12.129 4.043C12.029 3.986 11.906 3.986 11.807 4.043L5.162 7.871C5.062 7.929 5 8.036 5 8.151V15.826L5.001 15.83C5.009 15.936 5.069 16.033 5.162 16.086L5.165 16.088C5.219 16.126 5.292 16.166 5.392 16.223C5.44 16.25 5.495 16.28 5.556 16.315C5.888 16.505 6.315 16.751 6.488 16.851V16.85L6.49 16.852L7.082 15.925L7.07 15.918L11.567 8.713C10.891 8.605 9.408 8.602 8.89 9.449C8.514 10.064 7.203 12.056 6.099 13.722V8.6Z"></path></svg>Arbitrum
</button>
          
          <button onClick={showSpeed}className="tokenButton"><svg className="tokenSvg" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="16.000000pt" height="16.000000pt" viewBox="0 0 2000.000000 2000.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M9665 19994 c-761 -38 -1323 -113 -1950 -261 -2687 -633 -4988 -2340
-6368 -4725 -713 -1232 -1159 -2617 -1296 -4028 -37 -374 -45 -561 -45 -980 0
-530 25 -908 95 -1397 273 -1933 1098 -3729 2392 -5207 239 -273 631 -665 898
-899 1567 -1371 3462 -2206 5529 -2437 981 -109 2054 -61 3036 136 2418 485
4550 1826 6033 3794 1672 2219 2344 5048 1850 7785 -653 3617 -3241 6588
-6734 7728 -797 260 -1568 410 -2425 472 -201 15 -858 27 -1015 19z m-1265
-7269 c510 -70 916 -256 1201 -551 285 -297 420 -645 420 -1084 1 -189 -16
-323 -81 -679 -201 -1094 -363 -1598 -655 -2041 -380 -575 -918 -894 -1679
-995 -212 -28 -509 -39 -706 -27 -234 15 -371 35 -555 82 -362 92 -652 247
-871 465 -233 233 -353 482 -405 840 -16 110 -13 384 6 530 36 279 235 1220
331 1563 158 563 432 1024 794 1335 395 340 889 528 1510 577 160 12 552 4
690 -15z m5563 -83 c457 -74 791 -225 1033 -467 174 -174 263 -345 315 -606
20 -97 16 -402 -5 -524 -76 -431 -239 -813 -466 -1090 -267 -326 -670 -551
-1156 -645 -264 -51 -311 -53 -1034 -59 l-685 -6 -172 -820 c-94 -451 -177
-837 -183 -858 -6 -21 -29 -56 -51 -78 -76 -76 -53 -74 -624 -77 -280 -2 -539
0 -574 3 -53 6 -69 12 -99 39 -68 62 -100 -112 477 2606 286 1350 528 2470
538 2488 20 39 74 89 117 108 26 11 235 13 1231 11 1188 -3 1201 -3 1338 -25z"/>
<path d="M7742 11660 c-293 -41 -558 -200 -722 -431 -65 -92 -138 -236 -180
-354 -99 -280 -336 -1360 -360 -1646 -41 -461 141 -731 530 -790 125 -19 366
-7 484 25 363 95 623 352 776 766 65 177 255 1020 326 1448 32 190 36 402 10
522 -51 236 -207 391 -446 445 -87 20 -323 28 -418 15z"/>
<path d="M12315 10973 c-76 -362 -140 -664 -143 -670 -5 -17 943 -19 1034 -2
335 59 587 290 676 619 19 71 23 111 23 240 0 153 0 156 -31 221 -42 88 -93
142 -168 179 -122 60 -149 62 -726 67 l-526 5 -139 -659z"/>
</g>
</svg>
Optimism </button>
          </div>
        </div>
      </div>
      <div className="tokenSettings" style={{width:"45%",backgroundColor:"transparent",border:"0",borderLeft:"1px solid"}}>
      <h3 style={{color:"white"}}>Select token</h3>
      <div style={{color:"white"}}>Token*</div>
       <input type="text" style={{margin:"10px",marginLeft:"0",marginBottom:"10px",height:"50px",backgroundColor:"transparent",border:"1px solid #464646",borderRadius:"7px",width:"100%",color:"white"}}/>
       <button style={{padding:"2% 7%",backgroundColor:"#12D576",borderRadius:"30px",marginTop:"1%",fontSize:"20px",fontWeight:"400"}}>Continue</button>
      </div>
    </div>
    </div>
  )
}

export default send
