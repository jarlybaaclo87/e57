import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Cardmap from './components/Cardmap';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <>
            <Navibar />
            <Container style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Cardmap/>
            </Container>
        </>
    );
};
export default App;
