export default function MdxLayout({ children }) {
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-3xl">
      {children}
    </div>
  );
}
