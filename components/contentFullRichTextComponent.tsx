import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export default function ContentFullRichTextComponent(richText: any) {
  const Bold = ({ children }: any) => <p className='bold'>{children}</p>;

  const Text = ({ children }: any) => <div className='align-center'>{children}</div>;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
    },
  };
  return <div>{documentToReactComponents(richText, options)}</div>;
}
