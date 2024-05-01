import SearchBar from '../SearchBar/SearchBar'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageGallery from '../ImageGallery/ImageGallery'
import ImageModal from '../ImageModal/ImageModal'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import {fetchPhotos} from '../../images-api'
import { useState, useEffect } from 'react'
import css from './App.module.css'

export default function App() {

  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
 
async function handleSearch(newQuery) {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setTotalPages(0);
  }

  function handleLoadMore() {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhotos() {
      try {
       setIsLoading (true)
       const data = await fetchPhotos(query, page)
       setPhotos(prevPhotos => {
         return [...prevPhotos, ...data.results];
       })
        setTotalPages(data.total_pages)
    } catch (error) {
        setError(true)
    } finally {
        setIsLoading(false)
     }
    }
    getPhotos()
  }, [page, query])

  function openModal(photo) {
    setSelectedPhoto(photo)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} openModal={openModal}/>}
      <ImageModal onClose={closeModal} onOpen={modalIsOpen}
      photo={selectedPhoto} />
      {isLoading && <Loader />}
      {page < totalPages && !isLoading && <LoadMoreBtn className={css.button} onLoadMore={handleLoadMore} />}
    </div>
  )
}