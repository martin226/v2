export default function MdxLayout({ children }) {
  return (
    <div className="prose dark:prose-invert prose-stone 
                    prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-stone-900 dark:prose-headings:text-stone-100 
                    prose-h1:text-3xl 
                    prose-a:text-stone-800 dark:prose-a:text-stone-200 hover:prose-a:text-stone-600 dark:hover:prose-a:text-stone-400 
                    prose-p:text-stone-600 dark:prose-p:text-stone-400 
                    prose-li:text-stone-600 dark:prose-li:text-stone-400 
                    prose-strong:text-stone-900 dark:prose-strong:text-stone-100 
                    prose-code:text-stone-800 dark:prose-code:text-stone-200 
                    prose-pre:p-0 prose-pre:bg-transparent dark:prose-pre:bg-transparent
                    prose-pre:text-stone-800 dark:prose-pre:text-stone-200 
                    prose-blockquote:text-stone-600 dark:prose-blockquote:text-stone-400 
                    prose-blockquote:border-stone-300 dark:prose-blockquote:border-stone-700
                    max-w-none">
      {children}
    </div>
  );
}
