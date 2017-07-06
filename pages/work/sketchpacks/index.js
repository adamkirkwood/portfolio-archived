import React from 'react'
import Head from 'next/head'

import { Link } from 'routes'

import stylesheet from 'styles/index.scss'

import axios from 'axios'

export default class extends React.Component {
  static async getInitialProps ({ query, req }) {
    return {}
  }

  render () {
    return (
      <div>
        <Head>
          <title>Sketchpacks</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>


      </div>
    )
  }
}
