import axios from "axios"
import { atom, useAtomValue } from "jotai"
import { atomsWithQuery } from "jotai-tanstack-query"

const nationList = atom([])
const [nationAtom] = atomsWithQuery((get) => ({
    queryKey: ['nation', get(nationList)],
    queryFn: async ({queryKey: []}) => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/nation/allNation`)
        return res.data
    }
}))

const Nation = () => {
    const data = useAtomValue(nationAtom)
    console.log(data.data)
    return (
        <>
            <div>
                <h1>국가 조회</h1>
                <table border='1px black'>
                    <thead>
                        <tr>
                            <th>
                                <input 
                                    type="checkbox"
                                    name="all"
                                />
                            </th>
                            <th>{`이름`}</th>
                            <th>{`수도`}</th>
                            <th>{`국가코드(3자리)`}</th>
                            <th>{`국제통화번호`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.length === 0 && (
                            <tr>
                                <td colSpan={5}>데이터 없음</td>
                            </tr>
                        )}
                        {data?.data?.map((data, i) => (
                            <tr key={i}>
                                <td>
                                    <input 
                                        type="checkbox"
                                        name="all"
                                    />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.capital}</td>
                                <td>{data.nationalCode}</td>
                                <td>{data.isd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Nation