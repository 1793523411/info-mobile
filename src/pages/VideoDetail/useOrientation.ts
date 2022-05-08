import {useEffect} from 'react';
import Orientation from 'react-native-orientation';

export const useOrientation = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
    const initial = Orientation.getInitialOrientation();
    console.log('init', initial);
    if (initial === 'PORTRAIT') {
      // do something
    } else {
      // do something else
    }
    Orientation.addOrientationListener(orientation => {
      console.log('addOrientationListener orientation发生变化', orientation);
    });
    Orientation.addSpecificOrientationListener(specificOrientation => {
      console.log(
        ' addSpecificOrientationListenerorientation发生变化',
        specificOrientation,
      );
    });
  }, []);
  return {};
};
