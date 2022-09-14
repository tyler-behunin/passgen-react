import './css/reset.scss'
import './css/App.scss'
import { Generator } from './components/Generator';
import { PastPasswords } from './components/PastPasswords';
import { Alert } from './components/Alert';
import { useState } from 'react';

function App() {
  const [pastPasswords, setPastPasswords] = useState<string[]>([]);
  const [copyAlert, setCopyAlert] = useState('');
  const [alertActive, setAlertActive] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [passToCopy, setPassToCopy] = useState('');

  const copy: (parameter: string) => Promise<void> = async (textToCopy) => {
    let t: number = 0;
    clearTimeout(t);
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopyAlert('Copied to Clipboard')
        setAlertActive(true);
        setAlertType('success');
        t = setTimeout(() => {
          setCopyAlert('');
          setAlertActive(false);
        }, 2000);
      } catch (e) {
        setCopyAlert('Failed to Copy to Clipboard');
        setAlertActive(true);
        setAlertType('failed');
        t = setTimeout(() => {
          setCopyAlert('');
          setAlertActive(false);
        }, 2000);
      }
    } else {
      setPassToCopy(textToCopy);
      setTimeout(() => {
        const copyElement = document.querySelector('#clipboardProxy') as HTMLInputElement
        copyElement?.select();
        document.execCommand('copy');
        setCopyAlert('Copied to Clipboard')
        setAlertActive(true);
        setAlertType('success');
        t = setTimeout(() => {
          setCopyAlert('');
          setAlertActive(false);
        }, 2000);
      }, 500);
    }
  };

  const updatePastPasswords = (password: string) => {
    setPastPasswords((prev) => {
      return [password, ...prev];
    });
  }

  return (
    <div className="App">
      <Generator copy={copy} updatePastPasswords={updatePastPasswords}/>
      <PastPasswords passwords={pastPasswords} copy={copy} />
      <Alert alertActive={alertActive} alertType={alertType} alert={copyAlert}/>      
    </div>
  )
}

export default App
