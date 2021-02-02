import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { authenticate } from "services/authApi";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Card from "components/Card";
import Field from "components/Field";
import { Button } from "components/Buttons";
import Loader from "components/Loader";
import { useStore } from "store/store";
import { StyledPage, StyledLogo } from "./styles";

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [isProcessing, setIsProcessing] = useState(false);
  const login = useStore((store) => store.login);
  const setToastMessage = useStore((store) => store.setToastMessage);
  const { handleSubmit, errors, register, reset } = useForm();

  const onSubmit = async (values) => {
    setIsProcessing(true);
    const response = await authenticate(values);
    if (response.data) {
      login(response.data.token);
      history.replace(from);
    } else {
      setToastMessage(t("Invalid user or password."), "error");
      reset();
    }
    setIsProcessing(false);
  };

  return (
    <StyledPage>
      <StyledLogo />
      <Card title={t("Sign In")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            label={t("Username")}
            register={register({ required: true })}
            name="user"
            error={errors.user && "Username is required."}
          />
          <Field
            label={t("Password")}
            type="password"
            register={register({ required: true })}
            name="password"
            error={errors.password && "Password is required."}
          />
          <div className="button-row">
            {isProcessing ? (
              <Loader />
            ) : (
              <Button type="submit">{t("Sign In")}</Button>
            )}
          </div>
        </form>
      </Card>
    </StyledPage>
  );
}
