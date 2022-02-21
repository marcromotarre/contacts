/** @jsxImportSource theme-ui */

const User = ({ id, first_name, last_name, email, avatar }) => {
  return (
    <div
      sx={{
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "5px",
        width: "100%",
      }}
    >
      <img
        sx={{ width: "100%", borderRadius: "5px 5px 0 0" }}
        src={avatar}
        alt={`${first_name}_avatar`}
      ></img>
      <div
        sx={{
          height: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h4 sx={{ padding: 0, margin: 0 }}>{`${first_name} ${last_name}`}</h4>
        <p sx={{ padding: 0, margin: 0, fontSize: "12px" }}>{email}</p>
      </div>
    </div>
  );
};

export default User;
