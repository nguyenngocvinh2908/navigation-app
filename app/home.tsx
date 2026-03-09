import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import InsightCard from '@/components/InsightCard'
import Colors from '@/constants/colors'

const ScanIcon = () => (
  <Image source={require('@/assets/icons/scan.png')} style={{ width: 28, height: 28 }} resizeMode="contain" />
)
const CounterfeitIcon = () => (
  <Image source={require('@/assets/icons/counterfeit.png')} style={{ width: 28, height: 28 }} resizeMode="contain" />
)
const SuccessIcon = () => (
  <Image source={require('@/assets/icons/success.png')} style={{ width: 28, height: 28 }} resizeMode="contain" />
)
const DirectoryIcon = () => (
  <Image source={require('@/assets/icons/directory.png')} style={{ width: 28, height: 28 }} resizeMode="contain" />
)

export default function HomeScreen() {
  const router = useRouter();

  const cards = [
    {
      id: 'scan',
      label: 'Scan new',
      subLabel: 'Scanned 483',
      icon: <ScanIcon />,
      iconBg: Colors.card.scan,
      onPress: () => router.push('/scan'),
    },
    {
      id: 'counterfeits',
      label: 'Counterfeits',
      subLabel: 'Counterfeited 32',
      icon: <CounterfeitIcon />,
      iconBg: Colors.card.counterfeit,
      onPress: () => {},
    },
    {
      id: 'success',
      label: 'Success',
      subLabel: 'Checkouts 8',
      icon: <SuccessIcon />,
      iconBg: Colors.card.success,
      onPress: () => {},
    },
    {
      id: 'directory',
      label: 'Directory',
      subLabel: 'History 26',
      icon: <DirectoryIcon />,
      iconBg: Colors.card.directory,
      onPress: () => {},
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <View style={styles.helloRow}>
              <Text style={styles.helloText}>Hello </Text>
              <Text style={styles.emoji}>👋🏻</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.userName}>Christie Doe</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.avatarWrapper}>
            <Image source={require('@/assets/icons/avatar.jpg')} style={styles.avatar} resizeMode='cover' />
          </TouchableOpacity>
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Your Insights</Text>

        {/* Cards Grid */}
        <View style={styles.grid}>
          <View style={styles.row}>
            <InsightCard {...cards[0]} />
            <InsightCard {...cards[1]} />
          </View>
          <View style={styles.row}>
            <InsightCard {...cards[2]} />
            <InsightCard {...cards[3]} />
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 28,
  },
  helloRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helloText: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textDark,
  },
  emoji: {
    fontSize: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 2,
  },
  avatarWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  avatarPlaceholder: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: '#E0E3F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 12
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 40,
  },
  grid: {
    gap: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 30,
  },
});