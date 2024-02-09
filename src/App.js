import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Cardmap from './components/Cardmap';
import Statefulcomponent from './components/Statefulcomponent';
import Eventhandlers from './components/Eventhandlers';
import { Container } from 'react-bootstrap';
import Reacthooks from './components/Reacthooks';
import Statelessbutton from './components/Statelessbutton';

const App = () => {
    return (
        <>
            <Navibar/>
            <Container style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Cardmap/>
            </Container>
            <Container>
            <Statelessbutton color="success" label="Message Us" display="inline-block" margin={5}/>
            </Container>
            <Container>
                <Statefulcomponent/>
                <Eventhandlers/>
                <Reacthooks/>
            </Container>
        </>
    );
};
export default App;
