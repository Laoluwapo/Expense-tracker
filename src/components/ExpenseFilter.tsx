interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All categories</option>
        <option value="Balling">Balling</option>
        <option value="Feeding">Feeding</option>
        <option value="Transportation">Transportation</option>
        <option value="Gaming">Gaming</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
