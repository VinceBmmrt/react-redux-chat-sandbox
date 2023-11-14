import './Settings.scss';
import { useAppSelector } from '../../hooks/redux';
// Pour récupérer les données provenant de mon store, j'utilise useAppSelector
const isSettingsOpened = useAppSelector((state) => state.settings.isOpen);
function Settings() {
  return (
    <div className="settings">
      Settings
      <button type="button" className="settings__toggle">
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
