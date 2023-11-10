// @ts-ignore
export const ShowUserBox = ({ first_name, last_name, email }) => {
  return (
    <>
      <div className="media" style={{ marginTop: "15px" }}>
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">Bob van der Valk</p>
          <p className="subtitle is-6">bob@trustion.io</p>
        </div>
      </div>
    </>
  );
};
