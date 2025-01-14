import { Builder, Component } from '@builder6/sdk';

interface ReactComponent extends Component {}

export function BuilderBlock(options: ReactComponent) {
  options.type = 'react';

  return Builder.Component(options);
}
