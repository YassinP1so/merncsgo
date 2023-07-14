import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'Nickname', headerName: 'Nickname', width: 130 },
    { field: 'Nationality', headerName: 'Nationality', width: 130 },
    { field: 'Team', headerName: 'Team', width: 130 },
    
    {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    },
    {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Olehovych Kostyliev', firstName: 'Oleksandr', age: 26 , Nationality : "Ukrainian" , Nickname : "s1mple" , Team : "Natus Vincere"  },
    { id: 2, lastName: 'Nikola', firstName: 'Kovač', age: 26 , Nationality : "Bosnia" , Nickname : "niKo" , Team : "G2 Esports" },
    { id: 3, lastName: 'Mathieu', firstName: 'Herbaut', age: 22 , Nationality : "France" , Nickname : "ZywOo" , Team : "Team Vitality" },
    { id: 4, lastName: 'Robin', firstName: 'Kool', age: 23 , Nationality : " Estonia" , Nickname : " ropz" , Team : "FaZe Clan" },
    { id: 5, lastName: 'Peter', firstName: 'Rothmann Rasmussen', age:  30 , Nationality : "Denmark" , Nickname : " dupreeh" , Team : "Team Vitality" },
    { id: 6, lastName: 'Kenny', firstName: 'Schrub', age: 28 , Nationality : "France" , Nickname : " kennyS" , Team : "Team Falcons" },
    { id: 7, lastName: 'Marcelo', firstName: 'Augusto David', age: 28 , Nationality : "Brazil" , Nickname : "coldzera" , Team : "00 Nation" },
    { id: 8, lastName: 'Gabriel ', firstName: 'Alcântara Sguario', age: 32 , Nationality : "Brazil" , Nickname : "FalleN" , Team : "FURIA Esports" },
    { id: 9, lastName: 'Jacky', firstName: 'Yip', age: 25 , Nationality : "United States" , Nickname : "Stewie2K" , Team : "Natus Vincere" },
    { id: 10, lastName: 'Егор ', firstName: 'Сергеевич', age: 26 , Nationality : "Russia" , Nickname : "flamie" , Team : "Natus Vincere" },
    
    
];

const Players = () => {
return (
    <div style={{ height: 640, width: '100%'  }}>
    <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
        pagination: {
            paginationModel: { page: 0, pageSize: 5 },
        },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        style={{marginTop :"100px" , width : "80%" , marginLeft : "200px" , background : "#0f6992" , color : "white" , height : "630px"}}
    />
    </div>
);
}

export default Players;
