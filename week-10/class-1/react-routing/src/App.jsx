import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/class-11" element={<Class11Program />} />
            <Route path="/class-12" element={<Class12Program />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Link to="/">Home</Link> | <Link to="/class-11">Class-11</Link> |{" "}
      <Link to="/class-12">Class-12</Link>
      <div style={{ height: "80vh", backgroundColor: "grey" }}>
        <Outlet />
      </div>
      Footer
    </div>
  );
}

function ErrorPage() {
  return <div>Sorry no data found</div>;
}

function Landing() {
  return <div>Welcome to the Home Page of the Application</div>;
}

function Class11Program() {
  return <div>Class 11 Program details are mentioned here</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectToHome() {
    navigate("/");
  }

  return (
    <div>
      Class 12 Program details are mentioned here
      <button onClick={redirectToHome}>Go to the Home Page</button>
    </div>
  );
}

export default App;
