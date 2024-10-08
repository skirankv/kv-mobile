import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigatorImages from '../utilities/NavigatorImages';

interface Props {
  focused: boolean;
  color: string;
  tab: string;
}

const TabIcon: React.FC<Props> = (props: Props) => {
  const {focused, color, tab} = props;

  const getImage = () => {
    if (tab === 'Home') {
      return focused
        ? NavigatorImages.activeHome
        : NavigatorImages.inactiveHome;
    } else if (tab === 'Settings') {
      return focused
        ? NavigatorImages.activeSettings
        : NavigatorImages.inactiveSettings;
    } else if (tab === 'Profile') {
      return focused
        ? NavigatorImages.activeProfile
        : NavigatorImages.inactiveProfile;
    } else if (tab === 'Main') {
      return focused
        ? NavigatorImages.activeMain
        : NavigatorImages.inactiveMain;
    }
  };

  return <Icon name={getImage()} size={24} color={color} />;
};

export default TabIcon;
