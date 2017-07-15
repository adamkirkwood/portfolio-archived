import React from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'

import MainNavigation from '../../../components/MainNavigation'
import Footer from '../../../components/Footer'
import JobStoryCard from '../../../components/JobStoryCard'
import PersonaCard from '../../../components/PersonaCard'

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

          <div className={'u-angled--bottom o-page-header'}>
            <section className={'o-container o-container--wide u-pt-ultra u-pb-large'}>
              <header className={'o-grid o-grid--wide'}>
                <div className={'o-grid__col u-1/2'}>
                  <h1 className={'o-type-promo u-mb-medium'}>Sketchpacks</h1>
                  <p className={'o-type-lead u-color-headline u-mb-medium'}>
                    A macOS app that empowers Sketch users to manage and sync
                    their plugins across machines and teams.
                  </p>
                  <a href={'https://sketchpacks.com/'} className={'c-button c-button--primary'}>
                    Download Sketchpacks
                  </a>
                </div>

                <div className={'o-grid__col u-1/2'}>
                  <img
                    src="/static/work/sketchpacks/app@2x.png"
                    width="740"
                    className={'u-mb-large'}
                  />
                </div>
              </header>
            </section>
          </div>

          <section className={'o-container u-pt-ultra u-pb-mega'}>
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

          <section className={'o-container o-container--wide u-pv-large'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col col-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Starts by meeting the community</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  I had the pleasure of meeting many talented people from the
                  Sketch Design &amp; Development community.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Including sponsor users in the design &amp; development process gave
                  me the confidence to move forward with iterations.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Loose proto&ndash;personas were inspired by
                  the people I&apos;ve met and interviewed throughout the process.
                </p>
              </div>

              <div className={'o-grid__col col-1/1 u-1/3@sm'}>
                <PersonaCard
                  name={'Alice'}
                  archetype={'Sketch Developer'}
                  thumbnail_url={'https://randomuser.me/api/portraits/women/68.jpg'}
                />
              </div>

              <div className={'o-grid__col col-1/1 u-1/3@sm'}>
                <PersonaCard
                  name={'Bob'}
                  archetype={'Sketch User'}
                  thumbnail_url={'https://randomuser.me/api/portraits/men/41.jpg'}
                />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pv-mega'}>
            <div className={'o-grid o-grid--wide o-grid--cards'}>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-mb-large u-text-center@sm'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Job Stories</h2>

                <p className={'o-type-body-2 u-color-body-1 u-push-1/4@sm u-pull-1/4@sm'}>
                  Choosing which problems to solve for creates focus and intentionality.
                  I curated which problems I want to tackle while taking note of
                  their interconnected systems and touchpoints.
                </p>
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                <JobStoryCard
                  archetype={'User'}
                  actor={'When I want to automate reptitive tasks within Sketch'}
                  action={'I want to search for a qualified plugin'}
                  outcome={'So that I can be more efficient'}
                />
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                <JobStoryCard
                  archetype={'User'}
                  actor={'When I become aware of new versions of plugins'}
                  action={'I want to update them'}
                  outcome={'So that I can receive new features and bug fixes'}
                />
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                <JobStoryCard
                  archetype={'User'}
                  actor={'When I work across multiple machines regularly'}
                  action={'I want access to the same plugins'}
                  outcome={'So that I can preserve my design tool chain'}
                />
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                <JobStoryCard
                  archetype={'User'}
                  actor={'When I am need to share my set of plugins'}
                  action={'I want provide my list of plugins'}
                  outcome={'So that the recipient can install my set of plugins'}
                />
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                <JobStoryCard
                  archetype={'Developer'}
                  actor={'When I have committed my final changes'}
                  action={'I want to publish my work'}
                  outcome={'So that my users will receive my latest revisions'}
                />
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                <JobStoryCard
                  archetype={'Developer'}
                  actor={'When my plugin has been published'}
                  action={'I want to view its analytics'}
                  outcome={'So that I can measure its performance'}
                />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Uncover insights and opportunities</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Service blueprints are a great method for documenting and analyzing
                  the user&apos;s journey within an ecosystem.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  The map surfaced
                  points of friction and areas of opportunity that could be solved
                  with a well&ndash;designed system in place.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img src='https://placeimg.com/640/480/tech?t=1500010858937' />
              </div>
            </div>
          </section>

          <blockquote className={'o-container o-container--wide u-pv-ultra'}>
            <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
              &ldquo;The beauty of a living thing is not the atoms that go into
              it, but the way those atoms are put together.&rdquo;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>
              Carl Sagan
            </strong>
          </blockquote>

          <section className={'o-container o-container--wide u-pb-mega'}>
            <div className={'o-grid o-grid--rev'}>
              <div className={'o-grid__col u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Map the ecosystem and its forces</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Every system in place has a purpose. Whether or not they are
                  efficient and obvious is a different story.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  To understand each system&apos;s purpose, I began to reduce
                  them just their essential elements and their interconnections.
                </p>
              </div>

              <div className={'o-grid__col u-2/3@sm'}>
                <img src='https://placeimg.com/640/480/tech?t=1500010858937' />
              </div>
            </div>
          </section>

          <section className={'o-container u-pv-mega o-container--centered'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col'}>
                <img
                  src="/static/work/sketchpacks/app@2x.png"
                  width="720"
                  className={'u-mb-large'}
                />

                <h2 className={'o-type-display-1 u-color-headline'}>Download Sketchpacks for free</h2>

                <p className={'o-type-body-2 u-color-body-1 u-mb-large'}>
                  Building and launching Sketchpacks has been absolutely rewarding.
                </p>

                <a href={'https://sketchpacks.com/'} className={'c-button c-button--primary'}>
                  Download Sketchpacks
                </a>
              </div>
            </div>
          </section>


        </article>

        <Footer />

      </div>
    )
  }
}
