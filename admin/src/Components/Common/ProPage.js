import React from 'react'
import { Link } from 'react-router-dom'
function ProPage() {
  return (
    <>
    <main id="main" className="main">
    <p className="text-center p-5">
      This page is only available in the pro version! <Link to="https://bootstrapmade.com/demo/templates/NiceAdmin/pages-faq.html" target="_blank">Preview the page online</Link> | <Link to="https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/#download" target="_blank">Buy the pro version</Link>
    </p>
  </main>
  </>
  )
}

export default ProPage