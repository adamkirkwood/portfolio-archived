export default ({ actor, action, outcome }) => (
  <div className={'c-card u-pv-medium u-ph-medium'}>
    <div className={'u-mb-small u-uppercase u-weight-medium'}>Developer</div>

    <p className={'o-type-body-2 u-color-body-1'}>
      {actor}, <span className={'u-uppercase o-type-small u-weight-medium'}>Person</span><br />
      {action}, <span className={'u-uppercase o-type-small u-weight-medium'}>Action</span><br />
      {outcome}. <span className={'u-uppercase o-type-small u-weight-medium'}>Outcome</span>
    </p>
  </div>
)
