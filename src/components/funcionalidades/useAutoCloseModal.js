import { useState, useEffect } from "react"
// Creo una funcionalidad de cierre automático para algunos modales concretos.
const useAutoCloseModal = (initialIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)
  const [autoClose, setAutoClose] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
    setAutoClose(false)
  }

  useEffect(() => {
    let timeout
    if (autoClose) {
      timeout = setTimeout(() => {
        setIsOpen(false)
        setAutoClose(false)
      }, 1500)
    }
    return () => clearTimeout(timeout)
  }, [autoClose])

  return { isOpen, toggleModal, setAutoClose }
}

export default useAutoCloseModal
