import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {year} William Luo. Built with intention.
        </p>
      </div>
    </footer>
  )
}
