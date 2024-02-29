import Login from "./Login";
import Display from "./Display";
import Table from "./Table";

function HomePage() {
  return (
    <div style={{height:"90vh"}}>
      <Login />
      <Display />
      <Table />
    </div>
  );
}

export default HomePage;
