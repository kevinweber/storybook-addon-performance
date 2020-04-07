import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import TaskHarness from './task-harness';
import { InteractionTaskBase } from '../types';
import * as constants from '../addon-constants';

export default makeDecorator({
  name: constants.decoratorKey,
  parameterName: constants.paramKey,
  // We are enabling the addon fo r all stories
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => {

    const interactions: InteractionTaskBase[] = parameters && parameters.interactions;
    console.log("interactions", interactions);

    // Sadly need to add cast for storybook ts-loader
    return <TaskHarness getNode={() => getStory(context)} channel={addons.getChannel() as any} interactions={interactions} />;

  },
});
