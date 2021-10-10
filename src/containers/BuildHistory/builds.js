import { EXPECTED_STATUSES } from "../../constants";

export const BUILDS = [
    {
        user: 'Denis',
        branch: 'awesome-feature',
        time: 1633717441,
        date: 1633173887,
        status: EXPECTED_STATUSES.WAITING,
        hashCommit: '9c9f0b9',
        id: 1368,
        name: 'add documentation for postgres scaler',
    },
    {
        user: 'Tony',
        branch: 'amazing-feature',
        time: 1633787241,
        date: 1633173887,
        status: EXPECTED_STATUSES.ERROR,
        hashCommit: 'casdf0b9',
        id: 1367,
        name: 'philip1967/my-aw esome-repo-with-long-long-long-repo-name',
    },
    {
        user: 'Gorge',
        branch: 'big-feature',
        time: 1633737441,
        date: 1633173887,
        status: EXPECTED_STATUSES.SUCCESS,
        hashCommit: 'asfas34',
        id: 1366,
        name: 'upgrade typescript to 3.8',
    },
];
