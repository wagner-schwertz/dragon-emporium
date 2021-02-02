import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { StyledList, StyledIconButton } from "./styles";

export default function List({
  data = [],
  onEdit = () => {},
  onDelete = () => {},
}) {
  const { t } = useTranslation();
  return (
    <StyledList
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="header">
        <span className="id">ID</span>
        <span>{t("Name")}</span>
      </div>
      {data.map((dragon) => (
        <li key={dragon.id}>
          <span className="id">{dragon.id}</span>
          <Link className="name" to={`/${dragon.id}`}>
            {dragon.name}
          </Link>
          <div>
            <StyledIconButton
              icon={<FaPencilAlt />}
              onClick={() => onEdit(dragon.id)}
              aria-label={`${t("Edit Dragon #")}${dragon.id}`}
            />
            <StyledIconButton
              icon={<FaTrashAlt />}
              onClick={() => onDelete(dragon.id)}
              aria-label={`${t("Delete Dragon #")}${dragon.id}`}
            />
          </div>
        </li>
      ))}
      {data.length === 0 && (
        <span className="empty">{t("There are no dragons ):")}</span>
      )}
    </StyledList>
  );
}
