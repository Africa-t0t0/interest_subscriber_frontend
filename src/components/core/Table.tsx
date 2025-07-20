// Helper function to format date
const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function Table({ columnsHeaders, columnsNames, jsonArray }: { columnsHeaders: string[], columnsNames: string[], jsonArray: any[] }) {
    const content = (
        <table
            className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <thead>
                <tr>
                    {columnsHeaders.map((column, index) => (
                        <th
                            className="px-6 py-3"
                            key={index}
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {jsonArray.map((item, index) => (
                    <tr key={index}>
                        {columnsNames.map((column, index) => (
                            <td
                                className="px-6 py-4"
                                key={index}
                            >
                                {column.includes("Date") || column.includes("date") ? formatDate(item[column]) : item[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return content;
};