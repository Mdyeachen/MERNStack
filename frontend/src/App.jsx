import { Routes, Route } from "react-router-dom"
import Home from "./pages/home";
import Create from "./pages/create";
import Layout from "./component/layout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
