import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button/_story';
import Input from '../components/Input/_story';
import Join from '../components/Join/_story';
import ResetPassword from '../components/ResetPassword/_story';
import Login from '../components/Login/_story';
import Spinner from '../components/Spinner/_story';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter())

Button(storiesOf, module, action);
Input(storiesOf, module, action);
Join(storiesOf, module, action);
ResetPassword(storiesOf, module, action);
Login(storiesOf, module, action);
Spinner(storiesOf, module, action);

