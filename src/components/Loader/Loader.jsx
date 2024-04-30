import { ThreeDots } from 'react-loader-spinner'
import css from './Loader.module.css'


export default function Loader() {
    return (
        <div className={css.loader}>
        <ThreeDots
            margin="0 auto"
            visible={true}
            height="60"
            width="60"
            color="#4682B4"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
    )
}