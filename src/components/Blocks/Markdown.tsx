import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export type MarkdownProps = {
  content: string;
} & React.ComponentPropsWithRef<'div'>;

const Markdown = React.forwardRef<HTMLDivElement, MarkdownProps>(
  ({ content, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
);

export default Markdown;
