import { addHours } from 'date-fns';
import { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
export const CalendarModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const [formValues, setFormValues] = useState({
        title: 'Alonzo',
        notes: 'Choque',
        start: new Date(),
        end: addHours(new Date(), 2),
    })

    const onCloseModal = () => {
        console.log('Cerrando Modal');
        setIsOpen(false);

    }

    // const onInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEventHandler<HTMLTextAreaElement>) => {
    const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;

        setFormValues({
            ...formValues,
            [name]: value,
        })

    }
    const onDateChanged = (event: Date | null, changing: string) => {
        setFormValues(
            {
                ...formValues,
                [changing]: event
            }
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1> Nuevo Evento </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label><br />
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DatePicker
                        locale="es"
                        timeCaption='Hora'
                        selected={formValues.start}
                        className="form-control"
                        showTimeSelect
                        dateFormat="Pp"
                        onChange={(event) => onDateChanged(event, 'start')} //only when value has changed
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label><br />
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DatePicker
                        locale="es"
                        timeCaption='Hora'
                        minDate={formValues.start}
                        selected={formValues.end}
                        className="form-control"
                        showTimeSelect
                        dateFormat="Pp"
                        onChange={(event) => onDateChanged(event, 'end')}//only when value has changed
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        // type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows={5}
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
