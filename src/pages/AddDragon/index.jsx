import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { createSingleDragon } from "services/dragonApi";
import { useStore } from "store/store";
import DragonForm from "components/DragonForm";

export default function AddDragon() {
  const history = useHistory();
  const { t } = useTranslation();
  const [isProcessing, setIsProcessing] = useState(false);
  const setToastMessage = useStore((store) => store.setToastMessage);
  const addSingleDragon = useStore((store) => store.addSingleDragon);

  const handleCancel = () => history.push("/");

  const handleSave = async (values) => {
    setIsProcessing(true);
    const response = await createSingleDragon(values);
    if (response.data) {
      setToastMessage(t("Dragon created successfully."), "success");
      history.push(`/${response.data.id}`);
      addSingleDragon(response.data);
    } else {
      setToastMessage(t("Dragon couldn't be created."), "error");
    }
    setIsProcessing(false);
  };

  return (
    <DragonForm
      title={"Add Dragon"}
      onDismiss={handleCancel}
      onSave={handleSave}
      isProcessing={isProcessing}
    />
  );
}
