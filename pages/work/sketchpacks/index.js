import React from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'

import MainNavigation from '../../../components/MainNavigation'
import Footer from '../../../components/Footer'

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

        <MainNavigation />

        <article className={'l-case-study'}>

          <section className={'o-container o-container--wide u-pt-ultra u-pb-mega'}>
            <header className={'o-grid'}>
              <div className={'o-grid__col'}>
                <h1 className={'o-type-promo u-mb-medium'}>Sketchpacks</h1>
                <p className={'o-type-lead u-color-headline u-1/2'}>
                  A macOS app that empowers Sketch users to manage and sync
                  their plugins across machines and teams.
                </p>
              </div>
            </header>
          </section>

          <section className={'o-container u-pv-mega'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                <h2 className={'o-type-display-1 u-color-headline'}>The Challenge</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-3/4@sm'}>
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

          <blockquote className={'o-container o-container--wide u-pv-ultra'}>
            <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
              &ldquo;I&apos;m super excited about @sketchpacks, that was a much needed tool!&rdquo;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>
              @SketchTricks
            </strong>
          </blockquote>

          <section className={'o-container u-pv-mega o-container--centered'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-push-1/4 u-pull-1/4'}>
                <h2 className={'o-type-display-1 u-color-headline'}>The Approach</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  I worked closely with users and developers to understand
                  the essential interconnected elements of their systems,
                  which resulted in a simple and effortless product.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-pb-mega o-container--centered'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/2'}>
                <h2 className={'o-type-display-1 u-color-headline'}>Analyze</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Service blueprints help surface potential experience gaps and
                  areas for improvement.
                </p>
              </div>

              <div className={'o-grid__col u-1/2'}>
                <h2 className={'o-type-display-1 u-color-headline'}>Synthesize</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Reducing each system reveals their elements, interconnections,
                  and purpose.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-pv-mega o-container--centered'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col'}>
                <h2 className={'o-type-display-1 u-color-headline'}>Download Sketchpacks for free</h2>

                <p className={'o-type-body-2 u-color-body-1 u-mb-large'}>
                  Building and launching Sketchpacks has been absolutely rewarding.
                </p>

                <button href={'https://sketchpacks.com/'} className={'c-button c-button--primary'}>
                  Download Sketchpacks 0.5.7
                </button>
              </div>
            </div>
          </section>


        </article>

        <Footer />

      </div>
    )
  }
}
