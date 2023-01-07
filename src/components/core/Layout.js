import { PageHeader } from "antd"
import Navigation from "./Navigation"

function Layout ({ children,title, subTitle }) {
  return (
    <div>
      <Navigation />
      <PageHeader className="jumbotron" title={title} subTitle={subTitle} />
      <div style={{width: '80%', margin: "0 auto"}}>
        {children}
      </div>
    </div>
  )
}

export default Layout
