import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Products from "./pages/Products";
import Register from "./pages/Register";
import SinglProductPage from "./pages/SinglProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute"; // Adjust the path accordingly
import MyBlogs from "./pages/MyBlogs";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SinglProductPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/createBlog"
            element={<ProtectedRoute element={<CreateBlog />} />}
          />
          <Route
            path="/myBlogs"
            element={<ProtectedRoute element={<MyBlogs />} />}
          />
          <Route
            path="/updatePage/:id"
            element={<ProtectedRoute element={<UpdatePage />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
