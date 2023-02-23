import Navbar from "../components/Navbar"
import Row from "../components/Row"
import Footerbar from "../components/Footerbar"
import data from "./data"

function App() {
  const travels = data.map(log => {
    return (
      <Row
        key={log.id}
        length={data.length}
        {...log}
      />
    ) 
  })
  
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="contentWrapper">
          {travels}
        </section>
      </main>
      <footer>
        <Footerbar />
      </footer>
    </div>
  )
}

export default App
