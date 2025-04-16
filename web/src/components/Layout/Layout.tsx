import './Layout.css';
import { Header, Modal, Stats } from '..';
import { AppRouter } from '../../routes';
import { useKeyDown } from '../../utils/hooks/useKeyDown';

const Layout = () => {
  const { activated, reset } = useKeyDown("Escape");

  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <AppRouter />
        </div>
      </div>
      <Modal open={activated} onClose={() => reset()}>
        <Stats />
      </Modal>
    </>
  )
}

export { Layout };