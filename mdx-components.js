export function useMDXComponents(components) {
  return {
    ...components,
    // Customize code blocks
    pre: ({ children, ...props }) => {
      return (
        <pre {...props} className="rounded-lg overflow-auto">
          {children}
        </pre>
      );
    },
    // Customize inline code
    code: ({ children, className, ...props }) => {
      // If it's a code block with a language className (processed by rehype-prism-plus)
      if (className) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      // For inline code
      return (
        <code className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 font-mono text-sm" {...props}>
          {children}
        </code>
      );
    },
  };
}
