import Link from 'next/link';

interface Props extends React.PropsWithChildren {
  title: string;
  description: string;
  subMenuList: { href: string; title: string; description: string }[];
}

export default function SubMenu(props: Props) {
  return (
    <div className="grid grid-cols-3">
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <ul>
        {props.subMenuList.map(({ title, href = '#' }) => (
          <li key={title}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
      <div>{props.children}</div>
    </div>
  );
}
