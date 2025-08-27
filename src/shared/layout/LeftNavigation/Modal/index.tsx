import { Modal } from '@/components';

const ModalCreateCategory = ({ isOpen, onClose, onSubmit }: any) => {

  const handleSubmit = () => {
    console.log("Categoria adicionada!");
    onSubmit();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div>
        <h3>Adicionar Nova Categoria</h3>
      </div>
    </Modal>
  );
};

export default ModalCreateCategory;
