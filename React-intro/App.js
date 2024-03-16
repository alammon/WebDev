function App() {
    return (
      <div>
        <Navbar />
        <div className="p-12">
          <Header />
          <Main />
          <Content paragraph="lorum"/>
          <Content paragraph="lorum"/>
        </div>
        <Footer />
      </div>
    );
  }

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);