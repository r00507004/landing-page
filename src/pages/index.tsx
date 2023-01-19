import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Features, Footer, Form, Header, Hero } from "../components"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex justify-center mx-2 bg-gray-50">
      <div className="flex flex-col w-full max-w-7xl">
        <header>
          <Header/>
        </header>
        <main>
          <Hero/>
          <Features/>
          <Form/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>