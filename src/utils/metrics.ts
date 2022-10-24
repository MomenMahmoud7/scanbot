import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const designWidth = 390;
const widthPercentage = screenWidth / designWidth;
const unit = widthPercentage > 1.5 ? 1.5 : widthPercentage;

export default unit;
