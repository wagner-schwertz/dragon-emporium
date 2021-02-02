import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Field from "components/Field";
import { Button } from "components/Buttons";
import Loader from "components/Loader";
import { StyledCard } from "./styles";

export default function DragonForm({
  data = null,
  onDismiss = () => {},
  onSave = () => {},
  isProcessing = false,
  title = "Edit Dragon",
  ...props
}) {
  const { register, handleSubmit, errors } = useForm();
  const { t } = useTranslation();

  const onSubmit = (values) => {
    onSave(values);
  };

  return (
    <StyledCard title={t(title)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          label={t("Name")}
          name="name"
          id="name"
          register={register({ required: true })}
          defaultValue={data?.name || ""}
          error={errors.name && t("Dragon Name is required.")}
        />
        <Field
          label={t("Type")}
          name="type"
          id="type"
          register={register({ required: true })}
          defaultValue={data?.type || ""}
          error={errors.type && t("Dragon Type is required.")}
        />
        <div className="button-row">
          {isProcessing ? (
            <Loader />
          ) : (
            <>
              <Button type="submit">{t("Save")}</Button>
              <Button type="button" onClick={onDismiss}>
                {t("Cancel")}
              </Button>
            </>
          )}
        </div>
      </form>
    </StyledCard>
  );
}
