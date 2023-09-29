const CategorySelect = ({ onChange, items, selectedOption }) => {

  console.log(items)
  return (
    <>
      <label htmlFor="category"> Select category </label>
      <select
        className="category"
        onChange={onChange}
        value={selectedOption}
        required
      >
        <option>{selectedOption}</option>
        {[...new Set(items.map((item) => item.category))]
          .filter((category) => category !== selectedOption)
          .map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </>
  );
};

export default CategorySelect;
