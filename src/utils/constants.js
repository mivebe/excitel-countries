
export const categoriesToShow = [
    {
        id:0,
        order: 1,
        title: 'Name',
        name: 'name'
    },
    {
        id:1,
        order: 2,
        title: 'Capital',
        name: 'capitalName'
    },
    {
        id:2,
        order: 3,
        title: 'Region',
        name: 'region'
    },
    {
        id:3,
        order: 4,
        title: 'Subregion',
        name: 'subregion'
    },
]

export const initialSortedColumns = {
    name: undefined,
    capitalName: undefined,
    region: undefined,
    subregion: undefined,
}

export const filterOptions = [
    {
        title: 'Name',
        value: 'name',
    },
    {
        title: 'Capital',
        value: 'capital',
    },
    {
        title: 'Region',
        value: 'region',
    },
    {
        title: 'Subregion',
        value: 'subregion',
    }
];

export const itemsPerPageOptions = [
    {
        title: "10",
        value: 10,
    },
    {
        title: "20",
        value: 20,
    },
    {
        title: "40",
        value: 40,
    },
    {
        title: "60",
        value: 60,
    },
    {
        title: "100",
        value: 100,
    },
]