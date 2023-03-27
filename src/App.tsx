import { useState } from 'react';
import Alert from './components/Alert';
import ButtonTest from './components/ButtonTest';

export default function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleClicked = function (): void {
    setAlertVisibility(true);
  };
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <ButtonTest onClick={handleClicked}>My Button</ButtonTest>
    </div>
  );
}
