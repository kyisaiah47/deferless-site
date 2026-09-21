export default function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-row">
        <img className="masthead__mark" src="/icon.svg" width="22" height="22" alt="" />
        <div className="app-lock">
          <a className="masthead__name" href="/">deferless</a>
        </div>
        <nav className="masthead__nav">
          <a href="https://github.com/kyisaiah47/deferless">GitHub</a>
          <a href="https://www.npmjs.com/package/deferless">npm</a>
        </nav>
      </div>
    </header>
  );
}
