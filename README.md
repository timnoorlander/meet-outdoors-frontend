# MeetOutdoors Frontend

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Technology Stack](#technology-stack)

## Description

MeetOutdoors will be a very simple platform where you can host outdoor activities and see what activities are happening around you. An outdoor activity can be anything outdoors, like running, hiking, swimming, birding or camping. The goal is to connect people with both nature and each other in the most simple way possible.

There are three main user stories:

- As a user I want to create an activity so others have the possibility to join.
- As a user I want to see when and where activities are happening.
- As a user I want to join an activity.

I would use my own platform for the following reasons:

- I enjoy going outdoors but I don't always feel like going alone.
- It would make me happy to introduce others to the outdoor activities I'm passionate about.
- I'd love to be inspired by and learn from others that are more experienced in a certain activity, like birding.
- I don't have Facebook and I don't feel like paying for MeetUp.

## Roadmap

I didn't create a proper roadmap, but you can check the progress of the project here: https://trello.com/b/W4Bbuoa1/meetoutdoors

(Apologies if some to-do items are a bit vague. I'm currently the only one using it so for me it suffices.)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/timnoorlander/meet-outdoors-frontend
cd meet-outdoors-frontend
```

### 2. Install Dependencies

_Install 3rd party dependencies_

```bash
$ npm install
```

_Install Meet Outdoors Core_

Even though MSW is used for this project and the goal is to mock all requests, it might be that in some point in time not all requests are mocked. Go to https://github.com/timnoorlander/meet-outdoors-core and check the README to learn how to set it up.

## Usage

```bash
# development
$ npm run dev

# build for production
$ npm run build

# lint
$ npm run lint

# test
$ npm run test
```

## Technology Stack

**Language:**

- TypeScript

**UI development library**

- React

**Styling:**

- Styled Components
- Material-UI

**State Management:**

- React Query

**Build Tool:**

- Vite

**Tests:**

- Jest
- React Testing Library

**Mocking API:**

- MSW (Mock Service Worker)

**Mapping:**

- Leaflet

### License

This project is licensed under the MIT LICENSE - see the [LICENSE.md](LICENSE.md) file for details.
