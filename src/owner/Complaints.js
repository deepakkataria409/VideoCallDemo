import { Screen, Row, Chip } from '../../components/Kit';
export default function Complaints() {
  return (
    <Screen title="Complaints & Requests">
      <Row
        left="WiFi not working"
        subtitle="Priya • Pending"
        right={<Chip text="Pending" tone="warning" />}
      />
      <Row
        left="Water leakage"
        subtitle="Aman • Resolved"
        right={<Chip text="Resolved" tone="success" />}
      />
    </Screen>
  );
}
