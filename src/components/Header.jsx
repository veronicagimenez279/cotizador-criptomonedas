

export const Header = ({ titulo }) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">{titulo}</a>
            </div>
        </nav>

    )
}
