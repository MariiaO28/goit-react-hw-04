import Modal from "react-modal"
import css from './ImageModal.module.css'
Modal.setAppElement('#root');

export default function ImageModal({ onClose, onOpen, photo }) {
  return (
    <div>
          <Modal
              className={css.modal}
              isOpen={onOpen}
              onRequestClose={onClose}
            >
              <img className={css.image} src={photo}/>
          </Modal>
    </div>
  );
}


