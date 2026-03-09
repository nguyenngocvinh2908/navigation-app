import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import CornerMark from '@/components/CornerMark';
import Colors from '@/constants/colors';

const FRAME_TOP = '14%';
const FRAME_BOTTOM = '20%';
const FRAME_HORIZONTAL = '6%';

export default function ScanScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>

      {/* Camera feed — thay View này bằng <CameraView> từ expo-camera */}
      <View style={styles.cameraBackground}>
        <Image
          source={require('@/assets/icons/scan-image.png')}
          style={styles.productImage}
          resizeMode="cover"
        />
      </View>

      {/* Khung scan + 4 góc */}
      <View style={styles.scanFrame} pointerEvents="none">
        <CornerMark position="topLeft" />
        <CornerMark position="topRight" />
        <CornerMark position="bottomLeft" />
        <CornerMark position="bottomRight" />
      </View>

      {/* Nút back — insets.top tránh notch/status bar */}
      <TouchableOpacity
        style={[styles.backButton, { top: insets.top - 10 }]}
        onPress={() => router.back()}
        activeOpacity={0.85}
      >
        <Ionicons name="chevron-back" size={22} color="#713ced" />
      </TouchableOpacity>

      {/* Product card — insets.bottom tránh home bar */}
      <View style={[styles.bottomSheet, { paddingBottom: insets.bottom + 16 }]}>
        <View style={styles.productCard}>
          <View style={styles.productThumb}>
            <Image
              source={require('@/assets/icons/scan-image.png')}
              style={styles.thumbImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.productBrand}>Lauren's</Text>
            <Text style={styles.productName}>Orange Juice</Text>
          </View>
          <View style={styles.addButton}>
            <Ionicons name="add" size={24} color={Colors.white} />
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cameraBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#dfc29f8a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    marginTop: -40,
  },
  
  scanFrame: {
    position: 'absolute',
    top: FRAME_TOP,
    bottom: FRAME_BOTTOM,
    left: FRAME_HORIZONTAL,
    right: FRAME_HORIZONTAL,
  },

  backButton: {
    position: 'absolute',
    left: 20,
    width: 40, height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },

  bottomSheet: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    paddingHorizontal: 20,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    gap: 14,
    shadowColor: '#7d450c',
    shadowOffset: { width: -9, height: 3 },
    shadowOpacity: 0.84,
    shadowRadius: 49,
    elevation: 10,
  },
  productThumb: {
    width: 52, height: 52,
    borderRadius: 12,
    backgroundColor: '#dfc29f8a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbImage: {
    width: 40, height: 40,
  },
  productInfo: {
    flex: 1,
  },
  productBrand: {
    fontSize: 12,
    color: Colors.textMuted,
    fontWeight: '500',
    marginBottom: 2,
  },
  productName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.textDark,
  },
  addButton: {
    width: 46, height: 46,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
});