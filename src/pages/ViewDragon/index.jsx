import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { getSingleDragon } from "services/dragonApi";
import { useStore } from "store/store";
import Loader from "components/Loader";
import Field from "components/Field";
import { Button } from "components/Buttons";
import { StyledCard } from "./styles";

export default function ViewDragon() {
  const history = useHistory();
  const { id } = useParams();
  const { t } = useTranslation();
  const dragons = useStore((store) => store.dragons);
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState({});

  const fetchDragons = async () => {
    const response = await getSingleDragon(id);
    if (response.data) {
      setData(response.data);
      setStatus("ok");
    } else {
      setStatus("404");
    }
  };

  useEffect(() => {
    const cachedDragon = dragons.find((dragon) => dragon.id === id);
    if (!cachedDragon) {
      fetchDragons();
    } else {
      setData(cachedDragon);
      setStatus("ok");
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <StyledCard title={t("Dragon Details")}>
      {status !== "404" ? (
        <AnimatePresence>
          {status === "loading" ? (
            <Loader />
          ) : (
            <div>
              <Field id="id" label="ID" readOnly value={data.id || ""} />
              <Field
                id="name"
                label={t("Name")}
                readOnly
                value={data.name || ""}
              />
              <Field
                id="type"
                label={t("Type")}
                readOnly
                value={data.type || ""}
              />
              <Field
                id="created at"
                label={t("Created At")}
                readOnly
                value={
                  format(new Date(data.createdAt), "dd/MM/yyyy HH:mm:ss") || ""
                }
              />
              <div className="button-row">
                <Button tabIndex={1} onClick={() => history.push("/")}>
                  {t("Back")}
                </Button>
              </div>
            </div>
          )}
        </AnimatePresence>
      ) : (
        <p className="error-message">{t("Dragon not found.")}</p>
      )}
    </StyledCard>
  );
}
