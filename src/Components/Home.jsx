
import { Link } from "react-router-dom";

// import { EthWallet } from "./Components/EthWallet";
const Home = () => {
  return (
    <div className="w-full h-screen text-white bg-[#0A0A0A] " >
      <div className="w-full h-full  ">
        <div className="w-full bg-[#1A
        1A1A1A] rounded-lg p-10 flex justify-center    ">
          <h1 className="text-white font-semibold text-6xl font-mono">
            Web Wallet
          </h1>
        </div>
        <h1 className="text-slate-200 font-semibold  w-full flex mt-6 text-3xl justify-center items-center">
        Choose a blockchain to get started.
        </h1>
        <div className="w-full flex justify-center text-xl items-center gap-[8rem] mt-12">
          <Link to="/solana" className="bg-white text-purple-400 px-5 py-2 font-semibold font-mono rounded-md">Solana Wallet</Link>
          <Link to="/eth" className="bg-white text-black px-5 py-2 font-semibold font-mono rounded-md">Etherum Wallet</Link>
        </div>
      </div>

    </div>
  )
}

export default Home
