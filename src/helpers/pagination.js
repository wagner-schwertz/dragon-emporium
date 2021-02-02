export default function pagination(array = [], entriesPerPage = 10) {
  const pages = Math.max(Math.ceil(array.length / entriesPerPage), 1);

  const page = (page) => {
    return array.slice(
      (page - 1) * entriesPerPage,
      Math.min((page - 1) * entriesPerPage + entriesPerPage, array.length)
    );
  };

  return {
    page,
    pages,
  };
}
