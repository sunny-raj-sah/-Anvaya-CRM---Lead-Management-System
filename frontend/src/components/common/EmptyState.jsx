const EmptyState = ({
  title = "No Data Found",
}) => {
  return (
    <div className="text-center py-5">

      <h4>{title}</h4>

      <p className="text-muted">
        Nothing to display.
      </p>

    </div>
  );
};

export default EmptyState;