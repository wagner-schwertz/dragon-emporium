import { useState, useEffect } from "react";
import { StyledPage, StyledCard } from "./styles";
import {
  getAllDragons,
  deleteSingleDragon,
  editSingleDragon,
} from "services/dragonApi";
import Loader from "components/Loader";
import List from "components/List";
import { useStore } from "store/store";
import pagination from "helpers/pagination";
import Paginator from "components/Pagination";
import DeleteDragonModal from "components/DeleteDragonModal";
import EditDragonModal from "components/EditDragonModal";
import { useTranslation } from "react-i18next";

export default function ListDragons() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [deleteDragon, setDeleteDragon] = useState({
    id: null,
    status: "iddle",
  });
  const [editDragon, setEditDragon] = useState({ data: null, status: "iddle" });
  const [currentPage, setCurrentPage] = useState(1);
  const sortedDragons = useStore((store) => store.sortedDragons);
  const fillDragons = useStore((store) => store.fillDragons);
  const setToastMessage = useStore((store) => store.setToastMessage);

  const fetchDragons = async () => {
    const response = await getAllDragons();
    if (response.data) {
      fillDragons(response.data);
    }
    setIsLoading(false);
  };

  const handleDeleteDragon = async () => {
    setDeleteDragon((prev) => ({ id: prev.id, status: "processing" }));
    const response = await deleteSingleDragon(deleteDragon.id);
    if (response?.data) {
      setToastMessage(
        `${t("Dragon")} #${deleteDragon.id} ${t("deleted successfully.")}`,
        "success"
      );
      await fetchDragons();
      setDeleteDragon({ id: null, status: "iddle" });
    } else {
      setToastMessage(t("Dragon couldn't be deleted."), "error");
    }
  };

  const handleEditDragon = async (values) => {
    setEditDragon((prev) => ({ ...prev, status: "processing" }));
    const response = await editSingleDragon(editDragon.data.id, values);
    if (response.data) {
      setToastMessage(
        `${t("Dragon")} #${editDragon.data.id} ${t("updated successfully.")}`,
        "success"
      );
      await fetchDragons();
    } else {
      setToastMessage(t("Dragon couldn't be updated."), "error");
    }
    setEditDragon({ data: null, status: "iddle" });
  };

  useEffect(() => {
    if (sortedDragons().length > 0) setIsLoading(false);
    fetchDragons();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <StyledPage>
        <StyledCard title={t("List Dragons")}>
          {isLoading ? (
            <Loader />
          ) : (
            <List
              data={pagination(sortedDragons(), 10).page(currentPage)}
              onDelete={(id) =>
                setDeleteDragon((prev) => ({ ...prev, id: id }))
              }
              onEdit={(id) =>
                setEditDragon({
                  data: sortedDragons().find((dragon) => dragon.id === id),
                  status: "editing",
                })
              }
            />
          )}
          {sortedDragons().length > 0 && (
            <Paginator
              pages={pagination(sortedDragons(), 10).pages}
              currentPage={currentPage}
              onChange={setCurrentPage}
            />
          )}
        </StyledCard>
      </StyledPage>
      <DeleteDragonModal
        onDismiss={() => setDeleteDragon({ id: null, status: "iddle" })}
        onDelete={handleDeleteDragon}
        dragonId={deleteDragon.id}
        isProcessing={deleteDragon.status === "processing"}
      />
      <EditDragonModal
        onDismiss={() => setEditDragon({ data: null, status: "iddle" })}
        data={editDragon.data}
        isProcessing={editDragon.status === "processing"}
        onSave={handleEditDragon}
      />
    </>
  );
}
