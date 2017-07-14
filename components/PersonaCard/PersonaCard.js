export default ({ name, thumbnail_url }) => (
  <div className={'c-card u-pv-medium u-ph-medium c-persona-card'}>
    <div className={'c-avatar c-avatar--circle'}>
      <img
        src={thumbnail_url}
        width='80'
      />
    </div>

    <div className={'u-mb-large'}>
      <strong className={'o-type-title u-color-title'}>{name}</strong>
    </div>

    <p className={'o-type-body-2 u-color-body-1'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </p>
  </div>
)
