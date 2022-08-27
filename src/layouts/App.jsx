import Header from "../components/Header";
import Footer from "../components/Footer";

function App({children}) {
  return (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
  );
}

export default App;
