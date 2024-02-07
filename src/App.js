import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Carouselc from './components/Carouselc';
import Breadcrums from './components/Breadcrums';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Navibar />
            <Carouselc />
            <Breadcrums/>
            <div style={{ margin: '20px' }}>
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
            <Footer />
        </>
    );
};
export default App;
