export default function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="border-edge screen-line-after relative mx-auto w-full max-w-4xl overflow-auto border-x pt-16 pb-4 font-sans sm:px-4">
      {children}
    </main>
  );
}
