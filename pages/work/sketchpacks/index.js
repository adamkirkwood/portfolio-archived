import React from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'

import { Link } from 'routes'

import stylesheet from 'styles/main.scss'

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

          <Typekit kitId="wpl2elk" />
        </Head>


        <article className={'l-case-study'}>

          <section className={'o-container o-container--wide u-pv-mega'}>
            <header className={'o-grid'}>
              <div className={'o-grid__col'}>
                <h1 className={'o-type-promo u-mb-medium'}>Sketchpacks</h1>
                <p className={'o-type-lead u-color-headline u-2/3'}>
                  A macOS app that empowers thousands of Sketch users to manage
                  and sync their plugins across machines and teams.
                </p>
              </div>
            </header>
          </section>

          <section className={'o-container u-pv-mega'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/4'}>
                <h2 className={'o-type-display-1 u-color-headline'}>The Challenge</h2>
              </div>
              <div className={'o-grid__col u-3/4'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Sketch provides a powerful Javascript API, allowing the
                  creation of plugins that extend the native functionality. As
                  the Sketch plugin ecosystem started to scale, so did the
                  experience gaps in development and distribution. My challenge
                  was to provide Sketch Users a service to manage and sync their
                  plugins across machines and teams. This service would be built
                  on top of a system designed to help Sketch Developers develop
                  and distribute their plugins at scale.
                </p>
              </div>
            </div>
          </section>

          <blockquote className={'o-container o-container--wide u-pv-large'}>
            <p className={'o-type-big-quote u-weight-medium o-type-italic u-color-quote'}>
              &#8220;I'm super excited about @sketchpacks, that was a much needed tool!&#8221;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>@SketchTricks</strong>
          </blockquote>



        </article>

      </div>
    )
  }
}
