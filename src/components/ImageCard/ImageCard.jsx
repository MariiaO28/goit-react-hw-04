import { RxAvatar } from "react-icons/rx";
import { FcLike } from "react-icons/fc";
import css from './ImageCard.module.css'

export default function ImageCard({photo: {description, likes, user, urls: {small, regular }}, openModal }) {
    return (
        <div className={css.card} >
            <img className={css.image} src={small} alt={description} onClick={() => openModal(regular,description)} />
            <div className={css.description}>
                <p className={css.text}><RxAvatar className={css.icon} size="24" />{user.name}</p>
                <p className={css.text}><FcLike className={css.icon} size="24"/> {likes} </p>
            </div>
        </div>
    )
}