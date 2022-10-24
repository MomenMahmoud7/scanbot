import React, {useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import ScanbotSDK, {
  DocumentScannerConfiguration,
} from 'react-native-scanbot-sdk';
import Preview from '../Preview';
import Text from '../Text';

import ScanBot from '../../assets/scan.svg';
import styles from './Scan.style';
import unit from '../../utils/metrics';
import colors from '../../utils/colors';

const scannerOptions: DocumentScannerConfiguration = {
  multiPageEnabled: true,
  ignoreBadAspectRatio: true,
  cameraBackgroundColor: colors.main,
  topBarBackgroundColor: colors.main,
  bottomBarBackgroundColor: colors.main,
  shutterButtonAutoInnerColor: colors.smoke,
  shutterButtonAutoOuterColor: colors.smoke,
  shutterButtonIndicatorColor: colors.smoke,
  shutterButtonManualInnerColor: colors.smoke,
  shutterButtonManualOuterColor: colors.smoke,
  autoSnappingEnabled: true,
};

const Scan = () => {
  const {bottom = 0} = useSafeAreaInsets();
  const [documentUri, setDocumnetUri] = useState<string | undefined>();

  const clear = useCallback(() => {
    setDocumnetUri(undefined);
  }, []);

  const scan = useCallback(async () => {
    try {
      const {status, pages} = await ScanbotSDK.UI.startDocumentScanner(
        scannerOptions,
      );
      const scannedPages = pages.map(
        ({documentImageFileUri}) => documentImageFileUri || '',
      );
      if (status === 'CANCELED') {
        return Toast.show({
          type: 'info',
          text1: 'CANCELED',
          text2: "Scan canceled, let's try again.",
        });
      }
      const {pdfFileUri} = await ScanbotSDK.createPDF(scannedPages, 'AUTO');
      setDocumnetUri(pdfFileUri);
      pages.forEach(page => {
        ScanbotSDK.removePage(page);
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: 'Something went wrong, Please try again later',
      });
    }
  }, []);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.trigger, {bottom: bottom || 24 * unit}]}
        onPress={scan}>
        <Text color={colors.white}>SCAN DOCUMENT</Text>
        <ScanBot
          width={22 * unit}
          height={22 * unit}
          color={colors.white}
          style={styles.icon}
        />
      </TouchableOpacity>
      {!!documentUri && (
        <Preview
          documentUri={documentUri}
          id={`preview-${documentUri}`}
          clear={clear}
        />
      )}
    </>
  );
};

export default Scan;
