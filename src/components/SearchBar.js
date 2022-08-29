import { useState } from "react";

export default function SearchBar({ onFormSubmit }) {
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

    const onSubmit = e =>{
        e.preventDefault()
        onFormSubmit(search)
    }

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label>Video search</label>
					<input onChange={handleSearch} type="text" value={search} />
				</div>
			</form>
		</div>
	);
}
