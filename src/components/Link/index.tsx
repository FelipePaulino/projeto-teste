interface PropsLink {
    link?: string;
    name:string;
}

export const LinkComponent = ({link, name}:PropsLink) => {
    return (
        <li><a href={link}>{name}</a></li>
    )
}
