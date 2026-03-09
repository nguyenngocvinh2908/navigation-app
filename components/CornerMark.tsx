import { View, StyleSheet } from 'react-native';

type Position = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface Props {
  position: Position;
  size?: number;
  thickness?: number;
  color?: string;
}

export default function CornerMark({
  position,
  size = 34,
  thickness = 3,
  color = 'rgba(255,255,255,0.9)',
}: Props) {
  const isTop = position.startsWith('top');
  const isLeft = position.endsWith('Left');

  return (
    <View
      style={[
        styles.base,
        { width: size, height: size },
        isTop ? styles.alignTop : styles.alignBottom,
        isLeft ? styles.alignLeft : styles.alignRight,
        {
          borderTopWidth: isTop ? thickness : 0,
          borderBottomWidth: !isTop ? thickness : 0,
          borderLeftWidth: isLeft ? thickness : 0,
          borderRightWidth: !isLeft ? thickness : 0,
          borderColor: color,
          borderTopLeftRadius: isTop && isLeft ? 8 : 0,
          borderTopRightRadius: isTop && !isLeft ? 8 : 0,
          borderBottomLeftRadius: !isTop && isLeft ? 8 : 0,
          borderBottomRightRadius: !isTop && !isLeft ? 8 : 0,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
  },
  alignTop: { top: 0 },
  alignBottom: { bottom: 0 },
  alignLeft: { left: 0 },
  alignRight: { right: 0 },
});