export const ShowUserBox = ({ first_name, last_name, email }) => {
  return (
    <>
      <div className="block">
        <div>
          {first_name} {last_name}
        </div>
        <div>{email}</div>
      </div>
    </>
  );
};
