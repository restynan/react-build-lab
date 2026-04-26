import { createRoot } from 'react-dom/client';
import Header from './components/header'
import './styles/styles.css'

const App = () => (
    //React.Fragment - a way to bundle elements without using dev
    // use className  if on a jsx file
    <>
        <Header/>
    </>
)

createRoot(document.getElementById('root')).render(<App/>);;