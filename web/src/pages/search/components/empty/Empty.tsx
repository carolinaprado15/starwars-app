import "./Empty.css";

const Empty = () => {
  return (
    <div className="empty">
      <div className="text">
        <p className="-bold">
          There are zero matches.
        </p>
        <p className="-bold">
          Use the form to search for People or Movies.
        </p>
      </div>
    </div>
  )
}

export { Empty };