import React from "react";

function FilterBar({isGreasy, onGreaseChange, onSortChange, sortBy}) {
  function handleSortChange(event){
    onSortChange(event.target.value)
  }

  function handleSelectGreased(event){
    onGreaseChange(event.target.checked)
  }
  return (
  <div>
    <div className="ui item">
					<select
						className="ui selection dropdown"
						name="sort"
						onChange={handleSortChange}
						value={sortBy}
          >
						<option value="name">Hog Name</option>
						<option value="weight">Hog Weight</option>
					</select>
				</div>

<div className="ui item">
<label>Do you want the hogs not greasy? Uncheck this box.</label>
</div>
<div className="ui item">
<input
  className="ui toggle checkbox"
  checked={isGreasy}
  onChange={handleSelectGreased}
  type="checkbox"
/>
</div>

</div>
  );
}

export default FilterBar;