function Son({ onGetAname, ...props }) {
  const aName = "Aname";
  onGetAname(aName);
  return <div>this is son {props.children}</div>;
}
function App() {
  const getAname = (name) => {
    console.log(name);
  };
  return (
    <div>
      <Son onGetAname={getAname}>
        <div>123</div>
      </Son>
    </div>
  );
}
export default App;
