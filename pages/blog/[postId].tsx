import { useRouter } from "next/router"; // next에서 만들어 쓰는 훅

function DetailPage() {
    const router = useRouter();
    console.log(router.query.postId) // query : 동적 경로 세그먼트에 접근할 수 있는 메서드. 이후에는 식별자를 속성 이름으로 입력한다.

    return <h1>Detail Page</h1>
}

export default DetailPage; 


// 