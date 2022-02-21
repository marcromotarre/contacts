import { useEffect, useState } from "react";
import { getUsers } from "../lib/mutations";
import Paginator from "./Paginator";
import User from "./User";

/** @jsxImportSource theme-ui */
const UsersList = () => {
  const [users, setUsers] = useState({});
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchUsers() {
      setUsers(await getUsers({ perPage, page }));
    }
    fetchUsers();
  }, [page, perPage]);

  const clickOnPage = (pageClicked) => {
    setPage(pageClicked);
  };

  const handleChangePerPage = (value) => {
    setPerPage(Number(value));
    setPage(1);
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "100%",
        rowGap: "30px",
        padding: "20px 0px",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <select
        value={perPage}
        onChange={(e) => handleChangePerPage(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option defaultValue value="5">
          5
        </option>
        <option value="10">10</option>
        <option value={`${users?.total}`}>show all</option>
      </select>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: users?.data?.length > 1 ? "auto auto" : "auto",
          columnGap: "20px",
          rowGap: "20px",
          width: users?.data?.length > 1 ? "90%" : "45%",
        }}
      >
        {users.data?.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
      {users?.total_pages > 1 && (
        <Paginator
          clickOnPage={clickOnPage}
          sx={{ width: "100%" }}
          totalPages={users.total_pages}
          selectedPage={users.page}
          pageSize={users.per_page}
        />
      )}
    </div>
  );
};

export default UsersList;
