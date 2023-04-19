import { Routes, Route, json } from "react-router-dom"
import Container from './components/Container'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import Blog from "./pages/Blog";
import Edit from "./pages/Edit";
function App() {

return <>
    <Header />
    <Container>
        <Routes>
            <Route path="create" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs/:id" element={<Blog />}></Route>
            <Route path="/" element={<Blogs />}></Route>
            <Route path="/blogs/:id/edit" element={<Edit />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </Container>
    <Footer />

</>
  
}

export default App
