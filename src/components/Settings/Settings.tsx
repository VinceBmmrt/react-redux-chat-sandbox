import './Settings.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { toggleSettings } from '../../store/reducers/settings';

// Pour récupérer les données provenant de mon store, j'utilise useAppSelector
function Settings() {
  const dispatch = useAppDispatch();

  const isSettingsOpened = useAppSelector((state) => state.settings.isOpen);
  function handleClickToggle(): void {
    dispatch(toggleSettings());
  }

  return (
    <div className="settings">
      Settings
      <button
        type="button"
        className="settings__toggle"
        onClick={handleClickToggle}
      >
        X
      </button>
      {isSettingsOpened && (
        <form className="settings__form">
          <input type="email" className="settings__input" />
          <input type="password" className="settings__input" />
          <button type="submit" className="settings__submit">
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}

export default Settings;
