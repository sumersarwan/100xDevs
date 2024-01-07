function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <CardWrapper>hi there</CardWrapper>
      <CardWrapper>
        <div>hello from card 2</div>
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 10,
        margin: 10,
      }}
    >
      {children}
    </div>
  );
}

export default App;
