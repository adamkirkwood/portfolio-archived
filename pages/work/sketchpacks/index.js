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

          <blockquote className={'o-container o-container--wide u-pv-mega'}>
            <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
              &ldquo;I&apos;m super excited about @sketchpacks, that was a much needed tool!&rdquo;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>
              @SketchTricks
            </strong>
          </blockquote>

          <section className={'o-container u-pv-mega'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                <h2 className={'o-type-display-1 u-color-headline'}>The Approach</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-3/4@sm'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Designing products that provide essential services must have
                  designed systems to support it. Well-designed services resolve
                  friction by using interconnected systems arranged to meet
                  desired outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-pv-mega'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col col-1/1 u-1/2 c-card'}>
                <div className={'u-mb-small u-uppercase u-weight-bold'}>Developer</div>

                <p>
                  When I have committed my final changes,<br />
                  I want to publish my work,<br />
                  So that my users will receive my latest revisions.
                </p>
              </div>

              <div className={'o-grid__col col-1/1 u-1/2 c-card'}>
                <strong>Developer</strong>

                <p>
                  When my plugin has been published,<br />
                  I want to view its analytics,<br />
                  So that I can measure its performance.
                </p>
              </div>
            </div>
          </section>



          <section className={'o-container o-container--wide u-pb-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-title u-color-headline'}>Uncover insights and opportunities</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Service blueprints are a great method for documenting and analyzing
                  the user&apos;s journey within an ecosystem. The map surfaced
                  points of friction and areas of opportunity that could be solved
                  with a well&ndash;designed system in place.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm u-bgcolor-tango'}>
                Insert image here
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pb-mega'}>
            <div className={'o-grid o-grid--rev'}>
              <div className={'o-grid__col u-1/3@sm'}>
                <h2 className={'o-type-title u-color-headline'}>Map the ecosystem and its forces</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Every system in place has a purpose. Whether or not they are
                  efficient and obvious is a different story.
                  To understand each system&apos;s purpose, I began to reduce
                  them just their essential elements and their interconnections.
                </p>
              </div>

              <div className={'o-grid__col u-2/3@sm u-bgcolor-tango'}>
                Insert image here
              </div>
            </div>
          </section>

          <blockquote className={'o-container o-container--wide u-pv-mega'}>
            <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
              &ldquo;The beauty of a living thing is not the atoms that go into
              it, but the way those atoms are put together.&rdquo;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>
              Carl Sagan
            </strong>
          </blockquote>

          <section className={'o-container u-pv-mega o-container--centered'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col'}>
                <img
                  src="/static/work/sketchpacks/app@2x.png"
                  width="720"
                  className={'u-mb-large'} />

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
