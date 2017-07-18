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

        <MainNavigation inverse />

        <article className={'l-case-study'}>

          <div className={'u-angled--bottom o-page-header'}>
            <section className={'o-container o-container--wide u-pt-ultra u-pb-large'}>
              <header className={'o-grid o-grid--wide'}>
                <div className={'o-grid__col u-1/2'}>
                  <h1 className={'o-type-promo u-mb-medium'}>Sketchpacks</h1>
                  <p className={'o-type-lead u-mb-medium'}>
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
                    width="370"
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
                  creation of plugins that extend its native functionality. As
                  the Sketch plugin ecosystem started to scale, so did the
                  experience gaps in development and distribution. My challenge
                  was to provide Sketch Users a service to manage and sync their
                  plugins across machines and teams. This service would be built
                  on top of a system designed to help Sketch Developers
                  and distribute their plugins at scale.
                </p>
              </div>
            </div>
          </section>

          <blockquote className={'o-container o-container--wide u-pv-large'}>
            <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
              &ldquo;I&apos;m super excited about @sketchpacks, that was a much needed tool!&rdquo;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>
              @SketchTricks
            </strong>
          </blockquote>

          <section className={'o-container u-pt-mega u-pb-large u-angled--top'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                <h2 className={'o-type-display-1 u-color-headline'}>The Approach</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-3/4@sm'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Designing products that provide essential services must have
                  designed systems to support it. Well&ndash;designed services resolve
                  friction by using interconnected systems arranged to meet
                  desired outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-large u-pb-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col col-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>The journey starts with the people</h2>

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

          <div className={'u-bgcolor-gray-0'}>
            <section className={'o-container o-container--wide u-pt-mega u-pb-mega u-mv-large'}>
              <div className={'o-grid o-grid--wide o-grid--cards'}>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-mb-large u-text-center@sm'}>
                  <h2 className={'o-type-title u-color-headline u-mb-small'}>Job Stories</h2>

                  <p className={'o-type-body-2 u-color-body-1 u-push-1/4@sm u-pull-1/4@sm'}>
                    Like well&ndash;written problem statements, job stories are
                    not prescriptive of their implementation. Instead, they focus on
                    triggers or situations, motivations, and desired outcomes.
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
          </div>

          <section className={'o-container o-container--wide u-pt-mega'}>
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
                  I reduced each system to reveal their essential elements
                  and their interconnections.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  With these insights, I designed the product architecture
                  to support the product&apos;s mission and vision.
                </p>
              </div>

              <div className={'o-grid__col u-2/3@sm'}>
                <img src='https://placeimg.com/640/480/tech?t=1500010858937' />
              </div>
            </div>
          </section>

          <section className={'o-container u-pt-mega u-pb-large u-angled--top'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>The Strategy</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-3/4@sm'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  The product roadmap was iterative and motivated by the community.
                  Their vision consisted of four key experiences: discovery,
                  management, sharing, and syncing.
                </p>
              </div>
            </div>
          </section>

          <blockquote className={'o-container o-container--wide u-pv-mega'}>
            <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
              &ldquo;Vision is a destination, a fixed point to which we focus
              all our effort. Strategy is a route, an adaptable path to get us
              where we want to go.&rdquo;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>
              Simon Sinek
            </strong>
          </blockquote>

          <section className={'o-container o-container--wide u-pt-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Discovery</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  The Sketchpacks API provides full&ndash;text search, surfacing
                  plugins indexed by name, description, and the contents of
                  their README.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img src='https://placeimg.com/640/480/tech?t=1500010858937' />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-mega'}>
            <div className={'o-grid o-grid--wide o-grid--rev'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Management</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Choose between four different plugin update strategies,
                  allowing you and your team to focus on design problems rather
                  than design tooling disparity.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Set it and forget it.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img src='https://placeimg.com/640/480/tech?t=1500010858937' />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Sharing</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  I designed a JSON schema format that would allow for data
                  flow between systems and machines.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  The sketchpack schema allows you to manage, version control,
                  and share your plugin library consistently.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img src='/static/work/sketchpacks/json-schema@2x.png' />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-mega'}>
            <div className={'o-grid o-grid--wide o-grid--rev'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <span className={'c-label u-bgcolor-tango o-type-small u-uppercase'}>Up Next</span>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Syncing</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Designers and teams will have the ability to sync their plugins
                  across machines in near real&ndash;time.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img src='https://placeimg.com/640/480/tech?t=1500010858937' />
              </div>
            </div>
          </section>

          <section className={'o-container u-pt-mega u-pb-large u-angled--top'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>The Impact</h2>
              </div>

              <div className={'o-grid__col u-1/1 u-3/4@sm'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Since the <a href="https://medium.com/building-sketchpacks/introducing-sketchpacks-for-macos-8f4df3313b95">product launch</a> in March &apos;17, our team of two has
                  achieved a considerable amount of milestones yielding us some
                  impressive and humbling results.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-small u-pb-mega u-mv-large'}>

            <div className={'o-grid o-grid--wide o-grid--cards'}>
              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/4@sm'}>
                <span className={'u-weight-medium u-color-headline u-uppercase o-type-small'}>App Downloads</span>
                <p className={'o-type-big-quote u-mt-small u-weight-medium'}>22k</p>
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/4@sm'}>
                <span className={'u-weight-medium u-color-headline u-uppercase o-type-small'}>Plugin Installs</span>
                <p className={'o-type-big-quote u-mt-small u-weight-medium'}>37k</p>
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/4@sm'}>
                <span className={'u-weight-medium u-color-headline u-uppercase o-type-small'}>Plugin Updates</span>
                <p className={'o-type-big-quote u-mt-small u-weight-medium'}>87k</p>
              </div>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/4@sm'}>
                <span className={'u-weight-medium u-color-headline u-uppercase o-type-small'}>Monthly Active Users</span>
                <p className={'o-type-big-quote u-mt-small u-weight-medium'}>4k</p>
              </div>
            </div>

          </section>

          <blockquote className={'o-container o-container--wide u-pv-large'}>
            <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
              &ldquo;Goodbye sketchtoolbox hello @sketchpacks! Manage your Sketch plugins from the menu bar!&rdquo;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>
              @case23
            </strong>
          </blockquote>

          <section className={'o-container u-pv-mega o-container--centered'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col'}>
                <img
                  src="/static/work/sketchpacks/app@2x.png"
                  width="720"
                  className={'u-mb-large'}
                />

                <h2 className={'o-type-display-1 u-color-headline u-mb-large'}>
                  Download Sketchpacks for free
                </h2>

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
