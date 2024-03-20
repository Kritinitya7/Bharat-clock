import "./App.css";
import ClockHeading from "./Components/clockHeading";
import ClockSlogan from "./Components/clockSlogan";
import CurrentTime from "./Components/currentTime";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
