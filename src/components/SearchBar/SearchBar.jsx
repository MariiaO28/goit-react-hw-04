import toast, { Toaster } from 'react-hot-toast';
import { FaMagnifyingGlass } from "react-icons/fa6";
import css from './SearchBar.module.css'

const notify = () => toast.error("Please enter requested value!");

export default function SearchBar({ onSearch }) {
    function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.search.value.trim();
    if (topic === "") {
        notify();
        form.reset();
    } else {
        onSearch(topic);
        form.reset();
    }
    }

    return (
    <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <button className={css.search} type="submit"><FaMagnifyingGlass/> </button>
                <input
                    className={css.input}
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" />
                <Toaster position="top-center" everseOrder={false}/>
            </form>
    </header>
    )
}