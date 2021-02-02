import { useTranslation } from "react-i18next";
import { Button } from "components/Buttons";
import Modal from "components/Modal";
import Card from "components/Card";
import Loader from "components/Loader";
import { StyledDialog } from "./styles";

export default function DeleteDragonDialog({
  dragonId,
  onDelete,
  onDismiss,
  isProcessing = false,
}) {
  const { t } = useTranslation();

  return (
    <Modal show={dragonId !== null} onDismiss={onDismiss}>
      <Card title={t("Delete Dragon")}>
        <StyledDialog>
          <p>
            {t("Are you sure you want to delete dragon")} #{dragonId}?
          </p>
          {isProcessing ? (
            <Loader />
          ) : (
            <div>
              <Button onClick={onDelete}>{t("Delete")}</Button>
              <Button onClick={onDismiss}>{t("Cancel")}</Button>
            </div>
          )}
        </StyledDialog>
      </Card>
    </Modal>
  );
}
