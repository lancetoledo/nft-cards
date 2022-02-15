import React from 'react';

export default function Card({name,price,description,nftImg,cardColor,textColor,owner,daysLeft,profileImg}) {
  return( 
  <div className='Card' style = {{backgroundColor: `${cardColor}`, color: `${textColor}`}}>
      <div className='NFT_container'>
          <img id="NFT" src={nftImg} alt='NFT'></img>
      </div>

      <div className='content'>

        <h3 id='title'>{name}</h3>

        <p style = {{color: `${textColor}`}}>{description}</p>

        <div className='info' >
            <div className='stat'>
                <img src='./images/icon-ethereum.svg' alt = ""></img>
                <p style = {{color: `${textColor}`}}>{price}</p>
            </div>

            <div className='stat'>
                <img src='./images/icon-clock.svg' alt = ""></img>
                <p style = {{color: `${textColor}`}}>{daysLeft}</p>
            </div>
        </div>
      </div>

     <div className='footer'>
         <img id="profile" src={profileImg} alt=''></img>
         <p>Creation of <span>{owner}</span></p>
     </div>

  </div>
  );
}

// export default function Card() {
//   return( 
//   <div className='Card'>
//       <div className='NFT_container'>
//           <img id="NFT" src='./images/image-equilibrium.jpg' alt='NFT'></img>
//       </div>

//       <div className='content'>

//         <h3 id='title'>Equilibrium #3429</h3>

//         <p>Our Equilibrium collection promotes balance and calm</p>

//         <div className='info'>
//             <div className='stat'>
//                 <img src='./images/icon-ethereum.svg' alt = ""></img>
//                 <p>0.041ETH</p>
//             </div>

//             <div className='stat'>
//                 <img src='./images/icon-clock.svg' alt = ""></img>
//                 <p>3 days left</p>
//             </div>
//         </div>
//       </div>

//      <div className='footer'>
//          <img id="profile" src='./images/image-avatar.png' alt=''></img>
//          <p>Creation of <span>Jules Wyvern</span></p>
//      </div>

//   </div>
//   );
// }
