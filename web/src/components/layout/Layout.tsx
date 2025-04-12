import './Layout.css';
import { AppRouter } from "../../routes/AppRouter"
import { Header } from "../header"

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  )
}

export { Layout };