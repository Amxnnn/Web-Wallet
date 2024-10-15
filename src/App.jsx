

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Home from "./Components/Home";
import { SolanaWallet } from "./Components/SolanaWallet";
import { EthWallet } from "./Components/EthWallet";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/solana" element={ <SolanaWallet/>} />
        <Route path="/eth" element={ <EthWallet/>} />
      </Routes>
    </Router>
  )
}

export default App
