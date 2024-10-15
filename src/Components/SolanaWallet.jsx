/* eslint-disable react/prop-types */
import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

import nacl from "tweetnacl"
import Nemoic from "./Nemoic";

export function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    return <div className="w-full h-[100vh] text-white bg-[#0A0A0A]">
        <h1 className="w-full text-6xl font-semibold flex justify-center text-white items-center font-mono tracking-widest p-16">SOLANA</h1>
        <Nemoic/>
        <div className="w-full flex flex-col justify-center font-mono text-2xl mt-[5rem]" >
            <div className="flex justify-center items-center flex-col mb-8">
                <button
                className="bg-white w-[14rem] text-black p-2 rounded-md"
                onClick={function() {
                const seed = mnemonicToSeed(mnemonic);
                const path = `m/44'/501'/${currentIndex}'/0'`;
                const derivedSeed = derivePath(path, seed.toString("hex")).key;
                const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
                const keypair = Keypair.fromSecretKey(secret);
                setCurrentIndex(currentIndex + 1);
                setPublicKeys([...publicKeys, keypair.publicKey]);
                }}>
                    Add SOL wallet
                </button>
                
            </div>
            {publicKeys.map((p,index) => <div
            className="ml-10 m-2 "
            key={index}>
                    wallet {index+1} : {p.toBase58()}
                </div>)}
            
        </div>
        
    </div>
}