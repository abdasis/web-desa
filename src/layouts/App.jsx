import Header from "../components/Header";
import Router from "../routes";
import Footer from "../components/Footer";

function App({children}) {
  return (
    <>
        <Header />
        <main>
            <Router/>
            {children}
        </main>
        <Footer />
    </>
  );
}

export default App;
