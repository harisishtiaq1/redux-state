import Posts from "./Components/Posts";
import Comments from "./Components/Comments";
import Albums from "./Components/Albums";
import Todos from "./Components/Todos";
import "./App.css";
import Users from "./Components/Users";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import SideBar from "./Components/SideBar";
import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/posts" exact element={<Posts />} />
            <Route path="/comments" exact element={<Comments />} />
            <Route path="/todos" exact element={<Todos />} />
            <Route path="/albums" exact element={<Albums />} />
            <Route path="/users" exact element={<Users />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/signup" exact element={<SignUp />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>
  );
}

export default App;
