import './Layout.css';
import { Header } from '..';
import { AppRouter } from '../../routes';

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