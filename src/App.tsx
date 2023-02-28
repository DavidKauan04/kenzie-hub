import RoutesMain from './routes/index';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

import GlobalStyle from './styles/Global';
import GlobalProvider from './contexts/globalcontext';
import CadastroProvider from './contexts/cadastro/contextCadastro';
import LoginProvider from './contexts/loginContext/loginContext';

function App() {

  return (
    <GlobalProvider>
      <CadastroProvider>
        <LoginProvider>
          <div className="App">
            <GlobalStyle/>
            <ToastContainer position='bottom-right' />
            <RoutesMain />
          </div>
        </LoginProvider>
      </CadastroProvider>
    </GlobalProvider>
  );
}

export default App;
