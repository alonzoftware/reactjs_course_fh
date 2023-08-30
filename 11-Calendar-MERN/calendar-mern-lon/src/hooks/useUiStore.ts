import { useDispatch, useSelector } from "react-redux"
import { RootState, onOpenDateModal, onCloseDateModal } from "../store"

export const useUiStore = () => {
    const dispatch = useDispatch();
    const {
        isDateModalOpen
    } = useSelector((state: RootState) => state.ui)


    const openDateModal = () => {
        dispatch(onOpenDateModal())
    }
    const closeDateModal = () => {
        dispatch(onCloseDateModal())
    }

    //Optional Toggle Date Modal
    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal();
    }
    return {
        //Properties
        isDateModalOpen,
        //Methods
        openDateModal,
        closeDateModal,
        toggleDateModal,
    }
}