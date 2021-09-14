import * as React from "react"
import {Appbar} from '../component/Appbar/Appbar';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from '../Theme';

// styles
const pageStyles = {
  color: "#232129",
  padding: 100,
  backgroundColor: "#FFFFFF",
  fontFamily: "Nunita",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 20,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <ThemeProvider theme={theme}>
      <Appbar/>
      <img src={require('../images/icon.png').default} style={{height: 300, width: 300}} alt=""/>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      </ThemeProvider>
    </main>
  )
}

export default IndexPage
