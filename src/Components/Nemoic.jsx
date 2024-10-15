import { generateMnemonic } from "bip39";
import { useState } from "react";
const Nemoic = () => {
    const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="w-full flex justify-center items-center gap-4">
        <button
        className="bg-white text-black rounded-md p-2"
        onClick={async function() {
            const mn = await generateMnemonic();
            setMnemonic(mn)
            }}>
            Create Seed Phrase
        </button>
        <input className="rounded-md text-white px-1 w-[40rem] border-solid h-[2.5rem] capitalize border-slate-700 border-[2px] bg-black resize-none outline-none  flex flex-wrap" type="text" value={mnemonic}></input>
    </div>
  )
}

export default Nemoic
