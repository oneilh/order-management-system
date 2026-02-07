const Checkbox = ({ status }: { status: string }) => {
  if (status) {
    return (
      <input
        type="checkbox"
        disabled
        className="checkbox checkbox-neutral"
      />
    );
  }
  return (
    <input
      type="checkbox"
    //   defaultChecked
      className="checkbox checkbox-neutral"
    />
  );
};

export default Checkbox;
