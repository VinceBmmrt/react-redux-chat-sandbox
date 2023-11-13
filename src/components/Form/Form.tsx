import { ChangeEvent, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { changeInputValue, addNewMessage } from '../../store/reducers/chat';
import './Form.scss';

function Form() {
  // je veux émettre une intention a mon store quand l input change
  const dispatch = useAppDispatch();

  const inputValue = useAppSelector((state) => state.chat.inputValue);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // j'emet l intention de changer la valeur de mon input avec la nouvelle valeur
    dispatch(changeInputValue(newValue));
  };
  function handleSubmitAddMessage(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // j'émet l'intention d'ajouter un message
    dispatch(addNewMessage());
  }

  return (
    <form className="form" onSubmit={handleSubmitAddMessage}>
      <input
        type="text"
        className="form__input"
        value={inputValue}
        onChange={handleChangeInputValue}
      />
      <button type="submit" className="form__button">
        &gt
      </button>
    </form>
  );
}

export default Form;
