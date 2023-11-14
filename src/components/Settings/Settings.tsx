import './Settings.scss';
import clsx from 'clsx';
import { X } from 'react-feather';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { toggleSettings } from '../../store/reducers/settings';

// Pour récupérer les données provenant de mon store, j'utilise useAppSelector
function Settings() {
  const dispatch = useAppDispatch();

  const isSettingsOpened = useAppSelector((state) => state.settings.isOpen);
  function handleClickToggle(): void {
    dispatch(toggleSettings());
  }
  const emailValue = useAppSelector(
    (state) => state.settings.credentials.email
  );
  const passwordValue = useAppSelector(
    (state) => state.settings.credentials.password
  );
  return (
    <div
      className={clsx('settings', {
        'settings--closed': !isSettingsOpened,
      })}
    >
      <button
        type="button"
        className="settings__toggle"
        onClick={handleClickToggle}
      >
        <X />
      </button>
      <form className="settings__form">
        <input
          type="email"
          className="settings__input"
          value={emailValue}
          placeholder="email"
        />
        <input
          type="password"
          className="settings__input"
          placeholder="mot de passe"
          value={passwordValue}
        />
        <button type="submit" className="settings__submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Settings;
