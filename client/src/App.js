import "./index.css";
import "./App.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { Web3ReactProvider } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { Web3Provider } from "@ethersproject/providers";

import { AppSidebar } from "./containers/AppSidebar";
import { AppMain } from "./containers/AppMain";

export const SUPPORTED_CHAINS = {
  1: "Mainnet",
  3: "Ropsten",
  4: "Rinkeby",
  5: "Goerli",
  42: "Kovan",
};

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan],
  ],
});

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="app-wrapper">
        <AppSidebar />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
