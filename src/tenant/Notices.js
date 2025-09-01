// src/tenant/Notices.js
import React from 'react';
import { View, Text } from 'react-native';
import { Screen, Card } from '../../components/Kit';
import { theme } from '../../design-system/theme';

const NoticeItem = ({ icon, title, subtitle, date }) => (
  <Card
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 14,
      paddingHorizontal: 18,
    }}
  >
    <Text style={{ fontSize: 22, marginRight: 12 }}>{icon}</Text>
    <View style={{ flex: 1 }}>
      <Text
        style={{ fontSize: 16, fontWeight: '700', color: theme.colors.ink }}
      >
        {title}
      </Text>
      <Text style={{ color: theme.colors.muted, marginTop: 2 }}>
        {subtitle}
      </Text>
      {date ? (
        <Text style={{ color: theme.colors.muted, fontSize: 12, marginTop: 2 }}>
          {date}
        </Text>
      ) : null}
    </View>
  </Card>
);

export default function Notices() {
  const notices = [
    {
      id: 1,
      icon: '💰',
      title: 'Rent Reminder',
      subtitle: 'Pay by 10 Aug',
      date: '2 Aug 2025',
    },
    {
      id: 2,
      icon: '🎉',
      title: 'Festival Wishes',
      subtitle: 'Happy Onam!',
      date: '1 Aug 2025',
    },
  ];

  return (
    <Screen title="Notices" scroll>
      {/* Hero */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
          padding: 18,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>
          Stay updated 📢
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          Important announcements and messages from your PG owner
        </Text>
      </View>

      {/* Notices list */}
      {notices.length === 0 ? (
        <Card style={{ alignItems: 'center', padding: 24 }}>
          <Text style={{ color: theme.colors.muted }}>No notices yet.</Text>
        </Card>
      ) : (
        <View style={{ gap: 12 }}>
          {notices.map(n => (
            <NoticeItem
              key={n.id}
              icon={n.icon}
              title={n.title}
              subtitle={n.subtitle}
              date={n.date}
            />
          ))}
        </View>
      )}
    </Screen>
  );
}
