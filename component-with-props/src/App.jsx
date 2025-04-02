import './App.css';
import { Notification } from './components/Notification';

function App() {
  return (
    <div className="App">
      <Notification
        title="Notificación"
        msg="Soy una notificación de error"
        type="error"
      />
      <Notification
        title="Información"
        msg="El proceso se está ejecutando"
        type="info"
      />
      <Notification
        msg="Usuario guardado con éxito"
        type="success"
      />
    </div>
  );
}

export default App;
