import Link from 'next/link';
import { getBasePath } from '../utils/useBasePath';

export default function CustomLink({ href, ...props }) {
  const basePath = getBasePath();
  const newHref = `${basePath}${href}`;

  return <Link href={newHref} {...props} />;
}