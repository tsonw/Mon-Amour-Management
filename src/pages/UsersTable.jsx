import React, { useEffect, useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../scripts/get-document.js'; 

function UsersTable() {

    const [data, setData] = useState([]);
    
    // Lấy dữ liệu từ Firestore
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const users = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(users);
        };
        fetchData();
    }, []);

    console.log(data);

    const columns = [
        {
            header: 'Tên',
            accessorKey: 'name',
        },
        {
            header: 'Tuổi',
            accessorKey: 'age',
        },
        {
            header: 'Email',
            accessorKey: 'email',
        }
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className="border w-full text-center">
        <thead>
            {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                <th className="border px-4 py-2" key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody>
            {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                <td className="border px-4 py-2" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    );
}

export default UsersTable;
