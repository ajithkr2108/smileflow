export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div style={{ padding: "8px", background: "#eee", color: "#333", fontSize: "14px" }}>
        Dashboard shell — auth coming soon
      </div>
      {children}
    </div>
  );
} 