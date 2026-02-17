export const metadata = {
  title: "HOOT Admin - Sanity Studio",
  description: "Content management for HOOT Initiative",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="sanity" style={{ height: "100vh" }}>
      {children}
    </div>
  );
}
