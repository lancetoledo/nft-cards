import './App.css';
import Card from './components/Card';

function App() {

  let NFTS = [
    {
      name: "Shibe #5079",
      price: "0.09ETH",
      description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
      nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600",
      cardColor: "#FFC579",
      textColor: "black",
      owner: "Lance Toledo",
      daysLeft: "1 day left",
      profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c",      
    },
    {
      name: "Equilibrium #3429",
      price: "0.041ETH",
      description: "Our Equilibrium collection promotes balance and calm",
      nft: "./images/image-equilibrium.jpg",
      cardColor: "hsl(216,50%,16%)",
      textColor: "grey",
      owner: "Jules Wyvern",
      daysLeft: "3 days left",
      profileImg: "./images/image-avatar.png",      
    },
    {
      name: "Cheeky Lion #5229",
      price: "0.041ETH",
      description: "The official breeding partners of The Cheeky Cougar Club.",
      nft: "https://lh3.googleusercontent.com/2IUAwmNSFmo0cmx7F38VUJp5smW3b42JvIV_coxh0sA1I16cKvTUXQN9L8lX4iksxQrIOfRkA8Q9n2l_tMTMAK1mTQU72Ax3UaoZ_bo=w600",
      cardColor: "#F24236",
      textColor: "gold",
      owner: "Navier Polanco",
      daysLeft: "Feb 26, 22",
      profileImg: "https://media-exp1.licdn.com/dms/image/C4E03AQFQ3GgO_Y4RNQ/profile-displayphoto-shrink_800_800/0/1570165196690?e=1648684800&v=beta&t=ZIeH4IDk02ZHoUnLUhooHCkHtDvWv2TKi4kxpVyCcY8",      
    },
  
  ]

  return (
    <div className="App">
      {/* COMPONENTS ARE RESUABLE */}
      {/* <Card /> */}
      {NFTS.map((nft, key)=> {
        return <Card
        key = {key}
        name = {nft.name}
        price = {nft.price}
        description = {nft.description}
        nftImg = {nft.nft}
        cardColor = {nft.cardColor}
        textColor = {nft.textColor}
        owner = {nft.owner}
        daysLeft = {nft.daysLeft}
        profileImg = {nft.profileImg}

        />
      })}
    </div>
  );
}

export default App;
