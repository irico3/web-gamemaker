import { VFC } from 'react'
import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

export const ModifiedLink: VFC<LinkProps> = (props) => {
  return (
    <NextLink href={props.href as string}>
      <Link {...props} onClick={() => (document.activeElement as HTMLElement).blur()} />
    </NextLink>
  )
}

export default ModifiedLink