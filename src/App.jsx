import { Routes, Route, json } from "react-router-dom"
import Container from './components/Container'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Books from './pages/Books';
import Book from "./pages/Book";
import { useState } from "react";
import axios from "axios";
function App() {

    const [data,setData] = useState([]);
    const get = async() => {

    const req = await axios.get('http://localhost:3001/v1/api/posts');
     setData(req.data);
    }
    const dummy = async() => {
        await axios.post('http://localhost:3001/v1/api/posts', {title: "dummy",content:"Hi this is test"});
    }

return <>
    <Header />
    <button onClick={get}>GET</button>
    <button onClick={dummy}>create Post</button>
    <pre>{JSON.stringify(data)}</pre>
    <Container>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/books/:id" element={<Book />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </Container>
    <Footer />

</>
  
}

export default App
