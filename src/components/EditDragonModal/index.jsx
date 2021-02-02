import Modal from "components/Modal";
import DragonForm from "components/DragonForm";

export default function EditDragonModal({
  data = null,
  onDismiss = () => {},
  onSave = () => {},
  isProcessing = false,
}) {
  return (
    <Modal show={data !== null}>
      <DragonForm
        data={data}
        isProcessing={isProcessing}
        onSave={onSave}
        onDismiss={onDismiss}
        role="dialog"
      />
    </Modal>
  );
}
