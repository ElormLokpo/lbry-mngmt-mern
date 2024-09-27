import { IProps } from "./types"


export const Table = ({ headers, body }: IProps) => {
    return (
        <div>
            <table className="border rounded text-xs w-full">
                <thead>
                    <tr className="border-b">
                        {
                            headers.map((item, index) => <td className="py-2 px-2 font-semibold bg-gray-50 border-l" key={index}>{item}</td>)
                        }
                    </tr>
                </thead>

                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    )
}