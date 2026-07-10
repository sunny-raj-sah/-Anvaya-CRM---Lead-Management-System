 import Button from "./Button";

const PageHeader = ({
  title,
  subtitle,
  buttonText,
  onClick,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">

      <div>

        <h2>{title}</h2>

        <p className="text-muted mb-0">
          {subtitle}
        </p>

      </div>

      {buttonText && (
        <Button onClick={onClick}>
          {buttonText}
        </Button>
      )}

    </div>
  );
};

export default PageHeader;