import colors from '@utils/colors';
import React, {FC} from 'react';
import {View, FlexStyle} from 'react-native';

interface Props {
  size: number;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const CircleUI: FC<Props> = ({size, position}) => {
  let viewPosition: FlexStyle = {};

  switch (position) {
    case 'top-left':
      viewPosition = {left: -size / 2, top: -size / 2};
      break;
    case 'top-right':
      viewPosition = {right: -size / 2, top: -size / 2};
      break;
    case 'bottom-left':
      viewPosition = {left: -size / 2, bottom: -size / 2};
      break;
    case 'bottom-right':
      viewPosition = {right: -size / 2, bottom: -size / 2};
      break;
  }
  return (
    <View
      style={{
        width: size,
        height: size,
        position: 'absolute',
        ...viewPosition,
      }}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colors.SECONDARY,
          opacity: 0.3,
        }}
      />
      <View
        style={{
          width: size / 1.5,
          height: size / 1.5,
          borderRadius: size / 2,
          backgroundColor: colors.SECONDARY,
          opacity: 0.3,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: [{translateX: -size / 3}, {translateY: -size / 3}],
        }}
      />
    </View>
  );
};

export default CircleUI;
