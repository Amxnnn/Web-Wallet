/* eslint-disable react/prop-types */
import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import Nemoic from "./Nemoic";

export const EthWallet = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    return (
        <div className="w-full h-[100vh] text-white bg-[#0A0A0A]">
            <h1 className="w-full text-6xl font-semibold flex justify-center items-center font-mono tracking-widest p-16">ESthereum</h1>
            <Nemoic/>
            <div className="w-full flex flex-col justify-center font-mono text-2xl mt-[5rem]" >
                <div className="flex justify-center items-center flex-col mb-8">
            <button 
            className="bg-white w-[14rem] text-black p-2 rounded-md"
            onClick={async function() {
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                 const hdNode = HDNodeWallet.fromSeed(seed);
                 const child = hdNode.derivePath(derivationPath);
                 const privateKey = child.privateKey;
                 const wallet = new Wallet(privateKey);
                 setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }}>
                Add ETH wallet
            </button>
            </div>
            {addresses.map((p,index) => <div 
            className="ml-10 m-2 "
            key={index} >
                wallet {index+1} : {p}
            </div>)}
            </div>
        </div>
    )
}

