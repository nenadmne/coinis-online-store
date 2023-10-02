const CategorySelect = ({ onChange, items, selectedOption, name }) => {
  return (
    <>
      <label htmlFor="category"> Select {name} </label>
      <select
        className="category"
        onChange={onChange}
        value={selectedOption}
        required
      >
        <option>{selectedOption}</option>
        {items
          .filter((category) => category.name !== selectedOption)
          .map((item) => (
            <option key={item.slug} value={item.name}>
              {item.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default CategorySelect;
