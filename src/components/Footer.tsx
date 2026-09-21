export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-foot">
      <p>
        Built by{" "}
        <img className="studio-credit-mark" src="/brand/compound-labs.svg" alt="Compound Labs" width="80" height="20" />
      </p>
      <p className="copyright">© {year} deferless. A Compound Labs product.</p>
    </footer>
  );
}
