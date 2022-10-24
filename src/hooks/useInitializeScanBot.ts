import {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import ScanbotSDK from 'react-native-scanbot-sdk';

const LICENSE_KEY =
  'ggUeJW62BtRujaaRy/qYoH4Ohg/KAh' +
  'VMmrHurFSBSascrZRU4S1EMFQ52jKj' +
  'MZiMG9oNbMyjz+dnWJ+EEm80sk7zxB' +
  'H99Fiq16RMvDhYxmbotGscZ6Cva2KV' +
  'zcUrOjl5nAPrIywEP6BNumUl9jMd0Y' +
  'sFtiPWF/GkHFNY2cC2FvWJvsWG6kb8' +
  'wR3BuGl2tQICn8w8bQNgTdgu32K7LZ' +
  '8/HB5bTXRWKk3UnT/WQxoJQnj+uoxl' +
  'ZG80rAFH3Q+mi7oLHurMnHATZNXzJd' +
  'WLDh/L7NkGXymrGa5uUcUOLdaHLI4S' +
  '8tMx00DVl174siV1v50BWAh8HwsDZH' +
  'HH0Ca2GR2N6A==\nU2NhbmJvdFNESw' +
  'pjb20uc2NhbmRvY3MKMTY2NzA4Nzk5' +
  'OQo4Mzg4NjA3CjE5\n';

const globalError = `ScanDocs was unable to start correctly.
Please try again later.`;

const scanbotConfig = {
  licenseKey: LICENSE_KEY,
  loggingEnabled: true,
};

const useInitializeScanBot = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const initScanbot = async () => {
      try {
        const x = await ScanbotSDK.initializeSDK(scanbotConfig);
        console.log(x);
        await RNBootSplash.hide();
      } catch (e) {
        setError(true);
      }
      setIsLoaded(true);
    };
    initScanbot();
  }, []);

  if (error) {
    throw globalError;
  }
  return isLoaded;
};

export default useInitializeScanBot;
